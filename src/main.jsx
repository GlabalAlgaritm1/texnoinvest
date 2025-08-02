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
import FloatEng from '../src/language/eng/Float.json'
import BendEng from '../src/language/eng/Bend.json'
import FasadeEng from '../src/language/eng/Fasade.json'
import ArtisticEng from '../src/language/eng/Artistic.json'
import ArtisticMEng from '../src/language/eng/ArtisticM.json'
import FurnitureEng from '../src/language/eng/Furniture.json'
import PlasticEng from '../src/language/eng/Plastic.json'
import MoreOneEng from '../src/language/eng/MoreOne.json'
import MoreTwoEng from '../src/language/eng/MoreTwo.json'
import MoreThreeEng from '../src/language/eng/MoreThree.json'
// title
import TitleEng from '../src/language/eng/Page.json'
// ru page
import XeaderRu from '../src/language/ru/Xeader.json';
import FooterRu from '../src/language/ru/Footer.json';
import HomeRu from '../src/language/ru/Home.json';
import FaqRu from '../src/language/ru/Faq.json'
import CareerRu from '../src/language/ru/Career.json'
import GetRu from '../src/language/ru/Get.json'
import ProductionRu from '../src/language/ru/Production.json'
import LaminatedRu from '../src/language/ru/Laminated.json'
import FloatRu from '../src/language/ru/Float.json'
import BendRu from '../src/language/ru/Bend.json'
import FasadeRu from '../src/language/ru/Fasade.json'
import ArtisticRu from '../src/language/ru/Artistic.json'
import ArtisticMRu from '../src/language/ru/ArtisticM.json'
import FurnitureRu from '../src/language/ru/Furniture.json'
import PlasticRu from '../src/language/ru/Plastic.json'
import MoreOneRu from '../src/language/ru/MoreOne.json'
import MoreTwoRu from '../src/language/ru/MoreTwo.json'
import MoreThreeRu from '../src/language/ru/MoreThree.json'
// title
import TitleRu from '../src/language/ru/Page.json'

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
          ...FloatEng,
          ...BendEng,
          ...FasadeEng,
          ...ArtisticEng,
          ...ArtisticMEng,
          ...FurnitureEng,
          ...PlasticEng,
          ...MoreOneEng,
          ...MoreTwoEng,
          ...MoreThreeEng,
          ...TitleEng,

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
          ...FloatRu,
          ...BendRu,
          ...FasadeRu,
          ...ArtisticRu,
          ...ArtisticMRu,
          ...FurnitureRu,
          ...PlasticRu,
          ...MoreOneRu,
          ...MoreTwoRu,
          ...MoreThreeRu,
          ...TitleRu,
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
