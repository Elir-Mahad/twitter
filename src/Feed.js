import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

function Feed() {
	return (
		<div className="feed">
			<div className="feed_header">
				<h1>Home</h1>
			</div>

			{/* Tweetbox */}
			<TweetBox />
			<Post />
			<Post />
			<Post />
			{/* post */}
			{/* post */}
			{/* post */}
			{/* post */}
		</div>
	);
}

export default Feed;
