/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { Agent } from "@/components/custom/agent";

import { getCurrentUser } from "@/lib/actions/auth.action";

const InterviewPage = async () => {
	const user = await getCurrentUser();

	return (
		<>
			<h3>Interview Generation</h3>

			<Agent
				userName={user?.name!}
				userId={user?.id}
				// profileImage={user?.profileURL}
				type="generate"
			/>
		</>
	);
};

export default InterviewPage;
