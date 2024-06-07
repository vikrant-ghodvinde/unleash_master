import { I18n } from "i18n-js";
import en from "../locales/en/translation.json";
import fr from "../locales/fr/translation.json";
import es from "../locales/es/translation.json";
import de from "../locales/de/translation.json";
import it from "../locales/it/translation.json";
import zh from "../locales/zh/translation.json";
import ja from "../locales/ja/translation.json";
import ko from "../locales/ko/translation.json";
import id from "../locales/id/translation.json";
import tr from "../locales/tr/translation.json";
import AsyncStorage from "@react-native-async-storage/async-storage";

const resources = {
  en: en,
  fr: fr,
  es: es,
  de: de,
  it: it,
  zh: zh,
  ja: ja,
  ko: ko,
  id: id,
  tr: tr,
};

const i18n = new I18n(resources);
i18n.enableFallback = true;

const loadLocale = async () => {
  const savedLocale = await AsyncStorage.getItem("appLocale");
  i18n.locale = savedLocale || Localization.locale;
};

loadLocale();

export const setLocale = async (locale) => {
  i18n.locale = locale;
  await AsyncStorage.setItem("appLocale", locale);
};

// i18n.locale = "ja"

export default i18n;
