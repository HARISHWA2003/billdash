"use client";
import React from "react";
import { useRouter } from "next/navigation";
import signIn from "./firebase/auth/signIn";
import SparklesText from "@/components/magicui/sparkles-text";
import Alert from "@mui/material/Alert";
import Logo from "../assets/DCA-Logo_New-1-1.png";
import Image from "next/image";

export default function Home() {
  const [alert, setAlert] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();
  const handleForm = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      setAlert(!false);
      return console.log(error);
    }

    // else successful
    console.log(result);
    console.log("succesfull");
    setAlert(false);
    return router.push("/dashboard");
  };
  return (
    <main className="flex w-full h-screen bg-[#FAF9F6] flex-row">
      <div className="text-black w-3/5 bg-[#EDEADE]"></div>
      <div className="text-black w-2/5 flex flex-col justify-center items-center">
        <Image
          src={Logo}
          width={300}
          height={300}
          alt="Picture of the company"
          className="mb-20"
        />
        <form
          onSubmit={handleForm}
          className="w-full flex flex-col justify-center items-center"
        >
          <div className="">
            <SparklesText text="Admin Login" className="text-[#121212]" />
          </div>
          <div className="flex flex-col w-full justify-center items-center">
            <input
              type="email"
              className="bg-white w-2/3 mt-14 h-10 border border-black rounded-md px-4 mx-4 text-black"
              placeholder=" email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-col w-full justify-center items-center">
            <input
              type="password"
              className="bg-white w-2/3 mt-8 h-10 border border-black rounded-md px-4 mx-4 text-black"
              placeholder=" password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <button
            type="submit"
            className="m-4 mt-10 w-1/3 bg-[#121212] p-2 rounded-lg text-white font-semibold text-2xl hover:scale-105 transition-all"
          >
            Login
          </button>
          <div className="w-2/5 mt-10">
            {alert ? (
              <Alert variant="filled" severity="error">
                Wrong email or password.
              </Alert>
            ) : (
              <div></div>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}
