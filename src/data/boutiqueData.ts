import { CollectionItem, ProductItem, FeatureItem, InstagramPost, CustomisationStep, ArchiveItem } from '../types';

export const BOUTIQUE_INFO = {
  name: "MELO DESIGNS",
  tagline: "Fashion designed around you.",
  heroHeadline: "STYLE THAT SPEAKS YOUR STORY.",
  heroSubtitle: "Discover the beauty of customised fashion, thoughtfully designed around your style.",
  address: "FXXP+PHV, Thayalangadi, Kasaragod, Kerala 671121, India",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=FXXP%2BPHV+Thayalangadi+Kasaragod+Kerala+671121+India",
  phoneDisplay: "+91 97444 29119",
  phoneNumber: "919744429119",
  instagramHandle: "@melo.designss",
  instagramUrl: "https://www.instagram.com/melo.designss/",
  studioInstagramHandle: "@melo_designer.studio",
  studioInstagramUrl: "https://www.instagram.com/melo_designer.studio/",
  hours: "Monday – Saturday: 10:00 AM – 8:30 PM (Sunday by Appointment)",
  locationNote: "Thayalangadi, Kasaragod • Kerala, India",
  bioHighlight: "Customised ladies & kidswear • Trendy ethnic & western outfits • Kasaragod, Kerala",
};

export const COLLECTIONS: CollectionItem[] = [
  {
    id: "ethnic",
    title: "Ladies Ethnic Wear",
    subtitle: "Timeless Grace & Heritage",
    category: "ethnic",
    image: "/images/melo_enhanced/melo_mint_bridal_couple.jpg",
    tagline: "Handcrafted Anarkalis, Lehengas & Saree Ensembles",
    highlights: ["Handcrafted Zari & Resham Work", "Pure Organza & Silk Textiles", "Custom Necklines & Flairs"]
  },
  {
    id: "western",
    title: "Ladies Western Wear",
    subtitle: "Modern Atelier Silhouettes",
    category: "western",
    image: "/images/melo_enhanced/studio_client_gown_dress.jpg",
    tagline: "Contemporary Bespoke Gowns, Chic Sets & Tailored Silhouettes",
    highlights: ["Bespoke Tailoring & Clean Cuts", "Fluid Crepe & Silk Organza", "Versatile Day-to-Night Elegance"]
  },
  {
    id: "kids",
    title: "Kidswear",
    subtitle: "Whimsical & Comfortable Couture",
    category: "kids",
    image: "/images/melo_enhanced/studio_purple_kidswear_gown.jpg",
    tagline: "Delicate Festive Frocks, Mini Gowns & Occasion Wear",
    highlights: ["Ultra-soft Skin-friendly Linings", "Handmade Embroideries & Ruffles", "Mother-Daughter Matching Sets"]
  },
  {
    id: "customised",
    title: "Customised Outfits",
    subtitle: "Atelier Made Just For You",
    category: "customised",
    image: "/images/melo_enhanced/melo_mannequin_couture.jpg",
    tagline: "Bespoke Bridal, Festive & Personalised Commissions",
    highlights: ["Personal 1-on-1 Consultation", "Fabric Sourcing & Embellishment", "Fitted to Your Exact Measurements"]
  }
];

