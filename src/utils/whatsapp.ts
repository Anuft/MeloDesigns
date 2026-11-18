import { BOUTIQUE_INFO } from '../data/boutiqueData';

/**
 * Creates a formatted WhatsApp deep-link URL with encoded pre-filled text
 */
export function getWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${BOUTIQUE_INFO.phoneNumber}?text=${encoded}`;
}

export function openWhatsApp(message: string): void {
  const url = getWhatsAppUrl(message);
  window.open(url, '_blank', 'noopener,noreferrer');
}

export const WHATSAPP_MESSAGES = {
  generalEnquiry: () =>
    `Hello MELO DESIGNS! ✨ I am reaching out from your website. I would love to learn more about your collections and boutique services in Thayalangadi, Kasaragod.`,

  productEnquiry: (productName: string, category: string) =>
    `Hello MELO DESIGNS! ✨ I came across "${productName}" (${category}) on your website showcase and would like to enquire about its price, fabric details, and custom sizing options.`,

  archiveEnquiry: (itemTitle: string, category: string, season: string) =>
    `Hello MELO DESIGNS! ✨ I am browsing your Atelier Archive on your website and loved "${itemTitle}" (${category} • ${season}). Could you share if a similar custom piece can be commissioned for me, along with price estimates?`,

  customisationEnquiry: (details?: {
    outfitType?: string;
    fabric?: string;
    occasion?: string;
    notes?: string;
  }) => {
    let msg = `Hello MELO DESIGNS! ✨ I would like to book a customisation consultation with your atelier.\n\n`;
    if (details?.outfitType) msg += `• Outfit Type: ${details.outfitType}\n`;
    if (details?.fabric) msg += `• Fabric Preference: ${details.fabric}\n`;
    if (details?.occasion) msg += `• Occasion / Target Date: ${details.occasion}\n`;
    if (details?.notes) msg += `• Custom Notes: ${details.notes}\n`;
    msg += `\nPlease let me know the consultation process and how we can proceed!`;
    return msg;
  },

  visitAppointment: (name?: string, date?: string) =>
    `Hello MELO DESIGNS! ✨ I would like to plan a visit to your boutique at Thayalangadi, Kasaragod${name ? ` (Name: ${name})` : ''}${date ? ` on ${date}` : ''}. Could you please confirm visiting hours?`,
};
