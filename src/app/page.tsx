'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { useAuthReq } from "./-mutation";
import { useRouter } from "next/navigation";

type MutationError = {
  response?: {
    data?: {
      message?: string;
      errors?: unknown;
    }
  }
};

export default function Home() {

  const router = useRouter();

  const successLogin = (data: {
    token: string
  }) => {

    const typedData = data as {
      token?: string;
    };

    console.log(`TYPE DATA: ${JSON.stringify(typedData)}`)
    localStorage.setItem("token_login", `${typedData.token}`)
    router.push("/book");
  }

  const [showPassword, setShowPassword] = useState(false)
  const { mutate, isPending, isError, error } = useAuthReq(successLogin)

  const [loginState, setLoginState] = useState({
    email: "",
    password: ""
  })

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    mutate(loginState)
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

        {
          isError &&
          (error as MutationError)?.response?.data?.message &&
          <span className="text-red-300 my-3">{(error as MutationError)?.response?.data?.message}</span>
        }

        <form onSubmit={onSubmit}>
          <div className={styles.intro}>
            <input
              type="text"
              className="w-100 border-b-2"
              placeholder="email"
              value={loginState.email}
              onChange={(e) => setLoginState({
                ...loginState,
                email: e?.target?.value
              })}
            />
            <div className="relative">
              {
                showPassword ?
                  <EyeClosed
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0" /> :
                  <Eye
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0" />
              }
              <input
                type={showPassword ? "text" : "password"}
                className="w-100 border-b-2"
                placeholder="password"
                value={loginState.password}
                onChange={(e) => setLoginState({
                  ...loginState,
                  password: e?.target?.value
                })}
              />
            </div>
            <button
              disabled={isPending}
              className="w-full bg-blue-400 text-white rounded">
              {isPending ? "Please wait.." : "Submit"}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
