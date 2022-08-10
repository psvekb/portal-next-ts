import { useEffect, useState } from "react";

export default function SystemReview() {
	const [response, updateResponse] = useState({ "name": '' });
	useEffect(() => {
		const fetchData = async () => {
			const resp = await fetch("http://localhost:3001/api/user");
			const respJson = await resp.json()
			updateResponse(respJson)
			console.log("update")
		}
		fetchData();
	}, [])

	console.log("load comp")
	return (
		<div>
			<h1>System Review</h1>
			<p key={response["name"]}>{response["name"]}</p>
		</div>
	);
}

