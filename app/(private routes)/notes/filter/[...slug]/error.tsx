"use client";

interface ErrorProps {
  error: Error;
}

export default function NotesError({ error }: ErrorProps) {
  return <p>Could not fetch the list of notes. {error.message}</p>;
}
