import React, { useState } from "react";
import "./TweetBox.css";

import { Avatar, Button } from "@material-ui/core";
import { db } from "./firebase";
import firebase from "firebase"; // pulling from the module not the file

function TweetBox() {
	//! useState below
	const [tweetMessage, setTweetMessage] = useState("");
	const [tweetImage, setTweetImage] = useState("");

	//! useEffect below

	// !
	const sendTweet = (e) => {
		e.preventDefault();

		db
			//
			.collection("posts")
			.add({
				displayName: "max",
				username: "maxooman",
				verified: true,
				text: tweetMessage,
				image: tweetImage,
				avatar:
					"https://cdna.artstation.com/p/assets/images/images/006/310/372/large/alex-lashko-averageblackmale-by-alexlashko-marmoset-13.jpg?1497593368",
				timestamp: firebase.firestore.FieldValue.serverTimestamp()
			});

		setTweetMessage("");
		setTweetImage("");
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
