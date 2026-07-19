import type { ExperienceItem, RoleKey } from "@/data/experience";
import styles from "./ExperienceBlock.module.css";

type ExperienceBlockProps = {
  item: ExperienceItem;
  role?: RoleKey;
};

export function ExperienceBlock({ item, role }: ExperienceBlockProps) {
  const bullets = role ? item.byRole[role] : item.highlights;

  return (
    <article className={styles.block}>
      <div className={styles.meta}>
        <h3 className={styles.company}>{item.company}</h3>
        <span className={styles.period}>{item.period}</span>
      </div>
      <p className={styles.title}>{item.title}</p>
      {!role && <p className={styles.summary}>{item.summary}</p>}
      <ul className={styles.bullets}>
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </article>
  );
}
