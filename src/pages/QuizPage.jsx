import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import questionsData from '../data/question';
import Timer from '../components/Timer';
import { Container, Button, Card, ProgressBar } from 'react-bootstrap';

function QuizPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { category } = location.state;
  const questions = questionsData[category];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(10);

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    if (time === 0) handleNext();
  }, [time]);

  const handleAnswerClick = (index) => {
    setSelectedAnswer(index);
    if (index === currentQuestion.correct) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedAnswer(null);
      setTime(10);
    } else {
      navigate('/result', { state: { score, total: questions.length } });
    }
  };

  return (
    <Container className="d-flex flex-column align-items-center mt-5">
      <h2 className="mb-3">Category: {category}</h2>
      <Timer time={time} setTime={setTime} />

      <Card className="mb-3" style={{ width: '100%', maxWidth: '500px' }}>
        <Card.Body>
          <Card.Title>{currentQuestion.question}</Card.Title>
          <div>
            {currentQuestion.options.map((option, index) => (
              <Button
                key={index}
                variant={
                  selectedAnswer !== null
                    ? index === currentQuestion.correct
                      ? 'success'
                      : index === selectedAnswer
                      ? 'danger'
                      : 'secondary'
                    : 'outline-primary'
                }
                className="w-100 my-1"
                onClick={() => handleAnswerClick(index)}
                disabled={selectedAnswer !== null}
              >
                {option}
              </Button>
            ))}
          </div>
        </Card.Body>
      </Card>
      <Button variant="primary" onClick={handleNext}>
        Next
      </Button>
    </Container>
  );
}

export default QuizPage;
