"use client";

import Loader from "./components/ui/Loader";

export default function Home() {
  return (
   <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Loader/>
   </div>
  );
}
