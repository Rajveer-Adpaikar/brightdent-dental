// WhatsApp deep-link helper. Prefills the clinic chat with a message.
// ponytail: no encoding lib needed for these short strings
export function waLink(whatsappNumber: string, text: string): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}