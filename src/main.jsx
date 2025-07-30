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
import FaqEng from '../src/language/eng/Faq.json'
import CareerEng from '../src/language/eng/Career.json'
import GetEng from '../src/language/eng/Get.json'
import ProductionEng from '../src/language/eng/Production.json'
import LaminatedEng from '../src/language/eng/Laminated.json'
// ru page
import XeaderRu from '../src/language/ru/Xeader.json';
import FooterRu from '../src/language/ru/Footer.json';
import HomeRu from '../src/language/ru/Home.json';
import FaqRu from '../src/language/ru/Faq.json'
import CareerRu from '../src/language/ru/Career.json'
import GetRu from '../src/language/ru/Get.json'
import ProductionRu from '../src/language/ru/Production.json'
import LaminatedRu from '../src/language/ru/Laminated.json'

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
          ...HomeEng,
          ...FaqEng,
          ...CareerEng,
          ...GetEng,
          ...ProductionEng,
          ...LaminatedEng,
        }
      },
      ru: {
        translation: {
          ...XeaderRu,
          ...FooterRu,
          ...HomeRu,
          ...FaqRu,
          ...CareerRu,
          ...GetRu,
          ...ProductionRu,
          ...LaminatedRu,

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
