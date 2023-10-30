"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import React from "react";
import Logo from "./logo";
import { ModeToggle } from "../mode-toggle";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Button, buttonVariants } from "../button";
import Spinner from "../spinner/spinner";
import Link from "next/link";
import { useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const { isLoading } = useConvexAuth();
  const scrolled = useScrollTop();

  const { isSignedIn } = useUser();

  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center w-full p-6 dark:bg-[#1F1F1F]",
        scrolled && " border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2 ">
        {isLoading && (
          <p>
            <Spinner />
          </p>
        )}
        {!isSignedIn && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost">Login</Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button>Get NoteMaker Free</Button>
            </SignInButton>
          </>
        )}
        {isSignedIn && !isLoading && (
          <>
            <Link
              className={cn(
                buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })
              )}
              href="/documents"
            >
              Enter Notemaker
            </Link>
            <UserButton afterSignOutUrl="/" />
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
