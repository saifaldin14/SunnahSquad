import Link from "next/link";
import {
  Heart,
  Users,
  Utensils,
  Clock,
  MapPin,
  Calendar,
  Star,
  Sparkles,
  Award,
} from "lucide-react";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.homepage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.floatingElement}></div>
          <div className={styles.floatingElement}></div>
          <div className={styles.floatingElement}></div>
        </div>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.titleWrapper}>
              <Sparkles className={styles.sparkle} />
              <h1 className={styles.title}>SunnahSquad</h1>
              <Sparkles className={styles.sparkle} />
            </div>
            <p className={styles.subtitle}>
              Following the beautiful example of Prophet Muhammad (PBUH) in
              serving our community with love, compassion, and purpose
            </p>
            <div className={styles.actions}>
              <Link href="/events" className={styles.primaryBtn}>
                <Calendar className="w-5 h-5" />
                Join Our Next Event
                <div className={styles.btnShine}></div>
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
            <div className={styles.badgeWrapper}>
              <Star className={styles.badgeIcon} />
              <span className={styles.badge}>Who We Are</span>
            </div>
            <h2 className={styles.sectionTitle}>
              Serving with <span className={styles.highlight}>Purpose</span> &{" "}
              <span className={styles.highlight}>Love</span>
            </h2>
            <p className={styles.sectionDescription}>
              SunnahSquad is a dedicated group of Muslim volunteers who serve at
              Ray of Hope, a local soup kitchen providing meals to our homeless
              neighbors. We believe in putting our faith into action through
              service to humanity.
            </p>
          </div>
          <div className={styles.missionWrapper}>
            <h3 className={styles.missionTitle}>Our Mission</h3>
            <div className={styles.missionList}>
              <div
                className={styles.missionItem}
                style={{ "--delay": "0s" } as React.CSSProperties}
              >
                <div className={styles.iconContainer}>
                  <Heart className={styles.icon} />
                </div>
                <p className={styles.text}>
                  Serve the homeless community with dignity, respect, and
                  compassion
                </p>
              </div>
              <div
                className={styles.missionItem}
                style={{ "--delay": "0.5s" } as React.CSSProperties}
              >
                <div className={styles.iconContainer}>
                  <Users className={styles.icon} />
                </div>
                <p className={styles.text}>
                  Build bridges between the Muslim community and our broader
                  neighbors
                </p>
              </div>
              <div
                className={styles.missionItem}
                style={{ "--delay": "1s" } as React.CSSProperties}
              >
                <div className={styles.iconContainer}>
                  <Utensils className={styles.icon} />
                </div>
                <p className={styles.text}>
                  Provide nutritious, halal meals prepared with love and care
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.badgeWrapper}>
              <Award className={styles.badgeIcon} />
              <span className={styles.badge}>Our Impact</span>
            </div>
            <h2 className={styles.sectionTitle}>
              Making a <span className={styles.highlight}>Real Difference</span>
            </h2>
            <p className={styles.sectionDescription}>
              Through our regular service at Ray of Hope, we&apos;re making a
              meaningful difference in our community, one meal at a time.
            </p>
          </div>

          <div className={`${styles.grid} ${styles.threeCols}`}>
            <div className={styles.impactCard}>
              <div className={styles.cardGlow}></div>
              <div className={styles.iconWrapper}>
                <Utensils className={styles.icon} />
              </div>
              <h3 className={styles.number}>500+</h3>
              <p className={styles.description}>
                Meals served to our homeless neighbors
              </p>
              <div className={styles.cardFooter}>
                <span className={styles.trend}>↗ Growing monthly</span>
              </div>
            </div>

            <div className={styles.impactCard}>
              <div className={styles.cardGlow}></div>
              <div className={styles.iconWrapper}>
                <Users className={styles.icon} />
              </div>
              <h3 className={styles.number}>25+</h3>
              <p className={styles.description}>
                Active volunteers from our community
              </p>
              <div className={styles.cardFooter}>
                <span className={styles.trend}>↗ Always welcoming more</span>
              </div>
            </div>

            <div className={styles.impactCard}>
              <div className={styles.cardGlow}></div>
              <div className={styles.iconWrapper}>
                <Clock className={styles.icon} />
              </div>
              <h3 className={styles.number}>12</h3>
              <p className={styles.description}>
                Months of consistent weekly service
              </p>
              <div className={styles.cardFooter}>
                <span className={styles.trend}>↗ Building lasting impact</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ray of Hope Section */}
      <section className={`${styles.section} ${styles.emeraldBg}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.badgeWrapper}>
              <Heart className={styles.badgeIcon} />
              <span className={styles.badge}>Our Partnership</span>
            </div>
            <h2 className={styles.sectionTitle}>
              Partnering with{" "}
              <span className={styles.highlight}>Ray of Hope</span>
            </h2>
            <p className={styles.sectionDescription}>
              Ray of Hope is a vital community resource that provides warm
              meals, compassion, and hope to individuals experiencing
              homelessness. As their volunteers, we're honored to be part of
              this important work.
            </p>
          </div>

          <div
            className={`${styles.grid} ${styles.twoCols} ${styles.alignCenter}`}
          >
            <div className={styles.partnershipContent}>
              <div className={styles.detailsList}>
                <div className={styles.detailItem}>
                  <div className={styles.detailIcon}>
                    <MapPin className={styles.icon} />
                  </div>
                  <div className={styles.detailContent}>
                    <span className={styles.detailLabel}>Location</span>
                    <span className={styles.detailText}>
                      Downtown Community Center
                    </span>
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.detailIcon}>
                    <Clock className={styles.icon} />
                  </div>
                  <div className={styles.detailContent}>
                    <span className={styles.detailLabel}>Schedule</span>
                    <span className={styles.detailText}>
                      Every Saturday, 4:00 PM - 7:00 PM
                    </span>
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <div className={styles.detailIcon}>
                    <Utensils className={styles.icon} />
                  </div>
                  <div className={styles.detailContent}>
                    <span className={styles.detailLabel}>Impact</span>
                    <span className={styles.detailText}>
                      Fresh, hot meals for 100+ guests
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.activitiesCard}>
              <div className={styles.cardGlow}></div>
              <div className={styles.cardHeader}>
                <div className={styles.cardIconWrapper}>
                  <Sparkles className={styles.cardIcon} />
                </div>
                <h3 className={styles.cardTitle}>What We Do</h3>
              </div>
              <ul className={styles.activitiesList}>
                <li className={styles.activityItem}>
                  <div className={styles.activityIcon}>
                    <Utensils className={styles.icon} />
                  </div>
                  <span>Prepare and cook nutritious meals</span>
                </li>
                <li className={styles.activityItem}>
                  <div className={styles.activityIcon}>
                    <Heart className={styles.icon} />
                  </div>
                  <span>Serve food with warmth and respect</span>
                </li>
                <li className={styles.activityItem}>
                  <div className={styles.activityIcon}>
                    <Sparkles className={styles.icon} />
                  </div>
                  <span>Clean and maintain kitchen facilities</span>
                </li>
                <li className={styles.activityItem}>
                  <div className={styles.activityIcon}>
                    <Users className={styles.icon} />
                  </div>
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
          <div className={styles.ctaContent}>
            <div className={styles.ctaIconWrapper}>
              <Star className={styles.ctaIcon} />
              <Sparkles className={styles.ctaSparkle} />
            </div>
            <h2 className={styles.ctaTitle}>Join Us in Making a Difference</h2>
            <p className={styles.ctaDescription}>
              Whether you're experienced in community service or just getting
              started, there's a place for you in SunnahSquad. Come serve with
              us and experience the joy of giving back!
            </p>
            <div className={styles.ctaActions}>
              <Link href="/events" className={styles.ctaButton}>
                <Calendar className="w-5 h-5" />
                See Upcoming Events
                <div className={styles.btnShine}></div>
              </Link>
              <div className={styles.ctaStats}>
                <div className={styles.ctaStat}>
                  <span className={styles.ctaStatNumber}>25+</span>
                  <span className={styles.ctaStatLabel}>Active Volunteers</span>
                </div>
                <div className={styles.ctaStat}>
                  <span className={styles.ctaStatNumber}>52</span>
                  <span className={styles.ctaStatLabel}>Weeks of Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
