export type PersonaId = "Family Planner" | "Value Seeker" | "Image-Maker" | "Adventure Explorer" | "City Luxury Hunter";

export interface Option {
  label: string;
  tags: PersonaId[];
}

export interface Question {
  id: number;
  question: string;
  options: Option[];
}

export interface Outcome {
  id: PersonaId;
  title: string;
  description: string;
  recommended_cars: string[];
}

export const questions: Question[] = [
  {
    id: 1,
    question: "What’s your monthly budget for the car (including insurance, fuel, and maintenance)?",
    options: [
      { label: "< R5k", tags: ["Value Seeker"] },
      { label: "R5k–R10k", tags: ["Value Seeker", "Family Planner"] },
      { label: "R10k–R20k", tags: ["Family Planner", "Image-Maker", "Adventure Explorer"] },
      { label: "R20k+", tags: ["Image-Maker", "City Luxury Hunter"] }
    ]
  },
  {
    id: 2,
    question: "Do you already have another vehicle in your household?",
    options: [
      { label: "Yes, we have an SUV/family car", tags: ["City Luxury Hunter", "Image-Maker"] },
      { label: "Yes, but it’s a smaller car", tags: ["Family Planner"] },
      { label: "No, this will be our only car", tags: ["Family Planner", "Value Seeker", "Adventure Explorer"] }
    ]
  },
  {
    id: 3,
    question: "How important is the image your car gives off?",
    options: [
      { label: "Very important — professional impression", tags: ["Image-Maker"] },
      { label: "Important, but mostly to car enthusiasts", tags: ["City Luxury Hunter", "Adventure Explorer"] },
      { label: "Not important at all", tags: ["Value Seeker", "Family Planner"] }
    ]
  },
  {
    id: 4,
    question: "Would you consider a car that loses value quickly if it offers more luxury or features?",
    options: [
      { label: "Yes, I don’t mind", tags: ["Image-Maker", "City Luxury Hunter"] },
      { label: "No, I want a car that holds its value", tags: ["Family Planner", "Value Seeker", "Adventure Explorer"] }
    ]
  },
  {
    id: 5,
    question: "Are you comfortable with an older car if it means better value for money?",
    options: [
      { label: "Yes, if I’ll mostly be in the city", tags: ["City Luxury Hunter"] },
      { label: "No, I need something reliable everywhere", tags: ["Family Planner", "Adventure Explorer", "Value Seeker"] }
    ]
  },
  {
    id: 6,
    question: "Who would you prefer to buy from?",
    options: [
      { label: "Big dealer group (more peace of mind)", tags: ["Family Planner", "Value Seeker", "Adventure Explorer"] },
      { label: "Independent dealer or private seller if value is better", tags: ["City Luxury Hunter", "Image-Maker"] }
    ]
  },
  {
    id: 7,
    question: "How do you plan to use this car most?",
    options: [
      { label: "Daily commute in the city", tags: ["Value Seeker", "City Luxury Hunter"] },
      { label: "Long-distance family trips", tags: ["Family Planner"] },
      { label: "Heavy-duty work (bakkie, towing, hauling)", tags: ["Adventure Explorer"] },
      { label: "Weekend fun / car enthusiast", tags: ["City Luxury Hunter", "Image-Maker"] }
    ]
  },
  {
    id: 8,
    question: "Would you like to avoid certain types of used cars?",
    options: [
      { label: "Yes — avoid cars popular with e-hailing drivers", tags: ["Value Seeker", "Image-Maker"] },
      { label: "Yes — avoid ex-trade/farm bakkies", tags: ["Adventure Explorer"] },
      { label: "No preference", tags: [] }
    ]
  }
];

export const outcomes: Outcome[] = [
  {
    id: "Family Planner",
    title: "The Family Planner",
    description:
      "You prioritise practicality, comfort, and safety above all else. A reliable family vehicle that can handle school runs, road trips, and everything in between is your ideal match. You want a car that keeps running costs predictable and holds its value over time.",
    recommended_cars: ["Toyota Fortuner", "Kia Sportage", "Hyundai Tucson", "VW Tiguan"]
  },
  {
    id: "Value Seeker",
    title: "The Value Seeker",
    description:
      "You want maximum bang for your buck. Running costs, depreciation, and reliability are top of mind. A car that’s affordable to maintain, fuel-efficient, and won’t lose value overnight is your perfect fit.",
    recommended_cars: ["VW Polo Vivo", "Toyota Starlet", "Suzuki Swift", "Renault Triber"]
  },
  {
    id: "Image-Maker",
    title: "The Image-Maker",
    description:
      "You know that a car says something about its driver. Whether it’s pulling up at a client meeting, cruising Sandton, or impressing your peers, the impression your car makes is a key part of your decision. Luxury, style, and presence matter here.",
    recommended_cars: ["BMW 3 Series (used)", "Mercedes-Benz C-Class (used)", "Audi A4 (used)", "Lexus IS"]
  },
  {
    id: "Adventure Explorer",
    title: "The Adventure Explorer",
    description:
      "You live for the open road and weekends away. Whether it’s camping, beach runs, or family adventures, you need something versatile, rugged, and capable of handling South African roads.",
    recommended_cars: ["Toyota Hilux", "Ford Ranger", "Isuzu D-Max", "Mitsubishi Pajero Sport"]
  },
  {
    id: "City Luxury Hunter",
    title: "The City Luxury Hunter",
    description:
      "You want the feel of premium motoring — but on your own terms. Because you spend most of your time in the city, you’re happy to consider older luxury vehicles with high comfort levels, knowing you won’t be stranded in remote areas.",
    recommended_cars: ["Mercedes-Benz E-Class (used)", "BMW 5 Series (2014–2017)", "Jaguar XF", "Volvo S60"]
  }
];
