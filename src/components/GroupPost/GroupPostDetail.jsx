import React from "react";
import { Button } from "react-bootstrap";
import { BsHeart } from "react-icons/bs";
import { groupDetail1Img, postProfileImg } from "../../constant";
import { Link } from "react-router-dom";

const GroupPostDetail = (detailPost) => {
	return (
		<>
			<div className="group-post-wrapper">
				<div className="group-post-header-wrapper pb-4 d-flex  align-items-center gap-3">
					<Link to="/">
						<img src={detailPost?.authorImg} className="img-fluid" alt="" />
					</Link>
					<div className="group-post-title-wrapper">
						<h5>
							<a href="#" className="text-decoration-none">
								{detailPost?.authorName}
							</a>
						</h5>
						<a href="#" className="text-decoration-none">
							<span className="time-since">{detailPost?.time}</span>
						</a>
					</div>
				</div>
				<div className="group-post-des-wrapper">
					<p>{detailPost?.postDes}</p>
				</div>
				{detailPost?.postImg && (
					<div className="group-img-wrapper">
						<figure className="mb-0">
							<a href="#">
								<img
									src={detailPost?.postImg}
									className="img-fluid rounded w-100"
									alt=""
								/>
							</a>
						</figure>
					</div>
				)}

				<div className="group-like-btn-wrapper d-flex gap-3 py-4 border-bottom align-items-center">
					<Button className="btn btn-light">
						<BsHeart size={20} color="#ff6f63" />
					</Button>
					<span className="count">{detailPost?.totalLike}</span>
				</div>
			</div>
		</>
	);
};

export default GroupPostDetail;
