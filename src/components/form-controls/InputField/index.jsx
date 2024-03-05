import { TextField } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField(props) {
    const { form, name, label, disabled } = props;
    const { formState } = form;
    // formState.touchedFields[name] undefined
    // const hasError = formState.touchedFields[name] && formState.errors[name];
    const hasError = formState.errors[name];
    return (
        // <div>
        //   <TextField fullWidth/>
        // </div>
        <Controller
            name={name}
            control={form.control}
            render={({ field }) => (
                <TextField
                    {...field}
                    fullWidth
                    label={label}
                    disabled={disabled}
                    error={!!hasError}
                    helperText={formState.errors[name]?.message}
                />
            )}
        />
    );
}

export default InputField;
