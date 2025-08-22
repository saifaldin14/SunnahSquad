# SunnahSquad - Serving with Purpose

SunnahSquad is a beautiful, modern website for a Muslim volunteer group that serves at Ray of Hope soup kitchen. The website showcases the group's mission, upcoming events, and important safety guidelines for volunteers.

## Features

### 🏠 Homepage
- Beautiful hero section with mission statement
- Information about SunnahSquad and Ray of Hope partnership
- Impact statistics showing community service metrics
- Call-to-action buttons for engagement

### 📅 Events Page
- Interactive monthly calendar showing volunteer opportunities
- Event details with date, time, location, and available spots
- Dynamic signup button that links to Google Forms
- "Stay tuned" message when no signup link is available
- Regular schedule information

### 🛡️ Safety Instructions Page
- Comprehensive safety guidelines for volunteers
- Organized by categories: Kitchen Safety, Sharp Objects, Food Handling, etc.
- Emergency contact information
- Beautiful iconography and clear formatting

## Design Features

- **Modern, Clean Design**: Professional look with Islamic-inspired green color scheme
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Accessibility**: High contrast, readable fonts, and semantic HTML
- **Interactive Elements**: Hover effects, smooth transitions, and engaging animations
- **Beautiful Typography**: Inter font for modern readability

## Technology Stack

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework (implemented via custom CSS)
- **React Calendar**: Interactive calendar component
- **Lucide React**: Beautiful icon library

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view the website

## Customization

### Event Management
To update the upcoming event information, edit the `upcomingEvent` object in `src/app/events/page.tsx`:

```javascript
const upcomingEvent = {
  date: new Date(2025, 1, 1), // February 1, 2025
  title: "Monthly Volunteer Service at Ray of Hope",
  time: "4:00 PM - 7:00 PM",
  location: "Downtown Community Center",
  description: "Join us for our monthly volunteer service...",
  signupLink: "https://forms.google.com/your-signup-form", // Set to null to show "Stay tuned"
  spotsAvailable: 8
};
```

### Safety Instructions
Update safety guidelines in `src/app/safety/page.tsx` by modifying the `safetyInstructions` array.

### Content Updates
- Update organization details in the homepage (`src/app/page.tsx`)
- Modify contact information in the footer (`src/components/Footer.tsx`)
- Adjust navigation items in (`src/components/Navigation.tsx`)

## Deployment

The website can be easily deployed to platforms like:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Firebase Hosting**
- Any static hosting provider

## Islamic Values Integration

The website incorporates Islamic values through:
- Hadith and Quranic quotes about service to humanity
- Reference to following the Sunnah (example of Prophet Muhammad PBUH)
- Emphasis on compassion, dignity, and community service
- Color scheme inspired by Islamic aesthetics

## Contributing

To contribute to this project:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.

---

**Built with ❤️ for community service and following the beautiful example of Prophet Muhammad (PBUH)**
