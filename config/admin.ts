import type { Core, UID } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Admin => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
  preview: {
    enabled: true,
    config: {
      allowedOrigins: [env('CLIENT_URL')],
      async handler(uid, { documentId, locale, status }) {
        const document = await strapi.documents(uid as UID.ContentType).findOne({ documentId });
        const clientUrl = env('CLIENT_URL');
        const previewSecret = env('PREVIEW_SECRET');

        const pathBuilders: Record<string, () => string | null> = {
          'api::page.page': () => {
            const slug = (document as { slug?: string } | null)?.slug;
            if (!slug) return null;
            const localePrefix = locale ? `/${locale}` : '';
            return `${localePrefix}/${slug}`;
          },
        };

        const path = pathBuilders[uid]?.();
        if (!path) return null;

        const params = new URLSearchParams({
          secret: previewSecret,
          status,
          path,
        });

        return `${clientUrl}/api/preview?${params.toString()}`;
      },
    },
  },
});

export default config;
