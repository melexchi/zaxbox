"use client";

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    await fetch("/api/logout", { method: "POST" });
    router.push("/auth/login");
  };

  return (
    <Button
      onClick={handleLogout}
      className="bg-[#D3B466] text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer"
      disabled={loading}
      variant={"outline"}
      
    >
      <LogOut className="h-4 w-4 cursor-pointer" />

      {loading ? "Logging out..." : "Logout"}
    </Button>
  );
}
