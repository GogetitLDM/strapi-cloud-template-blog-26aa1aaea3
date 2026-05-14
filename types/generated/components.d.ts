import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksBlogGrid extends Struct.ComponentSchema {
  collectionName: 'components_blocks_blog_grid';
  info: {
    description: "Tabbed 3-column grid of articles. Editor picks the categories that appear as tabs; an initial 'view all' tab shows the latest articles across all categories.";
    displayName: 'Blog Grid';
    icon: 'grid';
  };
  attributes: {
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
    limit: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 24;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<6>;
    readingTimeSuffix: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 30;
      }> &
      Schema.Attribute.DefaultTo<'minutos'>;
    readMoreLabel: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 30;
      }> &
      Schema.Attribute.DefaultTo<'Leer m\u00E1s'>;
    viewAllLabel: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 30;
      }> &
      Schema.Attribute.DefaultTo<'Ver todo'>;
  };
}

export interface BlocksCarousel extends Struct.ComponentSchema {
  collectionName: 'components_blocks_carousel';
  info: {
    description: 'Section with optional tagline, heading, body and an autoplay carousel of polymorphic slides (image cards, framed cards, etc.)';
    displayName: 'Carousel';
    icon: 'layer-group';
  };
  attributes: {
    body: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 400;
      }>;
    dynamicBackground: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    edgePadding: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    highlightedTitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 80;
      }>;
    showArrowsDesktop: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    showArrowsMobile: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    slideGap: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 80;
          min: 0;
        },
        number
      >;
    slides: Schema.Attribute.DynamicZone<
      ['blocks.image-card', 'blocks.framed-card', 'blocks.info-card']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 9;
          min: 1;
        },
        number
      >;
    slidesPerView: Schema.Attribute.Decimal;
    tagline: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 120;
      }>;
  };
}

export interface BlocksCtaBanner extends Struct.ComponentSchema {
  collectionName: 'components_blocks_cta_banner';
  info: {
    description: 'Centered call-to-action: title, body, and a polymorphic children slot (CTA buttons today; more later).';
    displayName: 'CTA Banner';
    icon: 'bullhorn';
  };
  attributes: {
    body: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 400;
      }>;
    children: Schema.Attribute.DynamicZone<
      ['blocks.cta-button', 'blocks.newsletter']
    > &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 0;
        },
        number
      >;
    highlightedTitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
  };
}

export interface BlocksCtaButton extends Struct.ComponentSchema {
  collectionName: 'components_blocks_cta_button';
  info: {
    description: 'Top-bordered link button with label and arrow icon';
    displayName: 'CTA Button';
    icon: 'arrow-right';
  };
  attributes: {
    href: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface BlocksEntry extends Struct.ComponentSchema {
  collectionName: 'components_blocks_entry';
  info: {
    description: 'Linkable row with image, tag, title \u2014 works for blog posts, articles, options, etc.';
    displayName: 'Entry';
    icon: 'newspaper';
  };
  attributes: {
    href: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    tag: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
  };
}

export interface BlocksEntryList extends Struct.ComponentSchema {
  collectionName: 'components_blocks_entry_list';
  info: {
    description: 'Section with tagline + heading + optional CTA, rendering a list of articles auto-fetched from the article collection';
    displayName: 'Entry List';
    icon: 'list';
  };
  attributes: {
    category: Schema.Attribute.Relation<'oneToOne', 'api::category.category'>;
    ctaHref: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    ctaLabel: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    highlightedTitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 80;
      }>;
    limit: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 12;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<6>;
    linkLabel: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }> &
      Schema.Attribute.DefaultTo<'Leer m\u00E1s'>;
    sort: Schema.Attribute.Enumeration<
      ['publishedAt:desc', 'publishedAt:asc', 'title:asc', 'title:desc']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'publishedAt:desc'>;
    tag: Schema.Attribute.Relation<'oneToOne', 'api::tag.tag'>;
    tagline: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 120;
      }>;
  };
}

