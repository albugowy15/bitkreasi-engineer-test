import { type Input } from "@/app/_components/login-form";
import { type NextRequest, NextResponse } from "next/server";

export interface LoginResponse {
  status: "success" | "fail";
  field?: keyof Input;
  message: string;
}

export async function POST(
  request: NextRequest,
): Promise<NextResponse<LoginResponse>> {
  const data = (await request.json()) as Input;
  if (data.email !== "wawan@gmail.com") {
    const response: LoginResponse = {
      status: "fail",
      message: "Email ini belum terdaftar.",
      field: "email",
    };
    return NextResponse.json(response, { status: 400 });
  }
  if (data.password !== "password") {
    const response: LoginResponse = {
      status: "fail",
      message: "Kata sandi yang anda masukkan salah.",
      field: "password",
    };
    return NextResponse.json(response, { status: 400 });
  }
  const response: LoginResponse = {
    status: "success",
    message: "Login berhasil",
  };
  return NextResponse.json(response, { status: 200 });
}
