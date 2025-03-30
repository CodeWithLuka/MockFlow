import { Controller, Control, FieldValues, Path } from "react-hook-form";

import {
	FormControl,
	FormDescription,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface FormFieldProps<T extends FieldValues> {
	control: Control<T>;
	name: Path<T>;
	label: string;
	placeholder?: string;
	type?: "text" | "email" | "password";
}

export const FormField = <T extends FieldValues>({
	control,
	name,
	label,
	placeholder,
	type = "text",
}: FormFieldProps<T>) => (
	<Controller
		control={control}
		name={name}
		render={({ field }) => (
			<FormItem>
				<FormLabel>{label}</FormLabel>
				<FormControl>
					<Input placeholder={placeholder} {...field} />
				</FormControl>
				<FormDescription>
					This is your public display name.
				</FormDescription>
				<FormMessage />
			</FormItem>
		)}
	/>
);
