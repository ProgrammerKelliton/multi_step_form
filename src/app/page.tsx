// Components
import LayoutManager from "@/components/organisms/layoutManager/layoutManager";
import StepsManager from "@/components/organisms/stepsManager/stepsManager";
import Navigation from "@/components/molecules/navigation/navigation";
import Container from "@/components/organisms/container/container";

export default function Home() {
  return (
    <main className="flex items-center justify-center bg-slate-200 h-screen w-screen">
      <Container>
        <StepsManager />

        <div className="w-2/3 pt-10 flex gap-16 flex-col">
          {/* Mudará de acordo o step */}
          <LayoutManager />

          <Navigation />
        </div>
      </Container>
    </main>
  );
}
