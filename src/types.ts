export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: 'love' | 'family' | 'dark_forces' | 'destiny';
  remedyHint: string;
}

export interface ZodiacSign {
  id: string;
  name: string;
  symbol: string;
  dateRange: string;
  rulingPlanet: string;
  element: 'Fire' | 'Earth' | 'Air' | 'Water';
  trait: string;
  prediction: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  issue: string;
  resolution: string;
  message: string;
  stars: number;
}
