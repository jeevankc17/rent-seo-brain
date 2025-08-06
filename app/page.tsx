import { Grid } from "lucide-react";
import Header from "../components/registry/seraui/header";
import GridBackgroundView from "@components/registry/seraui/grid";
import NewGrid from "@components/registry/seraui/NewGrid";
import NewGrid1 from "@components/registry/seraui/NewGrid1";
import NewGrid2 from "@components/registry/seraui/NewGrid2";
import NewGrid3 from "@components/registry/seraui/NewGrid3";
import NewGrid4 from "@components/registry/seraui/NewGrid4";
import NewGrid5 from "@components/registry/seraui/NewGrid5";
import NewGrid6 from "@components/registry/seraui/NewGrid6";
import NewGrid7 from "@components/registry/seraui/NewGrid7";
import NewGrid8 from "@components/registry/seraui/NewGrid8";

export default function Home() {
  return (
    <main className="w-full bg-neutral-900">
      <section className="relative w-full h-[922px]">
        <GridBackgroundView />
      </section>
      <section className="relative bg-grey-100 pt-[132px]">
        <NewGrid />
      </section>
      <section className="relative  bg-grey-100 pt-[132px]">
        <NewGrid1 />
      </section>
      <section className="relative bg-grey-100 pt-[132px]">
        <NewGrid2 />
      </section>
      <section className="relative bg-grey-100 pt-[132px]">
        <NewGrid3 />
      </section>
      <section className="relative bg-grey-100 pt-[132px]">
        <NewGrid4 />
      </section>
      <section className="relative w-full bg-grey-100 pt-[132px]">
        <NewGrid5 />
      </section>
      <section className="relative bg-grey-100 pt-[132px]">
        <NewGrid6 />
      </section>
      <section className="relative bg-grey-100 pt-[132px]">
        <NewGrid7 />
      </section>
      <section className="relative bg-grey-100 pt-[132px]">
        <NewGrid8 />
      </section>
    </main>
  );
}
