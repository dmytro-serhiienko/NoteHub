import { cookies } from "next/headers";
import { nextServer } from "./api";
import type { User, FetchNotesParams, FetchNotesResponse } from "./clientApi";
import type { Note } from "../../types/note";

export const getServerMe = async (): Promise<User> => {
  const cookieStore = await cookies();
  const { data } = await nextServer.get<User>("/users/me", {
    headers: { Cookie: cookieStore.toString() },
  });
  return data;
};

export const checkServerSession = async () => {
  const cookieStore = await cookies();
  const res = await nextServer.get("/auth/session", {
    headers: { Cookie: cookieStore.toString() },
  });
  return res;
};
//

export const fetchServerNotes = async (
  params: FetchNotesParams,
): Promise<FetchNotesResponse> => {
  const cookieStore = await cookies();
  const { data } = await nextServer.get<FetchNotesResponse>("/notes", {
    params,
    headers: { Cookie: cookieStore.toString() },
  });
  return data;
};

export const fetchServerNoteById = async (id: string): Promise<Note> => {
  const cookieStore = await cookies();
  const { data } = await nextServer.get<Note>(`/notes/${id}`, {
    headers: { Cookie: cookieStore.toString() },
  });
  return data;
};
