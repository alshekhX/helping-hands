"use client";

import Image from "next/image";
import { useState } from "react";

interface Investor {
  id: number;
  companyName: string;
  description: string;
  imageUrl: string;
  investmentRange: string;
  focusAreas: string[];
}

const investors: Investor[] = [
  {
    id: 1,
    companyName: "HealthTech Ventures",
    description: "Leading venture capital firm focused on early-stage healthcare technology companies. Specializing in digital health, medical devices, and healthcare AI solutions.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop",
    investmentRange: "$3M",
    focusAreas: ["Digital Health", "Medical Devices", "Healthcare AI"],
  },
  {
    id: 2,
    companyName: "MedInnovate Capital",
    description: "Growth-stage investment firm dedicated to scaling innovative healthcare solutions. Focus on telemedicine, healthcare infrastructure, and biotechnology.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    investmentRange: "$5M",
    focusAreas: ["Telemedicine", "Biotech", "Healthcare Infrastructure"],
  },
  {
    id: 3,
    companyName: "Global Health Fund",
    description: "International healthcare investment fund focusing on transformative medical technologies and healthcare accessibility solutions worldwide.",
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=500&h=300&fit=crop",
    investmentRange: "$1M",
    focusAreas: ["Medical Technology", "Healthcare Access", "Global Health"],
  },
  {
    id: 4,
    companyName: "Future Care Investments",
    description: "Strategic investment firm specializing in mental health technologies, elderly care solutions, and preventive healthcare innovations.",
    imageUrl: "https://images.unsplash.com/photo-1579226905180-636b76d96082?w=500&h=300&fit=crop",
    investmentRange: "$500k",
    focusAreas: ["Mental Health", "Elderly Care", "Preventive Health"],
  }
];

const Investors = () => {
  const [selectedFocus, setSelectedFocus] = useState<string>("All");
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedInvestor, setSelectedInvestor] = useState<Investor | null>(null);
  const [message, setMessage] = useState("");

  const allFocusAreas = ["All", ...new Set(investors.flatMap(investor => investor.focusAreas))];

  const filteredInvestors = selectedFocus === "All"
    ? investors
    : investors.filter(investor => investor.focusAreas.includes(selectedFocus));

  const handleContact = (investor: Investor) => {
    setSelectedInvestor(investor);
    setShowContactModal(true);
  };

  const handleSubmitMessage = () => {
    if (message.trim()) {
      // Here you would typically make an API call to send the message
      console.log(`Sending message to ${selectedInvestor?.companyName}:`, message);
      setShowContactModal(false);
      setSelectedInvestor(null);
      setMessage("");
    }
  };

  return (
    <div className="p-6">
      {/* Filter Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Investment Partners</h2>
        <div className="flex gap-2 flex-wrap">
          {allFocusAreas.map((focus) => (
            <button
              key={focus}
              onClick={() => setSelectedFocus(focus)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${
                  selectedFocus === focus
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              {focus}
            </button>
          ))}
        </div>
      </div>

      {/* Investors Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredInvestors.map((investor) => (
          <div
            key={investor.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="relative h-48">
              <Image
                src={investor.imageUrl}
                alt={investor.companyName}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {investor.companyName}
                  </h3>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-blue-600">{investor.investmentRange}</p>
                  <p className="text-sm text-gray-500">Investment Ammount</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{investor.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {investor.focusAreas.map((area, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>


              <button 
                onClick={() => handleContact(investor)}
                className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Investor
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Modal */}
      {showContactModal && selectedInvestor && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-lg w-full mx-4">
            <h3 className="text-xl font-semibold mb-2">
              Contact {selectedInvestor.companyName}
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Send a message to initiate contact with this investor.
            </p>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Introduce your startup and explain why you're interested in connecting..."
                className="w-full h-48 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              />
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowContactModal(false);
                  setSelectedInvestor(null);
                  setMessage("");
                }}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitMessage}
                disabled={!message.trim()}
                className={`px-6 py-2 rounded-lg text-white
                  ${message.trim() 
                    ? 'bg-blue-600 hover:bg-blue-700' 
                    : 'bg-gray-400 cursor-not-allowed'
                  }`}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Investors;
