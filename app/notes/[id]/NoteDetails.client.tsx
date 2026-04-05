"use client";

import css from "./NoteDetails.module.css";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { fetchNoteById } from "@/lib/api";
import { formatNoteDate } from "@/lib/formatNoteDate";

export default function NoteDetailsClient() {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  if (isLoading) return <p>Loading, please wait...</p>;

  if (error || !data) return <p>Something went wrong.</p>;

  const formattedDate = formatNoteDate(data.createdAt);

  return (
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
  );
}
