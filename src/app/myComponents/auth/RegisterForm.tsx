// "use client";

// import { useForm } from "react-hook-form";
// import { RegisterSchema, RegisterFormData } from "@/lib/validations";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useState } from "react";

// export default function RegisterForm() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<RegisterFormData>({
//     resolver: zodResolver(RegisterSchema),
//   });

//   const [loading, setLoading] = useState(false);

//   const onSubmit = async (data: RegisterFormData) => {
//     setLoading(true);

//     const res = await fetch("/api/register", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });

//     const result = await res.json();
//     console.log(result);
//     setLoading(false);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="max-w-md w-full mx-auto p-6 bg-white shadow-2xl rounded-lg space-y-4">

//     <h2 className="text-2xl font-bold text-center">Register</h2>

//       <input {...register("name")} placeholder="Name" className="input w-full border  border-gray-300 p-2 rounded-xl" />
//       {errors.name && <p>{errors.name.message}</p>}

//       <input {...register("email")} placeholder="Email" className="input w-full border border-gray-300 p-2 rounded-xl" />
//       {errors.email && <p>{errors.email.message}</p>}

//       <input {...register("password")} type="password" placeholder="Password" className="input w-full border border-gray-300 p-2 rounded-xl" />
//       {errors.password && <p>{errors.password.message}</p>}

//       <button 
//       type="submit" 
//       className="btn w-auto  bg-[#D3B466] text-white p-2 rounded hover:bg-black" 
//       disabled={loading}>
//         {loading ? "Loading..." : "Register"}
//       </button>
//     </form>
//   );
// }
