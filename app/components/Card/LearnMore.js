import React from "react";
import Link from "next/link";

function LearnMore() {
  return (
    <p className="text-center ">
      <Link
        href={"/learnMore"}
        className="text-black font-semibold font-quicksand underline hover:underline"
      >
        Learn more
      </Link>
    </p>
  );
}

export default LearnMore;
