'use client';
import React, { useEffect, useRef } from 'react';
import { useLang } from '../../context/LanguageContext';

const painData = [
  {
    key: '1',
    emoji: '📓',
    bgColor: '#FEF3C7',
    iconColor: '#D97706',
    stat: '73%',
    statLabel: 'of solo clinics still use paper records',
  },
  {
    key: '2',
    emoji: '🔔',
    bgColor: '#FCE7F3',
    iconColor: '#DB2777',
    stat: '40%',
    statLabel: 'of follow-up visits are missed every month',
  },
  {
    key: '3',
    emoji: '📅',
    bgColor: '#EDE9FE',
    iconColor: '#7C3AED',
    stat: '2 hrs',
    statLabel: 'wasted daily on manual scheduling',
  },
  {
    key: '4',
    emoji: '🧾',
    bgColor: '#FEE2E2',
    iconColor: '#DC2626',
    stat: '₹8,000',
    statLabel: 'lost monthly from billing errors',
  },
];

export default function PainPointsSection() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.pain-card-item');
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.classList.add('animate-fade-up');
              }, i * 120);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="pain-points" className="py-20 lg:py-28 bg-white relative overflow-hidden" aria-label="Pain points section">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(27,108,168,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(27,108,168,0.03)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10" ref={sectionRef}>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.15em] text-primary-DEFAULT mb-3 bg-primary-50 px-3 py-1 rounded-full">
            The Problem
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-foreground mb-4 tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans' }}>
            {t('pain.title')}
          </h2>
          <p className="text-lg text-brand-muted">{t('pain.sub')}</p>
        </div>

        {/* Bento grid of pain cards */}
        <div className="bento-grid">
          {painData?.map((pain, idx) => (
            <div
              key={pain?.key}
              className={`pain-card-item animate-on-scroll pain-card bg-white rounded-3xl p-7 shadow-card relative overflow-hidden ${
                idx === 0 ? 'bento-span-6 lg:bento-span-6' :
                idx === 1 ? 'bento-span-6 lg:bento-span-6' :
                idx === 2 ? 'bento-span-6 lg:bento-span-6': 'bento-span-6 lg:bento-span-6'
              }`}
            >
              {/* Background decoration */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-30 blur-3xl"
                style={{ background: pain?.bgColor }}
              />

              <div className="relative z-10">
                {/* Emoji icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5"
                  style={{ background: pain?.bgColor }}
                >
                  {pain?.emoji}
                </div>

                <h3 className="font-heading text-xl font-bold text-brand-foreground mb-2" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                  {t(`pain.${pain?.key}.title`)}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed mb-5">
                  {t(`pain.${pain?.key}.desc`)}
                </p>

                {/* Stat */}
                <div className="flex items-end gap-2 pt-3 border-t border-brand-border">
                  <span className="text-3xl font-extrabold" style={{ color: pain?.iconColor, fontFamily: 'Plus Jakarta Sans' }}>
                    {pain?.stat}
                  </span>
                  <span className="text-xs text-brand-muted pb-1 leading-tight max-w-[140px]">
                    {pain?.statLabel}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transition bridge */}
        <div className="text-center mt-14">
          <p className="text-lg font-semibold text-brand-foreground mb-2">
            There&apos;s a better way.
          </p>
          <a href="#solution" className="inline-flex items-center gap-2 text-primary-DEFAULT font-semibold text-sm hover:gap-3 transition-all duration-200">
            See how KlinicKonnect solves this
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}