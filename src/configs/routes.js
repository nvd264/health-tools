import Home from "../pages/Home";
import BMI from "../pages/BMI";

const routes = [
    {
        path: '/',
        component: Home,
        name: 'Health Tools'
    },
    {
        path: '/bmi',
        component: BMI,
        name: 'BMI'
    }
];

export default routes;