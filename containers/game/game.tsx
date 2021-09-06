import React, { useState, useEffect } from 'react';
import { Box } from 'components';
import { Row, Board } from './game.styled';
import Router from 'next/router';
import { TValue } from 'components/box/box.types';

const Game: React.FC = () => {
  const initialBox: TValue[] = Array(9).fill(null);

  const [boxs, setBoxs] = useState(initialBox);
  const [isX, setIsX] = useState(true);

  const isBoardFull = (boxs: TValue[]) => {
    if (boxs.indexOf(null) === -1) {
      return true;
    }
    return false;
  };

  const calculateWinner = (boxs: TValue[]) => {
    const winValue = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    winValue.forEach((item) => {
      const [a, b, c] = item;
      if (boxs[a] && boxs[a] === boxs[b] && boxs[a] === boxs[c]) {
        Router.push('/win/' + boxs[a]);
      } else {
        if (isBoardFull(boxs)) {
          Router.push('/win/draw');
        }
      }
    });

    return null;
  };

  useEffect(() => {
    calculateWinner(boxs);
  }, [boxs]);

  const renderSquare = (i: number) => {
    const handleClick = () => {
      if (boxs[i] !== null) {
        return;
      }
      boxs[i] = isX ? 'X' : 'O';
      setBoxs([...boxs]);

      // toggle turns
      setIsX(!isX);
    };

    return <Box value={boxs[i]} onClick={handleClick} />;
  };

  return (
    <Board>
      <div>
        <Row>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </Row>
        <Row>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </Row>
        <Row>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </Row>
      </div>
    </Board>
  );
};

export default Game;
