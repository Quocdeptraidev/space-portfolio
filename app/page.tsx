// import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { Home } from "@/components/main/home";
import { Contact } from "@/components/main/contact";

export default function Page() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Home/>
        <Hero />
        <Skills />
        <Projects />
        <Contact/>
      </div>
    </main>
  );
}
