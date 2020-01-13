type TValue = 'X' | 'O';

export interface IBox {
  value: TValue;
  onClick: (value: TValue) => void;
}
