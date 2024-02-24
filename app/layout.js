import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TBS | Fire, Security and Facility Management Solutions",
  description: "With a relentless pursuit of excellence, we have positioned ourselves as industry pioneers, offering tailored solutions to meet the unique needs of our clients. Our team is fueled by a passion for safety, efficiency, and unparalleled customer satisfaction",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
