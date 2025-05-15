"use client";

import { useForm } from "react-hook-form";
import { LoginFormData, LoginSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
  });

  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const onSubmit = async (data: LoginFormData) => {
    setLoading(true);
    setServerError("");

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) {
      setServerError(result.error || "Something went wrong");
    } else {
      router.push("/admin"); 
      router.refresh();
    }

    setLoading(false);
  };

  return (
    
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md w-full mx-auto p-6 bg-white shadow rounded-lg space-y-4">
       <h2 className="text-2xl font-bold text-center">Login</h2>

      <input {...register("email")} placeholder="Email" className="input w-full border border-gray-300 p-2 rounded-xl" />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <input {...register("password")} type="password" placeholder="Password" className="input w-full border border-gray-300 p-2 rounded-xl" />
      {errors.password && <p className="text-red-500">{errors.password.message}</p>}

      {serverError && <p className="text-red-500">{serverError}</p>}


      <button 
      type="submit" 
      className="btn w-auto  bg-[#D3B466] text-white p-2 rounded hover:bg-black" 
      disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
   
  );
}
