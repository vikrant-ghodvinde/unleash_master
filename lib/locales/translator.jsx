import { I18n } from "i18n-js";
import translation from "./translation.json";

export const i18n = new I18n({
  en: { ...translation[0] },
  fr: { ...translation[1] },
  es: { ...translation[2] },
  de: { ...translation[3] },
  it: { ...translation[4] },
  zh: { ...translation[5] },
  ja: { ...translation[6] },
  ko: { ...translation[7] },
  id: { ...translation[8] },
  tr: { ...translation[9] },
});
