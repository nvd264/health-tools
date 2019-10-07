const BMI_RESULTS = {
    UNDER_WEIGHT: {
        bmi: '< 18.5',
        label: 'Underweight',
        color: 'info'
    },
    NORMAL: {
        bmi: '18.5 - 25',
        label: 'Normal',
        color: 'success'
    },
    OVERWEIGHT: {
        bmi: '25 - 30',
        label: 'Overweight',
        color: 'warning'
    },
    OBESE: {
        bmi: '> 30',
        label: 'Obese',
        color: 'danger'
    }
}

const checkBMI = (bmi) => {
    if(bmi < 18.5) {
        return BMI_RESULTS.UNDER_WEIGHT;
    }

    if(bmi > 18.5 && bmi < 25) {
        return BMI_RESULTS.NORMAL;
    }

    if(bmi > 25 && bmi < 30) {
        return BMI_RESULTS.OVERWEIGHT;
    }

    if(bmi > 30) {
        return BMI_RESULTS.OBESE;
    }
}

export const calculateBMI = (weight, height) => {
    const bmi = weight / (height * height);
    return checkBMI(bmi);
}