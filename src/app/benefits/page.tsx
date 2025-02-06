import { FaPlantWilt } from "react-icons/fa6";
import { PiPlantFill, PiPottedPlantFill } from "react-icons/pi";
import { GoArrowRight } from "react-icons/go";
import styles from "./Benefits.module.css";

export default function Benefits() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headingWrapper}>
          <h1 className={styles.heading}>Plant Benefits</h1>
        </div>
        <div className={styles.benefitsWrapper}>
          <div className={styles.benefitCard}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <FaPlantWilt />
              </div>
              <h2 className={styles.cardTitle}>Physical Health Benefits</h2>
            </div>
            <div className={styles.cardBody}>
              <p>
                Purifying the air <br />
                Producing oxygen <br />
                Preventing allergies <br />
                Regulating blood pressure <br />
              </p>
              <a className={styles.learnMore}>
                Learn More <GoArrowRight className={styles.arrowIcon} />
              </a>
            </div>
          </div>

          <div className={styles.benefitCard}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <PiPlantFill />
              </div>
              <h2 className={styles.cardTitle}>Mental Health Benefits</h2>
            </div>
            <div className={styles.cardBody}>
              <p>
                Reducing stress and anxiety <br />
                Boosting mood <br />
                Improving sleep quality <br />
                Enhancing focus and productivity
              </p>
              <a className={styles.learnMore}>
                Learn More <GoArrowRight className={styles.arrowIcon} />
              </a>
            </div>
          </div>

          <div className={styles.benefitCard}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <PiPottedPlantFill />
              </div>
              <h2 className={styles.cardTitle}>Environmental Benefits</h2>
            </div>
            <div className={styles.cardBody}>
              <p>
                Cleaning the air <br />
                Reducing noise pollution <br />
                Regulating temperature <br />
                Promoting biodiversity
              </p>
              <a className={styles.learnMore}>
                Learn More <GoArrowRight className={styles.arrowIcon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
