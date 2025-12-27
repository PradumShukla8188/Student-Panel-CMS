"use client";

import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const StudentLogin = () => {
  const Router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ["student-login"],
    mutationFn: async (data: any) =>
      fetch("/api/student/login-student", data),
    onSuccess: () => {
      Router.push("/student/student-dashboard");
    },
  });

  const onSubmit = (data: any) => {
    console.log("Login Data:", data);
    if (data) Router.push("/student/student-dashboard");
    // mutate(data);
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-2xl rounded-xl px-8 py-6 w-full max-w-md border"
      >
        <h2 className="text-2xl font-semibold text-center text-cyan-700 mb-6">
          Student Login
        </h2>

        {/* Email */}
        <label className="block mb-1 font-medium text-gray-700">
          Email
        </label>
        <input
          type="text"
          placeholder="Enter email"
          className="w-full border rounded-lg px-3 py-2 mb-2 outline-none focus:ring-2 focus:ring-cyan-500"
          {...register("email", {
            required: "Email is required",
          })}
        />
        {errors?.email && (
          <p className="text-red-500 mb-2 text-sm">
            {errors.email.message as string}
          </p>
        )}

        {/* Password */}
        <label className="block mb-1 font-medium text-gray-700">
          Password
        </label>

        <div className="relative mb-2">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-500"
            {...register("password", {
              required: "Password is required",
            })}
          />

          <span
            className="absolute right-3 top-2.5 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            <Image
              src={showPassword ? "/images/eye.svg" : "/images/cut-eye.svg"}
              alt="Toggle password visibility"
              width={24}
              height={21}
            />
          </span>
        </div>

        {errors?.password && (
          <p className="text-red-500 mb-4 text-sm">
            {errors.password.message as string}
          </p>
        )}

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition shadow"
          disabled={!isDirty || !isValid || isPending}
        >
          {isPending ? "Please wait..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default StudentLogin;
