import React, { useState } from 'react';
import { NavLink, Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import Logo from '../img/img-logo/Logo-header.svg';
import { Elements } from '../Elements';

const Xeader = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('i18nextLng', lang); // i18next avtomatik ravishda bundan foydalanadi
  };
  


  
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Top Contact Info */}
      <header className={`${Elements.Container}`}>
        <section>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pt-[13px] pb-5 gap-4 md:gap-y-0 lg:gap-0 text-white text-sm">
            <Link to='/' className='flex items-start'>
              <i className="bi bi-pin-map-fill mr-1"></i>
              <p>{t("contact.address")}</p>
            </Link>
            <Link to='tel:+998712957771' className='flex items-center'>
              <i className="bi bi-telephone-fill mr-1"></i>
              <p>+998 71 295 77 71</p>
            </Link>
            <Link to='mailto:info@texnoinvest.uz' className='flex items-center'>
              <i className="bi bi-envelope-open mr-1"></i>
              <p>info@texnoinvest.uz</p>
            </Link>
            <ul className='flex items-center gap-2'>
              <li><button onClick={() => changeLang("ru")}>Русский</button></li>
              <span className="text-gray-400">/</span>
              <li><button onClick={() => changeLang("eng")}>English</button></li>
            </ul>
          </div>
        </section>
      </header>

      {/* Logo + Nav */}
      <div className={`${Elements.Container} sticky top-0 z-50 bg-[#181818]`}>
        <div className="flex items-center justify-between py-3 md:py-0">
          {/* Logo */}
          <Link to='/'>
            <img
              src={Logo}
              alt="Site Logo"
              className="w-[148px] h-[34px] lg:w-auto lg:h-auto"
            />
          </Link>

          {/* Hamburger */}
          <button
            onClick={toggleMenu}
            className={`lg:hidden rounded-lg p-2 text-white transition-all duration-200 ${menuOpen ? 'border-4' : 'border'}`}
            aria-label="Open menu"
          >
            <i className="bi bi-list text-2xl"></i>
          </button>

          {/* Desktop menu */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavLink to='/' className='text-lg font-semibold text-gray-400'>{t("menu.home")}</NavLink>
            <NavLink to='/services' className='text-lg font-semibold text-gray-400'>{t("menu.services")}</NavLink>
            <NavLink to='/faq' className='text-lg font-semibold text-gray-400'>{t("menu.faq")}</NavLink>
            <NavLink to='/news' className='text-lg font-semibold text-gray-400'>{t("menu.news")}</NavLink>
            <NavLink to='/career' className='text-lg font-semibold text-gray-400'>{t("menu.career")}</NavLink>
            <NavLink to='/contacts' className='text-lg font-semibold text-gray-400'>{t("menu.contacts")}</NavLink>
          </nav>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden flex flex-col gap-4 px-2 pb-5 animate-slide-down">
            <NavLink to='/' onClick={closeMenu} className='text-lg font-semibold text-white'>{t("menu.home")}</NavLink>
            <NavLink to='/services' onClick={closeMenu} className='text-lg font-semibold text-gray-400'>{t("menu.services")}</NavLink>
            <NavLink to='/faq' onClick={closeMenu} className='text-lg font-semibold text-gray-400'>{t("menu.faq")}</NavLink>
            <NavLink to='/news' onClick={closeMenu} className='text-lg font-semibold text-gray-400'>{t("menu.news")}</NavLink>
            <NavLink to='/career' onClick={closeMenu} className='text-lg font-semibold text-gray-400'>{t("menu.career")}</NavLink>
            <NavLink to='/contacts' onClick={closeMenu} className='text-lg font-semibold text-gray-400'>{t("menu.contacts")}</NavLink>
          </div>
        )}
      </div>
    </>
  );
};

export default Xeader;
