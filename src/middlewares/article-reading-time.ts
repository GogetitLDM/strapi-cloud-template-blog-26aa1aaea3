import type { Modules } from "@strapi/strapi";
import { computeReadingTime } from "./utils/count-words";

const TARGET_UID = "api::article.article" as const;

interface ArticleBlockInput {
  __component: string;
  content?: unknown;
}

interface ArticleData {
  blocks?: ArticleBlockInput[];
  readingTime?: number;
}

export const articleReadingTime: Modules.Documents.Middleware.Middleware = async (
  ctx,
  next,
) => {
  if (ctx.uid !== TARGET_UID) return next();
  if (ctx.action !== "create" && ctx.action !== "update") return next();

  const data = (ctx.params as { data?: ArticleData })?.data;
  if (!data?.blocks) return next();

  try {
    data.readingTime = computeReadingTime(data.blocks);
  } catch (err) {
    strapi.log.warn(
      `articleReadingTime: failed to compute; defaulting to 1`,
      { err },
    );
    data.readingTime = 1;
  }

  return next();
};
