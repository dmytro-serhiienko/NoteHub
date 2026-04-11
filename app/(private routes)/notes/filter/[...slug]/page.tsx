import type { Metadata } from 'next';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { fetchServerNotes } from '../../../../../lib/api/serverApi';
import NotesClient from './Notes.client';
import type { NoteTag } from '../../../../../types/note';

interface FilterPageProps {
  params: Promise<{ slug?: string[] }>;
}

export async function generateMetadata({ params }: FilterPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tagValue = slug?.[0];
  const filter = tagValue === 'all' || !tagValue ? 'All' : tagValue;

  return {
    title: `${filter} Notes | NoteHub`,
    description: `Browse ${filter} notes in NoteHub`,
    openGraph: {
      title: `${filter} Notes | NoteHub`,
      description: `Browse ${filter} notes in NoteHub`,
      url: `https://notehub.app/notes/filter/${tagValue ?? 'all'}`,
      images: [{ url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg' }],
    },
  };
}

export default async function FilterPage({ params }: FilterPageProps) {
  const { slug } = await params;
  const tagValue = slug?.[0];
  const activeTag = tagValue === 'all' ? undefined : (tagValue as NoteTag | undefined);

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['notes', 1, '', activeTag],
    queryFn: () => fetchServerNotes({ page: 1, perPage: 12, tag: activeTag }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient activeTag={activeTag} />
    </HydrationBoundary>
  );
}
