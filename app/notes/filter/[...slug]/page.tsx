import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import type { Metadata } from "next";
import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";
import { NoteTag } from "@/types/note";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const filter = slug[0] === "all" ? "All" : slug[0];

  return {
    title: `Notes — ${filter}`,
    description: `Browse notes filtered by ${filter}.`,
    openGraph: {
      title: `Notes — ${filter}`,
      description: `Browse notes filtered by ${filter}.`,
      url: `https://08-zustand-three-brown.vercel.app/notes/filter/${slug.join("/")}`,
      images: [
        {
          url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
          width: 1200,
          height: 630,
          alt: `NoteHub — ${filter}`,
        },
      ],
    },
  };
}

export default async function NotesPage({ params }: Props) {
  const { slug } = await params;

  const category = (slug[0] === "all" ? undefined : slug[0]) as
    | NoteTag
    | undefined;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", 1, "", category],
    queryFn: () =>
      fetchNotes({ page: 1, perPage: 12, search: "", tag: category }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient key={category ?? "all"} category={category} />
    </HydrationBoundary>
  );
}
