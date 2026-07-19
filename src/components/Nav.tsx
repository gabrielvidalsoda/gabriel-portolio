"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";

export function Nav() {
  const pathname = usePathname();

  return (
    <header className={styles.nav}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          Gabriel Vidal
        </Link>
        <nav aria-label="Primary">
          <ul className={styles.links}>
            <li>
              <Link href="/#work">Work</Link>
            </li>
            <li>
              <Link
                href="/contact"
                aria-current={pathname === "/contact" ? "page" : undefined}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
