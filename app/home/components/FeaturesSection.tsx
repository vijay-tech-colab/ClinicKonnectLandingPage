'use client';
import React, { useEffect, useRef } from 'react';
import { useLang } from '../../context/LanguageContext';

interface FeatureItem {
  icon: string;
  title: string;
  desc: string;
  tag?: string;
  span: string;
  rowSpan?: string;
  bgGradient: string;
  accentColor: string;
  highlight?: boolean;
}

const features: FeatureItem[] = [
  {
    icon: '📅',
    title: 'Smart Appointment Management',
    desc: 'Book, reschedule, and cancel appointments in seconds. No double-bookings. Queue management built in.',
    tag: 'Core',
    span: 'bento-span-4',
    bgGradient: 'linear-gradient(135deg, #EBF4FF 0%, #DBEAFE 100%)',
    accentColor: '#1B6CA8',
    highlight: true,
  },
  {
    icon: '🗂️',
    title: 'Digital EMR',
    desc: 'Complete patient history, diagnosis, allergies, and visit notes — searchable in under 2 seconds.',
    tag: 'New',
    span: 'bento-span-4',
    bgGradient: 'linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)',
    accentColor: '#16A34A',
  },
  {
    icon: '💊',
    title: 'Prescription Support',
    desc: 'Digital or print prescriptions. Medicine inventory tracking. Pathology test ordering.',
    span: 'bento-span-4',
    bgGradient: 'linear-gradient(135deg, #FFF7ED 0%, #FED7AA 100%)',
    accentColor: '#EA580C',
  },
  {
    icon: '🧾',
    title: 'Billing & Invoicing',
    desc: 'One-click invoice generation. GST billing. Payment tracking. No more manual errors.',
    tag: 'Popular',
    span: 'bento-span-6',
    bgGradient: 'linear-gradient(135deg, #FDF4FF 0%, #FAE8FF 100%)',
    accentColor: '#9333EA',
  },
  {
    icon: '📱',
    title: 'Mobile App for Doctors',
    desc: 'Full access on iOS and Android. Check patient history, approve prescriptions, view today\'s schedule — from anywhere.',
    tag: 'Mobile',
    span: 'bento-span-6',
    bgGradient: 'linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 100%)',
    accentColor: '#0EA5E9',
  },
  {
    icon: '💬',
    title: 'WhatsApp Follow-up Reminders',
    desc: 'Automated reminders sent via WhatsApp. Patients never miss a follow-up.',
    span: 'bento-span-4',
    bgGradient: 'linear-gradient(135deg, #F0FDF4 0%, #BBF7D0 100%)',
    accentColor: '#25D366',
  },
  {
    icon: '📊',
    title: 'Vitals Recording',
    desc: 'BP, weight, temperature, SpO2 — tracked per visit with trend charts.',
    span: 'bento-span-4',
    bgGradient: 'linear-gradient(135deg, #FFF1F2 0%, #FFE4E6 100%)',
    accentColor: '#E11D48',
  },
  {
    icon: '👥',
    title: 'Staff Management',
    desc: 'Manage receptionist and nurse accounts. Role-based access control.',
    span: 'bento-span-4',
    bgGradient: 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)',
    accentColor: '#D97706',
  },
];

export default function FeaturesSection() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.feat-card');
            cards.forEach((card, i) => {
              setTimeout(() => card.classList.add('animate-fade-up'), i * 80);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-20 lg:py-28 bg-brand-bg relative overflow-hidden" aria-label="Features">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary-50 opacity-40 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10" ref={sectionRef}>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.15em] text-primary-DEFAULT mb-3 bg-primary-50 px-3 py-1 rounded-full">
            Features
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-foreground mb-4 tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans' }}>
            {t('features.title')}
          </h2>
          <p className="text-lg text-brand-muted">{t('features.sub')}</p>
        </div>

        {/* Specialty badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {['General Physician', 'Dentist', 'Pediatrician', 'Dermatologist', 'Orthopedic'].map((spec) => (
            <span
              key={spec}
              className="px-4 py-1.5 rounded-full text-xs font-semibold bg-white border border-brand-border text-brand-muted shadow-sm"
            >
              {spec}
            </span>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {features.map((feat, idx) => (
            <div
              key={feat.title}
              className={`feat-card animate-on-scroll feature-card rounded-3xl p-6 lg:p-7 ${feat.span} relative overflow-hidden cursor-default`}
              style={{ background: feat.bgGradient, border: `1px solid ${feat.accentColor}18` }}
            >
              {/* Tag */}
              {feat.tag && (
                <span
                  className="absolute top-4 right-4 text-[10px] font-bold px-2 py-0.5 rounded-full"
                  style={{ background: `${feat.accentColor}18`, color: feat.accentColor }}
                >
                  {feat.tag}
                </span>
              )}

              {/* Icon */}
              <div className="text-3xl mb-4">{feat.icon}</div>

              <h3 className="font-heading text-lg font-bold text-brand-foreground mb-2" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                {feat.title}
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                {feat.desc}
              </p>

              {/* Highlight indicator */}
              {feat.highlight && (
                <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold" style={{ color: feat.accentColor }}>
                  <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: feat.accentColor }} />
                  Most used feature
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}