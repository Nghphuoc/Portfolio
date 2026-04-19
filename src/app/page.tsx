"use client";
import { useTranslation } from "@/contexts/TranslationContext";

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <main className="text-center justify-center">
        <h1 className="hover:text-blue-400">{t('welcome')}</h1>
        <p>{t('description')}</p>
      </main>
    </>
  );
}
