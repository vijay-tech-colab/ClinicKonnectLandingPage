'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '../../components/ui/AppImage';
import { useLang } from '../../context/LanguageContext';


const mobileFeatures = [
{ icon: '📋', text: "Today\'s patient queue — at a glance" },
{ icon: '🔍', text: 'Search any patient record instantly' },
{ icon: '✍️', text: 'Approve or write prescriptions remotely' },
{ icon: '🔔', text: 'Real-time appointment notifications' },
{ icon: '💰', text: 'Daily revenue summary on home screen' }];


const waFeatures = [
{ text: 'Automated follow-up reminders' },
{ text: 'Lab report ready notifications' },
{ text: 'Appointment confirmations' },
{ text: 'Prescription refill reminders' },
{ text: 'Vaccination due alerts (Pediatrics)' }];


export default function ConvenienceSection() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.conv-item');
            items.forEach((item, i) => {
              setTimeout(() => item.classList.add('animate-fade-up'), i * 100);
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
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden" aria-label="Doctor convenience">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-accent-light opacity-10 blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10" ref={sectionRef}>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.15em] text-primary-DEFAULT mb-3 bg-primary-50 px-3 py-1 rounded-full">
            Doctor Convenience
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-foreground mb-4 tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans' }}>
            {t('convenience.title')}
          </h2>
          <p className="text-lg text-brand-muted">{t('convenience.sub')}</p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Mobile App Column */}
          <div className="conv-item animate-on-scroll">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-primary p-8 shadow-hero">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white blur-3xl" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl">📱</div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                      Mobile App
                    </h3>
                    <p className="text-white/70 text-sm">iOS & Android</p>
                  </div>
                </div>

                {/* Phone mockup */}
                <div className="relative mx-auto w-48 h-80 bg-brand-foreground rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/20 mb-6">
                  <AppImage
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_11962b082-1772726932452.png"
                    alt="KlinicKonnect mobile app showing doctor dashboard with patient appointments"
                    fill
                    className="object-cover" />
                  
                  {/* Status bar */}
                  <div className="absolute top-0 inset-x-0 h-6 bg-black/40 flex items-center justify-between px-3">
                    <span className="text-[9px] text-white font-medium">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-3 h-1.5 bg-white rounded-sm opacity-80" />
                      <div className="w-1 h-1.5 bg-white rounded-sm opacity-80" />
                    </div>
                  </div>
                </div>

                {/* Mobile features list */}
                <ul className="space-y-2">
                  {mobileFeatures?.map((f, i) =>
                  <li key={i} className="flex items-center gap-3 text-white/90 text-sm">
                      <span className="text-base">{f?.icon}</span>
                      {f?.text}
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* WhatsApp Column */}
          <div className="conv-item animate-on-scroll delay-200 space-y-6">
            {/* WhatsApp card */}
            <div className="rounded-3xl overflow-hidden bg-[#075E54] p-8 shadow-card relative">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white blur-3xl" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#25D366] flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                      WhatsApp Reminders
                    </h3>
                    <p className="text-white/60 text-sm">Automated patient communication</p>
                  </div>
                </div>

                {/* Mock WhatsApp chat bubbles */}
                <div className="space-y-3 mb-5">
                  <div className="flex justify-start">
                    <div className="bg-white rounded-2xl rounded-tl-none px-4 py-2.5 max-w-[80%] shadow-sm">
                      <p className="text-xs text-brand-foreground font-medium">KlinicKonnect 🏥</p>
                      <p className="text-xs text-brand-muted mt-0.5">
                        Hello Ramesh! Your follow-up visit with Dr. Tiwari is due on <b>08 Mar 2026</b>. Reply YES to confirm your appointment. 📅
                      </p>
                      <p className="text-[10px] text-brand-muted/60 text-right mt-1">10:32 AM ✓✓</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-none px-4 py-2.5 max-w-[60%]">
                      <p className="text-xs text-brand-foreground">YES ✅</p>
                      <p className="text-[10px] text-brand-muted/60 text-right mt-1">10:33 AM ✓✓</p>
                    </div>
                  </div>
                </div>

                {/* WA features */}
                <ul className="space-y-2">
                  {waFeatures?.map((f, i) =>
                  <li key={i} className="flex items-center gap-2 text-white/80 text-xs">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2.5">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      {f?.text}
                    </li>
                  )}
                </ul>
              </div>
            </div>

            {/* Stat card */}
            <div className="rounded-2xl p-5 bg-brand-bg border border-brand-border flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center text-2xl flex-shrink-0">
                📈
              </div>
              <div>
                <div className="text-2xl font-extrabold text-primary-DEFAULT" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                  68%
                </div>
                <div className="text-sm text-brand-muted">
                  reduction in missed follow-ups after enabling WhatsApp reminders
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}