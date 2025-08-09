import { Grid } from "lucide-react";
import Header from "../../components/registry/seraui/header";
import GridBackgroundView from "@components/Home-Page/Hero-Section";
import HomePage from "@components/Landing-Page/Hero-Section";

export default function Home() {
  return (
    <div className="w-full bg-neutral-900">
      <div className="relative h-[960px]">
        <HomePage />
      </div>
      <div className="relative w-full h-[1440px] bg-primary-100"></div>
    </div>
  );
}
