import Link from "next/link";
import { roles } from "@/data/roles";
import styles from "./RoleLinks.module.css";

export function RoleLinks() {
  return (
    <ul className={styles.list}>
      {roles.map((role) => (
        <li key={role.key} className={styles.item}>
          <Link href={`/${role.slug}`} className={styles.link}>
            <h3 className={styles.title}>{role.title}</h3>
            <span className={styles.arrow} aria-hidden>
              →
            </span>
            <p className={styles.tagline}>{role.tagline}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
