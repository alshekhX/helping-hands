"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Startup {
  id: number;
  name: string;
  description: string;
  industry: string;
  imageUrl: string;
  fundingStage: string;
  highlights: string[];
  companyInfo: string;
}

export const startups: Startup[] = [
  {
    id: 1,
    name: "DiagnosticAI",
    description: "Advanced AI-powered diagnostic imaging analysis for early disease detection.",
    industry: "Medical Imaging",
    imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500&h=300&fit=crop",
    fundingStage: "Series A",
    highlights: [
      "Cutting-edge AI technology",
      "Rapid disease detection",
      "Collaborations with top hospitals"
    ],
    companyInfo: "Based in Riyadh, Saudi Arabia, DiagnosticAI partners with leading hospitals to provide state-of-the-art diagnostic solutions."
  },
  {
    id: 2,
    name: "TeleHealth Plus",
    description: "Comprehensive telemedicine platform connecting patients with specialists across Saudi Arabia.",
    industry: "Telemedicine",
    imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=500&h=300&fit=crop",
    fundingStage: "Seed",
    highlights: [
      "24/7 specialist availability",
      "Secure patient data management",
      "User-friendly mobile app"
    ],
    companyInfo: "Headquartered in Jeddah, TeleHealth Plus revolutionizes remote healthcare access throughout Saudi Arabia."
  },
  {
    id: 3,
    name: "RehabTech",
    description: "Digital rehabilitation platform providing personalized recovery programs and progress tracking.",
    industry: "Rehabilitation",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
    fundingStage: "Series B",
    highlights: [
      "Personalized recovery plans",
      "Real-time progress monitoring",
      "Integration with wearable devices"
    ],
    companyInfo: "Operating out of Dammam, RehabTech offers innovative rehabilitation solutions tailored to individual needs in Saudi Arabia."
  },
  {
    id: 4,
    name: "TherapyConnect",
    description: "Personalized mental health therapy platform connecting patients with licensed therapists.",
    industry: "Mental Health",
    imageUrl: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=500&h=300&fit=crop",
    fundingStage: "Seed",
    highlights: [
      "Wide network of licensed therapists",
      "Confidential and secure sessions",
      "Flexible appointment scheduling"
    ],
    companyInfo: "Located in Riyadh, TherapyConnect is dedicated to improving mental health services across Saudi Arabia."
  },
  {
    id: 5,
    name: "MentalHealth AI",
    description: "AI-driven mental health assessment and therapy recommendation platform.",
    industry: "Mental Health",
    imageUrl: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=500&h=300&fit=crop",
    fundingStage: "Series A",
    highlights: [
      "AI-based assessments",
      "Personalized therapy recommendations",
      "Data-driven mental health insights"
    ],
    companyInfo: "Based in Mecca, MentalHealth AI leverages artificial intelligence to enhance mental wellness services in Saudi Arabia."
  },
  {
    id: 6,
    name: "SmartCare Solutions",
    description: "IoT-enabled remote patient monitoring and predictive healthcare analytics.",
    industry: "Digital Health",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=300&fit=crop",
    fundingStage: "Seed",
    highlights: [
      "Real-time patient monitoring",
      "Predictive health analytics",
      "Seamless integration with healthcare systems"
    ],
    companyInfo: "Situated in Medina, SmartCare Solutions provides innovative IoT healthcare solutions across Saudi Arabia."
  },
  {
    id: 7,
    name: "PharmaConnect",
    description: "Blockchain-based platform for secure and transparent pharmaceutical supply chains.",
    industry: "Pharmaceuticals",
    imageUrl: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=500&h=300&fit=crop",
    fundingStage: "Series A",
    highlights: [
      "Enhanced supply chain transparency",
      "Secure blockchain transactions",
      "Reduction in counterfeit medications"
    ],
    companyInfo: "Operating from Riyadh, PharmaConnect ensures the integrity of pharmaceutical supply chains throughout Saudi Arabia."
  },
  {
    id: 8,
    name: "HealthHub Saudi",
    description: "Integrated health management system offering comprehensive patient care solutions.",
    industry: "Healthcare IT",
    imageUrl: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=500&h=300&fit=crop",
    fundingStage: "Series B",
    highlights: [
      "Comprehensive patient records",
      "Integrated care coordination",
      "Advanced data analytics"
    ],
    companyInfo: "Based in Jeddah, HealthHub Saudi enhances healthcare delivery through advanced IT solutions across the kingdom."
  },
  {
    id: 9,
    name: "FitLife Arabia",
    description: "Personalized fitness and wellness platform tailored to Saudi lifestyles.",
    industry: "Fitness & Wellness",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=300&fit=crop",
    fundingStage: "Seed",
    highlights: [
      "Customized workout plans",
      "Nutrition tracking",
      "Community support features"
    ],
    companyInfo: "Located in Dammam, FitLife Arabia promotes healthy living through personalized fitness solutions in Saudi Arabia."
  },
  {
    id: 10,
    name: "CareTrack",
    description: "Comprehensive eldercare management platform ensuring quality care for the elderly.",
    industry: "Elder Care",
    imageUrl: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=500&h=300&fit=crop",
    fundingStage: "Series A",
    highlights: [
      "24/7 care monitoring",
      "Family access and updates",
      "Integration with local healthcare providers"
    ],
    companyInfo: "Headquartered in Riyadh, CareTrack is committed to providing exceptional eldercare services across Saudi Arabia."
  },
];

const Startups = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("All");

  const industries = ["All", ...new Set(startups.map((startup) => startup.industry))];

  const filteredStartups = selectedIndustry === "All" 
    ? startups 
    : startups.filter((startup) => startup.industry === selectedIndustry);

  return (
    <div className="p-6">
      {/* Filter Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Healthcare Startups</h2>
        <div className="flex gap-2 flex-wrap">
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => setSelectedIndustry(industry)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${
                  selectedIndustry === industry
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              {industry}
            </button>
          ))}
        </div>
      </div>

      {/* Startups Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStartups.map((startup) => (
          <div
            key={startup.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="relative h-48">
              <Image
                src={startup.imageUrl}
                alt={startup.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  {startup.name}
                </h3>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                  {startup.fundingStage}
                </span>
              </div>
              <span className="text-sm text-blue-600 font-medium mb-2 block">
                {startup.industry}
              </span>
              <p className="text-gray-600 text-sm">
                {startup.description}
              </p>
              <Link href={`/startups/${startup.id}`}>
              <button className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                View Details
              </button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Startups;
