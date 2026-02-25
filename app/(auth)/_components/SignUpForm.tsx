"use client";

import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signUpSchema } from "@/lib/schemas/authSchemas";
import { register } from "module";

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { fullName: "", email: "", password: "" },
  });

  const onSubmit = (data: z.infer<typeof signUpSchema>) => {
    console.log(data);
  };

  return (
    <div className="pt-6">
      {/* Form Fields */}
      <form
        id="signup"
        className="space-y-6 mb-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Full Name */}
        <div>
          <label className="block text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">
            Full name
          </label>
          <input
            {...register("fullName")}
            type="text"
            placeholder="Enter your full name"
            className="w-full py-2.5 sm:py-3 px-3 sm:px-6 bg-gray-50 rounded-lg text-sm sm:text-base md:text-lg text-gray-600 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="Enter your email address"
            className="w-full py-2.5 sm:py-3 px-3 sm:px-6 bg-gray-50 rounded-lg text-sm sm:text-base md:text-lg text-gray-600 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">
            Password
          </label>
          <div className="relative">
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full py-2.5 sm:py-3 px-3 sm:px-6 bg-gray-50 rounded-lg text-sm sm:text-base md:text-lg text-gray-600 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-blue-500 pr-12"
            />
            <button
              type="button"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              className="cursor-pointer absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8"
            >
              {showPassword ? (
                <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <EyeClosed className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
      </form>

      {/* Sign Up Button */}
      <button
        type="submit"
        form="signup"
        className="cursor-pointer w-full bg-black text-white py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium hover:bg-gray-900 transition-colors mb-6"
      >
        Sign Up
      </button>

      {/* Or Divider */}
      <div className="flex items-center justify-between mb-6">
        <div className="h-px bg-gray-300 flex-1" />
        <span className="px-3 text-sm sm:text-base text-gray-500">Or</span>
        <div className="h-px bg-gray-300 flex-1" />
      </div>

      {/* Google Sign Up */}
      <button className="cursor-pointer w-full h-14 sm:h-16 border-2 border-gray-300 rounded-lg flex items-center justify-center gap-3 sm:gap-4 mb-3 hover:bg-gray-50 transition-colors">
        <span className="text-sm sm:text-base font-medium">
          Sign Up with Google
        </span>
      </button>

      {/* Facebook Sign Up */}
      <button className="cursor-pointer w-full h-14 sm:h-16 bg-[#1877f2] rounded-lg flex items-center justify-center gap-3 sm:gap-4 hover:bg-[#1565d8] transition-colors">
        <span className="text-sm sm:text-base font-medium text-white">
          Sign Up with Facebook
        </span>
      </button>
    </div>
  );
}
