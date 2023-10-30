"use client";

import React from "react";
import { Button } from "../button";
import { ArrowRight } from "lucide-react";
import { useConvexAuth } from "convex/react";
import { SignInButton, useUser } from "@clerk/clerk-react";
import Spinner from "../spinner/spinner";
import { useRouter } from "next/navigation";

const Heading = () => {
  const { isLoading, isAuthenticated } = useConvexAuth();
  const { isSignedIn } = useUser();
  const router = useRouter();

  return (
    <div className="max-w-3xl  space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold ">
        Your Ideas, Documents and Plans. Welcome to
        <span className="underline pl-1">Note Maker</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Note Maker is the connect workspace where better, faster work happens
      </h3>
      {isLoading && (
        <div className="w-full justify-center items-center flex">
          <Spinner size="lg" />
        </div>
      )}

      {isSignedIn && !isLoading && (
        <Button className="group" onClick={() => router.push("/documents")}>
          Enter Note Maker
          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1   transition-all duration-500" />
        </Button>
      )}
      {!isSignedIn && !isLoading && (
        <SignInButton mode="modal">
          <Button className="group">
            Get NoteMaker for Free
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-all duration-500" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};

export default Heading;
