"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  Calendar as CalendarIcon,
  ExternalLink,
  Clock,
  MapPin,
  Users,
} from "lucide-react";
import styles from "./page.module.scss";

type Value = Date | null | [Date | null, Date | null];

// This would typically come from a database or API
const upcomingEvent = {
  date: new Date(2025, 1, 1), // February 1, 2025
  title: "Monthly Volunteer Service at Ray of Hope",
  time: "4:00 PM - 7:00 PM",
  location: "Downtown Community Center",
  description:
    "Join us for our monthly volunteer service where we prepare and serve meals to our homeless neighbors.",
  signupLink: "https://forms.google.com/example-signup-form", // Set to null to show "Stay tuned" message
  spotsAvailable: 8,
};

export default function Events() {
  const [selectedDate, setSelectedDate] = useState<Value>(new Date());

  const handleDateChange = (value: Value) => {
    setSelectedDate(value);
  };

  const isEventDate = (date: Date) => {
    return (
      upcomingEvent.date.getDate() === date.getDate() &&
      upcomingEvent.date.getMonth() === date.getMonth() &&
      upcomingEvent.date.getFullYear() === date.getFullYear()
    );
  };

  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month" && isEventDate(date)) {
      return "event-date";
    }
    return null;
  };

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.content}>
          <div className={styles.heroContent}>
            <CalendarIcon className={styles.heroIcon} />
            <h1 className={styles.heroTitle}>Upcoming Events</h1>
            <p className={styles.heroSubtitle}>
              Join SunnahSquad in our mission to serve the community. Check our
              calendar for upcoming volunteer opportunities at Ray of Hope.
            </p>
          </div>
        </div>
      </section>

      {/* Events Calendar Section */}
      <section className={styles.eventsSection}>
        <div className={styles.sectionContent}>
          <div className={styles.grid}>
            {/* Calendar */}
            <div className={styles.calendarSection}>
              <div className={styles.calendarHeader}>
                <h2>Event Calendar</h2>
                <p>
                  Select a date to see if we have any scheduled events. Green
                  dates indicate volunteer opportunities.
                </p>
              </div>

              <div className={styles.calendarContainer}>
                <Calendar
                  onChange={handleDateChange}
                  value={selectedDate}
                  tileClassName={tileClassName}
                  className="w-full"
                />
              </div>

              {/* Calendar Legend */}
              <div className={styles.legend}>
                <h3>Calendar Legend</h3>
                <div className={styles.legendItems}>
                  <div className={styles.legendItem}>
                    <div
                      className={`${styles.legendColor} ${styles.eventColor}`}
                    ></div>
                    <span className={styles.legendText}>Volunteer Event</span>
                  </div>
                  <div className={styles.legendItem}>
                    <div
                      className={`${styles.legendColor} ${styles.noEventColor}`}
                    ></div>
                    <span className={styles.legendText}>No Events</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Details */}
            <div className={styles.eventDetails}>
              <div className={styles.detailsHeader}>
                <h2>Next Scheduled Event</h2>
              </div>

              <div className={styles.eventCard}>
                <div className={styles.eventHeader}>
                  <h3>{upcomingEvent.title}</h3>
                  <p>{upcomingEvent.description}</p>
                </div>

                <div className={styles.eventInfo}>
                  <div className={styles.infoItem}>
                    <CalendarIcon className={styles.icon} />
                    <span className={styles.text}>
                      {upcomingEvent.date.toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  <div className={styles.infoItem}>
                    <Clock className={styles.icon} />
                    <span className={styles.text}>{upcomingEvent.time}</span>
                  </div>

                  <div className={styles.infoItem}>
                    <MapPin className={styles.icon} />
                    <span className={styles.text}>
                      {upcomingEvent.location}
                    </span>
                  </div>

                  <div className={styles.infoItem}>
                    <Users className={styles.icon} />
                    <span className={styles.text}>
                      {upcomingEvent.spotsAvailable} volunteer spots available
                    </span>
                  </div>
                </div>

                {/* Sign-up Button or Stay Tuned Message */}
                {upcomingEvent.signupLink ? (
                  <a
                    href={upcomingEvent.signupLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.signupButton}
                  >
                    <ExternalLink className="w-5 h-5" />
                    Sign Up to Volunteer
                  </a>
                ) : (
                  <div className={styles.stayTuned}>
                    <p className={styles.mainText}>
                      Stay tuned for our next event
                    </p>
                    <p className={styles.subText}>
                      We&apos;ll update this page with sign-up information soon!
                    </p>
                  </div>
                )}
              </div>

              {/* What to Expect */}
              <div className={styles.expectationCard}>
                <h3>What to Expect</h3>
                <ul className={styles.expectationList}>
                  <li className={styles.expectationItem}>
                    <span className={styles.bullet}>•</span>
                    <span>Orientation and safety briefing</span>
                  </li>
                  <li className={styles.expectationItem}>
                    <span className={styles.bullet}>•</span>
                    <span>Food preparation and cooking</span>
                  </li>
                  <li className={styles.expectationItem}>
                    <span className={styles.bullet}>•</span>
                    <span>Serving meals to guests</span>
                  </li>
                  <li className={styles.expectationItem}>
                    <span className={styles.bullet}>•</span>
                    <span>Cleanup and kitchen maintenance</span>
                  </li>
                  <li className={styles.expectationItem}>
                    <span className={styles.bullet}>•</span>
                    <span>Reflection and team building</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regular Schedule Section */}
      <section className={styles.scheduleSection}>
        <div className={styles.scheduleContent}>
          <h2 className={styles.scheduleTitle}>Our Regular Schedule</h2>
          <p className={styles.scheduleDescription}>
            SunnahSquad volunteers at Ray of Hope on a regular basis.
            Here&apos;s when you can expect to find us serving:
          </p>

          <div className={styles.scheduleCard}>
            <div>
              <CalendarIcon className={styles.scheduleIcon} />
              <h3 className={styles.scheduleDay}>Every Saturday</h3>
              <p className={styles.scheduleTime}>4:00 PM - 7:00 PM</p>
              <p className={styles.scheduleLocation}>
                Downtown Community Center
                <br />
                Ray of Hope Soup Kitchen
              </p>
            </div>
          </div>

          <p className={styles.scheduleNote}>
            Can&apos;t make it on Saturday? We also organize special events
            throughout the month. Check the calendar above for additional
            opportunities to serve.
          </p>
        </div>
      </section>

      <style jsx global>{`
        .react-calendar {
          background: white !important;
        }

        .react-calendar__navigation button {
          color: #111827 !important;
        }

        .react-calendar__month-view__weekdays__weekday {
          color: #374151 !important;
        }

        .react-calendar__tile {
          color: #111827 !important;
          background: transparent !important;
        }

        .react-calendar__tile:hover {
          background-color: #f3f4f6 !important;
          color: #111827 !important;
        }

        .react-calendar__tile--active {
          background-color: #d1fae5 !important;
          color: #065f46 !important;
        }

        .react-calendar__tile--now {
          background-color: #e5e7eb !important;
          color: #111827 !important;
        }

        .event-date {
          background-color: #047857 !important;
          color: white !important;
          border-radius: 50% !important;
          font-weight: 600 !important;
        }

        .event-date:hover {
          background-color: #065f46 !important;
          color: white !important;
        }
      `}</style>
    </div>
  );
}