export const FEATURED_PRODUCTS: ProductItem[] = [
  {
    id: "prod-1",
    name: "The Noor Handcrafted Mint Bridal Saree",
    category: "ethnic",
    categoryLabel: "Ladies Ethnic Wear",
    image: "/images/melo_enhanced/melo_mint_bridal_couple.jpg",
    secondaryImage: "/images/melo_enhanced/melo_zari_embroidery.jpg",
    description: "An authentic Melo Designs bridal creation featuring soft sage-mint drapery paired with custom handcrafted border embroidery and tailored blouse.",
    details: {
      fabric: "Silk Georgette with Butter Crepe Lining",
      craftsmanship: "Hand-embellished zari borderwork & antique detailing",
      fit: "Tailored custom bridal drape with sweetheart blouse",
      occasion: "Weddings, Receptions & Festive Soirées"
    },
    sampleTag: "Melo Creation • Made to Measure"
  },
  {
    id: "prod-2",
    name: "Bespoke Emerald Zari Bridal Saree",
    category: "ethnic",
    categoryLabel: "Ladies Ethnic Wear",
    image: "/images/melo_enhanced/studio_bridal_emerald.jpg",
    secondaryImage: "/images/melo_enhanced/melo_zari_embroidery.jpg",
    description: "Opulent emerald green silk saree with rich antique gold zari borders and a sculpted embroidered bridal blouse from our designer studio.",
    details: {
      fabric: "Pure Kanchipuram Silk & Heavy Zari Border",
      craftsmanship: "Hand-woven metallic borders and zardozi blouse embroidery",
      fit: "Traditional tailored pleats with custom bridal blouse",
      occasion: "Muhurtham, Nikah & Grand Receptions"
    },
    sampleTag: "Studio Creation • Made to Measure"
  },
  {
    id: "prod-3",
    name: "The Sovereign Mannequin Couture Jacket",
    category: "bespoke",
    categoryLabel: "Customised Outfits",
    image: "/images/melo_enhanced/melo_mannequin_couture.jpg",
    secondaryImage: "/images/melo_enhanced/studio_mannequin_net.jpg",
    description: "Signature Melo Designs bespoke black silhouette on mannequin, showcasing intricate crystal beadwork, statement sleeves, and our embroidered crest.",
    details: {
      fabric: "Imported Heavy Crepe & Silk Organza",
      craftsmanship: "Over 70 hours of hand-beaded crystal & metallic threadwork",
      fit: "Sculpted tailored jacket with structured shoulders",
      occasion: "Bridal Reception, Cocktail & High-Fashion Galas"
    },
    sampleTag: "Melo Signature • One-of-a-Kind"
  },
  {
    id: "prod-4",
    name: "Amethyst Handcrafted Kidswear Gown",
    category: "kids",
    categoryLabel: "Kidswear",
    image: "/images/melo_enhanced/studio_purple_kidswear_gown.jpg",
    secondaryImage: "/images/melo_enhanced/melo_festive_peach.jpg",
    description: "Enchanting custom tailored lavender-purple occasion dress for little princesses, crafted with delicate net ruffles and ultra-soft breathable lining.",
    details: {
      fabric: "Soft French Tulle & Pure Malmal Cotton Inner",
      craftsmanship: "Hand-pleated bodice with gentle hypoallergenic seam finishing",
      fit: "Flared twirl silhouette with easy back fastening",
      occasion: "Birthday Galas, Family Weddings & Festive Gatherings"
    },
    sampleTag: "Kidswear Couture • Made to Measure"
  },
  {
    id: "prod-5",
    name: "Celeste Contemporary Client Evening Gown",
    category: "western",
    categoryLabel: "Ladies Western Wear",
    image: "/images/melo_enhanced/studio_client_gown_dress.jpg",
    secondaryImage: "/images/melo_enhanced/melo_vogue_couple.jpg",
    description: "Sophisticated modern evening dress tailored for a memorable event, blending clean architectural lines with fluid feminine drapery.",
    details: {
      fabric: "Fluid Satin Crepe with Natural Stretch",
      craftsmanship: "Concealed French seams and handcrafted waist contouring",
      fit: "A-line sculpted silhouette tailored to personal measurements",
      occasion: "Evening Soirées, Galas & Receptions"
    },
    sampleTag: "Studio Commission • Made to Order"
  },
  {
    id: "prod-6",
    name: "Bespoke Peach Zari Festive Ensemble",
    category: "ethnic",
    categoryLabel: "Ladies Ethnic Wear",
    image: "/images/melo_enhanced/melo_festive_peach.jpg",
    secondaryImage: "/images/melo_enhanced/melo_artisan_frame.jpg",
    description: "Luminous pastel peach and blush gold festive suit tailored for our lovely client, featuring delicate gold neckline embroidery and flowing dupatta.",
    details: {
      fabric: "Raw Silk Kurta & Pure Organza Dupatta",
      craftsmanship: "Hand-placed aari zari work along neckline & cuffs",
      fit: "Tailored comfortable festive fit with flared silhouette",
      occasion: "Engagement, Ring Ceremony & Eid Gatherings"
    },
    sampleTag: "Client Creation • Made to Measure"
  },
  {
    id: "prod-7",
    name: "Harmonized Family Occasion Wear Set",
    category: "bespoke",
    categoryLabel: "Customised Outfits",
    image: "/images/melo_enhanced/studio_family_couture.jpg",
    secondaryImage: "/images/melo_enhanced/studio_purple_kidswear_gown.jpg",
    description: "Coordinated festive ensembles handcrafted for mother, father and child, featuring complementary color palettes and matching artisanal embroidery.",
    details: {
      fabric: "Coordinated Pure Silk & Organza Textiles",
      craftsmanship: "Harmonized embroidery motifs across the family ensemble",
      fit: "Individual custom patterns drafted for each family member",
      occasion: "Milestone Family Celebrations, Eid & Weddings"
    },
    sampleTag: "Family Atelier • Made to Measure"
  },
  {
    id: "prod-8",
    name: "Traditional Muhurtham & Reception Ensemble",
    category: "bespoke",
    categoryLabel: "Customised Outfits",
    image: "/images/melo_enhanced/melo_wedding_pose.jpg",
    secondaryImage: "/images/melo_enhanced/studio_bridal_emerald.jpg",
    description: "Custom tailored couple festive attire and wedding celebration silhouette handcrafted to personal measurements at our Kasaragod atelier.",
    details: {
      fabric: "Fine Silk & Traditional Festive Weaves",
      craftsmanship: "Harmonized couple embroidery and personalized tailoring",
      fit: "Tailored comfortable festive fit",
      occasion: "Weddings, Receptions & Formal Celebrations"
    },
    sampleTag: "Client Commission • Made to Measure"
  }
];

