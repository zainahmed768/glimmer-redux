import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const GroupButtons = () => {
	return (
		<>
			<Container className="py-3 gronp-btns">
				<Row>
					<Col>
						<Button
							href="/group-detail"
							variant="dark"
							className="btn-gradient px-4 rounded-0 me-3"
						>
							Home
						</Button>
						<Button
							href="/group-detail-member"
							variant="dark"
							className="btn-gradient px-4 rounded-0"
						>
							Members <span>2</span>
						</Button>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default GroupButtons;
