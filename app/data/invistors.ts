

export interface Investor {
    id: number;
    companyName: string;
    description: string;
    imageUrl: string;
    investmentRange: string;
    focusAreas: string[];
  }
export const investorsData : Investor[] = [
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
    