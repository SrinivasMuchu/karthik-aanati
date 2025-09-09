export const metadata = {
  title: "Karthik Aanati - Empowering Your Financial Journey",
  description:
    "Karthik Aanati offers expert financial services, guidance, and solutions to help you achieve your financial goals. Based in Kavali, we are your trusted Chartered Accountant (CA) in Kavali for tax, audit, and financial consulting. Discover our services, FAQs, and why clients trust us.",
  keywords:
    "Karthik Aanati, financial services, investment, wealth management, financial planning, expert advice, kavali ca, ca located in kavali, chartered accountant kavali, best ca in kavali, kavali accounting, kavali tax consultant, ca office kavali, ca firm kavali, ",
  openGraph: {
    title: "Karthik Aanati - Empowering Your Financial Journey",
    description: "Expert financial services and solutions tailored for your success.",
    url: "https://your-domain.com",
    siteName: "Karthik Aanati",
    images: [
      {
        url: "/favicon.ico",
        width: 800,
        height: 600,
        alt: "Karthik Aanati Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karthik Aanati - Empowering Your Financial Journey",
    description: "Expert financial services and solutions tailored for your success.",
  images: ["/favicon.ico"],
  },
};

import HomePage from "@/Components/Homepage/HomePage";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
}
