import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { avatarImg } from "../../constant";
import "../../assets/css/group.css";

const GroupPost = (groupData) => {
	const { groupTitle, groupName, totalMembers, groupImg } = groupData;
	console.log();
	return (
		<>
			<Card className="my-3">
				<Link to="/group-detail">
					<Card.Img variant="top" src={groupImg} />
				</Link>

				<Card.Body>
					<p className="text-info">{groupName}</p>
					<Card.Title className="text-dark">
						{groupTitle.length > 50
							? `${groupTitle.substring(0, 50)}...`
							: groupTitle}
					</Card.Title>
					<div className="members-wrapper d-flex gap-3 align-items-center">
						<p className="text-info mb-0">
							{totalMembers > 1
								? `${totalMembers} members`
								: `${totalMembers} member`}
						</p>
						{totalMembers > 1 && (
							<img
								src={avatarImg}
								className="img-fluid rounded-circle"
								alt=""
							/>
						)}
					</div>
				</Card.Body>
			</Card>
		</>
	);
};

export default GroupPost;
