'use client';
import React, { useEffect, useRef } from 'react';
import { useLang } from '../../context/LanguageContext';

const CALENDLY_URL = 'https://calendly.com/klinickonnect/demo';

const included = [
  'Unlimited patients',
  'Unlimited appointments',
  'Unlimited billing & invoices',
  'Digital EMR & prescriptions',
  'WhatsApp follow-up reminders',
  'Mobile app (iOS & Android)',
  'Staff management (up to 5 accounts)',
  'Medicine & pathology tracking',
  'Vitals recording with trend charts',
  'Secure cloud storage',
  '24/7 customer support',
  'Free onboarding & training',
];

const comparisonRows = [
  { feature: 'Paper records', traditional: true, kk: false, kkText: 'Digital EMR' },
  { feature: 'Manual appointment book', traditional: true, kk: false, kkText: 'Smart scheduling' },
  { feature: 'Missed follow-ups', traditional: true, kk: false, kkText: 'Auto WhatsApp' },
  { feature: 'Manual billing errors', traditional: true, kk: false, kkText: '1-click invoices' },
  { feature: 'No mobile access', traditional: true, kk: false, kkText: 'iOS & Android app' },
  { feature: 'Per-patient charges', traditional: true, kk: false, kkText: 'Unlimited patients' },
];

export default function PricingSection() {
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
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-brand-bg relative overflow-hidden" aria-label="Pricing">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(27,108,168,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.15em] text-primary-DEFAULT mb-3 bg-primary-50 px-3 py-1 rounded-full">
            Pricing
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-foreground mb-4 tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans' }}>
            {t('pricing.title')}
          </h2>
          <p className="text-lg text-brand-muted">{t('pricing.sub')}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* Main Pricing Card */}
          <div
            ref={sectionRef}
            className="animate-on-scroll pricing-highlight rounded-3xl p-8 text-white shadow-hero relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-white opacity-5 blur-2xl" />

            <div className="relative z-10">
              {/* Plan name */}
              <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5 text-xs font-bold mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                KlinicKonnect Complete
              </div>

              {/* Price blocks */}
              <div className="flex flex-col sm:flex-row gap-6 mb-8">
                <div className="flex-1 bg-white/10 rounded-2xl p-5">
                  <p className="text-white/70 text-xs font-medium mb-1">{t('pricing.setup.label')}</p>
                  <p className="text-4xl font-extrabold" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                    {t('pricing.setup')}
                  </p>
                  <p className="text-white/60 text-xs mt-1">Paid once. Yours forever.</p>
                </div>
                <div className="flex-1 bg-white/10 rounded-2xl p-5">
                  <p className="text-white/70 text-xs font-medium mb-1">{t('pricing.yearly.label')}</p>
                  <p className="text-4xl font-extrabold" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                    {t('pricing.yearly')}
                  </p>
                  <p className="text-white/60 text-xs mt-1">= ₹2,000/month</p>
                </div>
              </div>

              {/* Unlimited badge */}
              <div className="bg-white/15 rounded-2xl px-4 py-3 text-sm font-semibold text-center mb-6">
                🎉 {t('pricing.unlimited')}
              </div>

              {/* Included features */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                {included?.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-white/85">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white text-primary-DEFAULT font-bold py-3.5 rounded-xl text-sm text-center hover:bg-white/90 transition-all shadow-lg"
                >
                  {t('pricing.cta')}
                </a>
                <a
                  href="tel:+917980073673"
                  className="flex-1 bg-white/15 text-white font-semibold py-3.5 rounded-xl text-sm text-center hover:bg-white/25 transition-all flex items-center justify-center gap-2"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 10a19.79 19.79 0 01-3.07-8.67A2 2 0 013.62 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 7.91a16 16 0 006.29 6.29l.95-.96a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 15.92v1z"/>
                  </svg>
                  Call Us
                </a>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-3xl p-7 shadow-card border border-brand-border">
            <h3 className="font-heading text-lg font-bold text-brand-foreground mb-6" style={{ fontFamily: 'Plus Jakarta Sans' }}>
              KlinicKonnect vs Traditional Methods
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-brand-border">
                    <th className="text-left text-xs font-semibold text-brand-muted pb-3">Pain Point</th>
                    <th className="text-center text-xs font-semibold text-red-500 pb-3">Traditional</th>
                    <th className="text-center text-xs font-semibold text-primary-DEFAULT pb-3">KlinicKonnect</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows?.map((row, i) => (
                    <tr key={i} className="border-b border-brand-border/50 last:border-0">
                      <td className="py-3 text-xs text-brand-muted">{row?.feature}</td>
                      <td className="py-3 text-center">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-50 text-red-500 text-xs">✗</span>
                      </td>
                      <td className="py-3 text-center">
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-success">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M20 6L9 17l-5-5"/>
                          </svg>
                          {row?.kkText}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Total cost comparison */}
            <div className="mt-6 p-4 bg-primary-50 rounded-2xl">
              <p className="text-xs font-bold text-brand-foreground mb-2">Annual Cost Comparison</p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs text-brand-muted">Traditional (paper + errors)</p>
                  <p className="text-xl font-extrabold text-red-500" style={{ fontFamily: 'Plus Jakarta Sans' }}>~₹1,20,000</p>
                  <p className="text-[10px] text-brand-muted">Lost revenue + inefficiency</p>
                </div>
                <div className="text-2xl text-brand-muted">→</div>
                <div>
                  <p className="text-xs text-brand-muted">KlinicKonnect</p>
                  <p className="text-xl font-extrabold text-success" style={{ fontFamily: 'Plus Jakarta Sans' }}>₹24,000/yr</p>
                  <p className="text-[10px] text-brand-muted">All-inclusive license</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}