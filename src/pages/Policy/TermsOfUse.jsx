import React from "react";
import Header from "../../components/Header/Header";
import PageHeader from "../../components/PageHeader/PageHeader";
import Footer from "../../components/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import "../../assets/css/community.css";

const TermsOfUse = () => {
	const pagename = {
		name: "Terms of Use",
	};
	return (
		<>
			<Header />
			<PageHeader {...pagename} />
			{/* terms starts here */}
			<section className="terms-sec">
				<Container>
					<Row>
						<Col lg={12}>
							<div className="terms-content-wrapper mb-4">
								<p>
									BY USING glimmerconnect.com, YOU ARE CONSENTING TO OUR TERMS
									AND CONDITIONS AS OUTLINED BELOW.
								</p>
							</div>
							<div className="terms-content-wrapper mb-4">
								<h6 className="text-dark fw-bold">OVERVIEW</h6>
								<p>
									The terms “we,” “us,” and “our” refer to Glimmer Industries.
									The term the “Site” refers to glimmerconnect.com. The terms
									“user,” “you,” and “your” refer to site visitors, customers,
									members and any other users of the site.
								</p>
							</div>
							<div className="terms-content-wrapper mb-4">
								<h6 className="text-dark fw-bold">SERVICE</h6>
								<p>
									Glimmer Connect is a membership site for users (the
									“Service”).
								</p>
								<p>
									Use of glimmerconnect.com, including all materials presented
									herein and all online services provided by Glimmer Industries,
									is subject to the following Terms and Conditions. These Terms
									and Conditions apply to all site visitors, customers, and all
									other users of the site. By using the Site or Service, you
									agree to these Terms and Conditions, without modification, and
									acknowledge reading them.
								</p>
								<p>
									Parties agree that the Service is in the nature of education.
									The scope of services provided by Glimmer Industries according
									to this Agreement are limited to those listed on
									glimmerconnect.com website. Glimmer Industries reserves the
									right to substitute services equal to or comparable to the
									services listed if the need arises, without prior notice.
								</p>
							</div>
							<div className="terms-content-wrapper mb-4">
								<h6 className="text-dark fw-bold">
									USE OF THE SITE AND SERVICE
								</h6>
								<p>
									To access or use the Site, you must be 18 years of age or
									older and have the requisite power and authority to enter into
									these Terms and Conditions. Children under the age of 18 are
									prohibited from using the Site. Information provided on the
									Site and in the Service related to membership sites and other
									information are subject to change. Glimmer Industries makes no
									representation or warranty that the information provided,
									regardless of its source (the “Content”), is accurate,
									complete, reliable, current, or error-free. Glimmer Industries
									disclaims all liability for any inaccuracy, error, or
									incompleteness in the Content.
								</p>
							</div>
							<div className="terms-content-wrapper mb-4">
								<h6 className="text-dark fw-bold">ACCOUNT CREATION</h6>
								<p>
									In order to use the Service, you will be required to provide
									information about yourself including your name, email address,
									username and password, and other personal information. You
									agree that any registration information you give to Glimmer
									Industries will always be accurate, correct, and up to date.
									You must not impersonate someone else or provide account
									information or an email address other than your own. Your
									account must not be used for any illegal or unauthorized
									purpose. You must not, in the use of the Service, violate any
									laws in your jurisdiction.
								</p>
							</div>
							<div className="terms-content-wrapper mb-4">
								<h6 className="text-dark fw-bold">LAWFUL PURPOSES</h6>
								<p>
									You may use the Site and Service for lawful purposes only. You
									agree to be financially responsible for all purchases made by
									you or someone acting on your behalf through the Site. You
									agree to use the Site and to purchase services or products
									through the Site for legitimate, non-commercial purposes only.
									You shall not post or transmit through the Site any material
									which violates or infringes the rights of others, or which is
									threatening, abusive, defamatory, libelous, invasive of
									privacy or publicity rights, vulgar, obscene, profane, or
									otherwise objectionable, contains injurious formulas, recipes,
									or instructions, which encourages conduct that would
									constitute a criminal offense, give rise to civil liability,
									or otherwise violate any law.
								</p>
							</div>
							<div className="terms-content-wrapper mb-4">
								<h6 className="text-dark fw-bold">REFUSAL OF SERVICE</h6>
								<p>
									The Services are offered subject to our acceptance of your
									order or requests. We reserve the right to refuse service to
									any order, person or entity, without the obligation to assign
									reason for doing so. No order is deemed accepted by us until
									payment has been processed. We may at any time change or
									discontinue any aspect or feature of the Site or Service,
									subject to us fulfilling our previous responsibilities to you
									based on acceptance of your payment.
								</p>
							</div>
							<div className="terms-content-wrapper mb-4">
								<h6 className="text-dark fw-bold">ORDER CONFIRMATION</h6>
								<p>
									We will email you to confirm the placement of your order and
									with details concerning product delivery and ongoing payments.
									In the event that there is an error in this email
									confirmation, it is your responsibility to inform us as soon
									as possible.
								</p>
							</div>
							<div className="terms-content-wrapper mb-4">
								<h6 className="text-dark fw-bold">DURATION OF AGREEMENT</h6>
								<p>
									Once confirmed, we will provide you access to the purchased
									Service. You agree and understand that access to the Service
									may at times be influenced and affected by third parties that
									we use to provide the Service (web hosting, membership site
									plugins, etc.). You agree and understand that no breach of
									contract action may be initiated against Glimmer Industries
									when there are reasonable delays in the access to the Service.
								</p>
								<p>
									Glimmer Industries reserves the right to terminate the
									Service, and or access to certain features of the Service,
									with or without prior notice to you. We will make reasonable
									efforts to provide notice but is not required to do so under
									the terms of this agreement.
								</p>
								<p>
									Lifetime Access is for the lifetime of the Service. If for any
									reason Glimmer Industries should dissolve or cease to exist,
									then your access to the Service terminates.
								</p>
							</div>
							<div className="terms-content-wrapper mb-4">
								<h6 className="text-dark fw-bold">CANCELLATIONS & REFUNDS</h6>
								<p>
									Memberships will auto renew unless we receive a cancellation
									request. To cancel a membership we require written notice 5
									days before the membership is due to expire. To cancel please
									email us at support@glimmerconnect.com. Annual membership is
									for 1 year of service. We cannot refund for a partially used
									annual membership.
								</p>
								<p>
									If you cancel the premium membership you will still remain a
									free member unless you request your account be deleted in
									writing using support@glimmerconnect.com.
								</p>
								<p>
									It is entirely your responsibility to ensure that you cancel
									your account in good time should you no longer require the
									Service and do not wish to be billed further.
								</p>
							</div>
							<div className="terms-content-wrapper mb-4">
								<h6 className="text-dark fw-bold">PRODUCT DESCRIPTION</h6>
								<p>
									We endeavor to describe and display the Service as accurately
									as possible. While we try to be as clear as possible in
									explaining the Service, please do not accept that the Site is
									entirely accurate, current, or error-free. From time to time
									we may correct errors in pricing and descriptions. We reserve
									the right to refuse or cancel any order with an incorrect
									price listing.
								</p>
							</div>
							<div className="terms-content-wrapper mb-4">
								<h6 className="text-dark fw-bold">
									MATERIAL YOU SUBMIT TO THE SITE
								</h6>
								<p>
									You shall not upload, post or otherwise make available on the
									Site any artwork, photos, or other materials (collectively
									“Materials”) protected by copyright, trademark, or other
									proprietary right without the express written permission of
									the owner of the copyright, trademark, or other proprietary
									right, and the burden of determining that any Materials are
									not so protected rests entirely with you. You shall be liable
									for any damage resulting from any infringement of copyrights,
									trademarks, or other proprietary rights, or any other harm
									resulting from such a submission. For all Materials submitted
									by you to the Site, you automatically represent or warrant
									that you have the authority to use and distribute the
									Materials, and that the use or display of the Materials will
									not violate any laws, rules, regulations, or rights of third
									parties.
								</p>
								<p>
									As a feature of the Service, Glimmer Industries may provide
									access to a community or social media platforms in conjunction
									with the Service. Glimmer Industries is not required to
									provide a community platform, and has complete discretion with
									regards to the platform, and the nature of the interaction,
									depending on the Service.
								</p>
								<p>
									You agree that your use of these community and social media
									platforms is a privilege and Glimmer Industries may limit or
									deny access to these platforms for misconduct that includes
									but is not limited to being inappropriate, rude, violent, or
									threatening. Glimmer Industries will make reasonable efforts
									to provide notice to you with regards to inappropriate or
									unapproved content that you have placed within the voluntarily
									provided community and social media platform. Glimmer
									Industries is not required to provide notice and reserves all
									rights to take immediate and appropriate action to protect the
									Glimmer Industries’ brand and image integrity.
								</p>
							</div>
							<div className="terms-content-wrapper mb-4">
								<h6 className="text-dark fw-bold">
									INTELLECTUAL PROPERTY RIGHTS TO YOUR MATERIALS
								</h6>
								<p>
									We claim no intellectual property rights over the material you
									supply to Glimmer Industries. You retain copyright and any
									other rights you may rightfully hold in any content that you
									submit through the Site or Service. Content you submit to
									Glimmer Industries remains yours to the extent that you have
									any legal claims therein. You agree to hold Glimmer Industries
									harmless from and against all claims, liabilities, and
									expenses arising out of any potential or actual copyright or
									trademark misappropriation or infringement claimed against
									you. By posting material on the Site, you grant us a
									worldwide, nonexclusive, irrevocable license to use the
									material for promotional, business development, and marketing
									purposes.
								</p>
								<p>
									You consent to recordings being made of calls or webinars
									provided as part of the Service. You consent to your name,
									words, voice, and likeness being used by Glimmer Industries
									for promotional, business development, and marketing purposes,
									without compensation to you. We will make reasonable effort to
									secure your written permission before using and distributing
									recordings, print materials, audio, or visual representations
									that refer to you.
								</p>
							</div>
							<div className="terms-content-wrapper mb-4">
								<h6 className="text-dark fw-bold">OUR INTELLECTUAL PROPERTY</h6>
								<p>
									The Site and Service contain intellectual property owned by
									Glimmer Industries, including trademarks, copyrights,
									proprietary information, and other intellectual property.
									Glimmer Industries copyrighted and original materials are
									provided to you as part of the Service for your individual use
									only and a single-user license. All intellectual property,
									including Glimmer Industries copyrighted materials shall
									remain the sole property of Glimmer Industries. No license to
									sell or distribute our materials is granted or implied.
								</p>
								<p>
									You may not modify, publish, transmit, participate in the
									transfer or sale of, create derivative works from, distribute,
									display, reproduce or perform, or in any way exploit in any
									format whatsoever any of the Site or Service Content or
									intellectual property, in whole or in part, without our prior
									written consent. This includes but is not limited to sharing
									material with others, posting excerpts of material on any
									social media, blogging about the material, or in any other way
									that would reasonably appear to share the Site or Service’s
									information with a non-member. We reserve the right to
									immediately remove you from the Service, without refund, if
									you are caught violating this intellectual property policy.
								</p>
							</div>
							<div className="terms-content-wrapper mb-4">
								<h6 className="text-dark fw-bold">CHANGED TERMS</h6>
								<p>
									We may at any time amend these Terms and Conditions. Such
									amendments are effective immediately upon notice to you by us
									posting the new Terms and Conditions on this Site. Any use of
									the Site or Service by you after being notified means you
									accept these amendments. We reserve the right to update any
									portion of our Site and Service, including these Terms and
									Conditions, at any time. We will post the most recent versions
									to the Site and list the effective dates on the pages of our
									Terms and Conditions.
								</p>
							</div>
							<div className="terms-content-wrapper mb-4">
								<h6 className="text-dark fw-bold">LIMITATION OF LIABILITY</h6>
								<p>
									YOU AGREE THAT UNDER NO CIRCUMSTANCES SHALL WE BE LIABLE FOR
									DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL,
									PUNITIVE, EXEMPLARY, OR ANY OTHER DAMAGES ARISING OUT OF YOUR
									USE OF THE SITE OR SERVICE. ADDITIONALLY, Glimmer Industries
									IS NOT LIABLE FOR DAMAGES IN CONNECTION WITH (I) ANY FAILURE
									OF PERFORMANCE, ERROR, OMISSION, DENIAL OF SERVICE, ATTACK,
									INTERRUPTION, DELETION, DEFECT, DELAY IN OPERATION OR
									TRANSMISSION, COMPUTER VIRUS, OR LINE OR SYSTEM FAILURE; (II)
									LOSS OF REVENUE, ANTICIPATED PROFITS, BUSINESS, SAVINGS,
									GOODWILL OR DATA; AND (III) THIRD PARTY THEFT OF, DESTRUCTION
									OF, UNAUTHORIZED ACCESS TO, ALTERATION OF, OR USE OF YOUR
									INFORMATION OR PROPERTY, REGARDLESS OF OUR NEGLIGENCE, GROSS
									NEGLIGENCE, FAILURE OF AN ESSENTIAL PURPOSE AND WHETHER SUCH
									LIABILITY ARISES IN NEGLIGENCE, CONTRACT, TORT, OR ANY OTHER
									THEORY OF LEGAL LIABILITY. THE FOREGOING APPLIES EVEN IF
									GLIMMER INDUSTRIES HAS BEEN ADVISED OF THE POSSIBILITY OF OR
									COULD HAVE FORESEEN THE DAMAGES. IN THOSE STATES THAT DO NOT
									ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR DAMAGES,
									OUR LIABILITY IS LIMITED TO THE FULLEST POSSIBLE EXTENT
									PERMITTED BY LAW. IN NO EVENT SHALL Glimmer Industries
									CUMULATIVE LIABILITY TO YOU EXCEED THE TOTAL PURCHASE PRICE OF
									THE SERVICE YOU HAVE PURCHASED FROM Glimmer Industries, AND IF
									NO PURCHASE HAS BEEN MADE BY YOU Glimmer Industries CUMULATIVE
									LIABILITY TO YOU SHALL NOT EXCEED $100.
								</p>
							</div>
							<div className="terms-content-wrapper mb-4">
								<h6 className="text-dark fw-bold">THIRD PARTY RESOURCES</h6>
								<p>
									The Site and the Service may contain links to third party
									websites and resources. You acknowledge and agree that we are
									not responsible or liable for the availability, accuracy,
									content, or policies of third-party websites or resources.
									Links to such websites or resources do not imply any
									endorsement by or affiliation with Glimmer Industries. You
									acknowledge sole responsibility for and assume all risk
									arising from your use of any such websites or resources.
								</p>
							</div>
							<div className="terms-content-wrapper mb-4">
								<h6 className="text-dark fw-bold">INDEMNIFICATION</h6>
								<p>
									You shall indemnify and hold us harmless from and against any
									and all losses, damages, settlements, liabilities, costs,
									charges, assessments, and expenses, as well as third party
									claims and causes of action, including, without limitation,
									attorney’s fees, arising out of any breach by you of any of
									these Terms and Conditions, or any use by you of the Site or
									Service. You shall provide us with such assistance, without
									charge, as we may request in connection with any such defense,
									including, without limitation, providing us with such
									information, documents, records, and reasonable access to you,
									as we deem necessary. You shall not settle any third-party
									claim or waive any defense without our prior written consent.
								</p>
							</div>
							<div className="terms-content-wrapper mb-4">
								<h6 className="text-dark fw-bold">EFFECT OF HEADINGS</h6>
								<p>
									The subject headings of the paragraphs and subparagraphs of
									this Agreement are included for convenience only and shall not
									affect the construction or interpretation of any of its
									provisions.
								</p>
							</div>
							<div className="terms-content-wrapper mb-4">
								<h6 className="text-dark fw-bold">ENTIRE AGREEMENT: WAIVER</h6>
								<p>
									This Agreement constitutes the entire agreement between you
									and Glimmer Industries pertaining to the Site and Service and
									supersedes all prior and contemporaneous agreements,
									representations, and understandings between us. No waiver of
									any of the provisions of this Agreement by Glimmer Industries
									shall be deemed, or shall constitute, a waiver of any other
									provision, whether or not similar, nor shall any waiver
									constitute a continuing waiver. No waiver shall be binding
									unless executed in writing by Glimmer Industries.
								</p>
							</div>
							<div className="terms-content-wrapper mb-4">
								<h6 className="text-dark fw-bold">NOTICES</h6>
								<p>
									All notices, requests, demands, and other communications under
									this Agreement shall be in writing and properly addressed as
									follows:
								</p>
								<p>
									Glimmer Industries
									<br /> admin@glimmerindustries.com
								</p>
							</div>
							<div className="terms-content-wrapper mb-4">
								<h6 className="text-dark fw-bold">
									RECOVERY OF LITIGATION EXPENSES
								</h6>
								<p>
									If any legal action or any arbitration or other proceeding is
									brought for the enforcement of this Agreement, or because of
									an alleged dispute, breach, default, or misrepresentation in
									connection with any of the provisions of this Agreement, the
									successful or prevailing party or parties shall be entitled to
									recover reasonable attorney’s fees and other costs incurred in
									that action or proceeding, in addition to any other relief to
									which it or they may be entitled.
								</p>
							</div>
							<div className="terms-content-wrapper mb-4">
								<h6 className="text-dark fw-bold">SEVERABILITY</h6>
								<p>
									If any term, provision, covenant, or condition of this
									Agreement is held by an arbitrator or court of competent
									jurisdiction to be invalid, void, or unenforceable, the rest
									of the Agreement shall remain in full force and effect and
									shall in no way be affected, impaired, or invalidated.
								</p>
								<p>Updated: June 2023 </p>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			{/* terms ends here */}
			<Footer />
		</>
	);
};

export default TermsOfUse;
