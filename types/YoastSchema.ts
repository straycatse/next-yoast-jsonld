// Generated by https://quicktype.io

export interface YoastHeadJSON {
  title: string;
  robots: Robots;
  og_locale: string;
  og_type:
    | "article"
    | "website"
    | "book"
    | "profile"
    | "music.song"
    | "music.album"
    | "music.playlist"
    | "music.radio_station"
    | "video.movie"
    | "video.episode"
    | "video.tv_show"
    | "video.other"
    | undefined;
  og_title: string;
  og_description: string;
  og_url: string;
  og_site_name: string;
  article_modified_time: string;
  og_image: OgImage[];
  twitter_card: string;
  twitter_misc: TwitterMisc;
  schema: Schema;
}

export interface OgImage {
  url: string;
}

export interface Robots {
  index: string;
  follow: string;
  "max-snippet": string;
  "max-image-preview": string;
  "max-video-preview": string;
}

export interface Schema {
  "@context": string;
  "@graph": Graph[];
}

export interface Graph {
  "@type": string;
  "@id": string;
  url?: string;
  name?: string;
  isPartOf?: Breadcrumb;
  primaryImageOfPage?: Breadcrumb;
  image?: Breadcrumb;
  thumbnailUrl?: string;
  datePublished?: string;
  dateModified?: string;
  breadcrumb?: Breadcrumb;
  inLanguage?: string;
  potentialAction?: PotentialAction[];
  contentUrl?: string;
  width?: number;
  height?: number;
  itemListElement?: ItemListElement[];
  description?: string;
}

export interface Breadcrumb {
  "@id": string;
}

export interface ItemListElement {
  "@type": string;
  position: number;
  name: string;
  item?: string;
}

export interface PotentialAction {
  "@type": string;
  target: string[] | TargetClass;
  "query-input"?: string;
}

export interface TargetClass {
  "@type": string;
  urlTemplate: string;
}

export interface TwitterMisc {
  "Beräknad lästid": string;
}
