'use client';
import React, { useEffect, useRef } from 'react';
import { useLang } from '../../context/LanguageContext';

const securityBadges = [
  {
    icon: '🔒',
    title: 'SSL Encrypted',
    desc: '256-bit SSL encryption on all data transfers',
  },
  {
    icon: '☁️',
    title: 'Cloud Backup',
    desc: 'Daily automated backups to secure servers',
  },
  {
    icon: '🛡️',
    title: 'HIPAA Aligned',
    desc: 'Patient data handled with medical-grade security',
  },
  {
    icon: '👁️',
    title: 'Role-Based Access',
    desc: 'Doctors and staff see only what they need',
  },
  {
    icon: '🇮🇳',
    title: 'Data in India',
    desc: 'All data stored on Indian servers (Mumbai)',
  },
  {
    icon: '⏰',
    title: '99.9% Uptime',
    desc: 'Your clinic never goes offline',
  },
];

export default function SecuritySection() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.sec-item');
            items.forEach((item, i) => {
              setTimeout(() => item.classList.add('animate-fade-up'), i * 80);
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
    <section className="py-20 lg:py-28 bg-brand-bg relative overflow-hidden" aria-label="Security and trust">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(27,108,168,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10" ref={sectionRef}>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.15em] text-primary-DEFAULT mb-3 bg-primary-50 px-3 py-1 rounded-full">
            Security & Trust
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-foreground mb-4 tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans' }}>
            {t('security.title')}
          </h2>
          <p className="text-lg text-brand-muted">{t('security.sub')}</p>
        </div>

        {/* Security badges grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-14">
          {securityBadges?.map((badge, i) => (
            <div
              key={i}
              className="sec-item animate-on-scroll security-badge rounded-2xl p-5 text-center feature-card"
            >
              <div className="text-3xl mb-3">{badge?.icon}</div>
              <h3 className="font-heading text-sm font-bold text-brand-foreground mb-1" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                {badge?.title}
              </h3>
              <p className="text-xs text-brand-muted leading-tight">{badge?.desc}</p>
            </div>
          ))}
        </div>

        {/* Trust statement */}
        <div className="bg-white rounded-3xl p-8 lg:p-10 border border-brand-border shadow-card">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Left: Statement */}
            <div className="md:col-span-2">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center text-2xl flex-shrink-0">
                  🏥
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-brand-foreground mb-2" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                    Your patients trust you. You can trust KlinicKonnect.
                  </h3>
                  <p className="text-brand-muted text-sm leading-relaxed">
                    Patient data is sacred. We use the same security standards as leading Indian healthcare providers. Your clinic data is never shared, never sold, and always accessible only to you.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: '200+', label: 'Active Clinics' },
                { val: '50,000+', label: 'Patients Managed' },
                { val: '99.9%', label: 'Uptime SLA' },
                { val: '24/7', label: 'Support' },
              ]?.map((stat) => (
                <div key={stat?.label} className="text-center p-3 bg-brand-bg rounded-xl">
                  <div className="text-xl font-extrabold text-primary-DEFAULT" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                    {stat?.val}
                  </div>
                  <div className="text-xs text-brand-muted mt-0.5">{stat?.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}