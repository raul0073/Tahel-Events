
'use client'
import Entry from "@/components/root/Entry/Entry";
import { UserType } from "@/lib/DB/Models/Employee";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import secureLocalStorage from "react-secure-storage";

export default function Page() {

  return (
      <section className="w-full flex min-h-screen justify-center items-center p-8">
        <Entry />
      </section>
  );
}
