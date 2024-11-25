import { useEffect, useRef } from "react";
import { useRefreshToken } from "../api/endpoints/auth/authEndpoints";
import { TOKEN_EXPIRY_MINUTES } from "../constants/constants";
import type { LocalStorageUser } from "../types/localStorage.types";
import useLocalStorage from "./useLocalStorage";

const useRefreshSession = () => {
	const { getItem, setItem } = useLocalStorage();
	const { mutate: refreshSession, data, isSuccess } = useRefreshToken();
	const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null); // To store the timeout ID

	const user = getItem<LocalStorageUser>("user");

	useEffect(() => {
		if (!user || !user.expiryTimestamp) return;

		const handleRefreshToken = (user: { refreshToken: string; expiryTimestamp: number }) => {
			refreshSession({ refreshToken: user.refreshToken, expiresIn: TOKEN_EXPIRY_MINUTES });
		};

		const currentTime = Date.now();
		const timeToExpiry = user.expiryTimestamp - currentTime;
		const REFRESH_BUFFER_MS = 1 * 60 * 1000; // 1 minutes in milliseconds

		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}

		if (timeToExpiry <= REFRESH_BUFFER_MS) {
			handleRefreshToken(user);
		} else {
			timeoutRef.current = setTimeout(() => {
				handleRefreshToken(user);
			}, timeToExpiry - REFRESH_BUFFER_MS);
		}

		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, [refreshSession, user]);

	useEffect(() => {
		if (!user || !isSuccess) return;

		const newExpiryTimestamp = Date.now() + TOKEN_EXPIRY_MINUTES * 60 * 1000;

		const updatedUser = {
			...user,
			accessToken: data.accessToken,
			refreshToken: data.refreshToken,
			expiryTimestamp: newExpiryTimestamp,
		};
		setItem("user", updatedUser);
	}, [isSuccess, data, setItem, user]);

	return {};
};

export default useRefreshSession;
