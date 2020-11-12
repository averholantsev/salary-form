import React from 'react';
import './MessageBox.scss';
import { numberWithSpaces } from '../../utils/helper';

interface MessageBoxProps {
  salary: string;
  selectedWithoutNdfl: boolean;
}

const NDFL = 0.13;

export const MessageBox = (props: MessageBoxProps) => {
  const { salary, selectedWithoutNdfl } = props;
  let salaryForHands;
  let ndfl;
  let salaryPerMonth;

  if (selectedWithoutNdfl) {
    salaryForHands = Number(salary);
    ndfl = Math.trunc((NDFL * salaryForHands) / (1 - NDFL));
    salaryPerMonth = salaryForHands + ndfl;
  } else {
    salaryPerMonth = Number(salary);
    ndfl = Math.trunc(salaryPerMonth * NDFL);
    salaryForHands = salaryPerMonth - ndfl;
  }

  return (
    <div className="message-container">
      <p>
        <b>{numberWithSpaces(salaryForHands)} ₽</b> сотрудник будет
        получать на руки
      </p>
      <p>
        <b>{numberWithSpaces(ndfl)} ₽</b> НДФЛ, 13% от оклада
      </p>
      <p>
        <b>{numberWithSpaces(salaryPerMonth)} ₽</b> за сотрудника в
        месяц
      </p>
    </div>
  );
};
