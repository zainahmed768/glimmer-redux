import React, { Children } from "react";
import { Col, Container, Row } from "react-bootstrap";

const PageHeader = (pagename) => {
	const { name } = pagename;
	return (
		<section className="page-header">
			<Container>
				<Row>
					<Col>
						<div className="page-heading-wrapper">
							<h4 className="text-dark text-center">{name}</h4>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default PageHeader;
