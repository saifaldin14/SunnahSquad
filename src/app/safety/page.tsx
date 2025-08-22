import {
  Shield,
  ChefHat,
  Utensils,
  AlertTriangle,
  Thermometer,
  Droplets,
  Users,
  Heart,
} from "lucide-react";
import styles from "./page.module.scss";

const safetyInstructions = [
  {
    category: "Kitchen Safety",
    icon: ChefHat,
    color: "text-red-600",
    bgColor: "bg-red-100",
    instructions: [
      "Always wash your hands thoroughly before handling food",
      "Tie back long hair and remove loose jewelry",
      "Wear closed-toe shoes with non-slip soles",
      "Use oven mitts when handling hot pots, pans, or dishes",
      "Keep kitchen surfaces clean and sanitized",
      "Report any spills immediately to prevent slips",
      "Never leave cooking food unattended",
      "Clean as you go to maintain a safe workspace",
    ],
  },
  {
    category: "Sharp Objects & Knives",
    icon: Utensils,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    instructions: [
      "Always cut away from your body and fingers",
      "Use a stable cutting board on a flat surface",
      "Keep knives sharp - dull knives are more dangerous",
      "Never try to catch a falling knife",
      "Store knives properly in designated areas",
      "Pass knives handle-first to others",
      "Clean knives immediately after use",
      "Never put knives in soapy water where they can't be seen",
    ],
  },
  {
    category: "Food Handling",
    icon: Thermometer,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    instructions: [
      "Check expiration dates before using any ingredients",
      "Keep raw meat separate from other foods",
      "Use separate cutting boards for meat and vegetables",
      "Cook food to proper internal temperatures",
      "Keep hot foods hot (above 140°F) and cold foods cold (below 40°F)",
      "Never taste food with utensils that have touched raw meat",
      "Wash fruits and vegetables thoroughly",
      "Label and date all prepared foods",
    ],
  },
  {
    category: "Personal Hygiene",
    icon: Droplets,
    color: "text-teal-600",
    bgColor: "bg-teal-100",
    instructions: [
      "Wash hands for at least 20 seconds with soap and warm water",
      "Use hand sanitizer when soap and water aren't available",
      "Avoid touching your face, hair, or phone while handling food",
      "Cover coughs and sneezes with your elbow",
      "Don't volunteer if you're feeling unwell",
      "Change gloves frequently and wash hands after removing them",
      "Wear a clean apron or change clothes if they become soiled",
      "Inform team leaders of any cuts or wounds",
    ],
  },
  {
    category: "Emergency Procedures",
    icon: AlertTriangle,
    color: "text-red-700",
    bgColor: "bg-red-100",
    instructions: [
      "Know the location of first aid kits and fire extinguishers",
      "In case of fire, evacuate immediately and call 911",
      "For cuts or injuries, apply pressure and seek immediate help",
      "Report all accidents to the supervisor immediately",
      "Know the location of emergency exits",
      "Never attempt to clean up broken glass with bare hands",
      "In case of severe allergic reactions, call 911 immediately",
      "Keep emergency contact numbers readily available",
    ],
  },
  {
    category: "Guest Interaction",
    icon: Users,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    instructions: [
      "Treat all guests with dignity, respect, and compassion",
      "Maintain appropriate boundaries while being friendly",
      "Never ask personal questions about someone's circumstances",
      "If a guest becomes agitated, calmly inform a supervisor",
      "Respect dietary restrictions and allergies",
      "Use universal precautions when serving food",
      "Be patient and understanding with all guests",
      "Focus on creating a welcoming, judgment-free environment",
    ],
  },
];

