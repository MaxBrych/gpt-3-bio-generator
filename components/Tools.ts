export interface ToolProps {
  name: string;
  id: number;
  description: string;
  slug: string;
  toolPrompt: string;
  icon: string;
}

export const tools: ToolProps[] = [
  {
    name: "Fragen beantworten",
    id: 1,
    description: "Beantwortet Fragen zu einem bestimmten Thema",
    slug: "frage-beantworten",
    toolPrompt: "",
    icon: "https://cdn.discordapp.com/attachments/1084536803157090514/1084725912739786842/question.png",
  },
  {
    name: "Grammatik",
    id: 2,
    description: "Kontrolliert und berichtigt die Grammatik eines Textes",
    slug: "grammatik-korrigieren",
    toolPrompt: "Korrigieren Sie folgendes ins Hochdeutsch: ",
    icon: "https://cdn.discordapp.com/attachments/1084536803157090514/1084725780170407987/kindgrammar.png",
  },
  {
    name: "Zusammenfassen",
    id: 3,
    description: "Fasst einen Text mit den wichtigsten Informationen zusammen",
    slug: "text-zusammenfassen",
    toolPrompt:
      "Fassen Sie den folgenden Text kurz zusammen und sodass die für den Kontext des Textes wichtigen Informationen beinhaltet sind:",
    icon: "https://cdn.discordapp.com/attachments/1084536803157090514/1084725780388524052/kindsummary.png",
  },
  {
    name: "Übersetzer",
    id: 4,
    description: "Übersetzt Fremdsprachen in die deutsche Sprache",
    slug: "übersetzer",
    toolPrompt: "Übersetze folgendes in Deutsch:",
    icon: "https://cdn.discordapp.com/attachments/1084536803157090514/1084725780585652274/kindtranslation.png",
  },
  {
    name: "Gesprächspartner",
    id: 5,
    description: "Führt eine Konversation mit einem KI-Assistenten",
    slug: "gesprächspartner",
    toolPrompt:
      "Im Folgenden sehen Sie ein Gespräch mit einem KI-Assistenten. Der Assistent ist hilfsbereit, kreativ, clever und sehr freundlich. Reagieren sie dem folgendem Input wie ein KI-Assistent:",
    icon: "https://cdn.discordapp.com/attachments/1084536803157090514/1084725779948118087/kindchat.png",
  },
  {
    name: "Analogie erstellen",
    id: 6,
    description: "Erschafft eine Analogie aus zwei Worten zu einem Satz",
    slug: "analogy-erstellen",
    toolPrompt:
      "Erstellen Sie eine passende Analogie zum folgendem Satz die beide genannten Wörter beinhalten muss:",
    icon: "https://cdn.discordapp.com/attachments/1084536803157090514/1084725779713241139/kindanalogy.png",
  },
  {
    name: "Synonym erstellen",
    id: 7,
    description: "Erstellt ein Synonym zu einem Wort",
    slug: "synonym-erstellen",
    toolPrompt: "Erstelle drei passende Synonyme für das folgende Wort:",
    icon: "https://cdn.discordapp.com/attachments/1084536803157090514/1084725779713241139/kindanalogy.png",
  },
];
