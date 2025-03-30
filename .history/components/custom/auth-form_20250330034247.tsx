"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import { FormField } from "./form-field";

const authFormSchema = (type: FormType) => {
	return z.object({
		name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
		email: z.string().email(),
		password: z.string().min(3),
	});
};

export const AuthForm = ({ type }: { type: FormType }) => {
	// 1. Define your form.
	const formSchema = authFormSchema(type);
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	const isSignIn = type === "sign-in";

	return (
		<div className="card-border lg:min-w-[566px]">
			<div className="flex flex-col gap-6 card py-14 px-10">
				<div className="flex flex-row gap-2 justify-center">
					<Image
						src="/logo.svg"
						alt="MockFlow Logo"
						height={32}
						width={38}
					/>
					<h2 className="text-primary-100">MockFlow</h2>
				</div>
				<h3>Transforming Interview Prep with Intelligent Practice</h3>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="w-full space-y-6 mt-4 form"
					>
						{!isSignIn && (
							<FormField
								control={form.control}
								name="name"
								label="Name"
								placeholder="Your Name"
								type="text"
							/>
						)}

						<FormField
							control={form.control}
							name="email"
							label="Email"
							placeholder="Your email address"
							type="email"
						/>

						<FormField
							control={form.control}
							name="password"
							label="Password"
							placeholder="Enter your password"
							type="password"
						/>
						<Button type="submit">Submit</Button>
					</form>
				</Form>
			</div>
		</div>
	);
};
