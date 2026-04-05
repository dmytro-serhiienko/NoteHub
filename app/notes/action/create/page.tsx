import type { Metadata } from "next";
import css from "./CreateNote.module.css";
import NoteForm from "@/components/NoteForm/NoteForm";

export const metadata: Metadata = {
  title: "Create note",
  description: "Create a new note in NoteHub.",
  openGraph: {
    title: "Create note",
    description: "Create a new note in NoteHub",
    url: "https://08-zustand-three-brown.vercel.app/notes/action/create",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "NoteHub — Create note",
      },
    ],
  },
};

export default function CreateNote() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        {/* + компонент */}
        <NoteForm />
      </div>
    </main>
  );
}
