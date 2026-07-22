export interface EligibilityCriterion {
  id: number;
  label: string;
  required: boolean;
}

export const eligibilityCriteria: EligibilityCriterion[] = [
  {
    id: 1,
    label: "Native English Speaker",
    required: true,
  },
  {
    id: 2,
    label: "Bachelor's Degree",
    required: true,
  },
  {
    id: 3,
    label: "Qualified Teacher Status (QTS)",
    required: true,
  },
  {
    id: 4,
    label: "Minimum 2 Years Teaching Experience",
    required: true,
  },
  {
    id: 5,
    label: "References Verified",
    required: true,
  },
  {
    id: 6,
    label: "Registration Interview Completed",
    required: true,
  },
];

export const programmeSettings = {
  maximumAge: 55,
  maximumDependents: 2,
  profileRefreshDays: 60,
  capacityPerSubject: 50,
};