import Container from "@/components/organisms/container/container";
import ManagerSteps from "@/components/organisms/managerSteps/managerSteps";

export default function Home() {
  return (
    <main className="flex items-center justify-center bg-slate-200 h-screen w-screen">
      <Container>
        <ManagerSteps />
      </Container>
    </main>
  );
}
