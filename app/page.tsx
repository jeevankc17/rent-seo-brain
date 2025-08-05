import { Grid } from "lucide-react";
import Header from "../components/registry/seraui/header";
import GridBackgroundView from "@components/registry/seraui/grid";
import NewGrid from "@components/registry/seraui/NewGrid";

export default function Home() {
  return (
    <main className="w-full bg-neutral-900">
      <section className="relative w-full h-[922px]">
        <GridBackgroundView />
      </section>
      <section className="relative w-full h-[1440px] bg-grey-100">
        <NewGrid />
      </section>
    </main>
  );
}
