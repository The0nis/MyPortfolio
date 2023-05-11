import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { motion } from "framer-motion";

export const Portfolio = () => {
  
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <motion.h1 className="display-4 mb-4"
               initial={{ opacity: 0, x:"-10%"}}
               animate={{ opacity: 1, x:"0%"}}
               transition={{ duration: 1.5, type: 'spring', bounce: 0.5, delay: 0.1,  delayChildren:0.9}}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               whileHover={{ scale: -0.1 }}
              whileTap={{ scale: -0.1 }}
            > Portfolio </motion.h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div
          className="mb-5 po_items_ho"
          >
          {dataportfolio.map((data, i) => {
            return (
              <motion.div 
              initial={{ opacity: 0, x:"-10%"}}
              animate={{ opacity: 1, x:"0%"}}
              transition={{ duration: 1.5, type: 'spring', bounce: 0.07, delay: 0.02,  delayChildren:0.03, repeat: 1, }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
                key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.desctiption}</p>
                  <a href={data.link}>view project</a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
