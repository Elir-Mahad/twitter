import React from "react";
import "./Widgets.css";

import {
	TwitterTimelineEmbed,
	TwitterShareButton,
	TwitterTweetEmbed
} from "react-twitter-embed";

import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
	return (
		<div className="widgets">
			<div className="widgets_input">
				<SearchIcon className="widgets_searchIcon" />
				<input placeholder="Search Twitter" type="text" />
			</div>
			<div className="widgets_widgetContainer">
				<h2>Whats happening?</h2>
				<TwitterTweetEmbed tweetId={"1237551552958623746"} />
				<TwitterTimelineEmbed
					sourceType="profile"
					screenName="somali_coders"
					options={{ height: 400 }}
				/>
				<TwitterShareButton
					url={"https://facebook.com/cleverprogammer"}
					options={{ text: "#reactjs is awesome" }}
				/>
			</div>
		</div>
	);
}

export default Widgets;
