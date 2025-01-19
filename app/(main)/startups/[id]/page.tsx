"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { startups } from "../page";
import { MdBusiness, MdGroup, MdLocationOn } from "react-icons/md";

const StartupDetails = () => {
  const params = useParams();
  const startupId = Number(params.id);
  
  const startup = startups.find(s => s.id === startupId);

  if (!startup) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Startup not found</h1>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
        <div className="relative h-64">
          <Image
            src={startup.imageUrl}
            alt={startup.name}
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
            <h1 className="text-3xl font-bold text-white mb-2">{startup.name}</h1>
            <div className="flex items-center gap-4">
              <span className="text-white/90">{startup.industry}</span>
              <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">
                {startup.fundingStage}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-4">About</h2>
            <p className="text-gray-600">{startup.description}</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-4">Highlights</h2>
            <ul className="space-y-3">
              {startup.highlights.map((highlight, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span className="text-gray-600">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-4">Company Info</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MdBusiness className="text-gray-400 text-xl" />
                <span className="text-gray-600">{startup.fundingStage}</span>
              </div>
              <div className="flex items-center gap-3">
                <MdGroup className="text-gray-400 text-xl" />
                <span className="text-gray-600">{startup.industry}</span>
              </div>
              <div className="flex items-center gap-3">
                <MdLocationOn className="text-gray-400 text-xl" />
                <span className="text-gray-600">{startup.companyInfo}</span>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default StartupDetails;
