"use client";

import css from "./NotePreview.module.css";

import Modal from "@/components/Modal/Modal";
import { fetchNoteById } from "@/lib/api";
import { formatNoteDate } from "@/lib/formatNoteDate";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";

type NotePreviewProps = Record<string, never>;

export default function NotePreview({}: NotePreviewProps) {
  const router = useRouter();
  const close = () => router.back();

  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  const formattedDate = data ? formatNoteDate(data.createdAt) : "";

  return (
    <Modal onClose={close}>
      {isLoading && <p>Loading, please wait...</p>}
      {isError && <p>Something went wrong.</p>}
      {!isLoading && !isError && data && (
        <div className={css.container}>
          <div className={css.item}>
            <div className={css.header}>
              <h2>{data.title}</h2>
            </div>
            <p className={css.tag}>{data.tag}</p>
            <p className={css.content}>{data.content}</p>
            <p className={css.date}>{formattedDate}</p>
          </div>
        </div>
      )}

      {!isLoading && !isError && !data && <p>Something went wrong.</p>}
    </Modal>
  );
}
