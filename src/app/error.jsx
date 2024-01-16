"use client";
import React, { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log("error is", error);
  }, [error]);
  return (
    <div>
      <div className="text-center mt-10">
        <h1>
          Something went wrong.Please try again later.
          <button className="hover:text-amber-600" onClick={() => reset()}>
            Try Again
          </button>
        </h1>
      </div>
    </div>
  );
}
