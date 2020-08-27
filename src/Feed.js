import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

import { db } from "./firebase.js";

import FlipMove from "react-flip-move";

function Feed() {
	//! UseState Below
	const [posts, setPosts] = useState([]);

	//! UseEffect
	useEffect(() => {
		db
			//
			.collection("posts")
			//
			.orderBy("timestamp", "desc")
			//
			.onSnapshot((snapshot) =>
				setPosts(snapshot.docs.map((doc) => doc.data()))
			);
		return () => {
			// cleanup;
		};
	}, []);

	//! Code that will be returned

	return (
		<div className="feed">
			<div className="feed_header">
				<h1>Home</h1>
			</div>
			<TweetBox />
			<FlipMove>
				{posts.map((post) => (
					<Post
						key={post.text}
						// you can also use post.id, for your key, but to do that you have to first
						// destructure the setpost useffect doc.data
						displayName={post.displayName}
						username={post.username}
						verified={post.verified}
						text={post.text}
						avatar={post.avatar}
						image={post.image}
					/>
				))}
			</FlipMove>
		</div>
	);
}

export default Feed;
