import React from 'react';
import { Link } from 'react-router-dom';
import {
    Col, Card, CardBody, CardText
} from 'reactstrap';
import { MainLayout } from '../layouts/main/MainLayout';

const Home = () => (
    <MainLayout>
        <Col sm="12" xs="12" md="6" lg="4">
            <Card>
                <img width="100%" src="/tools/bmi.jpg" alt="BMI Calculator" />
                <CardBody>
                    <CardText>
                        Body mass index (BMI) is one method used to estimate your total amount of body fat. It is calculated by dividing your weight in kilograms by your height in metres squared (m2).
                    </CardText>
                    <Link to="/bmi">Calculate</Link>
                </CardBody>
            </Card>
        </Col>
    </MainLayout>
);

export default Home;