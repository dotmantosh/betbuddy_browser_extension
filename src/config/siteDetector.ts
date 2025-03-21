export const supportedSites = {
  'sportybet.com': 'sportybet',
  'betway.com': 'betway',
  'bet9ja.com': 'bet9ja',
  'betking.com': 'betking',
  'bet365.com': 'bet365',
  'betpawa.com': 'betpawa',
  'betika.com': 'betika',
  'betfair.com': 'betfair',
  'betfred.com': 'betfred',
  'betvictor.com': 'betvictor',
  'betdaq.com': 'betdaq',
  'betsson.com': 'betsson',
  'bet-at-home.com': 'bet-at-home',
  'betbright.com': 'betbright',
  'betcris.com': 'betcris',
  'betclic.com': 'betclic',
  'betonline.com': 'betonline'
};

export function detectSite(url: string) {
  for (const [domain, site] of Object.entries(supportedSites)) {
    if (url.includes(domain)) {
      return site;
    }
  }
  return null;
}