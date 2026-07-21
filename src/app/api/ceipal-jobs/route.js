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
      next: { revalidate: 300 }, // cache response for 5 minutes on Vercel
    })

    if (!res.ok) {
      return Response.json({ error: `CEIPAL returned ${res.status}` }, { status: 502 })
    }

    const data = await res.json()
    return Response.json(data, {
      headers: { 'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=60' },
    })
  } catch (err) {
    return Response.json({ error: err.message }, { status: 502 })
  }
}
