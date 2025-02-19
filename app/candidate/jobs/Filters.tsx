"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

// Define proper types for categories and locations
type Category = {
  category: string;
  _count: number;
};

type Location = {
  location: string;
  _count: number;
};

// Define props interface
interface FiltersProps {
  categories: Category[];
  locations: Location[];
}

export default function Filters({ categories, locations }: FiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState<string>(searchParams.get("search") || "");
  const [category, setCategory] = useState<string>(searchParams.get("category") || "");
  const [location, setLocation] = useState<string>(searchParams.get("location") || "");

  const updateParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`/candidate/jobs?${params.toString()}`);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <input
        type="text"
        placeholder="Search jobs..."
        className="border rounded-lg px-3 py-2 w-full md:w-1/3"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          updateParams("search", e.target.value);
        }}
      />
      <select
        className="border rounded-lg px-3 py-2 w-full md:w-1/3"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
          updateParams("category", e.target.value);
        }}
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat.category} value={cat.category}>
            {cat.category} ({cat._count})
          </option>
        ))}
      </select>
      <select
        className="border rounded-lg px-3 py-2 w-full md:w-1/3"
        value={location}
        onChange={(e) => {
          setLocation(e.target.value);
          updateParams("location", e.target.value);
        }}
      >
        <option value="">All Locations</option>
        {locations.map((loc) => (
          <option key={loc.location} value={loc.location}>
            {loc.location} ({loc._count})
          </option>
        ))}
      </select>
    </div>
  );
}


