import React from "react";
import Header from "../../components/Header/Header";
import PageHeader from "../../components/PageHeader/PageHeader";
import Footer from "../../components/Footer/Footer";
import { Col, Container, Figure, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsEnvelope, BsFacebook, BsTwitter } from "react-icons/bs";
import { blog1Img, postProfileImg } from "../../constant";
import "../../assets/css/blog.css";

const BlogDetail = () => {
	const pagename = {
		name: "Blog Detail",
	};
	return (
		<>
			<Header />
			<PageHeader {...pagename} />
			{/* Blog destil starts here */}
			<section className="blog-detail-sec">
				<Container>
					<Row>
						<Col lg={12}>
							<div className="blog-heading-social-wrapper d-flex align-items-center justify-content-between">
								<div className="blog-heading-wrapper">
									<h3 className="text-dark">
										Know Your Rights and Reach for the Stars!
									</h3>
								</div>
								<div className="blog-social-wrapper">
									<ul className="list-unstyled align-items-center justify-content-end flex-wrap d-flex gap-3 mb-0">
										<li>
											<span className="share">Share</span>
										</li>
										<li>
											<Link to="/">
												<BsFacebook color="#fff" />
											</Link>
										</li>
										<li>
											<Link to="/">
												<BsTwitter color="#fff" />
											</Link>
										</li>
										<li>
											<Link to="/">
												<BsEnvelope color="#fff" />
											</Link>
										</li>
									</ul>
								</div>
							</div>
							<div className="blog-detail-des-wrapper">
								<p>
									As I am sure you know EHA (Education for all Handicapped
									Children) was passed in 1975. It was renamed in 1990 -IDEA –
									Individuals with Disabilities Education Act. Among other
									things it provided for services under the IEP and the 504
									Plans. Services are approved through age 21. However,
									reasonable services are extended if a person attends a
									university or college.
								</p>
								<p>
									With the said, what are reasonable services? If you are a
									student or a parent of a student, you are probably aware of
									the standard services offered – extended time for tests, note
									taking assistance, scribe, preferential seating, adjusted
									goals and expectations, study skills instruction (often a
									resource room), organization of educational materials, use of
									computer and computer programs. If the individual qualifies,
									physical, occupational, speech therapy, and supplemental
									services such as special communication systems could also be
									offered. Too often the individual often must fight for the
									right services and to receive them as promised. It’s a
									continuing struggle for parents and students with
									disabilities.
								</p>
								<p>
									Keep in mind the services under this act are your right, and
									do not limit what you can be offered. Think about if your
									needs are not being met. If not, why? What can be done for
									success? Here are some simple common-sense suggestions:
								</p>
								<div className="blog-detail-list-wrapper">
									<ul>
										<li>Extended time for tests AND quizzes</li>
										<li>
											Breaks during exams – especially if you are ADD. Think
											about how long you can focus before you need a short
											break. It should include the option to walk so you are not
											forced to sit still.
										</li>
										<li>
											Do not allow the school to plan your goals so the
											educators look good and you are not getting the
											stimulation you deserve.
										</li>
										<li>
											Observe the methods of teaching basic skills – especially
											reading. You may need a different method so that you can
											learn. Research what other options may work better for
											you.
										</li>
										<li>
											Note taking assistance may include the notes from another
											student. If the student does not attend class, the notes
											are not readable, the notes do not make sense, advise the
											school so another student can be assigned the task. There
											are also many computer programs that now assist with note
											taking. Ask the school what they have or what they can
											purchase for you. Be educated in case they do not offer
											you any other options.
										</li>
										<li>
											If organization and study skills are offered, be aware and
											share with the teacher what works and does not work. Maybe
											also you can suggest organizing methods that either work
											for you or were suggested by others. The teacher should be
											open to adjustments and changes.
										</li>
										<li>
											Use common sense! If it is not working or not enough,
											think about how to make things better. Often a simple
											solution is all you need to be successful in education.
										</li>
										<li>
											There are computer programs available for you or your
											student to use. New ones are being offered regularly.
											Maybe a computer program will work for you. Often schools
											have their offerings of programs available for students
											with disabilities. FIND OUT WHAT THEY ARE. Maybe what they
											have will work for you. If your needs are still not met,
											research what is available. Sometimes the school will pay
											for the program if you can prove the school is not meeting
											your educational needs, However, often they will not.
											Other agencies may be able to help you financially or to
											offer you the needed program. For example, if you are
											visually impaired, a not for profit agency for the
											visually impaired may be able to offer you the help you
											need.
										</li>
									</ul>
								</div>
								<p>I invite you to respond:</p>
								<p>What accommodations have worked best for you?</p>
								<p>
									What creative but simple accommodations have you requested
									have been helpful? Something not on the standard list?
								</p>
								<p>
									Are there any computer programs you suggest that support a
									specific disability? Please include the disability it is
									supporting.
								</p>
							</div>
							<div className="blog-detail-img-wrappper">
								<Figure className="w-100">
									<Figure.Image src={blog1Img} className="img-fluid w-100" />
								</Figure>
							</div>
							<div className="blog-detail-prev-wrapper pt-5">
								<div className="blog-detail-prev-img-wrapper">
									<Figure className="d-flex gap-3 align-items-center">
										<Figure.Image
											src={postProfileImg}
											fluid
											style={{
												width: "85px",
												height: "85px",
												borderRadius: "50%",
												objectFit: "cover",
											}}
										/>
										<Figure.Caption>
											<h5 className="text-dark">Anna Hoc</h5>
											<p className="text-info">Published On :8 Dec 2022</p>
										</Figure.Caption>
									</Figure>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			{/* Blog destil ends here */}
			<Footer />
		</>
	);
};

export default BlogDetail;
