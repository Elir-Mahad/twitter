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
			<TweetBox />
			<Post
				displayName="max"
				username="maximillian"
				verified={true}
				text="black lives matter"
				avatar="https://cdna.artstation.com/p/assets/images/images/006/310/372/large/alex-lashko-averageblackmale-by-alexlashko-marmoset-13.jpg?1497593368"
				image="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif"
			/>
		</div>
	);
}

export default Feed;
