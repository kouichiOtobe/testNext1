"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbs = ["Home", ...segments];

  return (
    <header className="w-full bg-gray-200 p-4 shadow-sm">
      <nav className="text-sm text-gray-600">
        {breadcrumbs.map((segment, index) => (
          <span key={index}>
            {index > 0 && " / "}
            {segment.charAt(0).toUpperCase() + segment.slice(1)}
          </span>
        ))}
      </nav>
    </header>
  );
}
