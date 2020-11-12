import React from 'react';
import './Switch.scss';
import { FieldRenderProps } from 'react-final-form';

interface SwitchProps {
  labelBefore: string;
  labelAfter: string;
}

interface IProps
  extends FieldRenderProps<string, HTMLElement>,
    SwitchProps {}

export const Switch: React.FC<IProps> = (props: IProps) => {
  const { labelBefore, labelAfter, input } = props;

  return (
    <label className="switch-container">
      <span className={!input.checked ? 'checked' : ''}>
        {labelBefore}
      </span>
      <input {...input} />
      <span className={input.checked ? 'checked' : ''}>
        {labelAfter}
      </span>
    </label>
  );
};
