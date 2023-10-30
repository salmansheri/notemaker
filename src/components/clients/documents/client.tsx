"use client";

import Spinner from "@/components/ui/spinner/spinner";
import { useUser } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import React from "react";

const DocumentClient = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const { isSignedIn } = useUser();

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (!isSignedIn) {
    return redirect("/");
  }

  return <div></div>;
};

export default DocumentClient;
