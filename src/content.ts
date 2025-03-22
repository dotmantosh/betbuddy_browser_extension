import { bet9ja } from "./content/bet9ja";
import { betway } from "./content/betway";
import { sportybet } from "./content/sportybet";
const siteFunctions: { [key: string]: () => void } = {
  sportybet: sportybet,
  betway: betway,
  bet9ja: bet9ja,
};

(window as any).runSiteLogic = (site: string | null) => {
  console.log('[Content] Received site:', site);
  if (site && siteFunctions[site]) {
    siteFunctions[site]();
  } else {
    console.log('[Content] No specific logic for this site');
  }
};