export interface BlocksFeatureBanner extends Struct.ComponentSchema {
  collectionName: 'components_blocks_feature_banner';
  info: {
    description: 'Side-by-side promo: heading, body, CTA next to a media (image or video). Supports image-left/right and an optional framed style.';
    displayName: 'Feature Banner';
    icon: 'rectangle-list';
  };
  attributes: {
    body: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 600;
      }>;
    ctaHref: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    ctaLabel: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    framed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    imagePosition: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'right'>;
    media: Schema.Attribute.Component<'blocks.media', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
  };
}

export interface BlocksFeatureGrid extends Struct.ComponentSchema {
  collectionName: 'components_blocks_feature_grid';
  info: {
    description: 'Up-to-4-column grid of icon + title + body items, on a royal-blue gradient section background.';
    displayName: 'Feature Grid';
    icon: 'grid';
  };
  attributes: {
    items: Schema.Attribute.Component<'blocks.feature-list-item', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 8;
          min: 1;
        },
        number
      >;
  };
}

export interface BlocksFeatureHighlights extends Struct.ComponentSchema {
  collectionName: 'components_blocks_feature_highlights';
  info: {
    description: 'Split tagline+title+body+image with a bordered horizontal row of icon-text highlights below.';
    displayName: 'Feature Highlights';
    icon: 'star';
  };
  attributes: {
    body: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 600;
      }>;
    highlightedTitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    highlights: Schema.Attribute.Component<'blocks.icon-text-item', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 1;
        },
        number
      >;
    imagePosition: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'right'>;
    media: Schema.Attribute.Component<'blocks.media', false> &
      Schema.Attribute.Required;
    tagline: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
  };
}

export interface BlocksFeatureImageCard extends Struct.ComponentSchema {
  collectionName: 'components_blocks_feature_image_card';
  info: {
    description: 'Image on top + gradient H5 title + body. Used inside Sticky Feature List.';
    displayName: 'Feature Image Card';
    icon: 'image';
  };
  attributes: {
    body: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 400;
      }>;
    media: Schema.Attribute.Component<'blocks.media', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 120;
      }>;
  };
}

export interface BlocksFeatureImageList extends Struct.ComponentSchema {
  collectionName: 'components_blocks_feature_image_list';
  info: {
    description: 'Bordered split: vertical feature list (icon + title + body) with image on the side.';
    displayName: 'Feature Image List';
    icon: 'list-check';
  };
  attributes: {
    imagePosition: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'right'>;
    items: Schema.Attribute.Component<'blocks.feature-list-item', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      >;
    media: Schema.Attribute.Component<'blocks.media', false> &
      Schema.Attribute.Required;
  };
}

export interface BlocksFeatureList extends Struct.ComponentSchema {
  collectionName: 'components_blocks_feature_list';
  info: {
    description: 'Horizontal grid of feature items, each with an icon, title and body';
    displayName: 'Feature List';
    icon: 'list-check';
  };
  attributes: {
    items: Schema.Attribute.Component<'blocks.feature-list-item', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 8;
          min: 1;
        },
        number
      >;
  };
}

export interface BlocksFeatureListItem extends Struct.ComponentSchema {
  collectionName: 'components_blocks_feature_list_item';
  info: {
    description: 'Single feature: 60x60 icon, title and body';
    displayName: 'Feature List Item';
    icon: 'list-ul';
  };
  attributes: {
    body: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 240;
      }>;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 80;
      }>;
  };
}

export interface BlocksFramedCard extends Struct.ComponentSchema {
  collectionName: 'components_blocks_framed_card';
  info: {
    description: 'Bordered split card with square media, title, body and top-bordered CTA. Used as a top-level block and as a carousel slide.';
    displayName: 'Framed Card';
    icon: 'id-card';
  };
  attributes: {
    body: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 600;
      }>;
    ctaHref: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    ctaLabel: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    imagePosition: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    media: Schema.Attribute.Component<'blocks.media', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
  };
}

export interface BlocksHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_banner';
  info: {
    description: 'Full-bleed hero with animated title, body copy, CTA, and per-breakpoint background';
    displayName: 'Hero Banner';
    icon: 'rocket';
  };
  attributes: {
    animatedTitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 80;
      }>;
    body: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 600;
      }>;
    ctaHref: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    ctaLabel: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    desktopBackground: Schema.Attribute.Component<'blocks.media', false> &
      Schema.Attribute.Required;
    mobileBackground: Schema.Attribute.Component<'blocks.media', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
  };
}

