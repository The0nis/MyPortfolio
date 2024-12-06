import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { contactConfig } from "../../content_option";
import { motion } from "framer-motion";

export const ContactUs = () => {
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata({ loading: true });

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: contactConfig.YOUR_EMAIL,
      message: formData.message,
    };

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      .then(
        (result) => {
          // console.log(result.text);
          setFormdata({
            loading: false,
            alertmessage: "SUCCESS! ,Thank you for your messege",
            variant: "success",
            show: true,
          });
        },
        (error) => {
          console.log(error.text);
          setFormdata({
            alertmessage: `Faild to send!,${error.text}`,
            variant: "danger",
            show: true,
          });
          document.getElementsByClassName("co_alert")[0].scrollIntoView();
        }
      );
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <motion.h1
              className="display-4 mb-4"
              initial={{ opacity: 0, x: "-10%" }}
              animate={{ opacity: 1, x: "0%" }}
              transition={{
                duration: 1.5,
                type: "spring",
                bounce: 0.07,
                delay: 1,
                ease: "easeOut",
              }}
              whileInView={{ opacity: 0 }}
              viewport={{ once: true }}
              whileHover={{ skewX: 10 }}
              whileTap={{ skewX: 10 }}
            >
              Contact Me
            </motion.h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <Alert
              //show={formData.show}
              variant={formData.variant}
              className={`rounded-0 co_alert ${
                formData.show ? "d-block" : "d-none"
              }`}
              onClose={() => setFormdata({ show: false })}
              dismissible
            >
              <p className="my-0">{formData.alertmessage}</p>
            </Alert>
          </Col>
          <Col lg="5" className="mb-5">
            <motion.h3
              className="color_sec py-4"
              initial={{ opacity: 0, x: "-10%" }}
              animate={{ opacity: 1, x: "0%" }}
              transition={{
                duration: 1.5,
                type: "spring",
                bounce: 0.07,
                delay: 1.5,
                ease: "easeOut",
              }}
              whileInView={{ opacity: 0 }}
              viewport={{ once: true }}
              whileHover={{ skewX: 10 }}
              whileTap={{ skewX: 10 }}
            >
              Get in touch
            </motion.h3>
            <motion.address
              initial={{ opacity: 0, x: "-10%" }}
              animate={{ opacity: 1, x: "0%" }}
              transition={{
                duration: 1.5,
                type: "spring",
                bounce: 0.07,
                delay: 2,
                ease: "easeOut",
              }}
              whileInView={{ opacity: 0 }}
              viewport={{ once: true }}
              whileHover={{ skewX: 10 }}
              whileTap={{ skewX: 10 }}
            >
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
              {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                <p>
                  <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                </p>
              ) : (
                ""
              )}
            </motion.address>
            <motion.p
              initial={{ opacity: 0, x: "-10%" }}
              animate={{ opacity: 1, x: "0%" }}
              transition={{
                duration: 1.5,
                type: "spring",
                bounce: 0.07,
                delay: 2.5,
                ease: "easeOut",
              }}
              whileInView={{ opacity: 0 }}
              viewport={{ once: true }}
              whileHover={{ skewX: 10 }}
              whileTap={{ skewX: 10 }}
            >
              {contactConfig.description}
            </motion.p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form onSubmit={handleSubmit} className="contact__form w-100">
              <Row>
                <motion.Col
                  lg="6"
                  className="form-group"
                  initial={{ opacity: 0, x: "1000%" }}
                  animate={{ opacity: 1, x: "10%" }}
                  transition={{
                    duration: 1.5,
                    type: "spring",
                    bounce: 0.07,
                    delay: 1.5,
                    ease: "easeOut",
                  }}
                  whileInView={{ opacity: 0 }}
                  viewport={{ once: true }}
                >
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={formData.name || ""}
                    type="text"
                    required
                    onChange={handleChange}
                  />
                </motion.Col>
                <motion.Col
                  lg="6"
                  className="form-group"
                  initial={{ opacity: 0, x: "1000%" }}
                  animate={{ opacity: 1, x: "20%" }}
                  transition={{
                    duration: 1.5,
                    type: "spring",
                    bounce: 0.07,
                    delay: 2,
                    ease: "easeOut",
                  }}
                  whileInView={{ opacity: 0 }}
                  viewport={{ once: true }}
                >
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={formData.email || ""}
                    required
                    onChange={handleChange}
                  />
                </motion.Col>
              </Row>
              <motion.textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                initial={{ opacity: 0, x: "-10%" }}
                animate={{ opacity: 1, x: "0%" }}
                transition={{
                  duration: 1.5,
                  type: "spring",
                  bounce: 0.07,
                  delay: 2.5,
                  ease: "easeOut",
                }}
                whileInView={{ opacity: 0 }}
                viewport={{ once: true }}
              ></motion.textarea>
              <br />
              <Row>
                <motion.Col
                  lg="12"
                  className="form-group"
                  initial={{ opacity: 0, y: "990%" }}
                  animate={{ opacity: 1, y: "0%", x: "20%" }}
                  transition={{
                    duration: 1.5,
                    type: "spring",
                    bounce: 0.07,
                    delay: 3,
                    ease: "easeOut",
                  }}
                  whileInView={{ opacity: 0 }}
                  viewport={{ once: true }}
                >
                  <button className="btn ac_btn" type="submit">
                    {formData.loading ? "Sending..." : "Send"}
                  </button>
                </motion.Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
      <div className={formData.loading ? "loading-bar" : "d-none"}></div>
    </HelmetProvider>
  );
};
