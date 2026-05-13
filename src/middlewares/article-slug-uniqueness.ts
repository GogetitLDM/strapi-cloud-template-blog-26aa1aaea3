import type { Modules } from "@strapi/strapi";
import { errors } from "@strapi/utils";

const TARGET_UID = "api::article.article" as const;

export const articleSlugUniqueness: Modules.Documents.Middleware.Middleware = async (
  ctx,
  next,
) => {
  if (ctx.uid !== TARGET_UID) return next();
  if (ctx.action !== "create" && ctx.action !== "update") return next();

  const incomingSlug: string | undefined = (ctx.params as { data?: { slug?: string } })?.data?.slug;
  if (!incomingSlug) return next();

  const selfDocumentId: string | undefined = (ctx.params as { documentId?: string })?.documentId;

  const conflicts = await strapi.documents(TARGET_UID).findMany({
    filters: {
      slug: { $eq: incomingSlug },
      ...(selfDocumentId ? { documentId: { $ne: selfDocumentId } } : {}),
    },
    locale: "*",
    status: "draft",
    fields: ["documentId", "slug"],
    limit: 1,
  });

  if (conflicts.length > 0) {
    throw new errors.ApplicationError(
      `Slug "${incomingSlug}" is already used by another article. Slugs must be unique across all articles and locales.`,
    );
  }

  return next();
};
