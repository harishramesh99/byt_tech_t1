// app/components/ContactSection.tsx
"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";

const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-lime-500 inline-block text-transparent bg-clip-text">
          Let&apos;s Build Something Amazing Together
        </h2>
        <p className="text-gray-400 mb-8">
          From concept to deployment, bringing your vision to life
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-lime-500 hover:bg-lime-600 text-black font-medium px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          Start a Project
        </button>
      </section>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default ContactSection;