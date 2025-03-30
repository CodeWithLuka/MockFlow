"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

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
		<div className="call-view">
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
		</div>
	);
};
