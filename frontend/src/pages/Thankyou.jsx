import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/thank-you.css'
import { TEXT } from '../utils/text';

export const Thankyou = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg='12' className='pt-5 text-center'>
                    <div className="thank__you">
                        <span>
                            <i class='ri-checkbox-circle-line'></i>
                        </span>
                        <h1 className='mb-3 fw-semibold'>{TEXT.THANK_YOU}</h1>
                        <h3 className='mb-4'>{TEXT.BOOKED}</h3>

                        <Button className='btn primary__btn w-25'>
                            <Link to='/home'>{TEXT.BACK_TO_HOME}</Link>
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
