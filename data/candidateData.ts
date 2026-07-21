export interface MatchCandidate {
  id: number;
  name: string;
  avatar: string;
  role: string;
  nationality: string;
  nationalityFlag: string;
  curriculum: string;
  currentLocation: string;
  availability: string;
  expectedSalary: string;
  profileStatus: "Verified" | "Review Soon" | "Update Required";
  daysRemaining: number;
}

export const matchCandidates: MatchCandidate[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    avatar: "/avatars/candidate-01.jpg",
    role: "Primary Teacher",
    nationality: "British",
    nationalityFlag: "/flags/uk.svg",
    curriculum: "British",
    currentLocation: "United Arab Emirates",
    availability: "Immediate",
    expectedSalary: "USD 3,800",
    profileStatus: "Verified",
    daysRemaining: 27,
  },

  {
    id: 2,
    name: "Emma Carter",
    avatar: "/avatars/candidate-02.jpg",
    role: "Primary Teacher",
    nationality: "South African",
    nationalityFlag: "/flags/south-africa.svg",
    curriculum: "British",
    currentLocation: "Malaysia",
    availability: "2 Weeks",
    expectedSalary: "USD 3,600",
    profileStatus: "Review Soon",
    daysRemaining: 9,
  },

  {
    id: 3,
    name: "Olivia Thompson",
    avatar: "/avatars/candidate-03.jpg",
    role: "Primary Teacher",
    nationality: "British",
    nationalityFlag: "/flags/uk.svg",
    curriculum: "British",
    currentLocation: "Vietnam",
    availability: "August 2026",
    expectedSalary: "USD 4,000",
    profileStatus: "Verified",
    daysRemaining: 22,
  },

  {
    id: 4,
    name: "Sophia Bennett",
    avatar: "/avatars/candidate-04.jpg",
    role: "Primary Teacher",
    nationality: "Irish",
    nationalityFlag: "/flags/ireland.svg",
    curriculum: "British",
    currentLocation: "China",
    availability: "Immediate",
    expectedSalary: "USD 4,200",
    profileStatus: "Update Required",
    daysRemaining: 0,
  },

  {
    id: 5,
    name: "Jessica Adams",
    avatar: "/avatars/candidate-05.jpg",
    role: "Primary Teacher",
    nationality: "British",
    nationalityFlag: "/flags/uk.svg",
    curriculum: "British",
    currentLocation: "Qatar",
    availability: "Immediate",
    expectedSalary: "USD 3,900",
    profileStatus: "Verified",
    daysRemaining: 31,
  },

  {
    id: 6,
    name: "Lucy Walker",
    avatar: "/avatars/candidate-06.jpg",
    role: "Primary Teacher",
    nationality: "Australian",
    nationalityFlag: "/flags/australia.svg",
    curriculum: "British",
    currentLocation: "Singapore",
    availability: "January 2027",
    expectedSalary: "USD 4,100",
    profileStatus: "Review Soon",
    daysRemaining: 6,
  },

  {
    id: 7,
    name: "Hannah Cooper",
    avatar: "/avatars/candidate-07.jpg",
    role: "Primary Teacher",
    nationality: "New Zealander",
    nationalityFlag: "/flags/new-zealand.svg",
    curriculum: "British",
    currentLocation: "Thailand",
    availability: "Immediate",
    expectedSalary: "USD 3,700",
    profileStatus: "Verified",
    daysRemaining: 18,
  },

  {
    id: 8,
    name: "Emily Scott",
    avatar: "/avatars/candidate-08.jpg",
    role: "Primary Teacher",
    nationality: "Canadian",
    nationalityFlag: "/flags/canada.svg",
    curriculum: "British",
    currentLocation: "United Arab Emirates",
    availability: "Immediate",
    expectedSalary: "USD 4,000",
    profileStatus: "Verified",
    daysRemaining: 15,
  },

  {
    id: 9,
    name: "Rebecca Lewis",
    avatar: "/avatars/candidate-09.jpg",
    role: "Primary Teacher",
    nationality: "British",
    nationalityFlag: "/flags/uk.svg",
    curriculum: "British",
    currentLocation: "Malaysia",
    availability: "Immediate",
    expectedSalary: "USD 3,850",
    profileStatus: "Review Soon",
    daysRemaining: 11,
  },

  {
    id: 10,
    name: "Chloe Wilson",
    avatar: "/avatars/candidate-10.jpg",
    role: "Primary Teacher",
    nationality: "South African",
    nationalityFlag: "/flags/south-africa.svg",
    curriculum: "British",
    currentLocation: "Oman",
    availability: "Immediate",
    expectedSalary: "USD 3,750",
    profileStatus: "Verified",
    daysRemaining: 24,
  },
];