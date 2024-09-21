import Image from "next/image";
import Link from "next/link";

export default function New() {
  return (
    <main className="flex h-screen w-screen">
      <div className="bg-black lg:block hidden h-full w-1/2"></div>

      <div className="flex flex-col justify-center justify-items-center items-center h-full w-full lg:w-1/2 gap-6 p-6">
        <div className="flex flex-col gap-2">
          <h2>Create an account</h2>
          <p className="max-w-xs">Just type your info below and we will send you an email.</p>
        </div>

        <form className="flex flex-col w-full max-w-xs gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <p className="mx-2">Name</p>
              <input className="border-2 border-black/25 placeholder-black/25 rounded-xl px-4 py-2" type="text" placeholder="Name" required/>
            </div>

            <div className="flex flex-col gap-1">
              <p className="mx-2">Email</p>
              <input className="border-2 border-black/25 placeholder-black/25 rounded-xl px-4 py-2" type="email" placeholder="Email" required/>
            </div>
          </div>

          <button className="btn-primary">Confirm</button>
        </form>

        <div className="flex flex-col gap-2">
          <p className="text-center max-w-xs">By clicking [confirm] you agree to our Terms of Service and Privacy Policy.</p>
        </div>
      </div>

      <Link href={"/auth"} className="btn-secondary fixed top-0 right-0 m-4">Login</Link>
    </main>
  );
}
