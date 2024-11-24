import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../api/endpoints/auth/authEndpoints";
import useLocalStorage from "../hooks/useLocalStorage";
import type { LoginRequest } from "../api/endpoints/auth/types/authEndpoints.request";
import { notifications } from "@mantine/notifications";
import type { LocalStorageUser } from "../types/localStorage.types";
import { TOKEN_EXPIRY_MINUTES } from "../constants/constants";

const useHandleLogin = () => {
	const { mutate: login, isError, error, isSuccess, isPending, data } = useLogin();
	const { setItem } = useLocalStorage();
	const navigate = useNavigate();

	const handleLogin = (request: LoginRequest) => {
		login({
			username: request.username,
			password: request.password,
			expiresInMins: TOKEN_EXPIRY_MINUTES,
		});
	};

	useEffect(() => {
		if (isSuccess && data) {
			const expiryTimestamp = Date.now() + TOKEN_EXPIRY_MINUTES * 60 * 1000;

			const authWithExpiry: LocalStorageUser = {
				...data,
				expiryTimestamp,
			};

			setItem<LocalStorageUser>("user", authWithExpiry);

			notifications.show({
				title: "Login Successful",
				message: "You are now logged in.",
				color: "green",
				position: "top-center",
			});

			navigate("/");
		}

		if (isError) {
			notifications.show({
				title: "Login Failed",
				message: error.message || "Something went wrong.",
				color: "red",
				position: "top-center",
			});
		}
	}, [isSuccess, isError, error, data, setItem, navigate]);

	return { handleLogin, isPending };
};

export default useHandleLogin;
