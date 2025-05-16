"use client";

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      
      const response = await fetch("/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (response.ok) {
        router.replace("/auth/login");
      } else {
        console.error("Logout failed");
        setLoading(false);
      }
    } catch (err) {
      console.error("Logout error:", err);
      setLoading(false);
    }
  };


  

  return (
    <Button
      onClick={handleLogout}
      type="button" 
      className="bg-[#D3B466] text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer"
      disabled={loading}
      variant={"outline"}
    >
      <LogOut className="h-4 w-4 mr-2" />
      {loading ? "Logging out..." : "Logout"}
    </Button>
  );
}