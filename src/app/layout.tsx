import type { Metadata } from 'next';
import "@/styles/globals.css";
import {
  getLangFromCookies,
  LANG_MAP,
  DEFAULT_LANG,
  SupportedLang,
  Translations,
} from "@/libs/i18n-core";

import { TranslationProvider } from "@/contexts/TranslationContext";

export const metadata: Metadata = {
  title: 'Profile',
  description: 'My Profile',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang: SupportedLang = await getLangFromCookies();
  const translations = (LANG_MAP[lang] ?? LANG_MAP[DEFAULT_LANG]) as Translations;
  return (
    <html lang={lang} suppressHydrationWarning>
      <body>
        <div className="bg-white">
          <TranslationProvider lang={lang} translations={translations}>
              {children}
          </TranslationProvider>
        </div>
      </body>
    </html>
  );
}
