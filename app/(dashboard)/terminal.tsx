"use client";

import { useState, useEffect } from "react";
import { Copy, Check } from "lucide-react";

export function Terminal() {
  const [terminalStep, setTerminalStep] = useState(0);
  const [copied, setCopied] = useState(false);
  const terminalSteps = [
    "git clone https://github.com/nextjs/saas-starter",
    "pnpm install",
    "pnpm db:setup",
    "pnpm db:migrate",
    "pnpm db:seed",
    "pnpm dev 🎉",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setTerminalStep((prev) =>
        prev < terminalSteps.length - 1 ? prev + 1 : prev,
      );
    }, 500);

    return () => clearTimeout(timer);
  }, [terminalStep]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(terminalSteps.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="w-full rounded-lg shadow-lg overflow-hidden bg-gray-900 text-white font-mono text-sm relative"
      data-oid="c-yb62w"
    >
      <div className="p-4" data-oid="o_0eft0">
        <div
          className="flex justify-between items-center mb-4"
          data-oid="y3co0qk"
        >
          <div className="flex space-x-2" data-oid="9va16hj">
            <div
              className="w-3 h-3 rounded-full bg-red-500"
              data-oid="o-pzldq"
            ></div>
            <div
              className="w-3 h-3 rounded-full bg-yellow-500"
              data-oid="kddxolb"
            ></div>
            <div
              className="w-3 h-3 rounded-full bg-green-500"
              data-oid="bc-0h4s"
            ></div>
          </div>
          <button
            onClick={copyToClipboard}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Copy to clipboard"
            data-oid="ik_kx2k"
          >
            {copied ? (
              <Check className="h-5 w-5" data-oid="-1iaz28" />
            ) : (
              <Copy className="h-5 w-5" data-oid="o:maq09" />
            )}
          </button>
        </div>
        <div className="space-y-2" data-oid="-gm77l6">
          {terminalSteps.map((step, index) => (
            <div
              key={index}
              className={`${index > terminalStep ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
              data-oid="k_5azdw"
            >
              <span className="text-green-400" data-oid="nq62fm8">
                $
              </span>{" "}
              {step}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
