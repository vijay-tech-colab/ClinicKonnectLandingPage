'use client';
import React, { useEffect, useRef } from 'react';
import { useLang } from '../../context/LanguageContext';
const CALENDLY_URL = 'https://calendly.com/klinickonnect/demo';

export default function FinalCTASection() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden" aria-label="Final call to action">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10" ref={sectionRef}>
        <div className="animate-on-scroll pricing-highlight rounded-4xl p-10 lg:p-16 text-center relative overflow-hidden shadow-hero">
          {/* Background decorations */}
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-white opacity-5 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,255,255,0.08)_0%,transparent_70%)]" />

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5 text-xs font-bold text-white mb-6">
              <span className="w-2 h-2 rounded-full bg-white pulse-glow" />
              Free 30-minute demo. No commitment.
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight leading-tight" style={{ fontFamily: 'Plus Jakarta Sans' }}>
              {t('cta.title')}
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              {t('cta.sub')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-DEFAULT font-bold px-8 py-4 rounded-xl text-base hover:bg-white/90 transition-all shadow-lg inline-flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                {t('cta.btn1')}
              </a>
              <a
                href="#pricing"
                className="bg-white/15 text-white font-semibold px-8 py-4 rounded-xl text-base hover:bg-white/25 transition-all inline-flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                {t('cta.btn2')}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>

            {/* Contact info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/70 text-sm">
              <a href="tel:+917980073673" className="flex items-center gap-2 hover:text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 10a19.79 19.79 0 01-3.07-8.67A2 2 0 013.62 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 7.91a16 16 0 006.29 6.29l.95-.96a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 15.92v1z"/>
                </svg>
                +91 79800 73673
              </a>
              <span className="hidden sm:block w-px h-4 bg-white/30" />
              <a href="mailto:info@klinickonnect.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                info@klinickonnect.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}