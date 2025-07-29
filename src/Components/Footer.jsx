import React from 'react';
import logofooter from '../img/img-logo/logo-footer.svg';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Elements } from '../Elements';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={`${Elements.Container} text-white pb-5 mt-10`}>
      {/* Upper Section */}
      <div className="px-6 flex max-lg:flex-col justify-between gap-10 border-t border-gray-700 pt-10 pb-8 max-md:pb-4">
        
        {/* Logo Block */}
        <div className="flex flex-col mt-5 max-md:mt-0">
          <Link to="/">
            <img className="h-20 max-md:hidden" src={logofooter} alt="Logo" />
          </Link>
        </div>

        {/* Navigation Block */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-medium">{t("footer.navigation")}</h2>
          <hr className="w-8 h-1 bg-green-600 mt-2 mb-3" />
          <nav className="flex flex-col gap-2">
            <Link to="/" className="text-lg hover:text-green-500">{t("menu.home")}</Link>
            <Link to="/services" className="text-lg hover:text-green-500">{t("menu.services")}</Link>
            <Link to="/faq" className="text-lg hover:text-green-500">{t("menu.faq")}</Link>
            <Link to="/news" className="text-lg hover:text-green-500">{t("menu.news")}</Link>
            <Link to="/career" className="text-lg hover:text-green-500">{t("menu.career")}</Link>
            <Link to="/contact" className="text-lg hover:text-green-500">{t("menu.contacts")}</Link>
          </nav>
        </div>

        {/* Production Columns */}
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left part */}
          <div>
            <h2 className="text-2xl font-medium">{t("footer.production")}</h2>
            <hr className="w-8 h-1 bg-green-600 mt-2 mb-3" />
            <nav className="flex flex-col gap-2">
              <Link to="/Production" className="text-lg hover:text-green-500">{t("footer.items.double_glazed")}</Link>
              <Link to="/Laminated" className="text-lg hover:text-green-500">{t("footer.items.laminated")}</Link>
              <Link to="/Float" className="text-lg hover:text-green-500">{t("footer.items.float")}</Link>
              <Link to="/Bend" className="text-lg hover:text-green-500">{t("footer.items.bent")}</Link>
            </nav>
          </div>

          {/* Right part */}
          <div className="mt-10 md:mt-12">
            <nav className="flex flex-col gap-2">
              <Link to="/Fasade" className="text-lg hover:text-green-500">{t("footer.items.fasade")}</Link>
              <Link to="/Artistic" className="text-lg hover:text-green-500">{t("footer.items.stained")}</Link>
              <Link to="/ArtisticM" className="text-lg hover:text-green-500">{t("footer.items.forging")}</Link>
              <Link to="/Furniture" className="text-lg hover:text-green-500">{t("footer.items.furniture")}</Link>
              <Link to="/Plastic" className="text-lg hover:text-green-500">{t("footer.items.plastic")}</Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Lower Bar */}
      <div className="border-t border-gray-700 mt-4">
        <div className={`${Elements.Container} py-4 px-6 flex max-lg:flex-col justify-between items-center text-sm`}>
          <p className="text-base">© 2004 - 2025 «TECHNOINVEST-ST» LLC</p>
          <Link target="_blank" to="https://velvet.uz/" className="text-base hover:text-green-600">
            {t("footer.dev")}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
