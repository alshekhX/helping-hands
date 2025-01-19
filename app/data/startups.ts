
interface Startup {
    id: number;
    name: string;
    description: string;
    industry: string;
    imageUrl: string;
    fundingStage: string;
    highlights: string[];
    companyInfo: string;
  }
  
  export const startupsList: Startup[] = [
    {
      id: 1,
      name: "DiagnosticAI",
      description: "Advanced AI-powered diagnostic imaging analysis for early disease detection.",
      industry: "Medical Imaging",
      imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500&h=300&fit=crop",
      fundingStage: "Series A",
      highlights: [
        "Cutting-edge AI technology",
        "Rapid disease detection",
        "Collaborations with top hospitals"
      ],
      companyInfo: "Based in Riyadh, Saudi Arabia, DiagnosticAI partners with leading hospitals to provide state-of-the-art diagnostic solutions."
    },
    {
      id: 2,
      name: "TeleHealth Plus",
      description: "Comprehensive telemedicine platform connecting patients with specialists across Saudi Arabia.",
      industry: "Telemedicine",
      imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=500&h=300&fit=crop",
      fundingStage: "Seed",
      highlights: [
        "24/7 specialist availability",
        "Secure patient data management",
        "User-friendly mobile app"
      ],
      companyInfo: "Headquartered in Jeddah, TeleHealth Plus revolutionizes remote healthcare access throughout Saudi Arabia."
    },
    {
      id: 3,
      name: "RehabTech",
      description: "Digital rehabilitation platform providing personalized recovery programs and progress tracking.",
      industry: "Rehabilitation",
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      fundingStage: "Series B",
      highlights: [
        "Personalized recovery plans",
        "Real-time progress monitoring",
        "Integration with wearable devices"
      ],
      companyInfo: "Operating out of Dammam, RehabTech offers innovative rehabilitation solutions tailored to individual needs in Saudi Arabia."
    },
    {
      id: 4,
      name: "TherapyConnect",
      description: "Personalized mental health therapy platform connecting patients with licensed therapists.",
      industry: "Mental Health",
      imageUrl: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=500&h=300&fit=crop",
      fundingStage: "Seed",
      highlights: [
        "Wide network of licensed therapists",
        "Confidential and secure sessions",
        "Flexible appointment scheduling"
      ],
      companyInfo: "Located in Riyadh, TherapyConnect is dedicated to improving mental health services across Saudi Arabia."
    },
    {
      id: 5,
      name: "MentalHealth AI",
      description: "AI-driven mental health assessment and therapy recommendation platform.",
      industry: "Mental Health",
      imageUrl: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=500&h=300&fit=crop",
      fundingStage: "Series A",
      highlights: [
        "AI-based assessments",
        "Personalized therapy recommendations",
        "Data-driven mental health insights"
      ],
      companyInfo: "Based in Mecca, MentalHealth AI leverages artificial intelligence to enhance mental wellness services in Saudi Arabia."
    },
    {
      id: 6,
      name: "SmartCare Solutions",
      description: "IoT-enabled remote patient monitoring and predictive healthcare analytics.",
      industry: "Digital Health",
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=300&fit=crop",
      fundingStage: "Seed",
      highlights: [
        "Real-time patient monitoring",
        "Predictive health analytics",
        "Seamless integration with healthcare systems"
      ],
      companyInfo: "Situated in Medina, SmartCare Solutions provides innovative IoT healthcare solutions across Saudi Arabia."
    },
    {
      id: 7,
      name: "PharmaConnect",
      description: "Blockchain-based platform for secure and transparent pharmaceutical supply chains.",
      industry: "Pharmaceuticals",
      imageUrl: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=500&h=300&fit=crop",
      fundingStage: "Series A",
      highlights: [
        "Enhanced supply chain transparency",
        "Secure blockchain transactions",
        "Reduction in counterfeit medications"
      ],
      companyInfo: "Operating from Riyadh, PharmaConnect ensures the integrity of pharmaceutical supply chains throughout Saudi Arabia."
    },
    {
      id: 8,
      name: "HealthHub Saudi",
      description: "Integrated health management system offering comprehensive patient care solutions.",
      industry: "Healthcare IT",
      imageUrl: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=500&h=300&fit=crop",
      fundingStage: "Series B",
      highlights: [
        "Comprehensive patient records",
        "Integrated care coordination",
        "Advanced data analytics"
      ],
      companyInfo: "Based in Jeddah, HealthHub Saudi enhances healthcare delivery through advanced IT solutions across the kingdom."
    },
    {
      id: 9,
      name: "FitLife Arabia",
      description: "Personalized fitness and wellness platform tailored to Saudi lifestyles.",
      industry: "Fitness & Wellness",
      imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=300&fit=crop",
      fundingStage: "Seed",
      highlights: [
        "Customized workout plans",
        "Nutrition tracking",
        "Community support features"
      ],
      companyInfo: "Located in Dammam, FitLife Arabia promotes healthy living through personalized fitness solutions in Saudi Arabia."
    },
    {
      id: 10,
      name: "CareTrack",
      description: "Comprehensive eldercare management platform ensuring quality care for the elderly.",
      industry: "Elder Care",
      imageUrl: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=500&h=300&fit=crop",
      fundingStage: "Series A",
      highlights: [
        "24/7 care monitoring",
        "Family access and updates",
        "Integration with local healthcare providers"
      ],
      companyInfo: "Headquartered in Riyadh, CareTrack is committed to providing exceptional eldercare services across Saudi Arabia."
    },
  ];
  