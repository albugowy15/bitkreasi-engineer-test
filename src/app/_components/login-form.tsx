"use client";

import { Input } from "@/components/input";
import clsx from "clsx";
import Link from "next/link";
import { type SubmitHandler, useForm } from "react-hook-form";
import { type LoginResponse } from "../api/login/route";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/button";
import { Label } from "@/components/label";
import { getAPIUrl } from "@/lib/utils";
export interface Input {
  email: string;
  password: string;
}

export default function LoginForm() {
  const form = useForm<Input>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<Input> = (data) => {
    fetch(`${getAPIUrl()}/api/login`, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        if (!res.ok) {
          const data = (await res.json()) as LoginResponse;
          form.setError(data.field ?? "root", { message: data.message });
        }
      })
      .catch((err) => console.log("err: ", err));
  };

  const [togglePassword, setTogglePassword] = useState(false);

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="px-2 font-inter">
      <h1 className="text-xl font-medium sm:text-3xl">
        Selamat Datang di Asadesa 👋
      </h1>
      <p className="pt-2 text-greyscale-secondary">
        Silahkan masukkan detail akun anda
      </p>

      <div className="mt-4 flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <Label htmlFor="emailInput">Email</Label>
          <Input
            type="email"
            id="emailInput"
            placeholder="Masukkan email anda"
            className={clsx([
              form.formState.errors.email &&
                "ring-1 ring-error focus:ring-1 focus:ring-error",
            ])}
            {...form.register("email", {
              required: "Email wajib diisi",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Format email yang anda masukkan salah.",
              },
            })}
          />
          {form.formState.errors.email && (
            <p role="alert" className="text-sm text-greyscale-secondary">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="passwordInput">Kata Sandi</Label>
          <div className="relative flex items-center">
            <Input
              type={togglePassword ? "text" : "password"}
              id="passwordInput"
              placeholder="Masukkan kata sandi"
              className={clsx(
                [
                  form.formState.errors.password &&
                    "ring-1 ring-error focus:ring-1 focus:ring-error",
                ],
                "w-full",
              )}
              {...form.register("password", {
                required: "Kata sandi wajib diisi",
              })}
            />
            <button
              type="button"
              onClick={() => setTogglePassword(!togglePassword)}
              className="absolute right-0 mr-3 hover:cursor-pointer"
            >
              {togglePassword ? (
                <Eye className="h-4 w-4" />
              ) : (
                <EyeOff className="h-5 w-5" />
              )}
            </button>
          </div>
          {form.formState.errors.password && (
            <p role="alert" className="text-sm text-greyscale-secondary">
              {form.formState.errors.password.message}
            </p>
          )}
        </div>
      </div>
      <Link
        href="/forget-password"
        className="mt-2 text-right font-medium text-primary underline underline-offset-4"
      >
        Lupa kata sandi?
      </Link>

      <Button
        type="submit"
        disabled={!form.formState.isValid}
        className="mt-4 w-full"
      >
        Masuk
      </Button>

      <p className="mt-3 text-center font-medium">
        <span>Belum punya akun?</span>{" "}
        <Link
          href="/daftar"
          className="text-primary underline underline-offset-4"
        >
          Daftar
        </Link>
      </p>
    </form>
  );
}
