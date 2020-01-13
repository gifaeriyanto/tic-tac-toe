import styled from '@emotion/styled';

interface IWrapper {
  value: 'X' | 'O';
}

export const Wrapper = styled.div<IWrapper>(({ value }) => ({
  width: 150,
  height: 150,
  backgroundColor: '#4f41b7',
  color: value === 'X' ? '#fff' : '#2d246f',
  margin: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'sans-serif',
  fontSize: 50,
  fontWeight: 'bold',
}));
