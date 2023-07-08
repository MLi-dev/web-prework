import React, { Component, useEffect, useState } from "react";
import { supabase } from "../client";

function ViewCreator() {
	const [creators, setCreators] = useState([]);
	useEffect(() => {
		getCreators();
	}, []);
	async function getCreators() {
		const { data } = await supabase.from("creators").select();
		setCreators(data);
	}
	return (
		<ul>
			{creators.length &&
				creators.map((creator) => (
					<li key={creator.name}>
						{creator.name}, {creator.url}
						{creator.description}, {creator.image_url}
					</li>
				))}
			{!creators.length && <div>There are no creators!</div>}
		</ul>
	);
}

export default ViewCreator;
