"use client";
import React, { useState } from "react";
import { auth } from "../firebase/config";
import { signOut, getAuth } from "firebase/auth";
import { useAuthContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "../../assets/DCA-Logo_New-1-1.png";
import { MagicCard } from "@/components/magicui/magic-card";

export default function Dashboard() {
  const { user } = useAuthContext();
  const [mail, setMail] = useState("");
  const [uid, setUid] = useState("");
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    signOut(auth);
    router.push("/");
  };
  React.useEffect(() => {
    if (user == null) {
      router.push("/");
    } else {
      const mail = setMail(user.email);
      const uid = setUid(user.uid);
    }
  }, [router, user]);

  return (
    <div className="flex h-screen flex-col">
      <div className="border w-full h-16 flex flex-row justify-end items-center">
        <Image
          src={Logo}
          width={140}
          height={40}
          alt="Picture of the company"
          className="absolute left-8"
        />
        <button className="mr-8 px-4 py-2 rounded-md hover:shadow hover:shadow-black transition-all duration-300 ease-in-out font-bold">
          create user +
        </button>
        <div
          onClick={handleLogout}
          className="text-black font-bold truncate w-56 mr-8 hover:w-auto hover:underline cursor-pointer transition duration-700 ease-in-out"
        >
          welcome {mail}
        </div>
      </div>
      <div className="flex-1 bg-red-500 w-full">hello</div>
    </div>
  );
}
