import React from 'react';
import './RadioButton.scss';
import { FieldRenderProps } from 'react-final-form';

interface RadioButtonProps {
  label: string;
}

interface IProps
  extends FieldRenderProps<string, HTMLElement>,
    RadioButtonProps {}

export const RadioButton: React.FC<IProps> = (props: IProps) => {
  const { input, label } = props;

  return (
    <label className="rb-container">
      <input {...input} />
      <span>{label}</span>
    </label>
  );
};
