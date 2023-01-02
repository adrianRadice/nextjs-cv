import React from "react";
import { Badge, Card, CardBody } from "reactstrap";

import Link from "next/link";
import { Fade } from "react-reveal";

const EducationCard = ({ education }) => {
  return (
    <Fade left duration={2000}>
      <Card className="card-lift--hover shadow mt-4">
        <CardBody>
          <div className="d-flex px-3">
            <div className="pl-4">
              <h5 className="text-info">{education.schoolName}</h5>
              <h6>{education.subHeader}</h6>
              <Badge color="info" className="mr-1">
                {education.duration}
              </Badge>
              {education.grade && (
                <Badge color="primary" className="mr-1">
                  {education.grade}
                </Badge>
              )}

              <p className="description mt-3">{education.desc}</p>
              <ul>
                {education.descBullets
                  ? education.descBullets.map((desc) => {
                      return <li key={desc}>{desc}</li>;
                    })
                  : null}
              </ul>
              {education.link ? (
                <Link href={education.link}>{education.linkTitle}</Link>
              ) : null}
            </div>
          </div>
        </CardBody>
      </Card>
    </Fade>
  );
};

export default EducationCard;
