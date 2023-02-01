import Select from 'react-select';
import React, { useState, useEffect } from 'react';
const MultiSelectEdit = ({ field, optionsDefault,form, options, isMulti = false, placeholder = 'Select', }) => {

    function onChange(option) {
        form.setFieldValue(
            field.name,
            (option).map((item) => item.value)
        );
    }

    useEffect(() => {
        form.setFieldValue(
            field.name,
            (optionsDefault).map((item) => item.value)
        );
    }, [])




    const getValue = () => {
        if (options) {
            let result2 = (options.filter((option) => { return field.value.indexOf(option.value) >= 0 }))
            return result2
        } else {
            return isMulti ? [] : [];
        }
    };

    if (!isMulti) {
        return (
            <Select
                options={options}
                name={field.name}
                value={options ? options.find(option => option.value === field.value) : ''}
                onChange={(option) => form.setFieldValue(field.name, option.value)}
                onBlur={field.onBlur}
                placeholder={placeholder}
            />
        )
    } else {
        return (
            <Select
                className="react-select-container"
                classNamePrefix="react-select"
                name={field.name}
                value={
                    getValue()
                }
                onChange={onChange}
                options={options}
                isMulti={true}
                placeholder={placeholder}
                optionsDefault={optionsDefault}
            />
        )
    }
}

export default MultiSelectEdit;