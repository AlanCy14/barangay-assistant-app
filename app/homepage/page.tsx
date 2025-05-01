// Assuming this file is something like app/dashboard/page.tsx
// or wherever your main post-login homepage resides.

import React from 'react';
import styles from './HomePage.module.css'; // Import the styles for this page
import Link from 'next/link';
import Navbar from '@/components/NavBar'; // 1. Import the Navbar component (Adjust path if needed!)

export default function HomePage() {
  const userName = "Guest"; // You'll likely replace this with actual user data later

  return (
    // Use the container class for overall structure
    <div className={styles.container}>

      {/* 2. Render the Navbar component here */}
      <Navbar />

      {/* Remove the old empty header/nav section */}
      {/*
      <header className={styles.header}>
        <nav className={styles.nav}>
        </nav>
      </header>
      */}

      {/* Use main class for the page-specific content */}
      <main className={styles.main}>
        {/* Apply heading and message styles */}
        <h1 className={styles.welcomeHeading}>Welcome to the Homepage!</h1>
        <p className={styles.welcomeMessage}>Hello, {userName}!</p>

        {/* Use section class for content blocks */}
        <section className={styles.section}>
          <h2>Announcements</h2>
          <p>No announcements yet.</p>
          {/* You would fetch and display real announcements here */}
        </section>

        <section className={styles.section}>
          <h2>Quick Links</h2>
          {/* Apply list style */}
          <ul className={styles.quickLinksList}>
             {/* Replace # with actual paths later */}
            <li><Link href="#">Link 1</Link></li>
            <li><Link href="#">Link 2</Link></li>
          </ul>
        </section>
      </main>

      {/* Use footer class */}
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Your Application</p>
      </footer>
    </div>
  );
}