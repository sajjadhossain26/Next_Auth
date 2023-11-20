"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

export default function page() {
  const { data } = useSession();
  if (!data) {
    redirect("/api/auth/signin");
  }
  console.log(data);
  return <div>page</div>;
}
