import {Sun, Clock, Star, CheckCircle2} from "lucide-react";

export default function Home() {
  return (
    <main className="bg-black/5 h-screen w-screen p-3">
      <div className="bg-white shadow-lg rounded-lg flex justify-center justify-items-center items-center h-full w-full">
        <div className="border-r grid grid-cols-1 grid-rows-8 h-full w-1/4">
          <div></div>

          <div className="flex flex-col justify-center justify-items-center items-center row-span-6 p-6 gap-2">
            <button className="btn-primary w-full justify-start gap-3 py-3"><Sun/> Today</button>
            <button className="btn-secondary w-full justify-start gap-3 py-3"><Clock/> Later</button>
            <button className="btn-secondary w-full justify-start gap-3 py-3"><Star/> Favorites</button>
            <button className="btn-secondary w-full justify-start gap-3 py-3"><CheckCircle2/> Completed</button>
          </div>

          <div></div>
        </div>

        <div className="h-full w-3/4"></div>
      </div>
    </main>
  );
}
