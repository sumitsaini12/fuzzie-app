import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center gap-4">
      <h1 className="flex items-center justify-center text-5xl font-semibold text-red-500">
        Fuzzie App Clone
      </h1>
      <Button>Submit</Button>
    </main>
  );
}
