import Image from "next/image";
import about from "../../../about.avif";
import Link from "next/link";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image src={about} alt="plant" className={styles.image} />
        </div>
        <div className={styles.textWrapper}>
          <h1 className={styles.title}>
            The Essence of Life
            <br className={styles.break} />
          </h1>
          <p className={styles.paragraph}>
            Plants are an integral part of our lives, providing us with oxygen, purifying the air, and boosting our mood. Their beauty and vitality transform our homes and bring us closer to nature, enhancing our overall well-being. Let&apos;s explore the world of plants and discover their benefits.
          </p>
          <div className={styles.buttonWrapper}>
            <Link href="/benefits">
              <div className={styles.button}>
                <div className={styles.buttonText}>Benefits of Plants</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
