export interface FooterLanguageModel {
  id: number;
  language: string;
}

const footerLanguageData: FooterLanguageModel[] = [
  {
    id: 1,
    language: "Каз",
  },
  { id: 2, language: "Рус" },
  { id: 3, language: "Eng" },
];

export default footerLanguageData;
