import { Button, Card, Group, Stack } from "@mantine/core";
import type { LoginRequest } from "../api/endpoints/auth/types/authEndpoints.request";
import { useForm } from "react-hook-form";
import InputText from "../components/form/InputText";
import InputPassword from "../components/form/InputPassword";
import useHandleLogin from "../hooks/useHandleLogin";
import useLocalStorage from "../hooks/useLocalStorage";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
	const { handleLogin, isPending } = useHandleLogin();
	const { getItem } = useLocalStorage();
	const isLoggedIn = getItem("user");

	const { control, handleSubmit } = useForm<LoginRequest>({
		defaultValues: { username: "", password: "" },
	});

	const onSubmit = (formData: LoginRequest) => {
		handleLogin(formData);
	};

	if (isLoggedIn) {
		return <Navigate to="/" replace />;
	}

	return (
		<Group justify="center">
			<Card
				p="xl"
				radius="md"
				withBorder
				shadow="xs"
				mt={30}
				miw={300}
				maw={400}
				styles={{ root: { width: "100%" } }}
			>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Stack>
						<InputText required name="username" control={control} label="Username" />
						<InputPassword required name="password" control={control} label="Password" />
						<Button loading={isPending} type="submit" fullWidth mt={30}>
							Login
						</Button>
					</Stack>
				</form>
			</Card>
		</Group>
	);
};

export default LoginPage;
