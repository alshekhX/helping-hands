
interface Startup {
    id: number;
    name: string;
    industry: string;
    imageUrl: string;
  }
  
  interface Proposal {
    id: number;
    title: string;
    description: string;
    startup: Startup;
    status: "Pending" | "Approved" | "Rejected";
    requestedFunding: string;
    submittedDate: string;
  }
  
  export const proposalsList: Proposal[] = [
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