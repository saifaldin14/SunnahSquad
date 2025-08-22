import Link from "next/link";
import { Heart, Users, Utensils, Clock, MapPin, Calendar } from "lucide-react";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.homepage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>SunnahSquad</h1>
            <p className={styles.subtitle}>
              Following the beautiful example of Prophet Muhammad (PBUH) in
              serving our community with love, compassion, and purpose
            </p>
            <div className={styles.actions}>
              <Link href="/events" className={styles.primaryBtn}>
                <Calendar className="w-5 h-5" />
                Join Our Next Event
              </Link>
              <Link href="/safety" className={styles.secondaryBtn}>
                <Heart className="w-5 h-5" />
                Learn About Safety
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={`${styles.section} ${styles.grayBg}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Who We Are</h2>
            <p className={styles.sectionDescription}>
              SunnahSquad is a dedicated group of Muslim volunteers who serve at
              Ray of Hope, a local soup kitchen providing meals to our homeless
              neighbors. We believe in putting our faith into action through
              service to humanity.
            </p>
          </div>

          <div className={`${styles.grid} ${styles.twoCols}`}>
            <div>
              <h3 className={styles.missionTitle}>Our Mission</h3>
              <div className={styles.missionList}>
                <div className={styles.missionItem}>
                  <Heart className={styles.icon} />
                  <p className={styles.text}>
                    Serve the homeless community with dignity, respect, and
                    compassion
                  </p>
                </div>
                <div className={styles.missionItem}>
                  <Users className={styles.icon} />
                  <p className={styles.text}>
                    Build bridges between the Muslim community and our broader
                    neighbors
                  </p>
                </div>
                <div className={styles.missionItem}>
                  <Utensils className={styles.icon} />
                  <p className={styles.text}>
                    Provide nutritious, halal meals prepared with love and care
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.quoteCard}>
              <blockquote className={styles.quote}>
                &ldquo;The believer is not one who eats his fill while his neighbor
                goes hungry.&rdquo;
              </blockquote>
              <cite className={styles.citation}>- Prophet Muhammad (PBUH)</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Impact</h2>
            <p className={styles.sectionDescription}>
              Through our regular service at Ray of Hope, we&apos;re making a
              meaningful difference in our community, one meal at a time.
            </p>
          </div>

          <div className={`${styles.grid} ${styles.threeCols}`}>
            <div className={styles.impactCard}>
              <div className={styles.iconWrapper}>
                <Utensils className={styles.icon} />
              </div>
              <h3 className={styles.number}>500+</h3>
              <p className={styles.description}>
                Meals served to our homeless neighbors
              </p>
            </div>

            <div className={styles.impactCard}>
              <div className={styles.iconWrapper}>
                <Users className={styles.icon} />
              </div>
              <h3 className={styles.number}>25+</h3>
              <p className={styles.description}>
                Active volunteers from our community
              </p>
            </div>

            <div className={styles.impactCard}>
              <div className={styles.iconWrapper}>
                <Clock className={styles.icon} />
              </div>
              <h3 className={styles.number}>12</h3>
              <p className={styles.description}>
                Months of consistent weekly service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ray of Hope Section */}
      <section className={`${styles.section} ${styles.emeraldBg}`}>
        <div className={styles.container}>
          <div
            className={`${styles.grid} ${styles.twoCols} ${styles.alignCenter}`}
          >
            <div>
              <h2 className={styles.sectionTitle}>
                Partnering with Ray of Hope
              </h2>
              <p className={styles.partnershipDescription}>
                Ray of Hope is a vital community resource that provides warm
                meals, compassion, and hope to individuals experiencing
                homelessness. As their volunteers, we&apos;re honored to be part of
                this important work.
              </p>
              <div className={styles.detailsList}>
                <div className={styles.detailItem}>
                  <MapPin className={styles.icon} />
                  <span className={styles.text}>Downtown Community Center</span>
                </div>
                <div className={styles.detailItem}>
                  <Clock className={styles.icon} />
                  <span className={styles.text}>
                    Every Saturday, 4:00 PM - 7:00 PM
                  </span>
                </div>
                <div className={styles.detailItem}>
                  <Utensils className={styles.icon} />
                  <span className={styles.text}>
                    Fresh, hot meals for 100+ guests
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.activitiesCard}>
              <h3 className={styles.cardTitle}>What We Do</h3>
              <ul className={styles.activitiesList}>
                <li className={styles.activityItem}>
                  <span className={styles.bullet}>•</span>
                  <span>Prepare and cook nutritious meals</span>
                </li>
                <li className={styles.activityItem}>
                  <span className={styles.bullet}>•</span>
                  <span>Serve food with warmth and respect</span>
                </li>
                <li className={styles.activityItem}>
                  <span className={styles.bullet}>•</span>
                  <span>Clean and maintain kitchen facilities</span>
                </li>
                <li className={styles.activityItem}>
                  <span className={styles.bullet}>•</span>
                  <span>Build meaningful connections with guests</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Join Us in Making a Difference</h2>
          <p className={styles.ctaDescription}>
            Whether you&apos;re experienced in community service or just getting
            started, there&apos;s a place for you in SunnahSquad. Come serve with us!
          </p>
          <Link href="/events" className={styles.ctaButton}>
            <Calendar className="w-5 h-5" />
            See Upcoming Events
          </Link>
        </div>
      </section>
    </div>
  );
}
