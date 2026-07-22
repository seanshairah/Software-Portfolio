import { Hero } from "@/components/sections/hero";
import { Manifesto } from "@/components/sections/manifesto";
import { SelectedSystems } from "@/components/sections/selected-systems";
import { Capabilities } from "@/components/sections/capabilities";
import { HowSeanThinks } from "@/components/sections/how-sean-thinks";
import { ProjectArchive } from "@/components/sections/project-archive";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { AboutPreview } from "@/components/sections/about-preview";
import { PlaygroundPreview } from "@/components/sections/playground-preview";
import { ContactCta } from "@/components/sections/contact-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <SelectedSystems />
      <Capabilities />
      <HowSeanThinks />
      <ProjectArchive />
      <ProcessTimeline />
      <AboutPreview />
      <PlaygroundPreview />
      <ContactCta />
    </>
  );
}
