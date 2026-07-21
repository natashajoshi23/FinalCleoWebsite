export const runtime = 'edge'

export async function GET() {
  const apiKey = process.env.NEXT_PUBLIC_CEIPAL_API_KEY
  const portalId = process.env.NEXT_PUBLIC_CEIPAL_PORTAL_ID

  const url = `https://careerapi.ceipal.com/careerPortalWidget/?apikey=${apiKey}&cp_id=${portalId}&job_id=`

  try {
    const res = await fetch(url, {
      headers: {
        'X-Referer-Host': 'https://jobsapi.ceipal.com/',
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Referer': 'https://jobsapi.ceipal.com/',
        'Origin': 'https://jobsapi.ceipal.com',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
      next: { revalidate: 300 }, // cache for 5 minutes
    })

    if (!res.ok) {
      return new Response(JSON.stringify({ error: `CEIPAL returned ${res.status}` }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const data = await res.json()
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=60',
      },
    })
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
