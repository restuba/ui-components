import React from 'react';

import Typography from '../../components/typography';

const Home = () => {
  return (
    <div>
      <Typography.Title
        level={4}
        color="blue-6"
        xs={{ backgroundColor: 'gold' }}
        sm={{ backgroundColor: 'red' }}
        md={{ backgroundColor: 'yellow' }}
      >
        Typography Title
      </Typography.Title>
    </div>
  );
};

export default Home;
