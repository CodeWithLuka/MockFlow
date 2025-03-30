import { Agent } from "@/components/custom/agent";

const InterviewPage = () => {
	return (
		<>
			<h3>Interview Generation</h3>

			<Agent userName="Luka" userId="user1" type="generate" />
		</>
	);
};

export default InterviewPage;
