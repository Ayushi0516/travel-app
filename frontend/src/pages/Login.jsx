import React, {useState,useContext, useEffect} from 'react'
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import {Link,useNavigate} from 'react-router-dom';
import loginImg from '../assets/images/login.png';
import avatar from '../assets/images/female-avatar.png'
import '../styles/auth.css'

import { AuthContext } from './../context/AuthContext'; 
import { BASE_URL } from '../utils/config'
import { TEXT } from '../utils/text';

export const Login = () => {

  // eslint-disable-next-line no-unused-vars
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined
  });

  const {dispatch} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleClick = async (e) => {
    e.preventDefault();

    dispatch({type: 'LOGIN_START'})

    try {
      const res = await fetch(`${BASE_URL}auth/login`, {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(credentials),
      })

      const result = await res.json()
      if(!res.ok) alert(result.message)

      dispatch({type: 'LOGIN_SUCCESS', payload: result.data})
      navigate('/')
      
    } catch (err) {
      dispatch({type: 'LOGIN_FAILURE', payload: err.message})
    }
  }
 
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginImg} alt="avatar" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={avatar} alt="avatar" />
                </div>
                <h2>{TEXT.LOGIN}</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input type="email" placeholder='Email' required id='email' onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder='Password' required id='password' onChange={handleChange} />
                  </FormGroup>
                  <Button className='btn secondary__btn auth__btn' type='submit'>{TEXT.LOGIN}</Button>
                </Form>

                <p>{TEXT.DONT_HAVE_AN_ACCOUNT} <Link to='/register'>{TEXT.CREATE}</Link> </p> 
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
