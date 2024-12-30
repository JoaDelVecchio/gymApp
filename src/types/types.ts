export type DecodedUser = {
  sub: string;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  email: string;
  email_verified: boolean;
  locale: string;
};

export type CardProps = {
  img: string;
  title: string;
  description: string;
  imgHeight?: string; // Optional height for different layouts
};

export type Plan = {
  id: number;
  name: string;
  features: string[];
  tagline: string;
  price: number;
  duration: "1 month" | "12 months";
};