export const WHY_CHOOSE_MELO: FeatureItem[] = [
  {
    id: "feat-1",
    title: "Personalised Customisation",
    description: "Every pattern is drafted from your exact measurements and aesthetic vision, ensuring an exquisite bespoke fit that flatters you effortlessly.",
    iconName: "Scissors"
  },
  {
    id: "feat-2",
    title: "Trendy Fashion",
    description: "From runway trends to contemporary festive silhouettes, our designs bring fresh modern flair to timeless wardrobe staples.",
    iconName: "Sparkles"
  },
  {
    id: "feat-3",
    title: "Ladies & Kids Collections",
    description: "A curated destination for women and children alike, offering harmonized mother-daughter sets and festive mini couture designed with tender comfort.",
    iconName: "Heart"
  },
  {
    id: "feat-4",
    title: "Unique Style & Designs",
    description: "No mass production. We celebrate your individuality through handpicked fabrics, artisanal embroideries, and one-of-a-kind tailor-made pieces.",
    iconName: "Palette"
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "ig-1",
    image: "/images/melo_enhanced/melo_mannequin_couture.jpg",
    caption: "Atelier couture • Intricate hand-embroidery on custom black silhouette with our signature crest. #MeloDesigns #Kasaragod",
    tag: "Atelier Couture",
    likes: "582",
    url: "https://www.instagram.com/melo.designss/"
  },
  {
    id: "ig-2",
    image: "/images/melo_enhanced/studio_bridal_emerald.jpg",
    caption: "Heritage bridal beauty • Rich emerald green silk saree with handcrafted gold zari border. #MeloDesignerStudio #Bridal",
    tag: "Bridal Saree",
    likes: "690",
    url: "https://www.instagram.com/melo_designer.studio/"
  },
  {
    id: "ig-3",
    image: "/images/melo_enhanced/studio_purple_kidswear_gown.jpg",
    caption: "Twirl in tenderness • Bespoke amethyst kidswear occasion gown crafted with love. #MeloKids #Kidswear",
    tag: "Kidswear Couture",
    likes: "610",
    url: "https://www.instagram.com/melo_designer.studio/"
  },
  {
    id: "ig-4",
    image: "/images/melo_enhanced/melo_festive_peach.jpg",
    caption: "Pure radiance in bespoke peach & gold festive couture. Tailored to perfection. #BespokeFashion",
    tag: "Festive Glam",
    likes: "625",
    url: "https://www.instagram.com/melo.designss/"
  },
  {
    id: "ig-5",
    image: "/images/melo_enhanced/studio_client_gown_dress.jpg",
    caption: "Modern elegance • Contemporary tailored client evening gown with sculptured drape. #MeloAtelier",
    tag: "Evening Silhouette",
    likes: "545",
    url: "https://www.instagram.com/melo_designer.studio/"
  },
  {
    id: "ig-6",
    image: "/images/melo_enhanced/melo_artisan_frame.jpg",
    caption: "Heritage art • Master craftsman working on bespoke bridal embroidery frame. #KasaragodCraft",
    tag: "Master Artisans",
    likes: "530",
    url: "https://www.instagram.com/melo.designss/"
  }
];

