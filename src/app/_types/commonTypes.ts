export interface Passwords {
  id: number | null;
  title: string;
  loginUrl: string;
  username: string;
  password: string;
}

export interface InitialPasswordsState {
  data: Passwords[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: null | string;
  selectedId: number | null;
}
