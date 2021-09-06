export type TValue = 'X' | 'O' | null;

export interface IBox {
  value: TValue;
  onClick: (value: TValue) => void;
}
