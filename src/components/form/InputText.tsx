import { TextInput, type TextInputProps } from "@mantine/core";
import { type FieldValues, useController } from "react-hook-form";
import type { BaseInputProps } from "./types/form.types";

type InputTextProps<T extends FieldValues> = BaseInputProps<T> & TextInputProps;

const InputText = <T extends FieldValues>(props: InputTextProps<T>) => {
	const { name, control, rules, ...restInputProps } = props;

	const { field } = useController({
		name: name,
		control,
		rules,
	});

	return <TextInput {...field} mt="md" radius="xl" {...restInputProps} />;
};

export default InputText;
