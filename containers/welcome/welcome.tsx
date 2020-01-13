import React from 'react';
import Link from 'next/link';
import { Wrapper } from './welcome.styled';

const Welcome = () => {
  return (
    <Wrapper>
      <div>
        <h1>Welcome</h1>
        <Link href="/game">
          <button>Start game</button>
        </Link>
      </div>
    </Wrapper>
  );
};

export default Welcome;
