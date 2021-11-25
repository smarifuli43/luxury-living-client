import React from 'react';
import { Row } from 'react-bootstrap';
import Project from './Project';
import p1Img from '../../../img/Image/p1.png'
import p2Img from '../../../img/Image/p2.png'
import p3Img from '../../../img/Image/p3.png'

const items = [
  {
    id: 1,
    name: 'Villa on Washington Avenue',
    img: p1Img,
    location: 'Dhaka, Bangladesh',
  },
  {
    id: 2,
    name: 'Luxury villa in Rego Park',
    img: p2Img,
    location: 'Rajshahi, Bangladesh',
  },
  {
    id: 3,
    name: 'Gorgeous house',
    img: p3Img,
    location: 'Dhaka, Bangladesh',
  },
];

const Projects = () => {
  return (
    <div className='container text-center my-5 py-5'>
      <h5 className='primary-text'>Projects</h5>
      <h2
        className='primary-text'
        style={{ fontSize: '34px', fontWeight: '600' }}
      >
        Discover the latest Interior Design available today
      </h2>
      <Row xs={1} md={2} lg={3} className='g-4 mt-4'>
        {items.map((project) => (
          <Project key={project.id} project={project}></Project>
        ))}
      </Row>
    </div>
  );
};

export default Projects;
