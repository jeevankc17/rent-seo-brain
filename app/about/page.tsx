import { Grid } from "lucide-react";
import Header from "../../components/registry/seraui/header";
import AboutGridBackgroundView from "@components/Home-Page/Hero-Section";

export default function Home() {
  return (
    <div className="w-full bg-neutral-900">
      <div className="relative w-full h-[960px]">
        <AboutGridBackgroundView />
      </div>
      {/* <div className="relative w-full h-[1440px] bg-primary-100"></div> */}
    </div>
  );
}
