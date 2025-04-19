import type React from "react";

import Link from "next/link";
import Image from "next/image";

export default function PolicyPage() {
  return (
    <>
      <header className="container py-4 border-b border-[#ADB1D5]/30">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" width={60} height={60} alt="CalendarIX Logo" className="size-5" />
            <span className="font-medium text-[#414BA4]">CalendarIX</span>
          </Link>

          <nav className="hidden md:flex gap-6">
            <Link
              href="#features"
              className="text-sm text-[#48546d] hover:text-[#414BA4] transition-colors"
            >
              Features
            </Link>
            <Link
              href="#about"
              className="text-sm text-[#48546d] hover:text-[#414BA4] transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-sm text-[#48546d] hover:text-[#414BA4] transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/policy"
              className="text-sm text-[#48546d] hover:text-[#414BA4] transition-colors"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
      </header>

      <main className="container py-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#414BA4]">Calendarix Privacy Policy</h1>
        <p className="mt-2 text-sm text-gray-600">Effective Date: April 15, 2025</p>

        <p className="mt-4 text-[#48546d]">
          Welcome to Calendarix! We respect your privacy and are committed to protecting your personal information.
          This Privacy Policy explains what types of information we collect, how we use it, who we share it with,
          and your rights regarding your information.
        </p>
        <p className="mt-2 text-[#48546d]">
          Your use of the Calendarix application constitutes your acceptance of this Privacy Policy.
        </p>

        <h2 className="mt-8 text-xl font-bold text-[#414BA4]">1. Information We Collect</h2>
        <p className="mt-4 text-[#48546d]">
          We may collect various types of information in connection with your use of Calendarix:
        </p>

        <h3 className="mt-4 font-semibold text-[#414BA4]">Google Account Information:</h3>
        <p className="mt-2 text-[#48546d]">
          To log in to the application and use the sync feature, we access basic information from your Google
          Account via Google Sign-In (such as your Google User ID, email address, and profile name).
          We do not store your Google Account password.
        </p>

        <h3 className="mt-4 font-semibold text-[#414BA4]">Calendar and Event Information:</h3>
        <ul className="list-disc list-inside mt-2 text-[#48546d] ml-4">
          <li>Google Calendar Data: To provide two-way synchronization, we require read and write access to your Google Calendar information (events, dates, times, descriptions). This access is granted only with your explicit permission.</li>
          <li>Events Created in Calendarix: Information you enter when manually creating events within categories (such as title, note, date, time).</li>
          <li>Categories: The names and colors of the categories you create.</li>
        </ul>

        <h3 className="mt-4 font-semibold text-[#414BA4]">Input Information for Artificial Intelligence (AI):</h3>
        <p className="mt-2 text-[#48546d]">
          Parameters and information you provide to receive AI-generated plans (such as goals, level, duration,
          preferences, days of the week, etc., depending on the requested plan type).
        </p>

        <h3 className="mt-4 font-semibold text-[#414BA4]">Alarm Information:</h3>
        <p className="mt-2 text-[#48546d]">
          Time, date, name, repeat settings, and sound for the alarms you set.
        </p>

        <h3 className="mt-4 font-semibold text-[#414BA4]">Usage and Technical Information:</h3>
        <ul className="list-disc list-inside mt-2 text-[#48546d] ml-4">
          <li>Device Information: Device type, operating system, unique device identifiers (like Google Advertising ID for advertising purposes).</li>
          <li>Application Usage Information: How you interact with the app, features you use, activity times, crash reports for improving the application.</li>
          <li>Network Information: Your IP address may be temporarily logged for diagnostic or security purposes.</li>
        </ul>

        <h3 className="mt-4 font-semibold text-[#414BA4]">Contact Information (for Support):</h3>
        <p className="mt-2 text-[#48546d]">
          If you contact our support via email, your email address and the content of your correspondence will be stored.
        </p>

        <h2 className="mt-8 text-xl font-bold text-[#414BA4]">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside mt-2 text-[#48546d] ml-4">
          <li>Providing and Improving Services: To enable the core features of the app, such as displaying the calendar, managing events, setting alarms, creating categories, and providing AI features.</li>
          <li>Synchronization with Google Calendar: To ensure your events are up-to-date between Calendarix and Google Calendar.</li>
          <li>Personalization: To provide AI-generated plans tailored to your inputs.</li>
          <li>Displaying Advertisements: We use advertising networks (like Google AdMob) to display ads within the application. These networks may use advertising identifiers and non-personal information to show more relevant ads.</li>
          <li>Customer Support: To respond to your questions and support requests.</li>
          <li>Analysis and Improvement: To understand how users use the app, identify issues, and improve the performance and features of Calendarix.</li>
          <li>Security and Legal Compliance: To protect the security of the app and users, prevent fraud, and comply with legal requirements.</li>
        </ul>

        <h2 className="mt-8 text-xl font-bold text-[#414BA4]">3. How We Share Your Information</h2>
        <p className="mt-2 text-[#48546d]">
          We do not sell your personal information to third parties. Your information may be shared in the following cases:
        </p>
        <ul className="list-disc list-inside mt-2 text-[#48546d] ml-4">
          <li>Google: Your account and calendar information is shared with Google to enable Google Sign-In and Google Calendar synchronization. Google's use of your information is governed by the Google Privacy Policy.</li>
          <li>Advertising Service Providers: Advertising identifiers and non-personal usage information may be shared with our advertising partners (like Google AdMob) to display in-app advertisements. These partners are obligated to comply with privacy laws.</li>
          <li>Analytics Service Providers: We may use analytical tools (like Google Analytics for Firebase) to better understand app usage, which involves sharing anonymized usage data.</li>
          <li>Artificial Intelligence Service Providers (If applicable): If AI processing occurs on external servers, your input data (securely and possibly anonymized) may be shared with the AI service provider. [Further clarification needed if external services are used].</li>
          <li>Legal Requirements: We may share your information with legal authorities if required by law or to protect our rights, property, or safety, or that of our users or others.</li>
        </ul>

        <h2 className="mt-8 text-xl font-bold text-[#414BA4]">4. Google Calendar Integration</h2>
        <p className="mt-2 text-[#48546d]">
          Calendarix requires read and write access to your Google Calendar to synchronize events.
          This access is granted only with your permission and is used solely for displaying,
          creating, editing, and deleting events in line with the app's functionality. We do not use your Google Calendar data for purposes other than providing Calendarix services and synchronization, nor do we share it with unrelated third parties.
        </p>

        <h2 className="mt-8 text-xl font-bold text-[#414BA4]">5. Artificial Intelligence (AI) Features and Disclaimers</h2>
        <p className="mt-2 text-[#48546d]">
          The Artificial Intelligence (AI) powered features in Calendarix help you receive planning suggestions or personalized plans in various fields (such as health, fitness, academic matters, task management, etc.) based on your inputs and preferences.
        </p>
        <p className="mt-2 text-[#48546d] font-semibold">
          Important Notice:
        </p>
        <p className="mt-2 text-[#48546d]">
          These AI-generated suggestions and plans are provided for general informational and suggestive purposes only and should under no circumstances be considered a substitute for professional advice in that specific field (such as medical, nutritional, fitness, educational, financial, etc. advice).
        </p>
        <p className="mt-2 text-[#48546d]">
          Before acting on any suggestion or plan created by the AI, especially concerning your health, physical condition, financial, or academic matters, it is strongly recommended that you consult with a qualified professional in the relevant field.
        </p>
        <p className="mt-2 text-[#48546d]">
          The responsibility for using these suggestions and plans, and the outcomes thereof, rests entirely with you as the user. Calendarix assumes no liability regarding the suitability, complete accuracy, or consequences resulting from acting on these suggestions.
        </p>

        <h2 className="mt-8 text-xl font-bold text-[#414BA4]">6. Advertising</h2>
        <p className="mt-2 text-[#48546d]">
          Calendarix uses in-app advertising to offer its services free of charge. Our advertising partners may use cookies and advertising identifiers to collect non-personal information and display targeted ads. You can manage settings related to personalized advertising through your device settings (usually under Privacy or Ads in Google settings).
        </p>

        <h2 className="mt-8 text-xl font-bold text-[#414BA4]">7. Data Security</h2>
        <p className="mt-2 text-[#48546d]">
          We implement reasonable technical and organizational measures to protect your personal information against unauthorized access, disclosure, alteration, or destruction. However, no electronic transmission or storage system is 100% secure, and we cannot guarantee the absolute security of your data.
        </p>

        <h2 className="mt-8 text-xl font-bold text-[#414BA4]">8. Data Retention</h2>
        <p className="mt-2 text-[#48546d]">
          We retain your personal information for as long as necessary to provide you with Calendarix services, as long as your account remains active, or as required by legal obligations. You may be able to delete your information by deleting your account (if applicable) or by requesting deletion from us (subject to legal limitations).
        </p>

        <h2 className="mt-8 text-xl font-bold text-[#414BA4]">9. Your Rights</h2>
        <p className="mt-2 text-[#48546d]">
          Depending on your region's laws, you may have certain rights regarding your personal information, including:
        </p>
        <ul className="list-disc list-inside mt-2 text-[#48546d] ml-4">
          <li>The right to access your information.</li>
          <li>The right to correct inaccurate information.</li>
          <li>The right to delete your information (under certain conditions).</li>
          <li>The right to restrict the processing of your information.</li>
          <li>The right to object to processing (e.g., for direct marketing).</li>
        </ul>
        <p className="mt-2 text-[#48546d]">
          To exercise these rights, please contact us using the contact information below. You can also manage much of your information directly through the app settings or your Google Account settings.
        </p>

        <h2 className="mt-8 text-xl font-bold text-[#414BA4]">10. Children's Privacy</h2>
        <p className="mt-2 text-[#48546d]">
          Calendarix is not intended for use by individuals under the age of 13 (or a higher age as required by local law). We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child without parental consent, we will take steps to delete that information.
        </p>

        <h2 className="mt-8 text-xl font-bold text-[#414BA4]">11. Changes to This Privacy Policy</h2>
        <p className="mt-2 text-[#48546d]">
          We may update this Privacy Policy from time to time. The new version will be posted within the application, and the effective date at the top will be updated. We recommend reviewing this policy periodically. Your continued use of Calendarix after changes are implemented constitutes your acceptance of the new policy.
        </p>

        <h2 className="mt-8 text-xl font-bold text-[#414BA4]">12. Contact Us</h2>
        <p className="mt-2 text-[#48546d]">
          If you have any questions about this Privacy Policy or how we handle your information, please contact us via the following email address:
          <a href="mailto:contact@calendarix.pro" className="text-[#414BA4] ml-1">contact@calendarix.pro</a>
        </p>

        <p className="mt-8 text-sm text-gray-500 border-t pt-4 border-[#ADB1D5]/30">
          Last updated: April 15, 2025
        </p>
      </main>
    </>
  );
}