export interface BlocksIconTextItem extends Struct.ComponentSchema {
  collectionName: 'components_blocks_icon_text_item';
  info: {
    description: 'Small icon in a bordered gradient box + single line of text. Used in highlight rows.';
    displayName: 'Icon Text Item';
    icon: 'bolt';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    text: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
  };
}

export interface BlocksImageCard extends Struct.ComponentSchema {
  collectionName: 'components_blocks_image_card';
  info: {
    description: 'Card-styled split: media (image or video) on one side, title + body + CTA on the other. Used as a top-level block and as a carousel slide.';
    displayName: 'Image Card';
    icon: 'image';
  };
  attributes: {
    body: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 600;
      }>;
    ctaHref: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    ctaLabel: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    highlightedTitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    imagePosition: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    media: Schema.Attribute.Component<'blocks.media', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
  };
}

export interface BlocksInfoCard extends Struct.ComponentSchema {
  collectionName: 'components_blocks_info_card';
  info: {
    description: 'Vertical card with media at the top and tagline + title + body + top-bordered CTA below. Used as a top-level block and as a carousel slide.';
    displayName: 'Info Card';
    icon: 'address-card';
  };
  attributes: {
    align: Schema.Attribute.Enumeration<['left', 'center', 'right']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    body: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 400;
      }>;
    ctaHref: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    ctaLabel: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    framed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    imageCover: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    media: Schema.Attribute.Component<'blocks.media', false> &
      Schema.Attribute.Required;
    tagline: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 120;
      }>;
  };
}

export interface BlocksIntroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_intro_section';
  info: {
    description: 'Centered section with tagline, heading, body and a polymorphic interactive child slot';
    displayName: 'Intro Section';
    icon: 'feather';
  };
  attributes: {
    body: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 600;
      }>;
    children: Schema.Attribute.DynamicZone<
      ['blocks.cta-button', 'blocks.split-carousel', 'blocks.timeline']
    > &
      Schema.Attribute.SetMinMax<
        {
          max: 12;
          min: 0;
        },
        number
      >;
    highlightedTitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    tagline: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
  };
}

export interface BlocksMedia extends Struct.ComponentSchema {
  collectionName: 'components_blocks_media';
  info: {
    description: 'Image (required) plus an optional autoplay loop video';
    displayName: 'Media';
    icon: 'picture';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    video: Schema.Attribute.Media<'videos'>;
  };
}

export interface BlocksNewsletter extends Struct.ComponentSchema {
  collectionName: 'components_blocks_newsletter';
  info: {
    description: 'Inline newsletter signup: email input, submit button, and a small disclaimer line.';
    displayName: 'Newsletter';
    icon: 'envelope';
  };
  attributes: {
    disclaimer: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 240;
      }>;
    emailPlaceholder: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 120;
      }>;
    subscribeLabel: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface BlocksRichText extends Struct.ComponentSchema {
  collectionName: 'components_blocks_rich_text';
  info: {
    description: "Long-form prose. Powered by Strapi v5's Blocks editor.";
    displayName: 'Rich Text';
    icon: 'align-justify';
  };
  attributes: {
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface BlocksSplitCarousel extends Struct.ComponentSchema {
  collectionName: 'components_blocks_split_carousel';
  info: {
    description: 'Bordered split row carousel: text + paginator on the left, image on the right. Used standalone or inside intro-section.';
    displayName: 'Split Carousel';
    icon: 'images';
  };
  attributes: {
    slides: Schema.Attribute.Component<'blocks.split-carousel-slide', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 9;
          min: 1;
        },
        number
      >;
  };
}

export interface BlocksSplitCarouselSlide extends Struct.ComponentSchema {
  collectionName: 'components_blocks_split_carousel_slide';
  info: {
    description: 'Single slide for split-carousel: title, body and image';
    displayName: 'Split Carousel Slide';
    icon: 'image';
  };
  attributes: {
    body: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 240;
      }>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 80;
      }>;
  };
}

