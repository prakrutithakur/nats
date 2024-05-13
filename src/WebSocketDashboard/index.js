import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Card, CardBody } from "@/shared/components/Card";
import NatsComponentWorking from "./Nats/NatsComponentWorking";
import Listing from "./Nats/Listing";
// import { WebSocketMessages } from "nkseed";

const propTypes = {};

const defaultProps = {};

const Index = () => {
  const [message, setmessage] = useState([]);
  // console.log(WebSocketMessages());

  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <Card>
            <CardBody>
              <NatsComponentWorking setmessage={setmessage} />
              <Listing data={message} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

Index.propTypes = propTypes;
Index.defaultProps = defaultProps;

export default Index;
