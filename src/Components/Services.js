import React from 'react';
import ServiceBox from './ServiceBox';

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="heading">My <span>Services</span></h2>
      <div className="services-container">
        <ServiceBox
          iconClass="bx bx-code"
          title="Web Development"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure labore tenetur ab consectetur. Quis unde minima cum. Architecto, molestiae modi."
        />
        <ServiceBox
          iconClass="bx bx-paint"
          title="UI/UX Design"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure labore tenetur ab consectetur. Quis unde minima cum. Architecto, molestiae modi."
        />
        <ServiceBox
          iconClass="bx bx-mobile"
          title="Mobile Apps"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure labore tenetur ab consectetur. Quis unde minima cum. Architecto, molestiae modi."
        />
      </div>
    </section>
  );
}

export default Services;
