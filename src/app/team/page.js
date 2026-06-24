import PageBanner from '@/components/PageBanner'
import CTABand from '@/components/CTABand'
export const metadata = { title: 'Our Team — Cleo Consulting' }
const members = [
  { i: 'JS', name: 'Jai Singh', img: '/images/jai.webp', li: 'https://www.linkedin.com/in/singhjai77', bio: "Jai strives to be a perfectionist but most of the times fails miserably\u2026 after all.. no one\u2019s perfect. He is a graduate in Economics and English Literature and a Post Grad in Marketing and Information Technology. He has a sharp eye to recognize talent and; therefore; manages the recruitment efforts of the company. When he\u2019s not working, he\u2019s either spending some time with sheltered animals, traveling or just catching up on a movie \u2013 after taking permission from his six rescued dogs." },
  { i: 'VJ', name: 'Vic (Vikas) Joshi', img: '/images/vikas.webp', li: 'https://www.linkedin.com/in/joshivikas/', bio: "Vic is the funny guy in the team\u2026 a sense of humor, some may call boisterous, but most call it awesome. He is a Mathematics graduate and a Post Grad in Marketing and Information Technology. He is a pure sales guy, has a knack for closing deals having successfully delved into ERP sales, CAD/CAM-related services sales and now Professional Staffing. When he is not working, one can find him bike riding, running, golfing or playing pickle ball. His next ambition is to do a half Ironman by summer of 2027." },
  { i: 'MS', name: 'Manjeet Singh', img: '/images/manjeet.webp', li: 'https://www.linkedin.com/in/manjeetsingh1978/', bio: "Coming Soon..." },
  { i: 'VB', name: 'Vignesh Babu', img: '/images/vignesh.webp', li: 'https://www.linkedin.com/in/vignesh-babu-/', bio: "Coming Soon..." },
  { i: 'MD', name: 'Mohan Dhamodaran', img: '/images/mohan.webp', li: 'https://www.linkedin.com/in/mohan-dhamodaran-8a45a930b/', bio: "Coming Soon..." },
  { i: 'JJ', name: 'John Jimomi', img: '/images/john.webp', li: 'https://www.linkedin.com/in/john-jimomi-b384a613/', bio: "John Jimomi is a very soft-spoken, sincere and an honest man. He is passionate about his work and loves what he does \u2013 hardcore recruitment. He is a married man who is juggling life between work and being a full-time dad to his son. He enjoys spending time with his family, so most of his free time is spent with them. He loves playing cricket and watching a lot of movies." },
  { i: 'RP', name: 'Rajesh Pitti', img: '/images/rajesh.webp', li: 'https://www.linkedin.com/in/raj1985/', bio: "Coming Soon..." },
  { i: 'AM', name: 'Anil Munde', img: '/images/anil.webp', li: 'https://www.linkedin.com/in/anil-munde-5a24a09/', bio: "Coming Soon..." },
  { i: 'RK', name: 'Ramesh K', img: '/images/rameshK.webp', li: 'https://www.linkedin.com/in/ramesh-k-aab4a017', bio: "Ramesh is a graduate in Computer Science Engineering and leads the sales team for Cleo. He has very good understanding of all the technologies he sources for and has a great zeal to learn new ones. He loves spending time with his family, that consists of his wife and 2 sons, and traveling a lot when he is not at work. He always believes in \u2013 \u201CYou only live once, but if you do it right, once is enough\u201D." },
  { i: 'AP', name: 'Amit Patil', img: '/images/amit.webp', li: 'https://www.linkedin.com/in/amit-49369b49/', bio: "Amit is a detail-oriented individual who is very energetic, creative, eager to learn and adapt to new challenges, excellent communications skills and strong interpersonal skills, excellent work ethics, team oriented with strong analytical and leadership qualities. He has very good understanding of all the technologies that helps him excel in his job. Natural leader with a sense of ownership and focus on quality even under high pressure situations. He loves to travel and spend time with his family and friends." },
  { i: 'DS', name: 'Dhruv Pratap Singh', img: '/images/dhruv.webp', li: 'https://www.linkedin.com/in/dhruv-p-52086424b/', bio: "Coming Soon..." },
  { i: 'AJ', name: 'Asa Jimomi', img: '/images/asa.webp', li: 'https://www.linkedin.com/in/asa-jimomi-575262250/', bio: "Asa is a Political Science graduate who has many talents and passions. Besides his academic accomplishments, Asa is an avid artist who loves to sketch and paint. He finds solace in creating art and is constantly exploring new mediums and techniques to improve his skills. Asa is a huge fan of Marvel heroes, especially Loki. He loves the character\u2019s complexity and mischievous nature, and finds the stories and mythology behind the character fascinating. He often incorporates Marvel themes into his artwork and is always excited to discuss the latest Marvel movie or TV show. His friends and family describe him as a kind and caring person who is easy to talk to and always puts others first. This quality alone makes him very personable and, therefore, a successful technical recruiter." },
  { i: 'MS', name: 'Maninder Singh', img: '/images/maninder.webp', li: 'https://www.linkedin.com/in/iammsingh/', bio: "Coming Soon..." },
  { i: 'AS', name: 'Abhishek Swami', img: '/images/abhishek.webp', li: 'https://www.linkedin.com/in/abhishek-s-532991163/', bio: "Coming Soon..." },
  { i: 'RK', name: 'Ram Kumar', img: '/images/ram.webp', li: 'https://www.linkedin.com/in/ram-kumar-5bb228145/', bio: "Coming Soon..." },
  { i: 'SG', name: 'Sachin Gaikwad', img: '/images/sachin.webp', li: 'https://www.linkedin.com/in/sachincgaikwad/', bio: "Coming Soon..." },
  { i: 'SP', name: 'Smita Pandey', img: '/images/smita.webp', li: 'https://www.linkedin.com/in/smita-p-16420b16b/', bio: "Coming Soon..." },
  { i: 'SG', name: 'Sonali Gupta', img: '/images/sonali.webp', li: 'https://www.linkedin.com/in/sonali-gupta-42499b1ab/', bio: "Coming Soon..." },
]
export default function Team() {
  return (
    <>
      <PageBanner eyebrow="About Us" title="OUR<br>TEAM" num="02" bgImage="/images/team-fistbump.webp" />
      <div className="pg-body">
        {/* Cleo - top of page as the inspiration */}
        <div className="tm">
          <div className="tm-photo" style={{ padding: 0, overflow: 'hidden' }}><img src="/images/cleo.webp" alt="Cleo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
          <div className="tm-info">
            <div className="tm-name">Cleo</div>
            <div style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.75rem' }}>The Inspiration</div>
            <p className="tm-bio">Last but definitely not the least, Cleo is the inspiration behind this company. She came into Jai&rsquo;s life in 2008 at a bakery where their eyes met. From then till today they are inseparable. Cleo has taught us how to be grateful, how to love, respect and accept. She is honest, loyal, expressive and genuine &mdash; and we, as a company, shall offer our services with the same principles to our clients.</p>
          </div>
        </div>
        <div className="team-list">
          {members.map((m, idx) => (
            <div className={`tm`} key={idx}>
              <div className="tm-photo" style={m.img ? { padding: 0, overflow: 'hidden' } : {}}>{m.img ? <img src={m.img} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : m.i}</div>
              <div className="tm-info">
                <div className="tm-name">{m.name}</div>
                <a href={m.li} target="_blank" rel="noopener noreferrer" className="tm-li">LinkedIn {'\u2192'}</a>
                <p className="tm-bio">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CTABand label="Work with us" title="GET IN<br><em>Touch</em>" btnText="Contact Us →" btnHref="/contact" />
    </>
  )
}