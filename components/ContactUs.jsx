import emailjs from "@emailjs/browser";
import classnames from "classnames";
import React, { useRef, useState } from "react";
import Alert from "./Alerts";

import { Howl } from "howler";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  FormGroup,
  Input,
  InputGroup,
  Row,
} from "reactstrap";

export default function ContactUs() {
  const form = useRef();
  const [alert, setAlert] = useState(null);

  const successAlert = {
    color: "success",
    icon: "ni ni-like-2",
    message: " Your message has been sent successfully!",
  };

  const errorAlert = {
    color: "danger",
    icon: "ni ni-bell-55",
    message: " Oops! Something went wrong. Please try again later.",
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          new Howl({
            src: [`${process.env.NEXT_PUBLIC_BASE_PATH}/audio/success.mp3`],
          }).play();
          setAlert(successAlert);
        },
        (error) => {
          new Howl({
            src: [`${process.env.NEXT_PUBLIC_BASE_PATH}/audio/error.mp3`],
          }).play();
          setAlert(errorAlert);
        }
      );
  };

  return (
    <>
      <section className="section section-lg section-shaped">
        <form ref={form} onSubmit={sendEmail}>
          {alert && (
            <Alert
              color={alert.color}
              icon={alert.icon}
              message={alert.message}
            />
          )}
          <Container>
            <Row className="justify-content-center">
              <Col lg="8">
                <Card className="bg-gradient-secondary shadow">
                  <CardBody className="p-lg-5">
                    <h4 className="mb-1">Want to work with me?</h4>
                    <p className="mt-0">
                      Reach out to me using the form below.
                    </p>
                    <FormGroup className={classnames("mt-5", {})}>
                      <InputGroup className="input-group-alternative">
                        <Input
                          placeholder="Your name"
                          type="text"
                          name="user_name"
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className={classnames({})}>
                      <InputGroup className="input-group-alternative">
                        <Input
                          placeholder="Email address"
                          name="user_email"
                          type="email"
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className="mb-4">
                      <Input
                        className="form-control-alternative"
                        cols="80"
                        name="user_message"
                        placeholder="Type a message..."
                        rows="4"
                        type="textarea"
                      />
                    </FormGroup>
                    <div>
                      <Button
                        block
                        className="btn-round"
                        color="default"
                        size="lg"
                        type="submit"
                        onClick={sendEmail}
                      >
                        Send Message
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </form>
      </section>
    </>
  );
}
