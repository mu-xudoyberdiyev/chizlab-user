import { Suspense } from "react";
import Hero from "../components/Hero";
import MaterialsSkleton from "../components/loaders/MaterialsSkleton";
import Materials from "../components/Materials";
import Sections from "../components/Sections";

export default function Page() {
  return (
    <>
      <Hero />
      <Sections />
      <Suspense fallback={<MaterialsSkleton length={12} />}>
        <Materials />
      </Suspense>
    </>
  );
}
