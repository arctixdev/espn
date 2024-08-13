import { OptimalTable } from "@/lib/optimal-player";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>ESPN football AI agent</h1>
      <div className="h-[80vh] min-w-[70vw] bg-primary-foreground rounded-lg p-12 my-4 max-w-full">
        <h2>Optimal player setup for you is:</h2>
        <OptimalTable />
      </div>
      <p>
        Made by Jonathan Bangert :)
      </p>
    </main>
  );
}
