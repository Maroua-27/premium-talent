export interface Candidate {
  id: number;

  name: string;

  avatar: string;

  role: string;

  nationality: string;

  nationalityFlag: string;

  currentLocation: string;

  currentLocationFlag: string;

  curriculum: "British" | "American" | "IB";

  subject: string;

  experience: number;

  profileDaysRemaining: number;

  availability: string;

  expectedSalary: string;

  placementBarrier: string;

  lastUpdated: string;

  status: "Ready" | "Review" | "Pending";
}