export interface Passwords {
  userId: number;
  id: number;
  title: string;
  loginUrl: string;
  username: string;
  password: string;
}

export interface InitialPasswordsState {
  data: Passwords[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: null | string;
}
