"use client";

import Image from "next/image";
import { useState } from "react";
import { proposalsList } from "@/app/data/proposel";

interface Mentor {
  id: number;
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  specialty: string;
  experience: string;
  availability: "Available" | "Busy" | "Away";
}

const mentors: Mentor[] = [
  {
    id: 1,
    name: "Dr. Aisha Al-Fayed",
    title: "Chief Medical Officer",
    description: "Experienced healthcare executive with expertise in medical technology innovation and digital health transformation. Passionate about mentoring healthcare startups.",
    imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop",
    specialty: "Healthcare Innovation",
    experience: "15+ years",
    availability: "Available"
  },
  {
    id: 2,
    name: "Dr. Omar Khalid",
    title: "Medical Research Director",
    description: "Leading researcher in biotechnology and AI applications in healthcare. Specializes in helping startups navigate clinical trials and regulatory compliance.",
    imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
    specialty: "Clinical Research",
    experience: "12+ years",
    availability: "Available"
  },
  {
    id: 3,
    name: "Prof. Layla Hassan",
    title: "Digital Health Strategist",
    description: "Expert in telemedicine and digital health platforms. Helps startups scale their healthcare solutions and improve patient engagement.",
    imageUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
    specialty: "Digital Health",
    experience: "10+ years",
    availability: "Available"
  },
  {
    id: 4,
    name: "Dr. Youssef Ammar",
    title: "Healthcare Technology Advisor",
    description: "Specialized in healthcare IT infrastructure and data security. Guides startups in building scalable and secure healthcare solutions.",
    imageUrl: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop",
    specialty: "Healthcare IT",
    experience: "13+ years",
    availability: "Available"
  },
  {
    id: 5,
    name: "Dr. Fatima Zahra",
    title: "Mental Health Innovation Lead",
    description: "Expert in mental health technologies and therapeutic platforms. Mentors startups focusing on mental health solutions and patient care.",
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
    specialty: "Mental Health Tech",
    experience: "11+ years",
    availability: "Available"
  },
  {
    id: 6,
    name: "Dr. Khalid Al-Mansouri",
    title: "Biomedical Engineering Specialist",
    description: "Specialist in biomedical device design and regulatory approval processes. Provides mentorship in developing compliant and innovative medical devices.",
    imageUrl: "https://images.unsplash.com/photo-1603415526960-f1853c84ae4c?w=400&h=400&fit=crop",
    specialty: "Biomedical Engineering",
    experience: "14+ years",
    availability: "Available"
  }
];


const Mentors = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("All");
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [selectedProposal, setSelectedProposal] = useState<number | null>(null);

  const approvedProposals = proposalsList.filter(proposal => proposal.status === "Approved");

  const specialties = ["All", ...new Set(mentors.map(mentor => mentor.specialty))];

  const filteredMentors = selectedSpecialty === "All"
    ? mentors
    : mentors.filter(mentor => mentor.specialty === selectedSpecialty);

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "Available":
        return "bg-green-100 text-green-800";
      case "Busy":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleAssignMentorship = (mentor: Mentor) => {
    setSelectedMentor(mentor);
    setShowAssignModal(true);
  };

  const handleAssignSubmit = () => {
    if (selectedProposal) {
      // Here you would typically make an API call to assign the mentor
      console.log(`Assigning mentor ${selectedMentor?.name} to proposal ${selectedProposal}`);
      setShowAssignModal(false);
      setSelectedMentor(null);
      setSelectedProposal(null);
    }
  };

  return (
    <div className="p-6">
      {/* Filter Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Healthcare Mentors</h2>
        <div className="flex gap-2 flex-wrap">
          {specialties.map((specialty) => (
            <button
              key={specialty}
              onClick={() => setSelectedSpecialty(specialty)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${
                  selectedSpecialty === specialty
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              {specialty}
            </button>
          ))}
        </div>
      </div>

      {/* Mentors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMentors.map((mentor) => (
          <div
            key={mentor.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={mentor.imageUrl}
                    alt={mentor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{mentor.name}</h3>
                  <p className="text-sm text-gray-600">{mentor.title}</p>
                </div>
              </div>
              <div className="mb-4">
                <span className={`px-2 py-1 text-xs font-medium rounded ${getAvailabilityColor(mentor.availability)}`}>
                  {mentor.availability}
                </span>
                <span className="ml-2 text-sm text-gray-500">{mentor.experience} Experience</span>
              </div>
              <div className="mb-4">
                <span className="text-sm font-medium text-blue-600">{mentor.specialty}</span>
                <p className="mt-2 text-sm text-gray-600">{mentor.description}</p>
              </div>
              <button 
                onClick={() => handleAssignMentorship(mentor)}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                disabled={mentor.availability !== "Available"}
              >
                Assign Mentorship
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Assignment Modal */}
      {showAssignModal && selectedMentor && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full mx-4">
            <h3 className="text-xl font-semibold mb-4">
              Assign {selectedMentor.name} to Proposal
            </h3>
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-4">Select an approved proposal to assign this mentor:</p>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {approvedProposals.map((proposal) => (
                  <div
                    key={proposal.id}
                    onClick={() => setSelectedProposal(proposal.id)}
                    className={`p-4 rounded-lg border cursor-pointer transition-colors
                      ${selectedProposal === proposal.id 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-blue-300'
                      }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-gray-900">{proposal.title}</h4>
                      <span className="text-sm text-gray-500">{proposal.startup.name}</span>
                    </div>
                    <p className="text-sm text-gray-600">{proposal.description}</p>
                  </div>
                ))}
                {approvedProposals.length === 0 && (
                  <p className="text-center text-gray-500 py-4">No approved proposals available</p>
                )}
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowAssignModal(false);
                  setSelectedMentor(null);
                  setSelectedProposal(null);
                }}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleAssignSubmit}
                disabled={!selectedProposal}
                className={`px-4 py-2 rounded-lg text-white
                  ${selectedProposal 
                    ? 'bg-blue-600 hover:bg-blue-700' 
                    : 'bg-gray-400 cursor-not-allowed'
                  }`}
              >
                Assign Mentor
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mentors;
