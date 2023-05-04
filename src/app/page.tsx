import Container from "@/components/organisms/container/container";
import LayoutManager from "@/components/organisms/layoutManager/layoutManager";
import StepsManager from "@/components/organisms/stepsManager/stepsManager";

export default function Home() {
  return (
    <main className="flex items-center justify-center bg-slate-200 h-screen w-screen">
      <Container>
        <StepsManager />

        <LayoutManager layoutStep="your info" />
      </Container>
    </main>
  );
}
