"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Proposal {
  id: number;
  title: string;
  description: string;
  startup: {
    id: number;
    name: string;
    industry: string;
    imageUrl: string;
  };
  status: "Pending" | "Approved" | "Rejected";
  requestedFunding: string;
  submittedDate: string;
}

export const proposals: Proposal[] = [
  {
    id: 1,
    title: "AI-Powered Medical Imaging Platform Enhancement",
    description: "Seeking funding to expand our diagnostic imaging capabilities with advanced machine learning models and increase our database of medical imaging samples for better accuracy.",
    startup: {
      id: 1,
      name: "DiagnosticAI",
      industry: "Medical Imaging",
      imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500&h=300&fit=crop",
    },
    status: "Pending",
    requestedFunding: "$500,000",
    submittedDate: "2024-03-15",
  },
  {
    id: 2,
    title: "Global Telemedicine Network Expansion",
    description: "Proposal to scale our telemedicine platform internationally and integrate real-time translation services for cross-border healthcare consultations.",
    startup: {
      id: 2,
      name: "TeleHealth Plus",
      industry: "Telemedicine",
      imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=500&h=300&fit=crop",
    },
    status: "Approved",
    requestedFunding: "$750,000",
    submittedDate: "2024-03-10",
  },
  {
    id: 3,
    title: "Digital Rehabilitation Platform Enhancement",
    description: "Implementation of VR/AR technology for immersive rehabilitation exercises and development of AI-powered progress tracking systems.",
    startup: {
      id: 3,
      name: "RehabTech",
      industry: "Rehabilitation",
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
    },
    status: "Pending",
    requestedFunding: "$300,000",
    submittedDate: "2024-03-18",
  },
  {
    id: 4,
    title: "Mental Health Platform Scaling Initiative",
    description: "Expanding our therapist network and implementing AI-driven matching algorithms to improve patient-therapist compatibility.",
    startup: {
      id: 4,
      name: "TherapyConnect",
      industry: "Mental Health",
      imageUrl: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=500&h=300&fit=crop",
    },
    status: "Pending",
    requestedFunding: "$400,000",
    submittedDate: "2024-03-20",
  },
  {
    id: 5,
    title: "AI Mental Health Assessment Tool Development",
    description: "Development of advanced machine learning models for more accurate mental health assessments and personalized treatment recommendations.",
    startup: {
      id: 5,
      name: "MentalHealth AI",
      industry: "Mental Health",
      imageUrl: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=500&h=300&fit=crop",
    },
    status: "Rejected",
    requestedFunding: "$600,000",
    submittedDate: "2024-03-05",
  },
  {
    id: 6,
    title: "IoT Healthcare Monitoring System Expansion",
    description: "Scaling our IoT infrastructure and implementing advanced predictive analytics for better patient monitoring and early warning systems.",
    startup: {
      id: 6,
      name: "SmartCare Solutions",
      industry: "Digital Health",
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=300&fit=crop",
    },
    status: "Approved",
    requestedFunding: "$450,000",
    submittedDate: "2024-03-12",
  },
  {
    id: 7,
    title: "Blockchain Pharmaceutical Supply Chain Enhancement",
    description: "Implementation of advanced blockchain technology to improve pharmaceutical supply chain transparency and expand counterfeit detection capabilities across the region.",
    startup: {
      id: 7,
      name: "PharmaConnect",
      industry: "Pharmaceuticals",
      imageUrl: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=500&h=300&fit=crop",
    },
    status: "Approved",
    requestedFunding: "$850,000",
    submittedDate: "2024-03-22",
  },
  {
    id: 8,
    title: "Healthcare Data Analytics Platform Expansion",
    description: "Scaling our healthcare data analytics capabilities and implementing advanced machine learning models for better patient outcome predictions and care optimization.",
    startup: {
      id: 8,
      name: "HealthHub Saudi",
      industry: "Healthcare IT",
      imageUrl: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=500&h=300&fit=crop",
    },
    status: "Approved",
    requestedFunding: "$700,000",
    submittedDate: "2024-03-17",
  },
];

const Proposals = () => {
  const [selectedStatus, setSelectedStatus] = useState<string>("All");

  const statuses = ["All", "Pending", "Approved", "Rejected"];

  const filteredProposals = selectedStatus === "All"
    ? proposals
    : proposals.filter((proposal) => proposal.status === selectedStatus);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-800";
      case "Rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-yellow-100 text-yellow-800";
    }
  };

  return (
    <div className="p-6">
      {/* Filter Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Proposals</h2>
        <div className="flex gap-2 flex-wrap">
          {statuses.map((status) => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${
                  selectedStatus === status
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Proposals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProposals.map((proposal) => (
          <div
            key={proposal.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="relative h-40">
              <Image
                src={proposal.startup.imageUrl}
                alt={proposal.startup.name}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <h3 className="text-white font-semibold">{proposal.startup.name}</h3>
                <span className="text-white/80 text-sm">{proposal.startup.industry}</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-lg font-semibold text-gray-900 flex-1">
                  {proposal.title}
                </h4>
                <span className={`px-2 py-1 text-xs font-medium rounded ml-2 ${getStatusColor(proposal.status)}`}>
                  {proposal.status}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                {proposal.description}
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Requested: {proposal.requestedFunding}</span>
                <span>Submitted: {new Date(proposal.submittedDate).toLocaleDateString()}</span>
              </div>
              <Link href={`/proposals/${proposal.id}`}>
              <button  className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                View Proposal
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proposals;
