import type { Metadata } from "next";
import { profile } from "@/data/profile";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name}.`,
};

export default function ContactPage() {
  return (
    <section className={`${styles.page} reveal`} aria-labelledby="contact-title">
      <p className="section-label">Contact</p>
      <h1 id="contact-title" className={styles.title}>
        Get in touch
      </h1>
      <p className={styles.lede}>
        Open to conversations about Product Manager, Product Owner, and Business
        Analyst roles.
      </p>
      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.label}>Email</span>
          <a className={styles.value} href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>LinkedIn</span>
          <a
            className={styles.value}
            href={profile.linkedIn}
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/gabrielvidalsoda
          </a>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>GitHub</span>
          <a
            className={styles.value}
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            github.com/gabrielvidalsoda
          </a>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Phone</span>
          <a className={styles.value} href={`tel:${profile.phone.replace(/\s/g, "")}`}>
            {profile.phone}
          </a>
        </li>
      </ul>
      <p className={styles.note}>
        Prefer a tailored CV for a specific role? Reach out and I will share the
        matching version.
      </p>
    </section>
  );
}
