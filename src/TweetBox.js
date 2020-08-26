import React from "react";
import "./TweetBox.css";

import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
	return (
		<div className="tweetBox">
			<form>
				<div className="tweetBox_input">
					<Avatar src="https://cdnb.artstation.com/p/assets/images/images/029/129/819/large/ander-liza-bandit-pose1.jpg?1596549142" />
					<input placeholder="what's happening" />
				</div>
				<input
					className="tweeBox_imageInput"
					placeholder="Eneter img url"
					type="text"
					//
				/>
				<Button className="tweetBox_tweetButton">Tweet</Button>
			</form>
		</div>
	);
}

export default TweetBox;
