import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { fetchServerNoteById } from '../../../../lib/api/serverApi';
import NotePreview from './NotePreview.client';

interface InterceptedNotePageProps {
  params: Promise<{ id: string }>;
}

export default async function InterceptedNotePage({ params }: InterceptedNotePageProps) {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['note', id],
    queryFn: () => fetchServerNoteById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotePreview id={id} />
    </HydrationBoundary>
  );
}
