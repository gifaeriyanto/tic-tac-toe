import React from 'react';
import { IBox } from './box.types';
import { Wrapper } from './box.styled';

const Box: React.FC<IBox> = ({ value, onClick }) => {
  const handleClick = () => {
    onClick && onClick(value);
  };

  return (
    <Wrapper onClick={handleClick} value={value}>
      {value}
    </Wrapper>
  );
};

export default Box;
