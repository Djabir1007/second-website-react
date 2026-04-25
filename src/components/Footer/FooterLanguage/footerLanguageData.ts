export interface FooterLanguageModel {
  id: number;
  language: string;
  code: "ru" | "kz" | "en";
}

const footerLanguageData: FooterLanguageModel[] = [
  {
    id: 1,
    language: "Каз",
    code: "kz",
  },
  { id: 2, language: "Рус", code: "ru" },
  { id: 3, language: "Eng", code: "en" },
];

export default footerLanguageData;
