export interface Candidate {
  id: number;

  name: string;
  avatar: string;

  role: string;
  subject: string;

  nationality: string;
  nationalityFlag: string;

  currentLocation: string;
  currentLocationFlag: string;

  curriculum: string;

  experience: number;

  profileDaysRemaining: number;

  availability: string;

  expectedSalary: string;

  placementBarrier: string;

  lastUpdated: string;

  status: string;

  // NEW

  age: number;

  dependents: number;

  noticePeriod: string;

  preferredCountries: string[];

  premiumScore: number;

  cvSummary: string;

  registrationNotes: string;

  history: string[];

  matchedJobs: {
    school: string;
    score: number;
  }[];
}