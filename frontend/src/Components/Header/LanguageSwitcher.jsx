import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

function LanguageSwitcher() {
  const { t } = useTranslation();
  const [activeLanguage, setActiveLanguage] = useState(localStorage.getItem('selectedLanguage') || 'en');
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setActiveLanguage(lng);
    localStorage.setItem('selectedLanguage', lng);
    setIsOpen(false);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const language = {
    backgroundColor: "#BDBDBF",
  }

  return (
    <div className="language-switcher">
      <div className={`btn-group ${isOpen ? 'show' : ''}`}>
        <button className="btn dropdown-toggle" onClick={toggleMenu} style={language}>
          🌐 {t('language')}
        </button>
        <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
          <li>
            <button
              className={`dropdown-item ${activeLanguage === 'en' ? 'active' : ''}`}
              onClick={() => changeLanguage('en')}
            >
              🇺🇸 {t('english')}
            </button>
          </li>
          <li>
            <button
              className={`dropdown-item ${activeLanguage === 'es' ? 'active' : ''}`}
              onClick={() => changeLanguage('es')}
            >
              🇪🇸 {t('spanish')}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LanguageSwitcher;
