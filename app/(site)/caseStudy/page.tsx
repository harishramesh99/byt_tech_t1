// app/(site)/caseStudy/page.tsx
'use client'

import React, { useState } from 'react';
import { getCaseStudies } from '@/sanity/sanity.query';
import { ArrowRight, Target, BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';
import ContactModal from '../Skills/[skill]/ContactModal';

interface CaseStudyCardProps {
  title: string;
  description: string;
  solutions: string[];
  metrics: { value: string; label: string }[];
}

const CaseStudyCard = ({ title, description, solutions, metrics }: CaseStudyCardProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
      <div>
        <div className="mb-8 relative overflow-hidden animate-fadeIn">
          {/* Orbital Background Effect */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 400 400">
              <circle cx="200" cy="200" r="150" className="stroke-current" fill="none" strokeWidth="1" />
              <circle cx="200" cy="200" r="120" className="stroke-current" fill="none" strokeWidth="1" />
              <circle cx="200" cy="200" r="90" className="stroke-current" fill="none" strokeWidth="1" />
            </svg>
          </div>
    
          <div className="relative bg-[#1E293B] border border-[#4ADE80]/10 rounded-xl overflow-hidden hover:border-[#4ADE80]/30 transition-all duration-300 ease-in-out hover:-translate-y-1">
            <div className="p-6 border-b border-[#2D3748]">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-[#4ADE80] to-[#2563EB] bg-clip-text text-transparent">
                  {title}
                </h2>
                <button  onClick={() => setIsModalOpen(true)} className="px-6 py-3 bg-[#4ADE80] text-[#0F172A] rounded-full font-semibold hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
              <p className="text-gray-400 mt-4">
                {description}
              </p>
            </div>
    
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-[#4ADE80]" />
                    Solution Highlights
                  </h3>
                  <ul className="space-y-4">
                    {solutions.map((solution, index) => (
                      <li
                        key={index}
                        className="flex items-start group animate-slideIn"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <ArrowRight className="w-4 h-4 mr-3 mt-1 text-[#4ADE80] transform group-hover:translate-x-1 transition-transform duration-300" />
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                          {solution}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
    
                <div>
                  <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                    <BarChart2 className="w-5 h-5 mr-2 text-[#4ADE80]" />
                    Impact Metrics
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {metrics.map((metric, index) => (
                      <div
                        key={index}
                        className="bg-[#0F172A] p-4 rounded-lg border border-[#4ADE80]/10 hover:border-[#4ADE80]/30 transition-all duration-300 hover:-translate-y-1 animate-fadeIn"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="text-2xl font-bold text-[#4ADE80]">
                          {metric.value}
                        </div>
                        <div className="text-sm text-gray-400">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    );
  };

export default async function CaseStudies() {
  const caseStudies = await getCaseStudies();

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Case Studies</h1>
      {caseStudies.map((study: any) => (
        <CaseStudyCard
          key={study._id}
          title={study.title}
          description={study.description}
          solutions={study.solutions}
          metrics={study.metrics}
        />
      ))}
    </div>
  );
}
