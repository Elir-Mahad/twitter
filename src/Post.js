import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

function Post({ displayName, username, verified, text, image, avatar }) {
	return (
		<div className="post">
			<div className="post_avatar">
				<Avatar src={Avatar} />
			</div>
			<div className="post_body">
				<div className="post_header">
					<div className="post_headerText">
						<h3>
							Rafeh Qazi{" "}
							<span>
								<VerifiedUserIcon className="post_badge" />
								@cleverqazi
							</span>
						</h3>
					</div>
					<div className="post_headerDescription">
						<p>I challenge you to build a twitter clone</p>
					</div>
				</div>
				<img
					src="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif"
					alt=""
				/>
			</div>
		</div>
	);
}

export default Post;
