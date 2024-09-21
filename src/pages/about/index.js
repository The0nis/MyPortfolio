import React, { useEffect } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
  certifications,
} from "../../content_option";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
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
                bounce: 0.5,
                delay: 0.1,
                delayChildren: 0.9,
              }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: -0.1 }}
              whileTap={{ scale: -0.1 }}
            >
              About me
            </motion.h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <motion.h3
              className="color_sec py-4"
              initial={{ opacity: 0, x: "-10%" }}
              animate={{ opacity: 1, x: "0%" }}
              transition={{
                duration: 1.5,
                type: "spring",
                bounce: 0.5,
                delay: 0.5,
                delayChildren: 0.9,
              }}
              whileInView={{ opacity: 0 }}
              viewport={{ once: true }}
              whileHover={{ skewX: 15 }}
              whileTap={{ skewX: 15 }}
            >
              {dataabout.title}
            </motion.h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, x: "-10%" }}
                animate={{ opacity: 1, x: "0%" }}
                transition={{
                  duration: 1.5,
                  type: "spring",
                  bounce: 0.5,
                  delay: 1,
                  delayChildren: 0.9,
                }}
                whileInView={{ opacity: 0 }}
                viewport={{ once: true }}
                whileHover={{ skewX: 10 }}
                whileTap={{ skewX: 10 }}
              >
                {dataabout.aboutme}
              </motion.p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <motion.h3
              className="color_sec py-4"
              initial={{ opacity: 0, x: "-10%" }}
              animate={{ opacity: 1, x: "0%" }}
              transition={{
                duration: 1.5,
                type: "spring",
                bounce: 0.5,
                delay: 0.8,
                delayChildren: 0.9,
              }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ skewX: 15 }}
              whileTap={{ skewX: 15 }}
            >
              Work Timline
            </motion.h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <motion.tbody
                initial={{ opacity: 0, x: "-10%" }}
                animate={{ opacity: 1, x: "0%" }}
                transition={{
                  duration: 1.5,
                  type: "spring",
                  bounce: 0.5,
                  delay: 1.2,
                  delayChildren: 0.9,
                }}
                whileInView={{ opacity: 0 }}
                viewport={{ once: true }}
                whileHover={{ skewX: 10 }}
                whileTap={{ skewX: 10 }}
              >
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </motion.tbody>
            </table>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <motion.h3
              className="color_sec py-4"
              initial={{ opacity: 0, x: "-10%" }}
              animate={{ opacity: 1, x: "0%" }}
              transition={{
                duration: 1.5,
                type: "spring",
                bounce: 0.5,
                delay: 0.8,
                delayChildren: 0.9,
              }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ skewX: 15 }}
              whileTap={{ skewX: 15 }}
            >
              Certifications
            </motion.h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <motion.tbody
                initial={{ opacity: 0, x: "-10%" }}
                animate={{ opacity: 1, x: "0%" }}
                transition={{
                  duration: 1.5,
                  type: "spring",
                  bounce: 0.5,
                  delay: 1.2,
                  delayChildren: 0.9,
                }}
                whileInView={{ opacity: 0 }}
                viewport={{ once: true }}
                whileHover={{ skewX: 10 }}
                whileTap={{ skewX: 10 }}
              >
                {certifications.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.title}</th>
                      <td>{data.date}</td>
                      <td>
                        <a href={data.where} target="_blank">
                          view Certificate
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </motion.tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <motion.h3
              className="color_sec py-4"
              initial={{ opacity: 0, x: "-10%" }}
              animate={{ opacity: 1, x: "0%" }}
              transition={{
                duration: 1.5,
                type: "spring",
                bounce: 0.5,
                delay: 1.6,
                delayChildren: 0.9,
              }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ skewX: 15 }}
              whileTap={{ skewX: 15 }}
            >
              Skills
            </motion.h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: "-10%" }}
                  animate={{ opacity: 1, x: "0%" }}
                  transition={{
                    duration: 1.5,
                    type: "spring",
                    bounce: 0.5,
                    delay: 2,
                    delayChildren: 0.9,
                  }}
                  whileInView={{ opacity: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ skewX: 10 }}
                  whileTap={{ skewX: 10 }}
                >
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <motion.h3
              className="color_sec py-4"
              initial={{ opacity: 0, x: "-10%" }}
              animate={{ opacity: 1, x: "0%" }}
              transition={{
                duration: 1.5,
                type: "spring",
                bounce: 0.5,
                delay: 2.5,
                delayChildren: 0.9,
              }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ skewX: 15 }}
              whileTap={{ skewX: 15 }}
            >
              services
            </motion.h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <motion.div
                  className="service_ py-4"
                  key={i}
                  initial={{ opacity: 0, x: "-10%" }}
                  animate={{ opacity: 1, x: "0%" }}
                  transition={{
                    duration: 1.5,
                    type: "spring",
                    bounce: 0.5,
                    delay: 3,
                    delayChildren: 0.9,
                  }}
                  whileInView={{ opacity: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ skewX: 10 }}
                  whileTap={{ skewX: 10 }}
                >
                  <motion.h5
                    className="service__title"
                    initial={{ opacity: 0, x: "-10%" }}
                    animate={{ opacity: 1, x: "0%" }}
                    transition={{
                      duration: 1.5,
                      type: "spring",
                      bounce: 0.5,
                      delay: 3,
                      delayChildren: 0.9,
                    }}
                    whileInView={{ opacity: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ skewX: 10 }}
                    whileTap={{ skewX: 10 }}
                  >
                    {data.title}
                  </motion.h5>
                  <p className="service_desc">{data.description}</p>
                </motion.div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
