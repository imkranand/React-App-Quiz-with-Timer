import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Alert, Button } from 'react-bootstrap';

function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state;

  const feedbackMessage = score / total >= 0.8 ? 'Great job!' : 'Keep practicing!';

  return (
    <Container className="d-flex flex-column align-items-center mt-5">
      <Alert variant="success">
        <h4>Your Score</h4>
        <p>{`You scored ${score} out of ${total}`}</p>
      </Alert>
      <Alert variant="info">{feedbackMessage}</Alert>
      <Button variant="primary" onClick={() => navigate('/')}>
        Play Again
      </Button>
    </Container>
  );
}

export default ResultPage;
