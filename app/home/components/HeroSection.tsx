'use client';
import React, { useEffect, useRef } from 'react';
import { useLang } from '../../context/LanguageContext';
import AppImage from '../../components/ui/AppImage';

const CALENDLY_URL = 'https://calendly.com/klinickonnect/demo';

// Floating metric cards data
const floatingCards = [
{
  id: 'appointments',
  label: 'Appointments Today',
  value: '24',
  sub: '↑ 3 new',
  color: '#1B6CA8',
  icon:
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>,

  floatClass: 'float-a',
  position: 'top-[10%] right-[2%] md:top-[12%] md:right-[4%]'
},
{
  id: 'billing',
  label: 'Billing Today',
  value: '₹18,400',
  sub: '12 invoices',
  color: '#16A34A',
  icon:
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>,

  floatClass: 'float-b',
  position: 'top-[45%] right-[1%] md:top-[48%] md:right-[2%]'
},
{
  id: 'followup',
  label: 'WhatsApp Sent',
  value: '7',
  sub: 'Follow-up reminders',
  color: '#25D366',
  icon:
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>,

  floatClass: 'float-c',
  position: 'bottom-[18%] right-[3%] md:bottom-[20%] md:right-[5%]'
}];


const clinicLogos = [
'Dr. Alankar Tiwari Clinic',
'Anant Dental Clinic',
'Chakravarthy Clinic',
'City Health Clinic',
'Sunrise Pediatrics',
'DermaCare Clinic'];


export default function HeroSection() {
  const { t } = useLang();
  const heroRef = useRef<HTMLDivElement>(null);

  // Subtle parallax on mouse move
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const handleMouse = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { width, height } = hero.getBoundingClientRect();
      const xPct = (clientX / width - 0.5) * 12;
      const yPct = (clientY / height - 0.5) * 8;
      const bg = hero.querySelector('.hero-bg-blob') as HTMLElement;
      if (bg) {
        bg.style.transform = `translate(${xPct}px, ${yPct}px)`;
      }
    };
    hero.addEventListener('mousemove', handleMouse);
    return () => hero.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden gradient-animated noise-overlay pt-16"
      aria-label="Hero section">
      
      {/* Background grid */}
      <div className="absolute inset-0 hero-grid opacity-60 pointer-events-none" />

      {/* Background blobs */}
      <div className="hero-bg-blob absolute inset-0 pointer-events-none transition-transform duration-700 ease-out">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary-50 opacity-60 blur-[80px]" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] rounded-full bg-accent-light opacity-30 blur-[100px]" />
        <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] rounded-full bg-primary-100 opacity-40 blur-[60px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Content */}
          <div className="space-y-7">
            {/* Badge */}
            <div
              className="animate-on-scroll animate-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-primary-100 shadow-sm text-xs font-semibold text-primary-DEFAULT">
              
              <span className="w-2 h-2 rounded-full bg-success pulse-glow inline-block" />
              {t('hero.badge')}
            </div>

            {/* H1 */}
            <h1
              className="animate-on-scroll animate-fade-up delay-100 font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-foreground leading-[1.08] tracking-tight"
              style={{ fontFamily: 'Plus Jakarta Sans' }}>
              
              {t('hero.h1')}
            </h1>

            {/* Subheadline */}
            <p className="animate-on-scroll animate-fade-up delay-200 text-lg text-brand-muted leading-relaxed max-w-lg">
              {t('hero.sub')}
            </p>

            {/* CTAs */}
            <div className="animate-on-scroll animate-fade-up delay-300 flex flex-wrap gap-3">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-7 py-3.5 text-base inline-flex items-center gap-2">
                
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                {t('hero.cta1')}
              </a>
              <a
                href="#pricing"
                className="btn-secondary px-7 py-3.5 text-base inline-flex items-center gap-2">
                
                {t('hero.cta2')}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Social proof */}
            <div className="animate-on-scroll animate-fade-up delay-400 flex items-center gap-3 pt-2">
              <div className="flex -space-x-2">
                {[
                'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop',
                'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop',
                'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop'].
                map((src, i) =>
                <div key={i} className="w-9 h-9 rounded-full border-2 border-white overflow-hidden shadow-sm">
                    <AppImage src={src} alt={`Doctor ${i + 1}`} width={36} height={36} className="object-cover w-full h-full" />
                  </div>
                )}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) =>
                  <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#F59E0B">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  )}
                </div>
                <p className="text-xs text-brand-muted mt-0.5">
                  {t('hero.social')} <span className="font-semibold text-brand-foreground">200+ clinics</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right: Dashboard Mockup + Floating Cards */}
          <div className="relative h-[480px] lg:h-[560px] animate-on-scroll animate-slide-right delay-200">

            {/* Main Dashboard Card */}
            <div className="absolute inset-0 left-0 right-[60px] top-[20px] bottom-0 rounded-3xl overflow-hidden shadow-hero border border-white/80 bg-white">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1ad6e2f18-1772114206076.png"
                alt="KlinicKonnect clinic management dashboard showing appointment schedule and patient records"
                fill
                className="object-cover"
                priority />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />

              {/* Dashboard UI overlay */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between">
                {/* Top bar */}
                <div className="flex items-center justify-between">
                  <div className="glass-card rounded-xl px-3 py-1.5 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-success" />
                    <span className="text-xs font-semibold text-brand-foreground">Live Dashboard</span>
                  </div>
                  <div className="glass-card rounded-xl px-3 py-1.5 text-xs font-medium text-brand-muted">
                    Thu, 05 Mar 2026
                  </div>
                </div>

                {/* Bottom stats */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                  { label: 'Patients Today', val: '24', icon: '👥' },
                  { label: 'Pending Bills', val: '3', icon: '📋' },
                  { label: 'Follow-ups', val: '7', icon: '🔔' }].
                  map((stat) =>
                  <div key={stat.label} className="glass-card rounded-xl p-2.5 text-center">
                      <div className="text-lg mb-0.5">{stat.icon}</div>
                      <div className="text-base font-bold text-brand-foreground">{stat.val}</div>
                      <div className="text-[10px] text-brand-muted leading-tight">{stat.label}</div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Floating Metric Cards */}
            {floatingCards.map((card) =>
            <div
              key={card.id}
              className={`absolute ${card.position} ${card.floatClass} z-20`}>
              
                <div className="glass-card rounded-2xl p-3.5 shadow-float w-[168px]">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center"
                    style={{ background: `${card.color}18`, color: card.color }}>
                    
                      {card.icon}
                    </div>
                    <span className="text-[11px] font-medium text-brand-muted leading-tight">{card.label}</span>
                  </div>
                  <div className="text-xl font-bold text-brand-foreground" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                    {card.value}
                  </div>
                  <div className="text-[11px] font-medium mt-0.5" style={{ color: card.color }}>{card.sub}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Clinic logo marquee */}
      <div className="relative z-10 mt-4 pb-10 overflow-hidden">
        <p className="text-center text-xs font-medium text-brand-muted mb-4 tracking-wider uppercase">
          Trusted by clinics across India
        </p>
        <div className="flex overflow-hidden">
          <div className="marquee-track flex items-center gap-12 whitespace-nowrap">
            {[...clinicLogos, ...clinicLogos].map((name, i) =>
            <span key={i} className="text-sm font-semibold text-brand-muted/60 flex items-center gap-2 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-DEFAULT/40 inline-block" />
                {name}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>);

}