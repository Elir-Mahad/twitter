import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption.js";

// All material ui icon imports

import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Sidebar() {
	return (
		<div>
			<h1>Sidebar</h1>
			<TwitterIcon />
			<SidebarOption active Icon={HomeIcon} text="Home" />
			<SidebarOption Icon={SearchIcon} text="Explore" />
			<SidebarOption Icon={NotificationsIcon} text="Notifications" />
			<SidebarOption Icon={MailOutlineIcon} text="Messages" />
			<SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
			<SidebarOption Icon={ListAltIcon} text="Lists" />
			<SidebarOption Icon={PermIdentityIcon} text="Profile" />
			<SidebarOption Icon={MoreHorizIcon} text="more" />
		</div>
	);
}

export default Sidebar;
