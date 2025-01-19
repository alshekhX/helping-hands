import Image from "next/image";
import Stats from "@/components/dashboard/Stats";
import DashCharts from "@/components/dashboard/dashCharts";

export default function Home() {
  return (
    <div>
      <Stats />
      <DashCharts />
    </div>
  );
}

