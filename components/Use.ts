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
    name: "Qualität Verbessern",
    id: 1,
    description: "Verbessert die Qualität eines Bildes",
    slug: "restore",
    toolPrompt: "",
    icon: "https://drive.google.com/uc?export=view&id=1_1_yO6icwZJ0oSlw5zjMwjn6S620qIma",
  },
  {
    name: "Hintergrund entfernen",
    id: 1,
    description: "Entfernt den Hintergrund eines Bildes",
    slug: "remove",
    toolPrompt: "",
    icon: "https://drive.google.com/uc?export=view&id=1_1_yO6icwZJ0oSlw5zjMwjn6S620qIma",
  },
];
