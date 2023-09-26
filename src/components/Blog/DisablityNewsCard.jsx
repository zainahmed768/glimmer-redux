import React from "react";
import { freedyImg } from "../../constant";
import { Link } from "react-router-dom";

const DisablityNewsCard = (disableNewData) => {
	const { title, des, id } = disableNewData;
	return (
		<>
			<div className="disablity-card-wrapper py-5 border-bottom align-items-center flex-lg-nowrap flex-wrap d-flex gap-3">
				<div className="disability-img-wrapper">
					<figure className="mb-0">
						<img src={freedyImg} className="img-fluid" alt="" />
					</figure>
				</div>
				<div className="disability-content-wrapper">
					<h5 className="text-info">
						<Link to="/" className="text-info fw-bold">
							How to promote disabled women in academia | THE Campus Learn,
							Share, Connect
						</Link>
					</h5>
					<p>
						How intersectionality compounds barriers. Universities need to do
						more to acknowledge the intersection of gender and disability to
						ensure disabled ...
					</p>
				</div>
			</div>
		</>
	);
};

export default DisablityNewsCard;
