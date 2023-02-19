export interface ModelProps {
  name: string;
  id: number;
  description: string;
  slug: string;
  icon: string;
}

export const models: ModelProps[] = [
  {
    name: "Chat",
    id: 1,
    description: "Beantwortet Fragen zu einem bestimmten Thema",
    slug: "/tools/fragen-beantworten",
    icon: "https://drive.google.com/uc?export=view&id=1_1_yO6icwZJ0oSlw5zjMwjn6S620qIma",
  },
  {
    name: "Bild Verbesserung",
    id: 2,
    description: "Uploade ein Bild und verbessere die Auflösung",
    slug: "/tools/restore",
    icon: "https://drive.google.com/uc?export=view&id=1_1_yO6icwZJ0oSlw5zjMwjn6S620qIma",
  },
];
