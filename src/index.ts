import type { Core } from "@strapi/strapi";
import { articleSlugUniqueness } from "./middlewares/article-slug-uniqueness";
import { articleReadingTime } from "./middlewares/article-reading-time";

export default {
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  bootstrap({ strapi }: { strapi: Core.Strapi }) {
    strapi.documents.use(articleSlugUniqueness);
    strapi.documents.use(articleReadingTime);
  },
};
