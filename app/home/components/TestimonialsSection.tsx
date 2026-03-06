'use client';
import React, { useEffect, useRef } from 'react';
import { useLang } from '../../context/LanguageContext';
import AppImage from '../../components/ui/AppImage';

const testimonials = [
{
  quote: "Before KlinicKonnect, I was spending 2 hours every evening updating patient records in a register. Now everything is digital. My receptionist books appointments while I'm seeing patients. Follow-ups happen automatically on WhatsApp.",
  doctor: 'Dr. Alankar Tiwari',
  clinic: 'Dr. Alankar Tiwari Clinic',
  specialty: 'General Physician',
  location: 'Lucknow, UP',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_128060996-1769263987551.png",
  rating: 5,
  highlight: 'Saved 2 hours daily'
},
{
  quote: "Billing was a nightmare — wrong totals, missing charges, patient disputes. KlinicKonnect's one-click invoicing eliminated all of that. We recovered ₹12,000 extra in the first month just from accurate billing.",
  doctor: 'Dr. Suresh Anantharaman',
  clinic: 'Anant Dental Clinic',
  specialty: 'Dental Surgeon',
  location: 'Bengaluru, KA',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_16fa349b9-1771234536193.png",
  rating: 5,
  highlight: '₹12,000 recovered in month 1'
},
{
  quote: "As a pediatrician, vaccination schedules and follow-ups are critical. KlinicKonnect's WhatsApp reminders ensure parents never miss a vaccine date. My patient retention has gone up by 40% in 6 months.",
  doctor: 'Dr. Priya Chakravarthy',
  clinic: 'Chakravarthy Clinic',
  specialty: 'Pediatrician',
  location: 'Chennai, TN',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1ea0b9bc0-1767880718785.png",
  rating: 5,
  highlight: '40% better patient retention'
}];


export default function TestimonialsSection() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.test-card');
            cards.forEach((card, i) => {
              setTimeout(() => card.classList.add('animate-fade-up'), i * 150);
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
    <section id="testimonials" className="py-20 lg:py-28 bg-white relative overflow-hidden" aria-label="Doctor testimonials">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-primary-50 opacity-50 blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10" ref={sectionRef}>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.15em] text-primary-DEFAULT mb-3 bg-primary-50 px-3 py-1 rounded-full">
            Real Doctors. Real Results.
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-foreground mb-4 tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans' }}>
            {t('testimonials.title')}
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials?.map((test, idx) =>
          <div
            key={idx}
            className={`test-card animate-on-scroll testimonial-card bg-white rounded-3xl p-7 border border-brand-border shadow-card flex flex-col ${
            idx === 1 ? 'md:mt-6' : ''}`
            }>
            
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(test?.rating)]?.map((_, i) =>
              <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
              )}
              </div>

              {/* Highlight badge */}
              <div className="inline-flex items-center gap-1.5 bg-primary-50 text-primary-DEFAULT text-xs font-bold px-3 py-1.5 rounded-full w-fit mb-4">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                {test?.highlight}
              </div>

              {/* Quote */}
              <blockquote className="text-sm text-brand-muted leading-relaxed flex-1 italic mb-6">
                &ldquo;{test?.quote}&rdquo;
              </blockquote>

              {/* Doctor info */}
              <div className="flex items-center gap-3 pt-4 border-t border-brand-border">
                <div className="w-11 h-11 rounded-2xl overflow-hidden flex-shrink-0">
                  <AppImage
                  src={test?.avatar}
                  alt={`${test?.doctor} - ${test?.specialty} at ${test?.clinic}`}
                  width={44}
                  height={44}
                  className="object-cover w-full h-full" />
                
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-foreground">{test?.doctor}</p>
                  <p className="text-xs text-brand-muted">{test?.clinic}</p>
                  <p className="text-xs text-primary-DEFAULT font-medium">{test?.specialty} · {test?.location}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}