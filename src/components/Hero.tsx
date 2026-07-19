import Link from "next/link";
import { profile } from "@/data/profile";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-brand">
      <h1 id="hero-brand" className={`${styles.brand} reveal`}>
        {profile.name}
      </h1>
      <p className={`${styles.headline} reveal reveal-delay-1`}>
        {profile.headline}
      </p>
      <p className={`${styles.support} reveal reveal-delay-2`}>
        Product Manager · Product Owner · Business Analyst
      </p>
      <div className={`${styles.ctas} reveal reveal-delay-3`}>
        <Link href="/#work" className={styles.primary}>
          View work
        </Link>
        <Link href="/contact" className={styles.secondary}>
          Get in touch
        </Link>
      </div>
    </section>
  );
}
