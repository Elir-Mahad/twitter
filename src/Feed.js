import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

import { db } from "./firebase.js";

function Feed() {
	//! UseState Below
	const [posts, setPosts] = useState([]);

	//! UseEffect
	useEffect(() => {
		db
			//
			.collection("posts")
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
			{posts.map((post) => (
				<Post
					displayName={post.displayName}
					username={post.username}
					verified={post.verified}
					text={post.text}
					avatar={post.avatar}
					image={post.image}
				/>
			))}
		</div>
	);
}

export default Feed;
