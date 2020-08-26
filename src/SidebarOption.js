import React from "react";
import "./SidebarOption.css";

function SidebarOption({ active, text, Icon }) {
	return (
		<div className={`sidebarOption ${active && "sidebarOption_active"}`}>
			{/* If your one of the sidebarOption components has the prop 'active' 
                then that means that you are currently on the page that's associated
                with that componenet. If this is the case, then give
                the icon of your current page the class 'sidebarOption_active'.
                This class will be given a specific styling in the sidebaroption.css */}
			<Icon />
			<h2>{text}</h2>
		</div>
	);
}

export default SidebarOption;
