'use client';
import React, { useState, useEffect } from 'react';
import AppLogo from './ui/AppLogo';
import { useLang } from '../context/LanguageContext';

const CALENDLY_URL = 'https://calendly.com/klinickonnect/demo';

export default function Header() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-blur shadow-sm border-b border-brand-border/40' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <AppLogo size={40} />
          <span className="font-heading font-800 text-lg text-primary-DEFAULT hidden sm:block" style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800 }}>
            KlinicKonnect
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-brand-muted">
          <a href="#pain-points" className="hover:text-primary-DEFAULT transition-colors">Problems</a>
          <a href="#features" className="hover:text-primary-DEFAULT transition-colors">Features</a>
          <a href="#pricing" className="hover:text-primary-DEFAULT transition-colors">Pricing</a>
          <a href="#testimonials" className="hover:text-primary-DEFAULT transition-colors">Reviews</a>
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          {/* Language Switcher */}
          <div className="flex items-center gap-1 mr-1">
            <button
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
              aria-label="Switch to English"
            >EN</button>
            <button
              className={`lang-btn ${lang === 'hi' ? 'active' : ''}`}
              onClick={() => setLang('hi')}
              aria-label="Switch to Hindi"
            >HI</button>
          </div>

          <a
            href="#pricing"
            className="hidden md:block btn-secondary text-sm px-4 py-2"
          >
            {t('nav.setup')}
          </a>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm px-5 py-2 hidden md:block"
          >
            {t('nav.demo')}
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-brand-muted"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              {mobileOpen ? (
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-brand-border px-4 py-4 flex flex-col gap-3 shadow-lg">
          <a href="#pain-points" className="text-sm font-medium text-brand-muted py-2" onClick={() => setMobileOpen(false)}>Problems</a>
          <a href="#features" className="text-sm font-medium text-brand-muted py-2" onClick={() => setMobileOpen(false)}>Features</a>
          <a href="#pricing" className="text-sm font-medium text-brand-muted py-2" onClick={() => setMobileOpen(false)}>Pricing</a>
          <a href="#testimonials" className="text-sm font-medium text-brand-muted py-2" onClick={() => setMobileOpen(false)}>Reviews</a>
          <div className="flex gap-2 pt-2">
            <a href="#pricing" className="btn-secondary text-sm px-4 py-2 flex-1 text-center" onClick={() => setMobileOpen(false)}>
              {t('nav.setup')}
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-4 py-2 flex-1 text-center"
              onClick={() => setMobileOpen(false)}
            >
              {t('nav.demo')}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}