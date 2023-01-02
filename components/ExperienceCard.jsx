import React from "react";

import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
} from "reactstrap";

import { Fade } from "react-reveal";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <Fade left duration={2000}>
        <Card
          style={{ flex: 1 }}
          className="shadow-lg--hover mb-3 shadow border-0 text-center rounded"
        >
          <CardBody className="">
            <CardTitle tag="h4" className="mb-2">
              {data.company}
            </CardTitle>
            <CardSubtitle tag="h5" className="mb-2">
              {data.role}
            </CardSubtitle>
            <CardSubtitle>{data.date}</CardSubtitle>
            <CardText tag="div" className="description my-3 text-left">
              {data.desc}
              <ul>
                {data.descBullets
                  ? data.descBullets.map((desc) => {
                      return <li key={desc}>{desc}</li>;
                    })
                  : null}
              </ul>
            </CardText>
          </CardBody>
        </Card>
      </Fade>
    </Col>
  );
};

export default ExperienceCard;
