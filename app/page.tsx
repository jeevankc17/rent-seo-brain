import { Grid } from "lucide-react";
import Header from "../components/registry/seraui/header";
import GridBackgroundView from "@components/registry/seraui/grid";

export default function Home() {
  return (
    <div className="w-full bg-neutral-900">
      <div className="p-[27px] w-full">
        <Header />
      </div>
      <div className="relative w-full h-screen">
        <GridBackgroundView />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg width={100} height={100} viewBox="0 0 100 100">
            <path
              d="M 20 20 L 20 80 L 80 80"
              stroke="black"
              strokeWidth={1}
              fill="none"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
