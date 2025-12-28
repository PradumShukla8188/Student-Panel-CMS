"use client";

import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
  message: string;
};

export default function StaffLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully");
    reset();
  };

  return (
    <div className="mt-5 min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Staff Login
        </h2>
        <p className="text-center text-gray-500 mt-2">
          Authorized staff contact portal
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="staff@example.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              })}
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600 outline-none"
            />
            {errors.email && (
              <p className="text-sm text-red-600 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters",
                },
              })}
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600 outline-none"
            />
            {errors.password && (
              <p className="text-sm text-red-600 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message / Query
            </label>
            <textarea
              rows={4}
              placeholder="Write your message..."
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Minimum 10 characters required",
                },
              })}
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600 outline-none"
            />
            {errors.message && (
              <p className="text-sm text-red-600 mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-indigo-600 text-white py-3 font-semibold hover:bg-indigo-700 transition disabled:opacity-60"
          >
            {isSubmitting ? "Submitting..." : "Login & Send"}
          </button>
        </form>

        <p className="text-xs text-center text-gray-500 mt-6">
          © {new Date().getFullYear()} Staff Access Only
        </p>
      </div>
    </div>
  );
}
