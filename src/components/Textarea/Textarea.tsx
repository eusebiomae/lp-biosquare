import { ErrorMessage } from 'formik';
import React from 'react';
import {
  BoxInput,
  CustomStylesProps,
  Error,
  Input,
  Label,
  ValidationProps,
} from './styles';

interface TextareaProps {
  label: string;
  name: string;
  custom?: CustomStylesProps;
  mb?: number;
  mt?: number;
  rows?: number;
  status: () => ValidationProps;
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  name,
  custom,
  mb,
  mt,
  rows = 4,
  status,
}) => {
  const { isError, isValid } = status();

  return (
    <BoxInput mb={mb} mt={mt}>
      <Label htmlFor={name} label={custom?.label}>
        {label}
      </Label>

      <Input
        name={name}
        id={name}
        component="textarea"
        rows={rows}
        isValid={isValid}
        isError={isError}
      />

      <Error>
        <ErrorMessage name={name} />
      </Error>
    </BoxInput>
  );
};

export default Textarea;
