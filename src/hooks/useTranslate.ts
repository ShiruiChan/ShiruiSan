import { useLang } from "./useLang";
import { i18n } from "../shared/i18n";

export function useTranslate() {
  const { lang } = useLang();
  return i18n[lang];
}
