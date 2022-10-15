import React from "react";
import { useTranslation } from "./useTranslation";

export function TranslationComponent() {
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();

  // t() like translate

  return (
    <>
      <div>{language}</div>
      <div>{t("hi")}</div>
      <div>{t("bye")}</div>
      <div>{t("nested.value")}</div>
      <button onClick={() => setLanguage("sp")}>Change To Spanish</button>
      <button onClick={() => setLanguage("en")}>Change To English</button>
    </>
  );
}
