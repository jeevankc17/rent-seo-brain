import { Grid } from "lucide-react";
import Header from "../components/registry/seraui/header";
import GridBackgroundView from "@components/registry/seraui/grid";

export default function Home() {
  return (
    <main className="w-full bg-neutral-900">
      <section className="relative w-full h-[960px]">
        <GridBackgroundView />
        {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg width={100} height={100} viewBox="0 0 100 100">
            <path
              d="M 20 20 L 20 80 L 80 80"
              stroke="black"
              strokeWidth={1}
              fill="none"
            />
          </svg>
        </div> */}
      </section>
      <section className="relative w-full h-[1440px] bg-primary-100"></section>
    </main>
  );
}



