"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { otpSchema } from "@/lib/schemas/authSchemas";
import { z } from "zod";
import { useEffect, useRef, useState } from "react";

export default function OtpForm() {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const [timer, setTimer] = useState(45);

  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof otpSchema>>({
    resolver: zodResolver(otpSchema),
    defaultValues: { otp: "" },
    mode: "onChange",
  });

  const onSubmit = (data: z.infer<typeof otpSchema>) => {
    console.log(data.otp);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
    value: string,
    onChange: (val: string) => void,
  ) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      const otpArray = value.padEnd(4, " ").split("");

      if (otpArray[index] !== " ") {
        otpArray[index] = " ";
        onChange(otpArray.join(""));
      } else if (index > 0) {
        otpArray[index - 1] = " ";
        onChange(otpArray.join(""));
        inputsRef.current[index - 1]?.focus();
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-full justify-between items-center"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 w-full">
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            We just sent an SMS
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Enter the security code we sent to
            <br />
            +32 123456789
          </p>
        </div>
        <button className="text-blue-600 font-semibold mt-4 sm:mt-0">
          Edit
        </button>
      </div>

      <Controller
        name="otp"
        control={control}
        render={({ field }) => {
          // Normalize value to always be 6 chars long with spaces for empty slots
          const value = (field.value || "").padEnd(6, " ");

          return (
            <div className="flex gap-2 justify-center">
              {[0, 1, 2, 3, 4, 5].map((index) => {
                const char = value[index];
                return (
                  <input
                    key={index}
                    ref={(el) => {
                      inputsRef.current[index] = el;
                    }}
                    type="tel"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    maxLength={1}
                    value={char === " " ? "" : char}
                    className={`w-12 h-14 sm:w-18.75 sm:h-21.5 text-center text-xl sm:text-2xl p-0 border-2 border-[#e7eaeb] rounded-[18px] bg-[#f2f2f2] focus:border-[#0C59B6] outline-none`}
                    // onchange
                    onChange={(e) => {
                      const val = e.target.value;
                      // Allow only number input
                      if (val && !/^\d+$/.test(val)) return;

                      // Construct new OTP string preserving positions
                      const otpArray = value.split("");
                      otpArray[index] = val || " ";
                      const newOtp = otpArray.join("");

                      field.onChange(newOtp);

                      // Move focus to next input if a digit was entered
                      if (val && index < 5) {
                        inputsRef.current[index + 1]?.focus();
                      }
                    }}
                    // onpaste
                    onPaste={(e) => {
                      e.preventDefault();

                      const pasted = e.clipboardData.getData("text").trim();

                      if (!/^\d{6}$/.test(pasted)) return;

                      field.onChange(pasted);
                      inputsRef.current[5]?.focus();
                    }}
                    // onkeydown
                    onKeyDown={(e) =>
                      handleKeyDown(e, index, value, field.onChange)
                    }
                  />
                );
              })}
            </div>
          );
        }}
      />

      {errors.otp && (
        <p className="text-center text-red-500 text-sm">{errors.otp.message}</p>
      )}

      <div className="flex flex-col w-full sm:flex-row items-center justify-between mb-8">
        <p className="text-base sm:text-lg">
          Didn&apos;t get the code?{" "}
          <button className="text-blue-600 font-semibold">Resend it</button>
        </p>
        <div className="flex items-center gap-2 mt-4 sm:mt-0">
          <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center">
            ⏱
          </div>
          <span className="font-semibold">{timer}s</span>
        </div>
      </div>

      <button className="w-full bg-black text-white py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium">
        Submit
      </button>
    </form>
  );
}
