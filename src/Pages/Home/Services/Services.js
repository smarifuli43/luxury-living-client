import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from './Service';

const i = [
  {
    name: 'Office Interior Design',
    img: 'https://i.ibb.co/zR23BKQ/apartment-1.png',
    price: 299,
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Lorem ipsum dolor sit amet consectetur adipiscing elit facilisi, netus risus cum faucibus non conubia vehicula cras senectus, taciti vestibulum nam est malesuada eros suscipit. Velit at id semper per cursus porttitor venenatis duis pulvinar posuere massa augue justo et, curae conubia magnis litora fermentum sociosqu aptent tincidunt sem commodo maecenas penatibus ultricies. Dis tristique neque phasellus ultricies in lacus volutpat blandit, litora eleifend augue arcu semper quis suscipit vulputate ultrices, scelerisque duis congue lobortis eget nibh enim. Dictumst commodo feugiat aenean dictum viverra magnis auctor libero, ligula dignissim class platea semper fusce facilisis et, rhoncus lobortis ornare venenatis donec inceptos per. ',
  },
];
/* 
https://i.ibb.co/mF7xrJV/factory.png
https://i.ibb.co/p33Hps9/House-searching.png
https://i.ibb.co/kDfgLRY/building-block.png
https://i.ibb.co/9rQCxyz/undraw-Building.png
https://i.ibb.co/8g3nXxr/affordable-1.png
https://i.ibb.co/RNr8Ydp/lessee-1.png
https://i.ibb.co/7WhcvdK/home.png
https://i.ibb.co/71fxNX3/business-shoppng.png
*/

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  console.log(services);
  return (
    <div className='container text-center mb-5 py-5'>
      <h5 className='primary-text'>Services</h5>
      <h2
        className='primary-text'
        style={{ fontSize: '34px', fontWeight: '600' }}
      >
        We're an agency tailored to all clients' <br /> needs that always
        delivers
      </h2>
      <Row xs={1} md={2} lg={3} className='g-4 mt-4'>
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </Row>
    </div>
  );
};

export default Services;
