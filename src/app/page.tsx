'use client'

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <main className="flex justify-center items-center gap-4 flex-col h-screen">
      <div className="text-2xl font-bold">
        Landing here
      </div>
      <div 
        onClick={() => router.push('/dashboard')}
        className="cursor-pointer text-neutral-200 hover:text-neutral-500 transition"
      >
        go to the dashboard
      </div>
    </main>
  );
}
