import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// eng page
import XeaderEng from '../src/language/eng/Xeader.json';
import FooterEng from '../src/language/eng/Footer.json';
import HomeEng from '../src/language/eng/Home.json';

// ru page
import XeaderRu from '../src/language/ru/Xeader.json';
import FooterRu from '../src/language/ru/Footer.json';
import HomeRu from '../src/language/ru/Home.json';

// i18next config with language detector
i18next
  .use(LanguageDetector)
  .init({
    interpolation: { escapeValue: false },
    fallbackLng: 'eng',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'], // language is stored in localStorage
    },
    resources: {
      eng: {
        translation: {
          ...XeaderEng,
          ...FooterEng,
          ...HomeEng
        }
      },
      ru: {
        translation: {
          ...XeaderRu,
          ...FooterRu,
          ...HomeRu
        }
      }
    }
  });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </StrictMode>
);
