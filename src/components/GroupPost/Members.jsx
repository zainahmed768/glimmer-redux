import React from "react";

const Members = (members) => {
	return (
		<div className="members-wrapper">
			<div className="single-member-wrapper d-flex gap-3 py-3 border-bottom">
				<div className="single-member-img-wrapper">
					<figure className="mb-0">
						<img
							src={members?.memberImg}
							className="img-fluid rounded-circle"
							alt=""
						/>
					</figure>
				</div>
				<div className="single-member-content-wrapper">
					<a href="#" className="text-dark fs-4 text-decoration-none d-block">
						{members?.name}
					</a>
					<span className="joined-txt">{members?.joined}</span>
				</div>
			</div>
		</div>
	);
};

export default Members;
