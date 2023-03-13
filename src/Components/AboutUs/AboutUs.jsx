import React from "react";
import Badge from "react-bootstrap/Badge";
import Figure from "react-bootstrap/Figure";
import Card from "react-bootstrap/Card";

const AboutUs = () => {
  return (
    <div>
      <div className="d-flex  justify-content-center mt-5">
        <h1>
          <Badge bg="secondary">About us</Badge>
        </h1>
      </div>
      <div className="d-flex justify-content-around">
        <Figure className="ms-3 me-2">
          <Figure.Image
            width={240}
            height={600}
            alt="171x180"
            src="https://i.pinimg.com/474x/a6/5b/91/a65b91b830c09b9fd0a97f97c9765861.jpg"
          />
          <Figure.Caption>Me during work in JS-30 of Makers</Figure.Caption>
        </Figure>

        <Card className="ms-2 me-3">
          <Card.Header>Quote</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {" "}
                I generally like studying in Makers, even thought it is sooooo
                expensive. The staff is good and their approach to teaching is
                good. But how would I know if I cant compare. 17k per month is
                ridiculous money. Hopefully, its all gonna pay off.{" "}
              </p>
              <footer className="blockquote-footer">
                Sheraman Suerkulov<cite title="Source Title">Student</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AboutUs;
