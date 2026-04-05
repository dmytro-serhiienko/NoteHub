import { fetchNoteById } from "@/lib/api";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import NotePreview from "./NotePreview.client";

type PropsNoteDetails = {
    params: Promise<{id:string}>
}

export default async function NoteDetails({ params }: PropsNoteDetails) {
    const { id } = await params;
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey:["note", id],
        queryFn:()=>fetchNoteById(id),
    })

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <NotePreview/>
        </HydrationBoundary>
    )
    
}