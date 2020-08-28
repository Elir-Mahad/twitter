import React, { useState } from "react";
import "./TweetBox.css";

import { Avatar, Button } from "@material-ui/core";
import { db } from "./firebase";
import firebase from "firebase"; // pulling from the module not the file

//! -----------------------------------------------END OF IMPORTS

function TweetBox() {
	//
	//! useState below
	const [tweetMessage, setTweetMessage] = useState("");
	// (tweetMessage) The constant tweetMessage contains a string
	// (setTweetMessage) And we declare that we will mainpulate this string
	// By wrapping the string in a UseState()

	const [tweetImage, setTweetImage] = useState("");
	// (tweetImage) The constant tweetImage contains a string
	// (setTweetImage) And we declare that we will mainpulate this string
	// By wrapping the string in a UseState()

	const sendTweet = (e) => {
		// this function will be able to submit user tweet in the database to that specific post
		e.preventDefault();

		db
			// [a] enter the database
			.collection("posts")
			// [b] access the collection called posts
			.add({
				// [c] add to the post
				displayName: "max",
				// the display name
				username: "maxooman",
				// the user name
				verified: true,
				// the verified symbol
				text: tweetMessage,
				// the tweet text
				image: tweetImage,
				// the tweet image
				avatar:
					"https://cdna.artstation.com/p/assets/images/images/006/310/372/large/alex-lashko-averageblackmale-by-alexlashko-marmoset-13.jpg?1497593368",
				// their avatar image
				timestamp: firebase.firestore.FieldValue.serverTimestamp()
				// the time stamp
			});

		setTweetMessage("");
		setTweetImage("");
		// after your done uploading,
		// set everything back to how it started,
		// with no tweet message and no tweet image being displayed in the input fields
	};

	//! code to be returned below
	return (
		<div className="tweetBox">
			<form>
				<div className="tweetBox_input">
					<Avatar src="https://cdnb.artstation.com/p/assets/images/images/029/129/819/large/ander-liza-bandit-pose1.jpg?1596549142" />
					<input
						value={tweetMessage}
						onChange={(e) => setTweetMessage(e.target.value)}
						placeholder="what's happening"
					/>
				</div>
				<input
					value={tweetImage}
					onChange={(e) => setTweetImage(e.target.value)}
					className="tweeBox_imageInput"
					placeholder="Optional: Enter img url"
					type="text"
				/>
				<Button
					onClick={sendTweet}
					type="submit"
					className="tweetBox_tweetButton"
				>
					Tweet
				</Button>
			</form>
		</div>
	);
}

export default TweetBox;
