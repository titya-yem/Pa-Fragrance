"use client";

import { SessionProvider, useSession } from "next-auth/react";
import Navbar from "./Navbar";

export default function NavbarWrapper() {
  const { data: session } = useSession();
  return (
    <SessionProvider session={session}>
      <Navbar />
    </SessionProvider>
  );
}
