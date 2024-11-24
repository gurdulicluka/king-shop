import { PasswordInput, type PasswordInputProps } from "@mantine/core";
import { type FieldValues, useController } from "react-hook-form";
import type { BaseInputProps } from "./types/form.types";

type InputPasswordProps<T extends FieldValues> = BaseInputProps<T> & PasswordInputProps;

const InputPassword = <T extends FieldValues>(props: InputPasswordProps<T>) => {
	const { name, control, rules, ...restInputProps } = props;

	const { field } = useController({
		name: name,
		control,
		rules,
	});

	return <PasswordInput {...field} mt="md" radius="xl" {...restInputProps} />;
};

export default InputPassword;
