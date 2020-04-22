import React, { useState } from "react";
import { Grid, Form } from "common/components/controls/external";
import { mapper } from "../../../../utils/dealForm";
import "./style.scss";

interface IConsumerDeal {
  name: string;
  value: number;
}

const count = 1;

export const ConsumerDeal = () => {
  const [dateStart, changeDate] = useState<number>(count);
  const handleChange = (e: MouseEvent, { name, value }: IConsumerDeal) =>
    changeDate(([name] = value));

  return (
    <Grid.Column>
      <Form className="form-credit-deal">
        <Form.Checkbox
          className="toggle-client"
          toggle
          label="Зарплатный клиент"
          width="12"
        />

        <Form.Input
          className="input-summ"
          label="Сумма"
          size="small"
          width="12"
          error="dsd"
        />

        <Form.Input
          className="range-client"
          label={`Срок ${mapper(dateStart)}`}
          min={1}
          max={60}
          name="duration"
          step={1}
          onChange={handleChange}
          type="range"
          value={dateStart}
          fluid
        />
      </Form>
    </Grid.Column>
  );
};
