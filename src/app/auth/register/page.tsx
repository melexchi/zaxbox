// import RegisterForm from "@/app/myComponents/auth/RegisterForm";
import NotFound from "@/app/not-found";
import { Router } from "next/router";


export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* <RegisterForm /> */}
      <NotFound/>
    </main>
  );
}