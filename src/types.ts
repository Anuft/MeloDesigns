export interface CollectionItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'ethnic' | 'western' | 'kids' | 'customised';
  image: string;
  tagline: string;
  highlights: string[];
}

export interface ProductItem {
  id: string;
  name: string;
  category: 'ethnic' | 'western' | 'kids' | 'bespoke';
  categoryLabel: string;
  image: string;
  secondaryImage?: string;
  description: string;
  details: {
    fabric: string;
    craftsmanship: string;
    fit: string;
    occasion: string;
  };
  sampleTag?: string;
}

export interface ArchiveItem {
  id: string;
  title: string;
  category: 'bridal' | 'saree' | 'ethnic' | 'western' | 'kids' | 'commission';
  categoryLabel: string;
  season: string;
  year: string;
  image: string;
  secondaryImage?: string;
  description: string;
  fabric: string;
  craftsmanship: string;
  occasion: string;
  isInstagramPost?: boolean;
  instagramUrl?: string;
  tags: string[];
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  tag: string;
  likes?: string;
  url: string;
}

export interface CustomisationStep {
  step: string;
  number: string;
  title: string;
  description: string;
  icon: string;
}
