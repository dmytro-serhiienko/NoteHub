import "./globals.css";
import { SmoothScroll } from "@/components/ui/SmoothScroll/SmoothScroll";
import type { Metadata } from "next";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
});

//! SEO
export const metadata: Metadata = {
  title: {
    default: "NoteHub — Your Ideas",
    template: "%s | NoteHub",
  },
  description:
    "A minimalist space to capture thoughts, manage tasks, and organize your daily life with ease.",
  icons: {
    icon: "/todo-icon.svg",
    shortcut: "/todo-icon.svg",
    apple: "/todo-icon.svg",
  },
  openGraph: {
    title: "NoteHub",
    description: "Site for saving your notes online",
    url: "https://08-zustand-three-brown.vercel.app/",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "NoteHub",
      },
    ],
  },
};
//! SEO

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/faviconCustom.png" type="image/x-icon" />
      <TanStackProvider>
        <ThemeProvider>
          <body className={`min-h-dvh flex flex-cd ${roboto.variable}`}>
            <SmoothScroll>
              <Header />
              <main className="flex-1 page-content">{children}</main>
              {modal}
              <Footer />
            </SmoothScroll>
          </body>
        </ThemeProvider>
      </TanStackProvider>
    </html>
  );
}
