import {Sun, Clock, Star, CheckCircle2, Search, Plus} from "lucide-react";

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

        <div className="flex flex-col justify-start justify-items-start items-center h-full w-3/4">
          <div className="border-b flex flex-col justify-center justify-items-center items-start w-full p-6">
            <h1>TODAY</h1>
            <h3>2024/10/4 - 1 Rabi II 1446</h3>
          </div>

          <div className="overflow-y-scroll overflow-x-hidden row-span-8 flex flex-col justify-start justify-items-start items-center w-full gap-4 p-6">
          </div>

          <button className="btn-primary absolute right-0 bottom-0 gap-3 m-9 p-3"><Plus/></button>
        </div>
      </div>
    </main>
  );
}
