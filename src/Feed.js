import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

import { db } from "./firebase.js";

import FlipMove from "react-flip-move";

//! -----------------------------------------------END OF IMPORTS

function Feed() {
	//! UseState Below

	const [posts, setPosts] = useState([]);
	// (posts)  The constant posts contains an array
	// (setPosts) And we declare that we will mainpulate this array
	// By wrapping the array in a UseState()

	//! UseEffect - UseEffect runs a piece of code based on a specific condition

	useEffect(() => {
		db
			// Enter the firebase database
			.collection("posts")
			// Get the posts inside firebase
			.orderBy("timestamp", "desc")
			// order the posts based on timestamp in descending order (top post = most recent post)
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
