import { Col, Container, Row } from "react-bootstrap";
import AdvancedFieldValidation from "./AdvancedFieldValidation";
import BasicValidation from "./BasicValidation";

function App() {
  return (
    <div className="App">
      <Container>
        <Row className="justify-content-md-center">
          <Col md={{ span: 6 }}>
            {" "}
            <h2 className="mx-auto">React Hook Form Demo</h2>{" "}
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={{ span: 6 }}>
            <BasicValidation />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={{ span: 6 }}>
            <AdvancedFieldValidation />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
