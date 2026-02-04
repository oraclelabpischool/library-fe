'use client';


import Image from "next/image";
import styles from "./page.module.css";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

export default function Home() {

  const [showPassword, setShowPassword] = useState(false)

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
        <div className={styles.intro}>
          <input
            type="text"
            className="w-100 border-b-2"
            placeholder="email" />
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
              placeholder="password" />
          </div>
          <button className="w-full bg-blue-400 text-white rounded">Submit</button>
        </div>
      </main>
    </div>
  );
}
