import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { BsFillStarFill, BsSearch } from "react-icons/bs";
import { adminImg, avatarImg } from "../../constant";

const GroupSidebar = () => {
	return (
		<>
			<Form>
				<InputGroup className="mb-3 group-search">
					<Form.Control
						type="search"
						placeholder="Search by name"
						className="rounded-0 py-3 px-4 border-none"
					/>
					<InputGroup.Text id="basic-addon2" className="rounded-0">
						<Button variant="light" className="text-dark">
							<BsSearch className="text-dark" />
						</Button>
					</InputGroup.Text>
				</InputGroup>
			</Form>
			{/* about card starts here */}
			<div className="about-card-wrapper border border-info p-4 rounded my-3">
				<div className="card-heading-wrapper border-bottom">
					<h4 className="text-dark">About</h4>
					<p>Employment and volunteer – opportunities</p>
					<p className="members text-success">2 Members</p>
				</div>
				<div className="card-footer-wrapper py-3 d-flex align-items-center gap-3">
					<img src={adminImg} className="img-fluid rounded-circle" alt="" />
					<div className="card-footer-content-wrapper">
						<h5 className="fw-normal mb-0 text-dark">Anna Hoc</h5>
						<h6 className="text-primary mb-0">
							<BsFillStarFill />
							<span className="ms-2">Group Admin</span>
						</h6>
					</div>
				</div>
			</div>

			<div className="about-card-wrapper border border-info p-4 rounded my-3">
				<div className="card-heading-wrapper">
					<h4 className="text-dark">Group Members</h4>
				</div>
				<div className="card-member-wrapper py-3 d-flex align-items-center gap-3">
					<img src={avatarImg} className="img-fluid rounded-circle" alt="" />
					<div className="card-footer-content-wrapper">
						<h5 className="fw-normal mb-0 text-dark">Nola</h5>
						<h6 className="text-dark mb-0 member-username">@Nola</h6>
					</div>
				</div>
				<div className="card-btn-wrapper text-center pt-3 mt-3 border-top border-success">
					<Button variant="link">See All</Button>
				</div>
			</div>
			{/* about card ends here */}
		</>
	);
};

export default GroupSidebar;