export const CUSTOMISATION_STEPS: CustomisationStep[] = [
  {
    step: "Step 01",
    number: "01",
    title: "Style Consultation",
    description: "Share your inspiration, reference images, event type, and silhouette preferences with our design team.",
    icon: "MessageSquare"
  },
  {
    step: "Step 02",
    number: "02",
    title: "Fabric & Embellishment Selection",
    description: "Explore curated silks, organzas, georgettes, and artisanal laces, matched with your desired color palette.",
    icon: "Sparkles"
  },
  {
    step: "Step 03",
    number: "03",
    title: "Precision Measurement & Tailoring",
    description: "We take comprehensive measurements or guide you virtually to draft a bespoke pattern tailored to you.",
    icon: "Ruler"
  },
  {
    step: "Step 04",
    number: "04",
    title: "Fitting & Handcrafted Finish",
    description: "Your outfit undergoes rigorous quality checks and delicate hand-finishing for a picture-perfect fit.",
    icon: "CheckCircle2"
  }
];

export const ARCHIVE_ITEMS: ArchiveItem[] = [
  {
    id: "arch-01",
    title: "Sovereign Mannequin Couture Jacket",
    category: "bridal",
    categoryLabel: "Bridal & Blouses",
    season: "Signature Couture",
    year: "2026",
    image: "/images/melo_enhanced/melo_mannequin_couture.jpg",
    secondaryImage: "/images/melo_enhanced/melo_zari_embroidery.jpg",
    description: "Masterpiece bespoke couture creation featuring hand-applied crystals, statement cutwork sleeves, and our hand-embroidered Melo Designs atelier crest.",
    fabric: "Raw Silk & Velvet with Cupro Lining",
    craftsmanship: "Over 70 hours of specialized bridal aari & crystal hand embroidery",
    occasion: "Bridal Receptions, High-Fashion Galas & Anniversaries",
    isInstagramPost: true,
    instagramUrl: "https://www.instagram.com/melo.designss/",
    tags: ["Couture Jacket", "Crystal Beading", "Atelier Crest", "Bespoke"]
  },
  {
    id: "arch-02",
    title: "Bespoke Emerald Zari Bridal Saree",
    category: "saree",
    categoryLabel: "Sarees & Drapes",
    season: "Bridal Archive",
    year: "2026",
    image: "/images/melo_enhanced/studio_bridal_emerald.jpg",
    secondaryImage: "/images/melo_enhanced/melo_zari_embroidery.jpg",
    description: "Authentic South Indian bridal saree in regal emerald green with heavy gold zari borders and a sculpted sweetheart blouse.",
    fabric: "Pure Kanchipuram Silk with Metallic Zari Weft",
    craftsmanship: "Hand-embossed traditional temple border and zardozi needlework",
    occasion: "Bridal Muhurtham, Nikah & Reception Ceremonies",
    isInstagramPost: true,
    instagramUrl: "https://www.instagram.com/melo_designer.studio/",
    tags: ["Emerald Saree", "Bridal Zari", "South Indian Bride", "Studio Creation"]
  },
  {
    id: "arch-03",
    title: "Amethyst Handcrafted Kidswear Gown",
    category: "kids",
    categoryLabel: "Kidswear Couture",
    season: "Kidswear Archive",
    year: "2026",
    image: "/images/melo_enhanced/studio_purple_kidswear_gown.jpg",
    secondaryImage: "/images/melo_enhanced/melo_festive_peach.jpg",
    description: "Bespoke purple kidswear dress on atelier mannequin, designed with layered soft tulle flair and baby-soft breathable inner lining.",
    fabric: "French Tulle with 100% Cotton Malmal Lining",
    craftsmanship: "Hand-pleated bodice, custom ruffles, and hypoallergenic stitch finish",
    occasion: "Birthday Celebrations, Weddings & Family Occasions",
    isInstagramPost: true,
    instagramUrl: "https://www.instagram.com/melo_designer.studio/",
    tags: ["Kidswear", "Princess Gown", "Purple Dress", "Custom Kids"]
  },
  {
    id: "arch-04",
    title: "Bespoke Mint Bridal Saree & Kurta Couple",
    category: "saree",
    categoryLabel: "Sarees & Drapes",
    season: "Bridal Archive",
    year: "2026",
    image: "/images/melo_enhanced/melo_mint_bridal_couple.jpg",
    secondaryImage: "/images/melo_enhanced/melo_festive_peach.jpg",
    description: "Harmonized wedding couture set. The bride wears a bespoke mint georgette saree with intricate gold borders; the groom in a tailored matching mint silk kurta.",
    fabric: "Mulberry Silk Georgette & Raw Silk Kurta",
    craftsmanship: "Hand-embossed zari borders and custom tailored necklines",
    occasion: "Bridal Muhurtham, Nikah & Reception Ceremonies",
    isInstagramPost: true,
    instagramUrl: "https://www.instagram.com/melo.designss/",
    tags: ["Bridal Saree", "Couple Set", "Mint Green", "Custom Tailored"]
  },
  {
    id: "arch-05",
    title: "Radiant Peach Festive Suit & Dupatta",
    category: "ethnic",
    categoryLabel: "Ethnic & Anarkalis",
    season: "Festive Archive",
    year: "2025",
    image: "/images/melo_enhanced/melo_festive_peach.jpg",
    secondaryImage: "/images/melo_enhanced/melo_artisan_frame.jpg",
    description: "Luminous pastel peach and blush gold festive suit tailored for our lovely client, featuring delicate gold neckline embroidery and a flowing organza dupatta.",
    fabric: "Raw Silk Kurta & Pure Organza Dupatta",
    craftsmanship: "Hand-placed aari zari work along neckline & cuffs",
    occasion: "Family Weddings, Engagements & Festive Gatherings",
    isInstagramPost: true,
    instagramUrl: "https://www.instagram.com/melo.designss/",
    tags: ["Festive Suit", "Peach & Gold", "Embroidered Dupatta", "Client Creation"]
  },
  {
    id: "arch-06",
    title: "Celeste Contemporary Client Evening Gown",
    category: "western",
    categoryLabel: "Western & Co-ords",
    season: "Modern Atelier",
    year: "2026",
    image: "/images/melo_enhanced/studio_client_gown_dress.jpg",
    secondaryImage: "/images/melo_enhanced/melo_mannequin_couture.jpg",
    description: "Clean architectural evening gown tailored for our client, featuring clean shoulder cuts, fluid body drape, and refined handcrafted finish.",
    fabric: "Heavy Silk Crepe with Natural Fluid Fall",
    craftsmanship: "Sculpted bodice with concealed zip and tailored hemline",
    occasion: "Evening Soirées, Galas & Receptions",
    isInstagramPost: true,
    instagramUrl: "https://www.instagram.com/melo_designer.studio/",
    tags: ["Evening Gown", "Client Dress", "Tailored Fit", "Contemporary"]
  },
  {
    id: "arch-07",
    title: "Harmonized Family Occasion Wear Set",
    category: "commission",
    categoryLabel: "Client Commissions",
    season: "Family Collection",
    year: "2026",
    image: "/images/melo_enhanced/studio_family_couture.jpg",
    secondaryImage: "/images/melo_enhanced/studio_purple_kidswear_gown.jpg",
    description: "Coordinated festive ensembles handcrafted for mother and daughter, featuring complementary color palettes and matching floral needlework.",
    fabric: "Coordinated Pure Silk & Organza Textiles",
    craftsmanship: "Harmonized embroidery motifs across the family ensemble",
    occasion: "Milestone Family Celebrations, Eid & Weddings",
    isInstagramPost: true,
    instagramUrl: "https://www.instagram.com/melo_designer.studio/",
    tags: ["Family Couture", "Mother Daughter Set", "Coordinated Festive"]
  },
  {
    id: "arch-08",
    title: "Artisanal Zari Floral Hand Embroidery",
    category: "bridal",
    categoryLabel: "Bridal & Blouses",
    season: "Atelier Heritage",
    year: "2025",
    image: "/images/melo_enhanced/melo_zari_embroidery.jpg",
    secondaryImage: "/images/melo_enhanced/melo_designer_cutting.jpg",
    description: "Master craft sample showcasing intricate floral vine embroidery created on pure fabric for custom bridal blouses and lehengas.",
    fabric: "Heavy Silk with Gilded Metallic Threading",
    craftsmanship: "100% hand zardozi, cutdana, and seed pearl needlework",
    occasion: "Bridal Blouse Customization & Heirloom Sets",
    isInstagramPost: true,
    instagramUrl: "https://www.instagram.com/melo.designss/",
    tags: ["Zari Embroidery", "Hand Needlework", "Bridal Atelier"]
  },
  {
    id: "arch-09",
    title: "Vogue Contemporary Editorial Couple Drape",
    category: "commission",
    categoryLabel: "Client Commissions",
    season: "Editorial Series",
    year: "2026",
    image: "/images/melo_enhanced/melo_vogue_couple.jpg",
    secondaryImage: "/images/melo_enhanced/melo_mannequin_couture.jpg",
    description: "Stunning high-fashion wedding celebration ensemble featured in editorial photography, blending timeless grace with modern red-carpet energy.",
    fabric: "Fluid Silk Crepe & Italian Suiting",
    craftsmanship: "Sculpted tailored fit with fluid cascading skirt",
    occasion: "Reception Galas, Red Carpet & Milestone Celebrations",
    isInstagramPost: true,
    instagramUrl: "https://www.instagram.com/melo.designss/",
    tags: ["Editorial Drape", "Vogue Wedding", "Black Tie", "Client Commission"]
  },
  {
    id: "arch-10",
    title: "Heritage Adda Frame Bridal Zardozi",
    category: "bridal",
    categoryLabel: "Bridal & Blouses",
    season: "Atelier Craft",
    year: "2025",
    image: "/images/melo_enhanced/melo_artisan_frame.jpg",
    secondaryImage: "/images/melo_enhanced/melo_zari_embroidery.jpg",
    description: "Artisan craftsmanship on the traditional wooden frame at our Kasaragod atelier, crafting golden bullion knot and French knot floral clusters.",
    fabric: "Matka Silk with Gilded Threading",
    craftsmanship: "Authentic Kerala adda frame zardozi embroidery",
    occasion: "Bespoke Bridal Yokes & Custom Blouses",
    isInstagramPost: true,
    instagramUrl: "https://www.instagram.com/melo.designss/",
    tags: ["Adda Frame", "Handcraft", "Zardozi", "Bridal Blouse"]
  },
  {
    id: "arch-11",
    title: "Intimate Wedding Detail Silhouette",
    category: "commission",
    categoryLabel: "Client Commissions",
    season: "Wedding Archive",
    year: "2026",
    image: "/images/melo_enhanced/melo_wedding_pose.jpg",
    secondaryImage: "/images/melo_enhanced/melo_mint_bridal_couple.jpg",
    description: "Custom tailored couple festive attire and wedding celebration look commissioned for a memorable Kerala celebration.",
    fabric: "Fine Cotton Silk & Raw Silk",
    craftsmanship: "Precision shoulder structure and tailored fit",
    occasion: "Intimate Weddings, Nikahs & Receptions",
    isInstagramPost: true,
    instagramUrl: "https://www.instagram.com/melo.designss/",
    tags: ["Wedding Couple", "Custom Groom", "Tailored Fit", "Client Commission"]
  },
  {
    id: "arch-12",
    title: "Designer Saree & Festive Dress Showcase",
    category: "saree",
    categoryLabel: "Sarees & Drapes",
    season: "Atelier Signature",
    year: "2025",
    image: "/images/melo_enhanced/melo_founder_showcase.jpg",
    secondaryImage: "/images/melo_enhanced/melo_festive_peach.jpg",
    description: "Rich designer silk festive saree featuring antique gold zardozi embroidery across the borders and neckline, presented at our Thayalangadi studio.",
    fabric: "Pure Raw Silk with Soft Mulmal Inner",
    craftsmanship: "Hand-embossed antique threadwork & custom buttons",
    occasion: "Eid, Family Celebrations & Festive Gatherings",
    isInstagramPost: true,
    instagramUrl: "https://www.instagram.com/melo.designss/",
    tags: ["Festive Saree", "Zardozi Suit", "Designer Showcase", "Festive"]
  },
  {
    id: "arch-13",
    title: "Atelier Cutting & Pattern Drafting Study",
    category: "commission",
    categoryLabel: "Client Commissions",
    season: "Bespoke Process",
    year: "2026",
    image: "/images/melo_enhanced/melo_designer_cutting.jpg",
    secondaryImage: "/images/melo_enhanced/melo_artisan_frame.jpg",
    description: "Behind the scenes at our Kasaragod atelier cutting table. Every garment begins with personalized body measurements and hand-drawn patterns.",
    fabric: "Pure Magenta Raw Silk & Cotton Interfacing",
    craftsmanship: "Individual pattern drafting and manual cutting",
    occasion: "Custom Tailoring & Bespoke Commissions",
    isInstagramPost: true,
    instagramUrl: "https://www.instagram.com/melo.designss/",
    tags: ["Cutting Table", "Made to Measure", "Atelier Process"]
  },
  {
    id: "arch-14",
    title: "Atelier Mannequin Net Couture Study",
    category: "western",
    categoryLabel: "Western & Co-ords",
    season: "Studio Couture",
    year: "2026",
    image: "/images/melo_enhanced/studio_mannequin_net.jpg",
    secondaryImage: "/images/melo_enhanced/melo_mannequin_couture.jpg",
    description: "Boutique studio display showing delicate hand-pleated net work and modern drape silhouette crafted at our Thayalangadi atelier.",
    fabric: "Imported French Net with Butter Crepe Lining",
    craftsmanship: "Hand-gathered micro-pleats and reinforced hem structure",
    occasion: "Cocktail Receptions & Contemporary Celebrations",
    isInstagramPost: true,
    instagramUrl: "https://www.instagram.com/melo_designer.studio/",
    tags: ["Mannequin Couture", "Net Gown", "Studio Display", "Bespoke"]
  },
  {
    id: "arch-15",
    title: "Studio Draped Shawl & Festive Dress",
    category: "ethnic",
    categoryLabel: "Ethnic & Anarkalis",
    season: "Studio Archive",
    year: "2026",
    image: "/images/melo_enhanced/studio_shawl_dress.jpg",
    secondaryImage: "/images/melo_enhanced/studio_family_couture.jpg",
    description: "Flowing festive outfit paired with customized embroidered shawl, tailored to measure for special family gatherings.",
    fabric: "Georgette with Metallic Trim Border",
    craftsmanship: "Delicate border embroidery with flowing flared silhouette",
    occasion: "Eid, Family Celebrations & Festive Gatherings",
    isInstagramPost: true,
    instagramUrl: "https://www.instagram.com/melo_designer.studio/",
    tags: ["Festive Dress", "Shawl Drapery", "Studio Piece", "Tailored"]
  }
];
