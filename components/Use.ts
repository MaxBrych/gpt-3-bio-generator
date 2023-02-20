export interface UseProps {
  name: string;
  id: number;
  description: string;
  slug: string;
  toolPrompt: string;
  icon: string;
}

export const tools: UseProps[] = [
  {
    name: "Bild Verbessern",
    id: 1,
    description: "Verbessert die Qualität eines Bildes",
    slug: "restore",
    toolPrompt: "",
    icon: "https://drive.google.com/uc?export=view&id=1_1_yO6icwZJ0oSlw5zjMwjn6S620qIma",
  },
];
