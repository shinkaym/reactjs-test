import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import InputField from '../../../../components/form-controls/InputField';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

TodoForm.propTypes = {
    onsubmit: PropTypes.func,
};

function TodoForm(props) {
    const schema = yup
        .object({
            title: yup
                .string()
                .required('Please enter title')
                .min(5, 'Title is too short'),
        })
        .required();

    const form = useForm({
        defaultValues: {
            title: '',
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
            onSubmit(values);
        }
        form.reset();
    };

    return (
        <div>
            <form action="" onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="title" label="Todo" form={form} />
            </form>
        </div>
    );
}

export default TodoForm;
