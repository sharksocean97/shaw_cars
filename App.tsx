
import React from 'react';
import PageTitleBanner from './components/PageTitleBanner';
import Navigation from './components/Navigation';
import IntroTextSection from './components/IntroTextSection';
import ServiceSection from './components/ServiceSection';
import ContactInfoSection from './components/ContactInfoSection';
import type { NavLink, ContactDetails } from './types';

const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'Mechanical Repairs', href: '#mechanical-repairs' },
  { name: 'Body Shop', href: '#body-shop' },
  { name: 'Vehicle Wrapping', href: '#vehicle-wrapping' },
  { name: 'Contact', href: '#contact' },
];

const INTRO_TEXT_LINES = [
  "At Shaw Car Sales we strive to provide you with the best quality car care at affordable prices.",
  "We have been established for over 5 years and have a team of experienced mechanics and auto body mechanic."
];

const CONTACT_DETAILS_DATA: ContactDetails = {
  phone: "01698 642108",
  email: "info@shaw-cars.com",
  address: [
    "Unit 17 Flemington Industrial Park",
    "Craigneuk Street",
    "Motherwell",
    "ML1 2NT"
  ],
  companyReg: "SC782087",
  vatNumber: "464201224"
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <PageTitleBanner title="SHAW CARS" />
      <Navigation navLinks={NAV_LINKS} />
      
      <main className="container mx-auto px-4">
        <IntroTextSection id="home" textLines={INTRO_TEXT_LINES} />
        
        <ServiceSection
          id="mechanical-repairs"
          title="MECHANICAL REPAIRS"
          imageUrl="https://picsum.photos/seed/engine/800/400" // Keeping placeholder images as they were not part of the update request
          imageAlt="Car engine under repair"
          textLines={[
            "At Shaw Car Sales we specialise in the mechanical repair of all mechanical and electrical components of cars and vans.",
            "Our mechanics have a combined experience of over 60 years.",
            "We alsol carry out repairs on hybrid and electric vehicles."
          ]}
        />
        
        <ServiceSection
          id="body-shop"
          title="BODY SHOP"
          imageUrl="https://picsum.photos/seed/bodyshop/800/400" // Keeping placeholder images
          imageAlt="Car body polishing at the body shop"
          textLines={[
            "At Shaw Car Sales our auto body shop is equipped with state of the art equipment which allows our auto body mechanics to repair your vehicle with a factory finish.",
            "We also carry out insurance repairs no matter how big or small."
          ]}
        />
        
        <ServiceSection
          id="vehicle-wrapping"
          title="VEHICLE WRAPPING"
          imageUrl="https://picsum.photos/seed/wrapping/800/400" // Keeping placeholder images
          imageAlt="Vehicle wrapping process"
          textLines={[
            "At Shaw Car Sales we have a three man dedicated team which specialise in car and van wrapping and also the application of PPF.",
            "We have a vast array of colours which you can choose from or you can provide us with a colour sample and we will be able to match.",
            "We also do company branding for cars and vans."
          ]}
        />
        
        <ContactInfoSection id="contact" details={CONTACT_DETAILS_DATA} />
      </main>
      
      <footer className="text-center py-8 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Shaw Cars. All rights reserved.</p>
         <p>Company Registration: {CONTACT_DETAILS_DATA.companyReg} | VAT Number: {CONTACT_DETAILS_DATA.vatNumber}</p>
      </footer>
    </div>
  );
};

export default App;
