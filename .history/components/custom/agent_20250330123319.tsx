"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import { cn } from "@/lib/utils";

enum CallStatus {
	INACTIVE = "INACTIVE",
	CONNECTING = "CONNECTING",
	ACTIVE = "ACTIVE",
	FINISHED = "FINISHED",
}

interface SavedMessage {
	role: "user" | "system" | "assistant";
	content: string;
}

export const Agent = ({
	userName,
	userId,
	interviewId,
	feedbackId,
	type,
	questions,
}: AgentProps) => {
	const router = useRouter();
	const [callStatus, setCallStatus] = useState<CallStatus>(
		CallStatus.INACTIVE,
	);
	const [messages, setMessages] = useState<SavedMessage[]>([]);
	const [isSpeaking, setIsSpeaking] = useState(false);
	const [lastMessage, setLastMessage] = useState<string>("");

	return (
		<>
			<div className="call-view">
				{/* AI Interviewer Card */}
				<div className="card-interviewer">
					<div className="avatar">
						<Image
							src="/ai-avatar.png"
							alt="Vapi"
							height={54}
							width={65}
							className="object-cover"
						/>
						{isSpeaking && <span className="animate-speak" />}
					</div>
					<h3>AI Interviewer</h3>
				</div>

				{/* User Profile Card */}
				<div className="card-border">
					<div className="card-content">
						<Image
							src="/user-avatar.png"
							alt="profile-image"
							width={539}
							height={539}
							className="rounded-full object-cover size-[120px]"
						/>
						<h3>{userName}</h3>
					</div>
				</div>
			</div>

			<div className="w-full flex justify-center">
				{callStatus !== "ACTIVE" ? (
					<button
						className="relative btn-call"
						// onClick={() => handleCall()}
					>
						<span
							className={cn(
								"absolute animate-ping rounded-full opacity-75",
								callStatus !== "CONNECTING" && "hidden",
							)}
						/>

						<span className="relative">
							{callStatus === "INACTIVE" ||
							callStatus === "FINISHED"
								? "Call"
								: ". . ."}
						</span>
					</button>
				) : (
					<button
						className="btn-disconnect"
						// onClick={() => handleDisconnect()}
					>
						End
					</button>
				)}
			</div>
		</>
	);
};
