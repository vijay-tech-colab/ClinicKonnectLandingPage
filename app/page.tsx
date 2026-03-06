import React from 'react';
import type { Metadata } from 'next';
import { LangProvider } from './context/LanguageContext';
import Header from './components/Header';
import HeroSection from './home/components/HeroSection';
import PainPointsSection from './home/components/PainPointsSection';
import SolutionSection from './home/components/SolutionSection';
import HowItWorksSection from './home/components/HowItWorksSection';
import FeaturesSection from './home/components/FeaturesSection';
import ConvenienceSection from './home/components/ConvenienceSection';
import PricingSection from './home/components/PricingSection';
import TestimonialsSection from './home/components/TestimonialsSection';
import SecuritySection from './home/components/SecuritySection';
import FinalCTASection from './home/components/FinalCTASection';
import Footer from './components/Footer';


export const metadata: Metadata = {
  title: 'KlinicKonnect — Clinic Management Software for Doctors',
  description: 'KlinicKonnect helps solo-practice doctors manage appointments, EMR, billing, and WhatsApp follow-ups from one mobile-first platform. Built for Indian clinics.',
  alternates: {
    canonical: '/home',
  },
  openGraph: {
    title: 'KlinicKonnect — Clinic Software for Doctors',
    description: 'One platform for appointments, EMR, billing & WhatsApp reminders.',
    images: [{ url: '/assets/images/app_logo.webp', width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  return (
    <LangProvider>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'KlinicKonnect',
              url: 'https://klinickonnect.com',
              logo: '/assets/images/app_logo.webp',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91-7980073673',
                contactType: 'customer service',
                email: 'info@klinickonnect.com',
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'KlinicKonnect',
              applicationCategory: 'HealthApplication',
              operatingSystem: 'Web, iOS, Android',
              offers: {
                '@type': 'Offer',
                price: '24000',
                priceCurrency: 'INR',
                priceSpecification: {
                  '@type': 'UnitPriceSpecification',
                  billingDuration: 'P1Y',
                },
              },
              description: 'Clinic management software for solo-practice doctors in India.',
            },
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'KlinicKonnect — Clinic Management Software for Doctors',
              url: 'https://klinickonnect.com/home',
              description: 'KlinicKonnect helps solo-practice doctors manage appointments, EMR, billing, and WhatsApp follow-ups.',
            },
          ]),
        }}
      />

      <main className="bg-brand-bg min-h-screen">
        <Header />
        <HeroSection />
        <PainPointsSection />
        <SolutionSection />
        <HowItWorksSection />
        <FeaturesSection />
        <ConvenienceSection />
        <PricingSection/>
        <TestimonialsSection />
        <SecuritySection />
        <FinalCTASection />
        <Footer />
      </main>
    </LangProvider>
  );
}