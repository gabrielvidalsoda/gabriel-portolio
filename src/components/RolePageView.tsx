import Link from "next/link";
import { ExperienceBlock } from "@/components/ExperienceBlock";
import { experience } from "@/data/experience";
import type { RolePage as RolePageData } from "@/data/roles";
import styles from "./RolePage.module.css";

type RolePageViewProps = {
  role: RolePageData;
};

export function RolePageView({ role }: RolePageViewProps) {
  return (
    <article className={`${styles.page} reveal`}>
      <Link href="/#roles" className={styles.back}>
        ← All roles
      </Link>
      <p className="section-label">Applying as</p>
      <h1 className={styles.title}>{role.title}</h1>
      <p className={styles.tagline}>{role.tagline}</p>
      <p className={styles.intro}>{role.intro}</p>
      <ul className={styles.focus}>
        {role.focus.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h2 className={styles.sectionTitle}>Experience</h2>
      {experience.map((item) => (
        <ExperienceBlock key={item.id} item={item} role={role.key} />
      ))}
    </article>
  );
}
