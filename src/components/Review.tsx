import React from 'react';
import { Carousel } from 'react-bootstrap';
import review1 from '../assets/images/review1.jpg';
import review2 from '../assets/images/review2.jpg';
import review3 from '../assets/images/review3.jpg';
import  '../css/Review.css';

interface Review {
  id: number;
  image: string;
  name: string;
  comment: string;
  date: string;
}

const reviewData: Review[] = [
  {
    id: 1,
    image: review1,
    name: 'Sarah Lee',
    comment: 'Excellent dental care and professional staff.',
    date: '2021-10-10',
  },
  {
    id: 2,
    image: review2,
    name: 'John Doe',
    comment: 'Great service! Highly recommended.',
    date: '2022-05-17',
  },
  {
    id: 3,
    image: review3,
    name: 'Jane Smith',
    comment: 'Professional and friendly staff.',
    date: '2023-03-05',
  },
];

const Reviews: React.FC = () => {
  return (
    <section id="review" className="container py-5">
      <h2 className="text-center mb-4">
        <strong>What Our Patients Say</strong>
      </h2>
      
      <Carousel 
        indicators={true}
        controls={true}
        interval={5000}
        className="review-carousel"
      >
        {reviewData.map((review) => (
          <Carousel.Item key={review.id}>
            <div className="d-flex justify-content-center">
              <div className="card shadow-sm" style={{ width: '20rem' }}>
                <img 
                  src={review.image} 
                  className="card-img-top" 
                  alt={`Review by ${review.name}`}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{review.name}</h5>
                  <p className="card-text">{review.comment}</p>
                  <small className="text-muted">{review.date}</small>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default Reviews;