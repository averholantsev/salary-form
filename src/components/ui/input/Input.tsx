import React from 'react';
import './Input.scss';
import { numberWithSpaces, clearSymbols } from '../../utils/helper';
import { FieldRenderProps } from 'react-final-form';

interface InputProps {
  salaryType: string;
}

interface IProps
  extends FieldRenderProps<string, HTMLElement>,
    InputProps {}

export const Input: React.FC<IProps> = (props: IProps) => {
  const { salaryType, input } = props;
  const salaryTypeDictionary = [
    { id: 'perMonth', value: '' },
    { id: 'perDay', value: ' в день' },
    { id: 'perHour', value: ' в час' },
  ];

  return (
    <label className="input-container">
      <input
        {...input}
        onChange={(event: any) => {
          const value = clearSymbols(event.target.value);
          if (value.length <= 7) input.onChange(value);
        }}
        value={input ? numberWithSpaces(input.value) : undefined}
      />
      <span>
        ₽
        {
          salaryTypeDictionary.find((item) => salaryType === item.id)
            ?.value
        }
      </span>
    </label>
  );
};
