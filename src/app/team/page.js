import PageBanner from '@/components/PageBanner'
import CTABand from '@/components/CTABand'
import { client } from '@/sanity/client'
import { urlFor } from '@/sanity/lib/image'

export const revalidate = 60
export const metadata = { title: 'Our Team — Cleo Consulting' }

async function getMembers() {
  try {
    const data = await client.fetch(
      `*[_type == "teamMember"] | order(order asc) { _id, name, initials, subtitle, photo, linkedinUrl, bio }`,
      {},
      { next: { revalidate: 60 } }
    )
    return data || []
  } catch {
    return []
  }
}

export default async function Team() {
  const sanityMembers = await getMembers()

  return (
    <>
      <PageBanner eyebrow="About Us" title="OUR<br>TEAM" num="02" bgImage="/images/team-fistbump.webp" />
      <div className="pg-body">
        <div className="team-list">

          {/* --- CMS-managed members --- */}
          {sanityMembers.map((m) => {
            const photoUrl = m.photo
              ? urlFor(m.photo).width(400).height(400).fit('crop').auto('format').url()
              : null
            return (
              <div className="tm" key={m._id}>
                <div className="tm-photo" style={photoUrl ? { padding: 0, overflow: 'hidden' } : {}}>
                  {photoUrl
                    ? <img src={photoUrl} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    : (m.initials || m.name.split(' ').map(w => w[0]).join('').slice(0, 2))}
                </div>
                <div className="tm-info">
                  <div className="tm-name">{m.name}</div>
                  {m.subtitle && (
                    <div style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.75rem' }}>{m.subtitle}</div>
                  )}
                  {m.linkedinUrl && (
                    <a href={m.linkedinUrl} target="_blank" rel="noopener noreferrer" className="tm-li">LinkedIn →</a>
                  )}
                  <p className="tm-bio">{m.bio}</p>
                </div>
              </div>
            )
          })}

        </div>
      </div>
      <CTABand label="Work with us" title="GET IN<br><em>Touch</em>" btnText="Contact Us →" btnHref="/contact" />
    </>
  )
}
