import type { LoginResponse } from "../api/endpoints/auth/types/authEndpoints.response";

type LocalStorageUser = LoginResponse & { expiryTimestamp: number };

export type { LocalStorageUser };
