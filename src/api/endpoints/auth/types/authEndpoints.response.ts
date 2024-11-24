interface LoginResponse {
	id: number;
	username: string;
	email: string;
	firstName: string;
	lastName: string;
	gender: string;
	image: string;
	accessToken: string;
	refreshToken: string;
}

interface RefreshTokenResponse {
	accessToken: string;
	refreshToken: string;
}

export type { LoginResponse, RefreshTokenResponse };
