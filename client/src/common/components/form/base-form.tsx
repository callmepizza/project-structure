import { isFunction } from 'lodash';
import React, { useCallback } from 'react';
import { Form as FinalForm, FormSpy } from 'react-final-form';
import { LoaderOverlay } from 'common/components/controls/external';

export interface IFormProps {
  isLoading?: boolean;
  className?: string;
  validate?: any;
  initialValues?: any;
  onSubmit: (formData: any) => void | Promise<any>;
  onChange?: Function;
}

export const Form = ({
  isLoading,
  className,
  initialValues,
  validate,
  children,
  onSubmit,
  onChange,
}: IFormProps & { children: (props: any) => JSX.Element }) => {
  const onFormChange = useCallback(({ values }) => {
    if (isFunction(onChange)) {
      onChange(values);
    }
  }, []);

  return (
    <FinalForm keepDirtyOnReinitialize initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
      {({ form, handleSubmit }) => {
        const formState = form.getState();

        return (
          <>
            <form noValidate className={className} onSubmit={handleSubmit}>
              {children({ ...form, ...formState })}
            </form>
            <FormSpy subscription={{ values: true }} onChange={onFormChange} />
            {isLoading && <LoaderOverlay opened />}
          </>
        );
      }}
    </FinalForm>
  );
};



