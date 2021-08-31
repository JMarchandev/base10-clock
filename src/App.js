import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { getBase10HoursToString, getBase12Hours } from './services/clock';

function App() {
  const [base10Hours, setBase10Hours] = React.useState("")
  const [base12Hours, setBase12Hours] = React.useState("")

  React.useEffect(() => {
    setBase10Hours(getBase10HoursToString())
    setBase12Hours(getBase12Hours())
  }, [])

  setInterval(() => {
    setBase10Hours(getBase10HoursToString())
  }, 100)

  setInterval(() => {
    setBase12Hours(getBase12Hours())
  }, 120)

  return (
    <div style={{ width: '100VW', height: '100VH' }} className="d-flex flex-column justify-content-center align-items-center">
      <style>{`
        p {
          font-size: 3rem;
          margin: 0;
        }
      `}</style>
      <Container>
        <Row className="text-center">
          <Col className="m-5 p-5 rounded-pill" style={{ border: "2px solid #000" }}>
            <h1>Heure en base 10</h1>
            <p>{base10Hours}</p>
          </Col>
          <Col className="m-5 p-5 rounded-pill" style={{ border: "2px solid #000" }}>
            <h1>Heure en base 24</h1>
            <p>{base12Hours}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
