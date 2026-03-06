import React from 'react';
import type { Metadata, Viewport } from 'next';
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'KlinicKonnect — Clinic Management Software for Doctors',
  description: 'KlinicKonnect helps solo-practice doctors manage appointments, EMR, billing, and WhatsApp follow-ups from one mobile-first platform. Built for Indian clinics.',
  icons: {
    icon: [
      { url: '/assets/images/app_logo.webp', type: 'image/x-icon' }
    ],
  },
  openGraph: {
    title: 'KlinicKonnect — Clinic Software for Doctors',
    description: 'One platform for appointments, EMR, billing & WhatsApp reminders. Built for Indian solo-practice clinics.',
    images: [{ url: '/assets/images/app_logo.webp', width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fklinickonn5616back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.17" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /></body>
    </html>
  );
}