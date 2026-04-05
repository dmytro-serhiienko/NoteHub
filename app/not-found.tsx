import { Metadata } from "next";
import css from "@/app/NotFound.module.css";

export const metadata: Metadata = {
  title: "NoteHub not found",
  description: "Sorry this page was not found on site",
  alternates: {
    canonical: "https://08-zustand-three-brown.vercel.app/",
  },
  openGraph: {
    title: "NoteHub not found",
    description: "Sorry this page was not found",
    url: "https://08-zustand-three-brown.vercel.app/",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "NoteHub not found",
      },
    ],
  },
};

export default function NotFound() {
  return (
    <div className={css.notWrap}>
      <h1 className={css.title}>404</h1>
      <p className={css.back}>404</p>
      <p className={css.description}>Lost in space...page not found.</p>
    </div>
  );
}
