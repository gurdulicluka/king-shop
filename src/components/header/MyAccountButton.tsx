import { ActionIcon, Avatar, Box, Button, Group, Menu, Stack, Text } from "@mantine/core";
import type { LocalStorageUser } from "../../types/localStorage.types";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";

const MyAccountButton = () => {
	const { getItem, setItem } = useLocalStorage();
	const user = getItem<LocalStorageUser>("user");

	const handleLogout = () => {
		setItem("user", null);
	};

	const navigate = useNavigate();

	return !user ? (
		<Button radius="xl" onClick={() => navigate("/login")} component="a" size="xs">
			Login
		</Button>
	) : (
		<Menu transitionProps={{ transition: "scale-y" }} trigger="click" position="bottom-start">
			<Menu.Target>
				<ActionIcon size="lg" variant="subtle" color="#171717">
					<Avatar name="LG" src={user.image} size="sm" />
				</ActionIcon>
			</Menu.Target>
			<Menu.Dropdown p={8}>
				<Stack>
					<Stack pr={30} gap="xs">
						<Group gap="sm">
							<Avatar name="LG" src={user.image} size="md" />
							<Text size="lg" fw="bold">{`${user.firstName} ${user.lastName}`}</Text>
						</Group>
						<Box>
							<Text size="sm" fw="bold">
								Username:
							</Text>
							<Text>{user.username}</Text>
						</Box>
						<Box>
							<Text size="sm" fw="bold">
								Email:
							</Text>
							<Text>{user.email}</Text>
						</Box>
					</Stack>
					<Button fullWidth onClick={handleLogout}>
						Logout
					</Button>
				</Stack>
			</Menu.Dropdown>
		</Menu>
	);
};

export default MyAccountButton;
