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
    slug: "/tools/frage-beantworten",
    icon: "https://cdn.discordapp.com/attachments/1084536803157090514/1084725779948118087/kindchat.png",
  },
  {
    name: "Bild Verbesserung",
    id: 2,
    description: "Uploade ein Bild und verbessere die Auflösung",
    slug: "/tools/restore",
    icon: "https://cdn.discordapp.com/attachments/1084536803157090514/1084725779713241139/kindanalogy.png",
  },
];
