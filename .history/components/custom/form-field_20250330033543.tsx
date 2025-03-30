import {
	FormControl,
	FormDescription,
	FormField as FormFieldComponent,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export const FormField = () => (
	<FormFieldComponent
		// control={form.control}
		name="username"
		render={({ field }) => (
			<FormItem>
				<FormLabel>Username</FormLabel>
				<FormControl>
					<Input placeholder="Luka" {...field} />
				</FormControl>
				<FormDescription>
					This is your public display name.
				</FormDescription>
				<FormMessage />
			</FormItem>
		)}
	/>
);
