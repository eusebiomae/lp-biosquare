import { Field } from 'formik';
import React, { ReactNode } from 'react';
import { Label } from './styles';

interface CheckboxProps {
  name: string;
  children: ReactNode;
}

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  children,
}) => {
  return (
    <>
      <Label htmlFor={name}>
        <Field type="checkbox" id={name} name={name} />

        <span>{children}</span>
      </Label>
    </>
  );
};

export default Checkbox;