export default function Safety() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.content}>
          <div className={styles.heroContent}>
            <Shield className={styles.heroIcon} />
            <h1 className={styles.heroTitle}>Safety Instructions</h1>
            <p className={styles.heroSubtitle}>
              Your safety and the safety of our guests is our top priority.
              Please review these important guidelines before participating in
              any SunnahSquad volunteer activities.
            </p>
          </div>
        </div>
      </section>

      {/* Safety Instructions */}
      <section className={styles.safetySection}>
        <div className={styles.sectionContent}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Essential Safety Guidelines</h2>
            <p className={styles.sectionDescription}>
              These guidelines help ensure a safe environment for everyone -
              volunteers, staff, and the guests we serve at Ray of Hope.
            </p>
          </div>

          <div className={styles.safetyGrid}>
            {safetyInstructions.map((section, index) => {
              const IconComponent = section.icon;
              const colorClass = section.color.includes("red")
                ? "red"
                : section.color.includes("orange")
                ? "orange"
                : section.color.includes("blue")
                ? "blue"
                : section.color.includes("yellow")
                ? "yellow"
                : section.color.includes("green")
                ? "green"
                : section.color.includes("purple")
                ? "purple"
                : "emerald";

              return (
                <div key={index} className={styles.safetyCard}>
                  <div className={styles.cardHeader}>
                    <div
                      className={`${styles.iconWrapper} ${styles[colorClass]}`}
                    >
                      <IconComponent className={styles.icon} />
                    </div>
                    <h3 className={styles.title}>{section.category}</h3>
                  </div>

                  <ul className={styles.instructionsList}>
                    {section.instructions.map(
                      (instruction, instructionIndex) => (
                        <li
                          key={instructionIndex}
                          className={styles.instruction}
                        >
                          <span className={styles.bullet}>•</span>
                          <span className={styles.text}>{instruction}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Important Reminders */}
      <section className={styles.reminderSection}>
        <div className={styles.reminderContent}>
          <h2 className={styles.reminderTitle}>
            Remember: Safety is an Act of Service
          </h2>
          <div className={styles.reminderCard}>
            <Heart className={styles.reminderIcon} />
            <div className={styles.reminderText}>
              Following these safety guidelines isn&apos;t just about protecting
              yourself - it&apos;s about ensuring we can continue serving our
              community effectively and responsibly.
            </div>
            <div className={styles.reminderText}>
              <strong>Before your first volunteer session:</strong> Please
              review all guidelines carefully. Our team leaders will provide
              additional orientation and training.
            </div>
            <div className={styles.reminderQuote}>
              <strong>Questions or concerns?</strong> Never hesitate to ask. Our
              experienced volunteers are here to help and ensure everyone feels
              confident and safe.
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className={styles.emergencySection}>
        <div className={styles.emergencyContent}>
          <h2 className={styles.emergencyTitle}>Emergency Information</h2>
          <p className={styles.emergencyDescription}>
            In case of any emergency, follow these procedures and contacts:
          </p>

          <div className={styles.emergencyCard}>
            <div className={styles.emergencyHeader}>
              <AlertTriangle className={styles.emergencyIcon} />
              <h3 className={styles.emergencyHeading}>Emergency Procedures</h3>
            </div>

            <ol className={styles.emergencySteps}>
              <li className={styles.step}>
                <span className={styles.stepNumber}>1</span>
                <span className={styles.stepText}>
                  <strong>Call 911</strong> for fire, police, or medical
                  emergencies
                </span>
              </li>
              <li className={styles.step}>
                <span className={styles.stepNumber}>2</span>
                <span className={styles.stepText}>
                  <strong>Notify Ray of Hope Supervisor</strong> immediately
                  about any incident
                </span>
              </li>
              <li className={styles.step}>
                <span className={styles.stepNumber}>3</span>
                <span className={styles.stepText}>
                  <strong>Contact SunnahSquad Leader</strong> for group
                  coordination
                </span>
              </li>
              <li className={styles.step}>
                <span className={styles.stepNumber}>4</span>
                <span className={styles.stepText}>
                  <strong>Document the incident</strong> as required by facility
                  protocols
                </span>
              </li>
            </ol>
          </div>

          <div className={styles.emergencyNote}>
            <p className={styles.noteText}>
              <strong>Remember:</strong> When in doubt, ask for help. It&apos;s
              better to be safe than sorry.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
