import Image from "next/image";
import styles from "./page.module.css";

const navLinks = ["SOLUTIONS", "RESOURCES", "ABOUT US"];
const filters = ["This Day", "This Week", "This Month", "6 Month"];
const trustedBy = [
  "shells.svg",
  "smartfinder.svg",
  "zoomerr.svg",
  "artvenue.svg",
  "kontrastr.svg",
  "wavesmarathon.svg",
];
const solutions = [
  {
    title: "Core Banking CB7",
    label: "CB7",
    description:
      "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your business.",
  },
  {
    title: "Digital Banking N7",
    label: "N7",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation.",
  },
  {
    title: "Loan Origination System",
    label: "NBFC",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
  },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.screen}>
        <header className={styles.header}>
          <div className={styles.brand}>N7</div>
          <nav className={styles.nav} aria-label="Primary navigation">
            {navLinks.map((item) => (
              <a key={item} href="#" className={styles.navLink}>
                {item}
              </a>
            ))}
          </nav>
          <button className={styles.headerCta}>REQUEST DEMO</button>
        </header>

        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroIntro}>The new foundation of modern banking</div>
            <p className={styles.heroText}>
              We drive innovation and growth, provide seamless customer experience and operational excellence.
            </p>
            <div className={styles.heroActions}>
              <button className={styles.primaryButton}>REQUEST DEMO</button>
              <button className={styles.secondaryButton}>CONTACT US</button>
            </div>
          </div>

          <div className={styles.heroVisualArea}>
            <div className={styles.heroVisual}>
              <Image src="/hero.svg" alt="Hero visual" fill priority className={styles.heroImg} />
            </div>

            <div className={styles.accountCard}>
              <div className={styles.cardTop}>
                <div className={styles.avatarRow}>
                  <span className={styles.avatar} aria-hidden="true"></span>
                  <div>
                    <div className={styles.cardName}>Toni Kross</div>
                    <div className={styles.cardSub}>Good Morning</div>
                  </div>
                </div>
                <span className={styles.notificationIcon} aria-hidden="true"></span>
              </div>
              <div className={styles.balanceLabel}>Total balance</div>
              <div className={styles.balanceAmount}>$42,295.00 USD</div>
              <div className={styles.cardActions}>
                <button className={styles.cardAction}>
                  <span className={styles.iconSquare} />
                  Fund Transfer
                </button>
                <button className={styles.cardAction}>
                  <span className={styles.iconCircle} />
                  Add Money
                </button>
                <button className={styles.cardAction}>
                  <span className={styles.iconGrid} />
                  More
                </button>
              </div>
            </div>

            <div className={styles.activityCard}>
              <div className={styles.activityHeader}>Recent activity</div>
              <div className={styles.filterRow}>
                {filters.map((label, index) => (
                  <button
                    key={label}
                    className={
                      index === 1 ? `${styles.filterPill} ${styles.filterActive}` : styles.filterPill
                    }
                  >
                    {label}
                  </button>
                ))}
              </div>
              <div className={styles.transactionRow}>
                <span className={styles.transactionIcon} aria-hidden="true" />
                <div>
                  <div className={styles.transactionTitle}>To Jin · Work</div>
                  <div className={styles.transactionDate}>12 Jun 2022</div>
                </div>
                <div className={styles.transactionAmount}>-$59</div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.trustedSection}>
          <span className={styles.trustedLabel}>Trusted By:</span>
          <div className={styles.trustedLogos}>
            {trustedBy.map((file) => (
              <div key={file} className={styles.trustedLogo}>
                <Image src={`/icons/${file}`} alt={file.replace('.svg','')} width={88} height={24} />
              </div>
            ))}
          </div>
        </section>

        <section className={styles.solutionSection}>
          <div className={styles.solutionIntro}>
            <h2>All of our solutions are tailor-made to your needs</h2>
            <button className={styles.outlineButton}>REQUEST DEMO</button>
          </div>
          <div className={styles.solutionGrid}>
            {solutions.map((solution) => (
              <article key={solution.title} className={styles.solutionCard}>
                <span className={styles.solutionIcon} aria-hidden="true" />
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
                <a href="#" className={styles.solutionLink}>
                  LEARN MORE →
                </a>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
