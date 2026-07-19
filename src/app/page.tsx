import Link from "next/link";
import { Hero } from "@/components/Hero";
import { RoleLinks } from "@/components/RoleLinks";
import {
  currentWork,
  previousWorkSummary,
} from "@/data/experience";
import { profile } from "@/data/profile";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section about" aria-labelledby="about-heading">
        <p className="section-label">About</p>
        <h2 id="about-heading">Solving real problems for real teams</h2>
        <p className="lede">{profile.about}</p>
      </section>

      <section
        id="roles"
        className="section section-wide"
        aria-labelledby="roles-heading"
      >
        <p className="section-label">Roles</p>
        <h2 id="roles-heading">Where I can help</h2>
        <p className="lede">
          The same experience, framed for the role you are hiring for.
        </p>
        <RoleLinks />
      </section>

      <section
        id="work"
        className="section"
        aria-labelledby="current-heading"
      >
        <p className="section-label">Current work</p>
        <h2 id="current-heading">What I am working on</h2>
        <div className={styles.current}>
          <p className={styles.currentCompany}>{currentWork.company}</p>
          <p className={styles.currentMeta}>
            {currentWork.title} · {currentWork.period}
          </p>
          <p className={styles.currentBlurb}>{currentWork.blurb}</p>
          <Link href="/business-analyst" className={styles.workLink}>
            See this role in detail →
          </Link>
        </div>
      </section>

      <section className="section" aria-labelledby="previous-heading">
        <p className="section-label">Previous work</p>
        <h2 id="previous-heading">Where I have been</h2>
        <ul className={styles.previousList}>
          {previousWorkSummary.map((item) => (
            <li key={item.company} className={styles.previousItem}>
              <p className={styles.previousCompany}>{item.company}</p>
              <p className={styles.previousBlurb}>{item.blurb}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section" aria-labelledby="touch-heading">
        <p className="section-label">Contact</p>
        <h2 id="touch-heading">Get in touch</h2>
        <p className="lede">
          Open to Product Manager, Product Owner, and Business Analyst roles.
        </p>
        <Link href="/contact" className={styles.contactCta}>
          Contact
        </Link>
      </section>
    </>
  );
}
