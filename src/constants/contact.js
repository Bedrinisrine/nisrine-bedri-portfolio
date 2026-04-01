/** Contact targets — used by Contact form + WhatsApp links */
export const CONTACT_EMAIL = 'nisrinebedri@gmail.com'

/** Digits only, no + (Morocco example: 212 6 XX XX XX XX → 2126XXXXXXXX) */
export const WHATSAPP_E164 = '212617594333'

export function whatsappUrlWithText(text) {
  const q = encodeURIComponent(text)
  return `https://wa.me/${WHATSAPP_E164}?text=${q}`
}
