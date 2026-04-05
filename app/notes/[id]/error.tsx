"use client";

type Props = {
  error: Error;
  reset: () => void;
};

export default function Error({ error }: Props) {
  return <p>Could not fetch note details. {error.message}</p>;
}
