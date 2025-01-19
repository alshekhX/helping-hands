"use client";

import { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { proposals } from "../page"; // Import proposals from the main proposals page

const Proposal = () => {
  const params = useParams();
  const proposalId = Number(params.id);
  
  // Find the specific proposal from the proposals array
  const proposalDetails = proposals.find(p => p.id === proposalId);

  const [showRejectionModal, setShowRejectionModal] = useState(false);
  const [rejectionReason, setRejectionReason] = useState("");
  const [status, setStatus] = useState<"Pending" | "Approved" | "Rejected">(
    proposalDetails?.status || "Pending"
  );

  // If proposal not found, show error state
  if (!proposalDetails) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Proposal not found</h1>
      </div>
    );
  }

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

  // Rest of the component remains the same, just use proposalDetails instead of the static data
  const handleApprove = () => {
    setStatus("Approved");
    // In a real app, you would make an API call here
  };

  const handleReject = () => {
    setShowRejectionModal(true);
  };

  const submitRejection = () => {
    if (rejectionReason.trim()) {
      setStatus("Rejected");
      setShowRejectionModal(false);
      // In a real app, you would make an API call here with the rejection reason
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
        <div className="relative h-64">
          <Image
            src={proposalDetails.startup.imageUrl}
            alt={proposalDetails.startup.name}
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
            <h1 className="text-3xl font-bold text-white mb-2">{proposalDetails.title}</h1>
            <div className="flex items-center gap-4">
              <span className="text-white/90">{proposalDetails.startup.name}</span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(status)}`}>
                {status}
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
            <h2 className="text-xl font-semibold mb-4">Description</h2>
            <p className="text-gray-600">{proposalDetails.description}</p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-4">Startup Details</h2>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Industry</p>
                <p className="font-medium">{proposalDetails.startup.industry}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-4">Funding Request</h2>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Amount Requested</p>
                <p className="text-2xl font-bold text-blue-600">{proposalDetails.requestedFunding}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Submitted Date</p>
                <p className="font-medium">{new Date(proposalDetails.submittedDate).toLocaleDateString()}</p>
              </div>
            </div>
          </div>

          {status === "Pending" && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-4">Decision</h2>
              <div className="space-y-3">
                <button
                  onClick={handleApprove}
                  className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Approve Proposal
                </button>
                <button
                  onClick={handleReject}
                  className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Reject Proposal
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Rejection Modal */}
      {showRejectionModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
            <h3 className="text-xl font-semibold mb-4">Rejection Reason</h3>
            <textarea
              value={rejectionReason}
              onChange={(e) => setRejectionReason(e.target.value)}
              className="w-full h-32 p-2 border rounded-lg mb-4"
              placeholder="Please provide a reason for rejection..."
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowRejectionModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={submitRejection}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Submit Rejection
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Proposal;
