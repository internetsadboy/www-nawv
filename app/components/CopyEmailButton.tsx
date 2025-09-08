// components/CopyEmailButton.tsx
"use client";
import { useState } from "react";

type Props = {
  email: string;
  className?: string;
  label?: string;
};

export default function CopyEmailButton({
  email,
  className = "",
  label = "Copy email",
}: Props) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      // Modern API (requires HTTPS)
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Fallback for older browsers
      const input = document.createElement("input");
      input.value = email;
      input.setAttribute("readonly", "");
      input.style.position = "absolute";
      input.style.left = "-9999px";
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={`mt-2 text-black text-center text-lg inline-block no-underline rounded w-[120px] cursor-pointer border border-gray-300 bg-gray-100 px-3 py-2 hover:bg-gray-100 active:scale-[0.99] transition ${className}`}
      aria-live="polite"
      aria-label={`Copy ${email} to clipboard`}
    >
      {copied ? "Copied!" : label}
    </button>
  );
}
