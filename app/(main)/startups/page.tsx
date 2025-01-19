"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {  startupsList} from "@/app/data/startups";
const Startups = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("All");

  const industries = ["All", ...new Set(startupsList.map((startup) => startup.industry))];

  const filteredStartups = selectedIndustry === "All" 
    ? startupsList 
    : startupsList.filter((startup) => startup.industry === selectedIndustry);

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
