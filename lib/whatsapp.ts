import { siteConfig } from "@/config/site";

export function getWhatsAppUrl(message?: string): string {
  const number = siteConfig.contact.whatsapp.replace(/\D/g, "");

  if (!number) {
    return "#contacto";
  }

  const params = message ? `?text=${encodeURIComponent(message)}` : "";

  return `https://wa.me/${3173653377}${params}`;
}

export function isWhatsAppConfigured(): boolean {
  return siteConfig.contact.whatsapp.replace(/\D/g, "").length > 0;
}
