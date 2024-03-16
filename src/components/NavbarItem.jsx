"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const NavbarItem = ({ title, param }) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div className="">
      <Link
        className={`hover:text-[#f5c518] font-semibold ${
          genre === param
            ? "underline underline-offset-8 decoration-4 decoration-[#f5c518] rounded-lg text-[#f5c518]"
            : ""
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
};

export default NavbarItem;
