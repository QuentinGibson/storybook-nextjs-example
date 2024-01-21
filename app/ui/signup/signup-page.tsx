//TODO: Fix tablet view
//TODO: Finish registration path by adding regristion steps

import Image from "next/image";
import Link from "next/link";
import { inter } from "../../fonts";
import React from "react";
import SocialButton from "../SocialButton";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import SignUpForm from "./signUpForm";

interface SignUpPageProps {
  socialCallbacks: {
    [key: string]: () => Promise<string | undefined | void>;
  };
}

export default function SignUpPage({ socialCallbacks }: SignUpPageProps) {
  return (
    <div className="md:grid md:grid-cols-[1fr_2fr] md:gap-8">
      <div className="hidden p-10 bg-base-300 md:flex items-center justify-center">
        <div className="flex flex-col items-center gap-8">
          <div className="avatar">
            <div className="relative w-48 mask mask-hexagon-2">
              <Image
                src="/league-of-legends-wallpaper.jpg"
                alt={"League of Legends champions posing"}
                width={1920}
                height={1080}
              />
            </div>
          </div>
          <h3 className="text-4xl font-semibold">Join Now</h3>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <CheckCircleIcon className="w-6 h-6 text-success" />
              <p className="text-sm font-semibold ">Free Forever</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircleIcon className="w-6 h-6 text-success" />
              <p className="text-sm font-semibold ">Master the Game</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircleIcon className="w-6 h-6 text-success" />
              <p className="text-sm font-semibold ">New Updates</p>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircleIcon className="w-6 h-6 text-success" />
              <p className="text-sm font-semibold ">Show off Your Progress</p>
            </div>
          </div>
        </div>
      </div>
      <section
        className={`inline-flex flex-col pt-10 gap-7 ${inter.className}`}
      >
        <div className="flex justify-between">
          <Image
            src="/placeholder-logo.png"
            width={50}
            height={100}
            alt={"RankNClimb Logo"}
          />
          <p>
            Already a member?{" "}
            <Link className="font-bold link-hover link" href={"/signin"}>
              Sign In
            </Link>
          </p>
        </div>
        <h1 className="text-5xl font-semibold leading-10">Sign Up</h1>
        <div className="flex flex-col items-start justify-start gap-8">
          <div className="flex flex-col items-start self-stretch justify-start gap-5">
            <h2 className="self-stretch text-sm font-semibold leading-normal">
              Sign in with Open accounts
            </h2>
            <div className="grid items-center justify-center grid-cols-2 gap-2">
              <SocialButton
                callback={socialCallbacks["google"]}
                altText="Googe G"
                image="/Google_G_Logo.svg"
                brand="Google"
              />
              <SocialButton
                callback={socialCallbacks["discord"]}
                altText="Discord Logo"
                image="/discord-mark-blue.svg"
                brand="Discord"
              />
              <SocialButton
                callback={socialCallbacks["twitch"]}
                altText="Twitch Logo"
                image="/TwitchGlitchPurple.svg"
                brand="Twitch"
              />
            </div>
          </div>
          <div className="relative h-0.5 w-full rounded-sm bg-base-200" />
          <div className="flex flex-col items-start self-stretch justify-start gap-5">
            <span className="self-stretch text-sm font-semibold leading-none">
              Or continue with email address
            </span>
            <SignUpForm stepOneCreate={async () => {}} />
          </div>
        </div>
        <p className="self-stretch text-sm font-semibold leading-normal ">
          This site is protected by reCAPTCHA and the Google Privacy Policy.
        </p>
      </section>
    </div>
  );
}
