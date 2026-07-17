import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import ContactClient from './ContactClient'

export const dynamic = 'force-dynamic'

const fallbackOffices = [
  { country: 'USA', city: 'New York', lines: '1879 Whitehaven Road, Suite C\nGrand Island, NY 14072', phone: '+1 866-390-6604', email: 'usa@cleoconsult.com', imageUrl: '/images/office-ny.webp', imagePos: 'center center' },
  { country: 'Canada', city: 'Ontario', lines: '3390 South Service Rd, Suite 301 #24\nBurlington, ON L7N 3J5', phone: '+1 866-390-6604', email: 'canada@cleoconsult.com', imageUrl: '/images/office-ontario.webp', imagePos: '30% center' },
  { country: 'India', city: 'Karnataka', lines: '#21178, Tower-21, Prestige Shantiniketan\nWhitefield Main Road, Bangalore 560048', phone: '+91 80 4333-3655', email: 'india@cleoconsult.com', imageUrl: '/images/office-bangalore.webp', imagePos: 'center center' },
]

export default async function ContactPage() {
  let offices = fallbackOffices
  try {
    const data = await client.fetch(
      `*[_type == "officeLocation"] | order(order asc) { country, city, addressLine1, addressLine2, phone, email, image }`
    )
    if (data && data.length > 0) {
      offices = data.map((o, i) => ({
        country: o.country,
        city: o.city,
        lines: [o.addressLine1, o.addressLine2].filter(Boolean).join('\n'),
        phone: o.phone,
        email: o.email,
        imageUrl: o.image ? urlFor(o.image).width(1200).quality(95).auto('format').url() : fallbackOffices[i]?.imageUrl || null,
        imagePos: fallbackOffices[i]?.imagePos || 'center center',
      }))
    }
  } catch (e) {
    console.error('Failed to fetch offices from Sanity:', e)
  }

  return (
    <>
      <link rel="preload" as="image" href="/images/conference-room.webp" />
      <ContactClient offices={offices} />
    </>
  )
}
