import React from 'react';
import { useNavigate } from 'react-router-dom';
import categories from '../data/categories';
import { Container, Button, Card } from 'react-bootstrap';

function CategorySelectionPage() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate('/quiz', { state: { category } });
  };

  return (
    <Container className="d-flex flex-column align-items-center mt-5">
      <h1 className="mb-4">Select a Quiz Category</h1>
      {categories.map((category, index) => (
        <Card key={index} className="mb-3" style={{ width: '18rem' }}>
          <Card.Body>
            <Button
              variant="primary"
              size="lg"
              className="w-100"
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default CategorySelectionPage;
