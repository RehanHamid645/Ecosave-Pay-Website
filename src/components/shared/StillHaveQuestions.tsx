import React from "react";
import Link from "next/link";

interface StillHaveQuestionsProps {
  buttonHref?: string;
  buttonText?: string;
  className?: string;
}

const StillHaveQuestions: React.FC<StillHaveQuestionsProps> = ({
  buttonHref = "/contact",
  buttonText = "GET IN TOUCH",
  className = "",
}) => (
  <div
    className={`bg-[#dddddd] rounded-3xl py-12 px-4 md:px-0 flex flex-col items-center text-center w-full ${className}`}
  >
    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">Still have questions?</h2>
    <p className="text-black text-lg md:text-2xl mb-10 max-w-2xl mx-auto">
      Can’t find the answer you’re looking for? Speak with one of our Ecosave Pay payment experts today — our team is here to help you find the right solution for your business.
    </p>
    <Link href={buttonHref}>
      <button className="bg-[#5ed39d] text-white font-semibold text-xl px-10 py-4 rounded-xl shadow hover:opacity-90 transition">
        {buttonText}
      </button>
    </Link>
  </div>
);

export default StillHaveQuestions;
