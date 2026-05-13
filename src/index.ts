import type { Core } from "@strapi/strapi";
import { articleSlugUniqueness } from "./middlewares/article-slug-uniqueness";

export default {
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  bootstrap({ strapi }: { strapi: Core.Strapi }) {
    strapi.documents.use(articleSlugUniqueness);
  },
};