export interface BlocksStatItem extends Struct.ComponentSchema {
  collectionName: 'components_blocks_stat_item';
  info: {
    description: 'Single statistic with animated number, title and description';
    displayName: 'Stat Item';
    icon: 'chart-line';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 240;
      }>;
    gradientReverse: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    suffix: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 8;
      }> &
      Schema.Attribute.DefaultTo<'+'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 120;
      }>;
    value: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface BlocksStats extends Struct.ComponentSchema {
  collectionName: 'components_blocks_stats';
  info: {
    description: 'Section heading with a row of animated statistics';
    displayName: 'Stats';
    icon: 'chart-bar';
  };
  attributes: {
    highlightedTitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 80;
      }>;
    items: Schema.Attribute.Component<'blocks.stat-item', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 6;
          min: 1;
        },
        number
      >;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 120;
      }>;
  };
}

export interface BlocksStickyFeatureList extends Struct.ComponentSchema {
  collectionName: 'components_blocks_sticky_feature_list';
  info: {
    description: 'Two-column section: left sticky heading + CTA, right scrolling list of cards.';
    displayName: 'Sticky Feature List';
    icon: 'anchor';
  };
  attributes: {
    body: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 600;
      }>;
    ctaHref: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    ctaLabel: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    highlightedTitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    items: Schema.Attribute.DynamicZone<
      [
        'blocks.feature-image-card',
        'blocks.info-card',
        'blocks.framed-card',
        'blocks.image-card',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 8;
          min: 1;
        },
        number
      >;
    tagline: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
  };
}

export interface BlocksTimeline extends Struct.ComponentSchema {
  collectionName: 'components_blocks_timeline';
  info: {
    description: 'Single timeline row: date label, heading and body on one side, dot-grid noise on the other. Repeat inside intro-section to build a stacked timeline.';
    displayName: 'Timeline';
    icon: 'clock';
  };
  attributes: {
    body: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 400;
      }>;
    date: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 30;
      }>;
    heading: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 80;
      }>;
    image: Schema.Attribute.Component<'blocks.media', false>;
    side: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
  };
}

export interface BlocksTrustedBy extends Struct.ComponentSchema {
  collectionName: 'components_blocks_trusted_by';
  info: {
    description: 'Heading with gradient highlight and an autoplay marquee of partner logos';
    displayName: 'Trusted By';
    icon: 'shield-check';
  };
  attributes: {
    highlightedTitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 80;
      }>;
    logos: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 120;
      }>;
  };
}

export interface FooterFooterUi extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_ui';
  info: {
    description: 'Localizable UI strings rendered in the site footer';
    displayName: 'Footer UI Strings';
    icon: 'message';
  };
  attributes: {
    copyright: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    disclaimer: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 240;
      }>;
    emailPlaceholder: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 120;
      }>;
    newsletterHeading: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    subscribeLabel: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface FooterLinkColumn extends Struct.ComponentSchema {
  collectionName: 'components_footer_link_columns';
  info: {
    description: 'Column of footer links with optional heading and arrow indicators';
    displayName: 'Footer Link Column';
    icon: 'list';
  };
  attributes: {
    heading: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    links: Schema.Attribute.Component<'navigation.link-item', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 20;
          min: 1;
        },
        number
      >;
    showArrows: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface FooterSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_social_links';
  info: {
    description: 'External social-media link rendered as an icon button';
    displayName: 'Footer Social Link';
    icon: 'thumb-up';
  };
  attributes: {
    href: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 120;
      }>;
    platform: Schema.Attribute.Enumeration<['linkedin']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'linkedin'>;
  };
}

export interface NavigationHeaderUi extends Struct.ComponentSchema {
  collectionName: 'components_navigation_header_ui';
  info: {
    description: 'Localizable UI strings for the site header';
    displayName: 'Header UI Strings';
    icon: 'message';
  };
  attributes: {
    closeLabel: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 120;
      }>;
    menuLabel: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 120;
      }>;
    searchLabel: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 120;
      }>;
    searchPlaceholder: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 120;
      }>;
  };
}

