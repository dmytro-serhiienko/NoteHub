"use client";

interface ErrorProps {
  error: Error;
}

export default function NoteDetailsError({ error }: ErrorProps) {
  return <p>Could not fetch note details. {error.message}</p>;
}
