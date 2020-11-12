import React from 'react';
import '../components/ui/BaseStyles.scss';
import { Form, Field } from 'react-final-form';
import {
  Input,
  RadioButton,
  Switch,
  Tip,
  MessageBox,
} from '../components/ui';

const SalaryForm = () => {
  return (
    <Form
      initialValues={{
        selectedSalaryType: 'perMonth',
        selectedWithoutNdfl: true,
      }}
      onSubmit={() => {
        console.log('Submit');
      }}
    >
      {(props) => (
        <form className="form-container">
          <div className="form-row">
            <h4 className="header-h4">Сумма</h4>
          </div>
          <div className="form-row">
            <Field
              name="selectedSalaryType"
              type="radio"
              component={RadioButton}
              value="perMonth"
              label="Оклад за месяц"
            />
          </div>
          <div className="form-row">
            <Field
              name="selectedSalaryType"
              type="radio"
              component={RadioButton}
              value="mrot"
              label="МРОТ"
            />{' '}
            <Tip hint="МРОТ — минимальный размер оплаты труда. Разный для разных регионов." />
          </div>
          <div className="form-row">
            <Field
              name="selectedSalaryType"
              type="radio"
              component={RadioButton}
              value="perDay"
              label="Оплата за день"
            />
          </div>
          <div className="form-row">
            <Field
              name="selectedSalaryType"
              type="radio"
              component={RadioButton}
              value="perHour"
              label="Оплата за час"
            />
          </div>
          <div className="form-row">
            {props.values.selectedSalaryType !== 'mrot' ? (
              <Field
                name="selectedWithoutNdfl"
                type="checkbox"
                component={Switch}
                labelBefore="Указать с НДФЛ"
                labelAfter="Без НДФЛ"
              />
            ) : null}
          </div>
          {props.values.selectedSalaryType !== 'mrot' ? (
            <div className="form-row">
              <Field
                name="salary"
                type="text"
                component={Input}
                salaryType={props.values.selectedSalaryType}
              />
            </div>
          ) : null}
          {props.values.salary &&
          props.values.selectedSalaryType === 'perMonth' ? (
            <div className="form-row">
              <MessageBox
                salary={props.values.salary}
                selectedWithoutNdfl={props.values.selectedWithoutNdfl}
              />
            </div>
          ) : null}
        </form>
      )}
    </Form>
  );
};

export default SalaryForm;
