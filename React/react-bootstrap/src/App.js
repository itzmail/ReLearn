import "./App.css";
import { Container, Col, Row, Button, Form } from "react-bootstrap";
import loginIcon from './images/user.svg'
import uiLogin from './images/security.svg'

function App() {
  return (
    <Container>
      <Row>
        <Col lg={4} md={6} sm={12} className="text-center p-md-3 mt-md-5">
        <img className="icon-image" src={loginIcon} alt="IconLogin"/>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
            <Button variant="primary btn-block" type="submit" style={{'width': '100%'}}>
              Login
            </Button>

            <div className="text mt-3">
              <a href="index.js" className="forgot-password">Forgot Password</a>
            </div>

          </Form>
        </Col>
        <Col lg={8} md={5} sm={10}>
          <img src={uiLogin} alt="" className="ui-image" />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
