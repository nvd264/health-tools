import React from 'react';
import { Alert, Col } from 'reactstrap';
import { Formik } from 'formik';
import { MainLayout } from '../layouts/main/MainLayout';
import { calculateBMI } from '../helpers/bmi';

export default class BMI extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bmi: '',
            label: '',
            color: 'light'
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    validateBmi(values) {
        let errors = {};
            if (!values.weight) {
                errors.weight = 'Please enter a number for your weight.';
            } else if (!values.height) {
                errors.height = 'Please enter a number for your height.';
            }
            return errors;
    }

    onSubmit(values, { setSubmitting }) {
        const {weight, height} = values;
        const result = calculateBMI(weight, height);
        this.setState({
            bmi: result.bmi,
            label: result.label,
            color: result.color
        });
        setSubmitting(false);
    }

    render() {
        const { color, bmi, label } = this.state;
        return (
            <MainLayout>
                <Col md={{ size: 10, offset: 1 }} lg={{ size: 10, offset: 1 }}>
                    {bmi && color && label && 
                        <Alert color={color}>
                            <p>BMI: {bmi}</p>
                            <p>Result: {label}</p>
                        </Alert>
                    }
                    <Formik
                        initialValues={{ weight: '', height: '' }}
                        validate={this.validateBmi}
                        onSubmit={this.onSubmit}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting
                        }) => (
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="weight">Weight (kg)</label>
                                        <input
                                            id="weight"
                                            type="number"
                                            name="weight"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.weight}
                                            className={`form-control ${errors.weight && touched.weight ? `is-invalid` : ``}`}
                                        />
                                        {errors.weight && touched.weight &&
                                            <div className="invalid-feedback">
                                                {errors.weight}
                                            </div>
                                        }
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="height">Height (m)</label>
                                            <input
                                                id="height"
                                                type="number"
                                                name="height"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.height}
                                                className={`form-control ${errors.height && touched.height ? `is-invalid` : ``}`}
                                            />
                                            {errors.height && touched.height &&
                                                <div className="invalid-feedback">
                                                    {errors.height}
                                                </div>
                                            }
                                        </div>
                                    <button className="btn btn-success" type="submit" disabled={isSubmitting}>
                                        Calculate
                                    </button>
                                </form>
                            )}
                    </Formik>
                </Col>
            </MainLayout>
        );
    }
}