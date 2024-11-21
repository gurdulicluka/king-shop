import { Box, Button, Group, Menu, RangeSlider } from "@mantine/core";
import { Coins } from "@phosphor-icons/react";
import { useState } from "react";

const PriceLabel = (value: number) => {
	return <span>{`$${value}`}</span>;
};

const PriceRangeFilter = () => {
	const [value, setValue] = useState<[number, number]>([5, 50]);

	return (
		<Group>
			<Menu transitionProps={{ transition: "scale-y" }} trigger="hover" position="bottom-start">
				<Menu.Target>
					<Button leftSection={<Coins size={16} />} variant="subtle" color="gray" size="xs">
						Price range
					</Button>
				</Menu.Target>
				<Menu.Dropdown>
					<Box px={20}>
						<RangeSlider
							labelTransitionProps={{
								transition: "skew-down",
								duration: 150,
								timingFunction: "linear",
							}}
							label={PriceLabel}
							mt="xl"
							mb="xl"
							w={500}
							defaultValue={value}
							onChange={setValue}
							minRange={1}
							min={0}
							max={75}
						/>
					</Box>
				</Menu.Dropdown>
			</Menu>
		</Group>
	);
};

export default PriceRangeFilter;
