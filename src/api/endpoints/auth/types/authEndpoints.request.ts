interface LoginRequest {
	username: string;
	password: string;
	expiresInMins?: number;
}

interface RefreshTokenRequest {
	refreshToken: string;
	expiresIn: number;
}

export type { LoginRequest, RefreshTokenRequest };
