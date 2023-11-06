export interface Passwords {
  id: string;
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
