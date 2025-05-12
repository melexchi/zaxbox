"use client";

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
    <button
      onClick={handleLogout}
      className="bg-[#D3B466] text-white px-4 py-2 rounded hover:bg-red-600"
      disabled={loading}
    >
      {loading ? "Logging out..." : "Logout"}
    </button>
  );
}
