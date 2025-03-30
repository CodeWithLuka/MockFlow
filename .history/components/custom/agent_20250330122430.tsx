import Image from "next/image";

export const Agent = ({
	userName,
	userId,
	interviewId,
	feedbackId,
	type,
	questions,
}: AgentProps) => {
	return (
		<div className="call-view">
			<div className="card-interviewer">
				<div className="avatar">
					<Image
						src="ai-avatar.png"
						alt="Vapi"
						height={54}
						width={65}
						className="object-cover"
					/>
				</div>
			</div>
		</div>
	);
};
