"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";

export default function LocaleSwitcher({
  currentLocale,
  locales,
}: {
  currentLocale: string;
  locales: string[];
}) {
  const router = useRouter();
  return (
    <select
      onChange={(e: ChangeEvent<HTMLSelectElement>) => {
        router.replace("/" + e.target.selectedOptions[0].value);
      }}
      value={currentLocale}
    >
      {locales.map((local) => (
        <option key={local} value={local}>
          {local}
        </option>
      ))}
    </select>
  );
}
