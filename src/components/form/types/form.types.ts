import type { FieldValues, Control, RegisterOptions, Path } from "react-hook-form";

export interface BaseInputProps<T extends FieldValues> {
	name: Path<T>;
	control: Control<T>;
	label?: string;
	rules?: Omit<RegisterOptions<T>, "required">;
	placeholder?: string;
}
