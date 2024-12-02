import { User } from "./types";

export interface UserReducerInitalStateType {
  user: User | null;
  loading: boolean;
}
