export type CrewId = 'web' | 'ai' | 'datascience' | 'se' | 'cyber';

export interface Crew {
  id: CrewId;
  name: string;
  pirateRole: string; // e.g. "The Shipbuilders"
  islandName: string; // e.g. "Port of the Grand Web"
  tagline: string;
  brief: string;
  description: string;
  techStack: string[];
  weaponsAndTools: string[];
  voyageQuest: string;
  captainLogQuote: string;
  coordinates: {
    lat: string;
    lng: string;
    mapX: number; // percentage 0-100 on desktop map
    mapY: number; // percentage 0-100 on desktop map
  };
  accentColor: string; // hex or tailwind class
  badgeIcon: string;
}

export interface ApplicationFormData {
  fullName: string;
  email: string;
  phone: string;
  faculty: string;
  academicYear: string;
  crew: CrewId;
  roleType: 'core' | 'head';
  githubOrPortfolio: string;
  voyageStatement: string;
}

export interface BoardingPassData {
  id: string;
  fullName: string;
  crewName: string;
  crewRole: string;
  roleType: 'core' | 'head';
  timestamp: string;
  islandDestination: string;
  flightRank: string;
}
