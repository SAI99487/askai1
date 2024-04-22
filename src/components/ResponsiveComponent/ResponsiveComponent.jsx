import React from 'react';

const ResponsiveComponent = () => {
  return (
    <div className="container">
      
      {/* Add your component's content */}
      <style>
        {`
          
          .container {
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }

          /* Media query for mobile screens */
          @media (max-width: 767px) {
            .container {
              padding: 10px;
              overflow-x: hidden;
              
            }
          }

          /* Media query for laptop/desktop screens */
          @media (min-width: 768px) {
            .container {
              padding: 30px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ResponsiveComponent;
