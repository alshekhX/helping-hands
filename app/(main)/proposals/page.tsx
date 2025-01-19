"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { proposalsList } from "@/app/data/proposel";


const Proposals = () => {
  const [selectedStatus, setSelectedStatus] = useState<string>("All");

  const statuses = ["All", "Pending", "Approved", "Rejected"];

  const filteredProposals = selectedStatus === "All"
    ? proposalsList
    : proposalsList.filter((proposal) => proposal.status === selectedStatus);

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
