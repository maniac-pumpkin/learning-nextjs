"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Support", href: "/support" },
  { name: "Store", href: "/store" },
  { name: "About", href: "/about" },
];

function Header() {
  const pathname = usePathname();

  return (
    <header>
      <nav>
        <ul>
          {links.map(({ name, href }) => (
            <li
              key={crypto.randomUUID()}
              style={pathname !== href ? { listStyleType: "none" } : undefined}
            >
              <Link href={href}>{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
