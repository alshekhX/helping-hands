"use client";

import { 
  MdVideocam, 
  MdCall, 
  MdChat 
} from "react-icons/md";
import { useState } from "react";
import { investorsData } from "@/app/data/invistors";
import { startupsList } from "@/app/data/startups";
import { toast,Toaster } from 'react-hot-toast';

interface CommunicationCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

interface Meeting {
  id: string;
  title: string;
  type: "video" | "voice" | "chat";
  startupName: string;
  investorName: string;
  dateTime: string;
  status: "upcoming" | "completed" | "cancelled";
}

const initialMeetings: Meeting[] = [
  {
    id: "1",
    title: "Investment Discussion",
    type: "video",
    startupName: "HealthTech Solutions",
    investorName: "Saudi Ventures",
    dateTime: "2024-03-25T10:00",
    status: "upcoming"
  },
  {
    id: "2",
    title: "Project Review",
    type: "voice",
    startupName: "MedAI",
    investorName: "Gulf Investments",
    dateTime: "2024-03-20T14:30",
    status: "completed"
  },
];

const CommunityPage = () => {
  const [meetings, setMeetings] = useState<Meeting[]>(initialMeetings);
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CommunicationCard | null>(null);
  const [meetingName, setMeetingName] = useState("");
  const [selectedStartup, setSelectedStartup] = useState("");
  const [selectedInvestor, setSelectedInvestor] = useState("");
  const [meetingDateTime, setMeetingDateTime] = useState("");

  const communicationCards: CommunicationCard[] = [
    {
      id: "video",
      title: "Create Video Meeting",
      description: "Start a face-to-face video conference with other members of the community. Perfect for detailed discussions and presentations.",
      icon: <MdVideocam size={40} />,
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      id: "voice",
      title: "Create Voice Meeting",
      description: "Initialize an audio-only meeting room for efficient voice communications and group discussions.",
      icon: <MdCall size={40} />,
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      id: "chat",
      title: "Chat Channels",
      description: "Join or create text-based chat channels for ongoing discussions and community engagement.",
      icon: <MdChat size={40} />,
      color: "bg-purple-500 hover:bg-purple-600"
    }
  ];

  const handleCardClick = (card: CommunicationCard) => {
    setSelectedCard(card);
    setShowModal(true);
  };

  const handleCreateMeeting = () => {
    const newMeeting: Meeting = {
      id: Date.now().toString(),
      title: meetingName,
      type: selectedCard?.id as "video" | "voice" | "chat",
      startupName: startupsList.find(s => s.id === parseInt(selectedStartup))?.name || "",
      investorName: investorsData.find(i => i.id === parseInt(selectedInvestor))?.companyName || "",
      dateTime: meetingDateTime,
      status: "upcoming"
    };

    setMeetings([newMeeting, ...meetings]);
    setShowModal(false);
    setSelectedCard(null);
    setMeetingName("");
    setSelectedStartup("");
    setSelectedInvestor("");
    setMeetingDateTime("");
    toast.success("Meeting Created Successfully!");
  };

  return (
    <>
      <Toaster position="top-right"  />
      <div className="p-6 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Community Hub</h1>
          <p className="mt-2 text-gray-600">Connect with other members through various communication channels</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communicationCards.map((card) => (
            <button
              key={card.id}
              onClick={() => handleCardClick(card)}
              className="w-full text-left"
            >
              <div className={`h-full p-6 rounded-xl shadow-sm border border-gray-200 bg-white 
                transform transition-all duration-200 hover:scale-105 hover:shadow-md`}
              >
                <div className={`inline-block p-3 rounded-lg ${card.color} text-white mb-4`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600">
                  {card.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Meetings History */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Meetings History</h2>
          <div className="space-y-4">
            {meetings.map((meeting) => (
              <div
                key={meeting.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-4"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{meeting.title}</h3>
                    <p className="text-sm text-gray-600">
                      {meeting.startupName} with {meeting.investorName}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {new Date(meeting.dateTime).toLocaleString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full
                      ${meeting.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
                        meeting.status === 'completed' ? 'bg-green-100 text-green-800' :
                        'bg-red-100 text-red-800'}`}
                    >
                      {meeting.status.charAt(0).toUpperCase() + meeting.status.slice(1)}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full
                      ${meeting.type === 'video' ? 'bg-purple-100 text-purple-800' :
                        meeting.type === 'voice' ? 'bg-green-100 text-green-800' :
                        'bg-blue-100 text-blue-800'}`}
                    >
                      {meeting.type.charAt(0).toUpperCase() + meeting.type.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {showModal && selectedCard && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
              <h3 className="text-xl font-semibold mb-4">
                {selectedCard.title}
              </h3>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Meeting Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter meeting name..."
                  value={meetingName}
                  onChange={(e) => setMeetingName(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Investors
                </label>
                <select className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={selectedInvestor}
                  onChange={(e) => setSelectedInvestor(e.target.value)}
                >
                  {investorsData.map((investor) => (
                    <option key={investor.id} value={investor.id}>
                      {investor.companyName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Startups
                </label>
                <select className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={selectedStartup}
                  onChange={(e) => setSelectedStartup(e.target.value)}
                >
                  {startupsList.map((startup) => (
                    <option key={startup.id} value={startup.id}>
                      {startup.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Meeting Time
                </label>
                <input
                  type="datetime-local"
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={meetingDateTime}
                  onChange={(e) => setMeetingDateTime(e.target.value)}
                />
              </div>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => {
                    setShowModal(false);
                    setSelectedCard(null);
                  }}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCreateMeeting}
                  className={`px-6 py-2 rounded-lg text-white ${selectedCard.color}`}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CommunityPage;
