import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Contact.css"

const contactUs = () => {
    return (
        <Container>
            <Row className="mb-5 mt-3">
                <Col lg='8'>
                    <h1 className="display-4 mb-4">
                        Contact Us!
                    </h1>
                </Col>
            </Row>

            <Row className="sec_sp">
                <Col lg='5' className="mb-5">
                    <h3 className="color_sec py-4">Get in touch</h3>
                    <address>
                        <strong>Email: mhilladventure@gmail.com</strong>
                        <br />
                        <br />
                        <p>
                            <strong>Phone: +91 94129 66171</strong>
                            {/* <br />
                            <strong>Phone: +91 63968 89138</strong>
                            <br />
                            <strong>Phone: +91 91197 60282</strong> */}
                        </p>
                    </address>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eos sed, a sint soluta quidem ipsam quis eligendi temporibus aspernatur aut veritatis consequatur recusandae voluptatem culpa libero aliquam omnis provident excepturi fugiat enim asperiores quaerat ab. Atque vel maxime corrupti tenetur sapiente, amet quod quam et tempora deleniti odit in, laudantium, aspernatur repudiandae? Magni officia aut, harum sapiente reiciendis vitae, numquam, soluta accusantium delectus inventore laborum quas iure? Dolorem unde dolore maiores esse nobis, consectetur laborum eum quibusdam odio vero soluta illo eaque magni amet explicabo? Eius aperiam accusantium accusamus sed nihil praesentium mollitia impedit. Quam ad vel quia dicta.</p>
                </Col>
                <Col lg='7' className="d-flex align-items-center">
                    <form className="contact_form w-100">
                        <Row>
                            <Col lg='6' className="form-group">
                                <input 
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    placeholder="Name"
                                    type="text"
                                />
                            </Col>
                            <Col lg='6' className="form-group">
                                <input 
                                    className="form-control rounded-0"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    type="email"
                                />
                            </Col>
                        </Row>
                        <textarea
                            className="form_control rounded-0"
                            id="message"
                            name="message"
                            placeholder="Message"
                            rows="5"
                        ></textarea>
                        <br />
                        <Row>
                            <Col lg='12' className="form-group">
                                <button className="btn ac_btn" type="submit">Send</button>
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

export default contactUs;