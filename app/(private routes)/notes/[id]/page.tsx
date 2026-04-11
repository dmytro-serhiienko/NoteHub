import type { Metadata } from 'next';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { fetchServerNoteById } from '../../../../lib/api/serverApi';
import NoteDetailsClient from './NoteDetails.client';

interface NoteDetailsPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: NoteDetailsPageProps): Promise<Metadata> {
  const { id } = await params;
  try {
    const note = await fetchServerNoteById(id);
    return {
      title: `${note.title} | NoteHub`,
      description: note.content ?? 'Note details',
      openGraph: {
        title: `${note.title} | NoteHub`,
        description: note.content ?? 'Note details',
        url: `https://notehub.app/notes/${id}`,
        images: [{ url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg' }],
      },
    };
  } catch {
    return { title: 'Note | NoteHub', description: 'Note details' };
  }
}

export default async function NoteDetailsPage({ params }: NoteDetailsPageProps) {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['note', id],
    queryFn: () => fetchServerNoteById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetailsClient />
    </HydrationBoundary>
  );
}
