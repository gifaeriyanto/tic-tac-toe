import React from 'react';
import { useRouter } from 'next/router';
import { Wrapper } from './win.styled';
import Link from 'next/link';

const Win: React.FC = () => {
  const router = useRouter();
  const winner = router.query.player;

  return (
    <Wrapper>
      <div>
        {winner !== 'draw' && <h2>Congratulation!!!</h2>}
        <h1>
          {winner !== 'draw' ? (
            <>
              <b>{winner}</b> is the winner
            </>
          ) : (
            'Draw, You all good'
          )}
        </h1>
        <Link href="/game">
          <button>Restart game</button>
        </Link>
      </div>
    </Wrapper>
  );
};

export default Win;
