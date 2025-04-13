// Interface for the Root Object
export interface ITournament {
  id: string;
  name: string;
  events: IEvent[];
  categoryName: string;
  categoryId: string;
}
// Interface for Event
export interface IEvent {
  eventId: string;
  gameId: string;
  productStatus: string;
  estimateStartTime: number;
  status: number;
  matchStatus: string;
  homeTeamId: string;
  homeTeamName: string;
  awayTeamName: string;
  awayTeamId: string;
  sport: Sport;
  totalMarketSize: number;
  markets: Market[];
  bookingStatus: string;
  topTeam: boolean;
  fixtureVenue: FixtureVenue;
  giftGrabActivityResultVO: {
    activityEnabled: boolean;
    enabled: boolean;
  };
  ai: boolean;
  bgEvent: boolean;
  matchTrackerNotAllowed: boolean;
  eventSource: {
    preMatchSource: {
      sourceType: string;
      sourceId: string;
    };
    liveSource: {
      sourceType: string;
      sourceId: string;
    };
  };
  banned: boolean;
}


// Interface for Market
interface Market {
  id: string;
  product: number;
  desc: string;
  status: number;
  group: string;
  groupId: string;
  marketGuide: string;
  title: string;
  name: string;
  favourite: number;
  outcomes: Outcome[];
  farNearOdds: number;
  sourceType: string;
  lastOddsChangeTime: number;
  banned: boolean;
  specifier?: string; // Optional field for markets with specifiers
}

// Interface for Outcome
interface Outcome {
  id: string;
  odds: string;
  probability: string;
  isActive: number;
  desc: string;
}

// Interface for Tournament
interface Tournament {
  id: string;
  name: string;
}

// Interface for Category
interface Category {
  id: string;
  name: string;
  tournament: Tournament;
}

// Interface for Sport
interface Sport {
  id: string;
  name: string;
  category: Category;
}


// Interface for FixtureVenue
interface FixtureVenue {
  name: string;
}