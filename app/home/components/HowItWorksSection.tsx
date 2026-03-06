'use client';
import React, { useEffect, useRef } from 'react';
import { useLang } from '../../context/LanguageContext';

const steps = [
  {
    number: '01',
    titleKey: 'step1.title',
    descKey: 'step1.desc',
    icon: '🏥',
    time: '30 min setup',
    color: '#1B6CA8',
    bg: '#EBF4FF',
    items: ['Clinic name & logo', 'Doctor profile', 'Fee structure', 'Staff accounts'],
  },
  {
    number: '02',
    titleKey: 'step2.title',
    descKey: 'step2.desc',
    icon: '👨‍⚕️',
    time: 'From day 1',
    color: '#0EA5E9',
    bg: '#E0F2FE',
    items: ['Book appointments', 'Record vitals & EMR', 'Write prescriptions', 'Generate bills'],
  },
  {
    number: '03',
    titleKey: 'step3.title',
    descKey: 'step3.desc',
    icon: '💬',
    time: 'Automatic',
    color: '#25D366',
    bg: '#DCFCE7',
    items: ['WhatsApp reminders', 'Follow-up scheduling', 'Lab result alerts', 'Prescription refills'],
  },
];

export default function HowItWorksSection() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.step-card');
            cards.forEach((card, i) => {
              setTimeout(() => card.classList.add('animate-scale-in'), i * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden" aria-label="How it works">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(27,108,168,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10" ref={sectionRef}>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.15em] text-primary-DEFAULT mb-3 bg-primary-50 px-3 py-1 rounded-full">
            How It Works
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-foreground mb-4 tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans' }}>
            {t('howitworks.title')}
          </h2>
          <p className="text-lg text-brand-muted">{t('howitworks.sub')}</p>
        </div>

        {/* Steps — Asymmetric layout (NOT numbered timeline) */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 relative">
          {/* Connector lines (desktop only) */}
          <div className="hidden md:block absolute top-12 left-[33%] right-[33%] h-0.5 bg-gradient-to-r from-primary-DEFAULT/30 via-accent-DEFAULT/30 to-success/30 z-0" />

          {steps?.map((step, idx) => (
            <div
              key={step?.number}
              className={`step-card animate-on-scroll relative z-10 bg-white rounded-3xl p-7 shadow-card border border-brand-border feature-card ${
                idx === 1 ? 'md:mt-8' : idx === 2 ? 'md:mt-4' : ''
              }`}
            >
              {/* Ghost number */}
              <div
                className="absolute top-3 right-4 text-8xl font-extrabold opacity-[0.04] leading-none select-none pointer-events-none"
                style={{ fontFamily: 'Plus Jakarta Sans', color: step?.color }}
              >
                {step?.number}
              </div>

              {/* Step number badge */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-5 relative z-10"
                style={{ background: step?.bg }}
              >
                {step?.icon}
              </div>

              <div
                className="text-xs font-bold tracking-widest uppercase mb-2"
                style={{ color: step?.color }}
              >
                Step {step?.number}
              </div>

              <h3 className="font-heading text-xl font-bold text-brand-foreground mb-3" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                {t(step?.titleKey)}
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed mb-5">
                {t(step?.descKey)}
              </p>

              {/* Checklist */}
              <ul className="space-y-2 mb-5">
                {step?.items?.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-brand-muted">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={step?.color} strokeWidth="2.5">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Time badge */}
              <div
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
                style={{ background: step?.bg, color: step?.color }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                </svg>
                {step?.time}
              </div>

              {/* Bottom hover bar */}
              <div
                className="h-1 w-0 group-hover:w-full rounded-full mt-6 transition-all duration-500"
                style={{ background: `linear-gradient(to right, ${step?.color}, ${step?.color}88)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}