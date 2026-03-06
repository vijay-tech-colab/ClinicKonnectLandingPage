'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Lang = 'en' | 'hi';
// Note: Bengali and Kannada were requested but maximum 2 languages are supported. Implementing EN + HI only.

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<Lang, Record<string, string>> = {
  en: {
    'nav.demo': 'Book Demo',
    'nav.setup': 'Start Clinic Setup',
    'hero.badge': 'Trusted by 200+ Clinics Across India',
    'hero.h1': 'Your Clinic Deserves Better Than a Notebook',
    'hero.sub': 'KlinicKonnect replaces paper records, missed follow-ups, and billing chaos with one smart platform — built for solo-practice doctors.',
    'hero.cta1': 'Book Free Demo',
    'hero.cta2': 'Start Clinic Setup',
    'hero.social': 'Trusted by doctors at',
    'pain.title': 'Sound Familiar?',
    'pain.sub': 'These daily frustrations cost you patients, time, and revenue.',
    'pain.1.title': 'Notebooks & Paper Records',
    'pain.1.desc': 'Patient history buried in stacks of paper. Impossible to find. Easy to lose.',
    'pain.2.title': 'Missed Follow-Up Visits',
    'pain.2.desc': 'Patients forget their 2-week follow-up. You lose the appointment and the revenue.',
    'pain.3.title': 'Scheduling Chaos',
    'pain.3.desc': 'Double-bookings, long queues, frustrated patients walking out.',
    'pain.4.title': 'Billing Errors',
    'pain.4.desc': 'Manual billing means missed charges, wrong totals, and disputes with patients.',
    'solution.title': 'One Platform. Every Clinic Need.',
    'solution.sub': 'KlinicKonnect brings appointments, EMR, prescriptions, billing, and WhatsApp reminders into one clean dashboard — accessible on mobile or desktop.',
    'howitworks.title': 'Up and Running in 3 Simple Steps',
    'howitworks.sub': 'No IT team required. No complicated setup. Just a working digital clinic in 48 hours.',
    'step1.title': 'Setup Your Clinic Profile',
    'step1.desc': 'Add your clinic details, staff, fee structure, and medicine inventory. Takes under 30 minutes.',
    'step2.title': 'Start Seeing Patients',
    'step2.desc': 'Book appointments, record vitals, write digital prescriptions, and bill — all from one screen.',
    'step3.title': 'Patients Stay Connected',
    'step3.desc': 'Automatic WhatsApp reminders bring patients back for follow-ups. Zero manual effort.',
    'features.title': 'Everything Your Clinic Needs',
    'features.sub': 'Built specifically for GPs, Dentists, Pediatricians, Dermatologists, and Orthopedic doctors.',
    'convenience.title': 'Your Clinic in Your Pocket',
    'convenience.sub': 'Check today\'s appointments, review patient history, or send a prescription — from anywhere, on your phone.',
    'pricing.title': 'Simple, Transparent Pricing',
    'pricing.sub': 'No hidden fees. No per-patient charges. No surprises.',
    'pricing.setup': '₹15,000',
    'pricing.setup.label': 'One-Time Setup',
    'pricing.yearly': '₹24,000',
    'pricing.yearly.label': 'Per Year',
    'pricing.unlimited': 'Unlimited patients, appointments & billing',
    'pricing.cta': 'Book Demo to Get Started',
    'testimonials.title': 'Doctors Trust KlinicKonnect',
    'security.title': 'Your Patient Data is Safe With Us',
    'security.sub': 'We follow the highest data security standards so you can focus on patient care.',
    'cta.title': 'Ready to Transform Your Clinic?',
    'cta.sub': 'Join 200+ doctors who\'ve replaced paper chaos with KlinicKonnect. Book a free 30-minute demo with our team.',
    'cta.btn1': 'Book Free Demo',
    'cta.btn2': 'Start Clinic Setup',
    'footer.contact': 'Contact Us',
    'footer.rights': '© 2026 KlinicKonnect. All rights reserved.',
  },
  hi: {
    'nav.demo': 'डेमो बुक करें',
    'nav.setup': 'क्लिनिक सेटअप शुरू करें',
    'hero.badge': 'भारत भर के 200+ क्लिनिक द्वारा विश्वसनीय',
    'hero.h1': 'आपके क्लिनिक को नोटबुक से बेहतर चाहिए',
    'hero.sub': 'KlinicKonnect कागज़ी रिकॉर्ड, छूटे हुए फॉलो-अप और बिलिंग की गड़बड़ी को एक स्मार्ट प्लेटफॉर्म से बदलता है।',
    'hero.cta1': 'मुफ़्त डेमो बुक करें',
    'hero.cta2': 'क्लिनिक सेटअप शुरू करें',
    'hero.social': 'डॉक्टरों द्वारा विश्वसनीय',
    'pain.title': 'क्या यह जाना-पहचाना लगता है?',
    'pain.sub': 'ये रोज़ की परेशानियाँ आपके मरीज़, समय और आमदनी छीन रही हैं।',
    'pain.1.title': 'नोटबुक और कागज़ी रिकॉर्ड',
    'pain.1.desc': 'मरीज़ का इतिहास कागज़ों के ढेर में दफ़न। ढूँढना मुश्किल, खोना आसान।',
    'pain.2.title': 'छूटे हुए फॉलो-अप',
    'pain.2.desc': 'मरीज़ 2 हफ्ते का फॉलो-अप भूल जाते हैं। अपॉइंटमेंट और आमदनी दोनों जाती है।',
    'pain.3.title': 'अपॉइंटमेंट की अफरा-तफरी',
    'pain.3.desc': 'डबल बुकिंग, लंबी कतारें, नाराज़ मरीज़ बीच में ही चले जाते हैं।',
    'pain.4.title': 'बिलिंग की गलतियाँ',
    'pain.4.desc': 'हाथ से बिलिंग मतलब छूटे हुए शुल्क, गलत टोटल और मरीज़ों से विवाद।',
    'solution.title': 'एक प्लेटफॉर्म। हर क्लिनिक की ज़रूरत।',
    'solution.sub': 'KlinicKonnect अपॉइंटमेंट, EMR, प्रिस्क्रिप्शन, बिलिंग और WhatsApp रिमाइंडर को एक डैशबोर्ड में लाता है।',
    'howitworks.title': '3 आसान चरणों में शुरू करें',
    'howitworks.sub': 'कोई IT टीम नहीं चाहिए। कोई जटिल सेटअप नहीं। 48 घंटे में डिजिटल क्लिनिक तैयार।',
    'step1.title': 'क्लिनिक प्रोफ़ाइल सेट करें',
    'step1.desc': 'क्लिनिक की जानकारी, स्टाफ, फीस और दवाइयाँ जोड़ें। 30 मिनट से कम में।',
    'step2.title': 'मरीज़ देखना शुरू करें',
    'step2.desc': 'अपॉइंटमेंट बुक करें, वाइटल्स रिकॉर्ड करें, डिजिटल पर्चा लिखें और बिल करें।',
    'step3.title': 'मरीज़ जुड़े रहते हैं',
    'step3.desc': 'WhatsApp रिमाइंडर मरीज़ों को फॉलो-अप के लिए वापस लाते हैं। कोई मेहनत नहीं।',
    'features.title': 'क्लिनिक की हर ज़रूरत यहाँ है',
    'features.sub': 'GP, दंत चिकित्सक, बाल रोग विशेषज्ञ, त्वचा विशेषज्ञ और हड्डी रोग विशेषज्ञों के लिए बनाया गया।',
    'convenience.title': 'आपका क्लिनिक आपकी जेब में',
    'convenience.sub': 'कहीं से भी अपने फोन पर आज के अपॉइंटमेंट देखें, मरीज़ का इतिहास पढ़ें या पर्चा भेजें।',
    'pricing.title': 'सरल, पारदर्शी मूल्य निर्धारण',
    'pricing.sub': 'कोई छुपा हुआ शुल्क नहीं। प्रति मरीज़ कोई चार्ज नहीं। कोई आश्चर्य नहीं।',
    'pricing.setup': '₹15,000',
    'pricing.setup.label': 'एकमुश्त सेटअप',
    'pricing.yearly': '₹24,000',
    'pricing.yearly.label': 'प्रति वर्ष',
    'pricing.unlimited': 'असीमित मरीज़, अपॉइंटमेंट और बिलिंग',
    'pricing.cta': 'शुरू करने के लिए डेमो बुक करें',
    'testimonials.title': 'डॉक्टर KlinicKonnect पर भरोसा करते हैं',
    'security.title': 'आपके मरीज़ों का डेटा सुरक्षित है',
    'security.sub': 'हम उच्चतम डेटा सुरक्षा मानकों का पालन करते हैं।',
    'cta.title': 'अपने क्लिनिक को बदलने के लिए तैयार हैं?',
    'cta.sub': 'उन 200+ डॉक्टरों से जुड़ें जिन्होंने KlinicKonnect अपनाया है। मुफ़्त 30-मिनट का डेमो बुक करें।',
    'cta.btn1': 'मुफ़्त डेमो बुक करें',
    'cta.btn2': 'क्लिनिक सेटअप शुरू करें',
    'footer.contact': 'संपर्क करें',
    'footer.rights': '© 2026 KlinicKonnect. सर्वाधिकार सुरक्षित।',
  },
};

const LangContext = createContext<LangContextType>({
  lang: 'en',
  setLang: () => {},
  t: (k) => k,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  const t = (key: string) => translations[lang][key] ?? translations['en'][key] ?? key;
  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);