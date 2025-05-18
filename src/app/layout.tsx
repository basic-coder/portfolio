import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../app/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bhavesh Portfolio",
  description: "Web Dev",
  keywords: ["Web", "React", "Developer"],
  icons: {
    icon: "https://res.cloudinary.com/dz2ecrl0o/image/upload/v1642784870/WhatsApp_Image_2022-01-21_at_22.36.29_dbv4wb.jpg", // place this in your `public/` folder
  },
  openGraph: {
    title: "Bhavesh Portfolio",
    description: "Web Dev",
    url: "https://portfolio-rho-gray-89.vercel.app",
    siteName: "Bhavesh Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/dz2ecrl0o/image/upload/v1642784870/WhatsApp_Image_2022-01-21_at_22.36.29_dbv4wb.jpg",
        width: 800,
        height: 600,
        alt: "Bhavesh Portfolio Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhavesh Portfolio",
    description: "Web Dev",
    images: [
      "https://res.cloudinary.com/dz2ecrl0o/image/upload/v1642784870/WhatsApp_Image_2022-01-21_at_22.36.29_dbv4wb.jpg",
    ],
    creator: "",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