export interface NavigationLinkItem extends Struct.ComponentSchema {
  collectionName: 'components_navigation_link_items';
  info: {
    description: 'Single navigation link with label and href';
    displayName: 'Link Item';
    icon: 'link';
  };
  attributes: {
    href: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 120;
      }>;
  };
}

export interface NavigationMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_navigation_menu_items';
  info: {
    description: 'Dropdown menu item with submenu entries';
    displayName: 'Menu Item';
    icon: 'bars';
  };
  attributes: {
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 120;
      }>;
    submenuItems: Schema.Attribute.Component<'navigation.submenu-item', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 12;
          min: 1;
        },
        number
      >;
  };
}

export interface NavigationSubmenuItem extends Struct.ComponentSchema {
  collectionName: 'components_navigation_submenu_items';
  info: {
    description: 'Child entry inside a dropdown menu';
    displayName: 'Submenu Item';
    icon: 'chevron-right';
  };
  attributes: {
    href: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    image: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 120;
      }>;
  };
}

export interface SharedMetaSocial extends Struct.ComponentSchema {
  collectionName: 'components_shared_meta_social';
  info: {
    description: 'Per-network social meta overrides (og:image, twitter:title, etc.).';
    displayName: 'Meta Social';
    icon: 'share-nodes';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    image: Schema.Attribute.Media<'images'>;
    socialNetwork: Schema.Attribute.Enumeration<
      ['Facebook', 'Twitter', 'LinkedIn', 'Instagram']
    > &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seo';
  info: {
    description: 'SEO meta for a page or article. Per-locale.';
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    metaRobots: Schema.Attribute.String;
    metaSocial: Schema.Attribute.Component<'shared.meta-social', true>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_link';
  info: {
    description: 'Single social-network link with platform and URL.';
    displayName: 'Social Link';
    icon: 'link';
  };
  attributes: {
    platform: Schema.Attribute.Enumeration<
      ['Twitter', 'LinkedIn', 'GitHub', 'YouTube', 'Instagram']
    > &
      Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.blog-grid': BlocksBlogGrid;
      'blocks.carousel': BlocksCarousel;
      'blocks.cta-banner': BlocksCtaBanner;
      'blocks.cta-button': BlocksCtaButton;
      'blocks.entry': BlocksEntry;
      'blocks.entry-list': BlocksEntryList;
      'blocks.feature-banner': BlocksFeatureBanner;
      'blocks.feature-grid': BlocksFeatureGrid;
      'blocks.feature-highlights': BlocksFeatureHighlights;
      'blocks.feature-image-card': BlocksFeatureImageCard;
      'blocks.feature-image-list': BlocksFeatureImageList;
      'blocks.feature-list': BlocksFeatureList;
      'blocks.feature-list-item': BlocksFeatureListItem;
      'blocks.framed-card': BlocksFramedCard;
      'blocks.hero-banner': BlocksHeroBanner;
      'blocks.icon-text-item': BlocksIconTextItem;
      'blocks.image-card': BlocksImageCard;
      'blocks.info-card': BlocksInfoCard;
      'blocks.intro-section': BlocksIntroSection;
      'blocks.media': BlocksMedia;
      'blocks.newsletter': BlocksNewsletter;
      'blocks.rich-text': BlocksRichText;
      'blocks.split-carousel': BlocksSplitCarousel;
      'blocks.split-carousel-slide': BlocksSplitCarouselSlide;
      'blocks.stat-item': BlocksStatItem;
      'blocks.stats': BlocksStats;
      'blocks.sticky-feature-list': BlocksStickyFeatureList;
      'blocks.timeline': BlocksTimeline;
      'blocks.trusted-by': BlocksTrustedBy;
      'footer.footer-ui': FooterFooterUi;
      'footer.link-column': FooterLinkColumn;
      'footer.social-link': FooterSocialLink;
      'navigation.header-ui': NavigationHeaderUi;
      'navigation.link-item': NavigationLinkItem;
      'navigation.menu-item': NavigationMenuItem;
      'navigation.submenu-item': NavigationSubmenuItem;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'shared.social-link': SharedSocialLink;
    }
  }
}
