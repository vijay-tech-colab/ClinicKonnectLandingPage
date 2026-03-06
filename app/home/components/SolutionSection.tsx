'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '../../components/ui/AppImage';
import { useLang } from '../../context/LanguageContext';

const solutionPoints = [
{ icon: '📅', text: 'Smart appointment scheduling with zero double-bookings' },
{ icon: '🗂️', text: 'Digital EMR — complete patient history in 2 taps' },
{ icon: '💊', text: 'Digital or print prescriptions with medicine inventory' },
{ icon: '🧾', text: 'Automated billing — accurate invoices, every time' },
{ icon: '📱', text: 'WhatsApp reminders that bring patients back' },
{ icon: '☁️', text: 'Secure cloud storage — access from anywhere' }];


export default function SolutionSection() {
  const { t } = useLang();
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              entry.target === leftRef.current ? 'animate-slide-left' : 'animate-slide-right'
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    if (leftRef?.current) observer?.observe(leftRef?.current);
    if (rightRef?.current) observer?.observe(rightRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="solution" className="py-20 lg:py-28 bg-brand-bg relative overflow-hidden" aria-label="Solution overview">
      {/* Background blob */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full bg-primary-50 opacity-50 blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Image + floating element */}
          <div ref={leftRef} className="animate-on-scroll relative">
            <div className="relative rounded-3xl overflow-hidden shadow-hero aspect-[4/3]">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_16e9b15fd-1772726931945.png"
                alt="Doctor using KlinicKonnect on tablet to manage patient records digitally"
                fill
                className="object-cover" />
              
              <div className="absolute inset-0 bg-gradient-to-br from-primary-DEFAULT/10 to-transparent" />
            </div>

            {/* Floating card overlay */}
            <div className="absolute -bottom-5 -right-4 glass-card rounded-2xl p-4 shadow-float w-52 float-b">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-xl bg-success/10 flex items-center justify-center text-success text-lg">✓</div>
                <span className="text-xs font-bold text-brand-foreground">Patient Record</span>
              </div>
              <div className="space-y-1">
                <div className="h-2 bg-primary-100 rounded-full w-full" />
                <div className="h-2 bg-primary-50 rounded-full w-3/4" />
                <div className="h-2 bg-primary-50 rounded-full w-5/6" />
              </div>
              <div className="mt-2 text-[10px] text-brand-muted">Last visit: 28 Feb 2026</div>
            </div>

            {/* Second floating card */}
            <div className="absolute -top-4 -left-4 glass-card rounded-2xl p-3 shadow-float float-a">
              <div className="flex items-center gap-2">
                <span className="text-xl">📊</span>
                <div>
                  <div className="text-xs font-bold text-brand-foreground">Monthly Revenue</div>
                  <div className="text-sm font-extrabold text-primary-DEFAULT" style={{ fontFamily: 'Plus Jakarta Sans' }}>₹2,34,000</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div ref={rightRef} className="animate-on-scroll space-y-6">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.15em] text-primary-DEFAULT mb-1 bg-primary-50 px-3 py-1 rounded-full">
              The Solution
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-foreground tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans' }}>
              {t('solution.title')}
            </h2>
            <p className="text-lg text-brand-muted leading-relaxed">
              {t('solution.sub')}
            </p>

            {/* Solution points */}
            <ul className="space-y-3">
              {solutionPoints?.map((point, i) =>
              <li key={i} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary-50 flex items-center justify-center text-lg flex-shrink-0 mt-0.5">
                    {point?.icon}
                  </div>
                  <span className="text-sm text-brand-foreground font-medium leading-relaxed pt-1.5">
                    {point?.text}
                  </span>
                </li>
              )}
            </ul>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://calendly.com/klinickonnect/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-6 py-3 text-sm inline-flex items-center gap-2">
                
                See Live Demo
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>);

}