import React, {useState,useContext, useEffect} from 'react'
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import {Link, useNavigate} from 'react-router-dom';
import registerImg from '../assets/images/register.png';
import avatar from '../assets/images/male-avatar.png'
import '../styles/auth.css'
import { AuthContext } from './../context/AuthContext'; 
import { BASE_URL } from '../utils/config'
import { TEXT } from '../utils/text';

export const Register = () => {

  // eslint-disable-next-line no-unused-vars
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined
  });

  const {dispatch} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleClick = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch(`${BASE_URL}auth/register`, {
        method: 'post',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(credentials)
      })
      const result = await res.json()

      if(!res.ok) alert(result.message);

      dispatch({type: 'REGISTER_SUCCESS'})
      navigate('/login')
    } catch (err) {
      alert(err.message)
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
                <img src={registerImg} alt="avatar" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={avatar} alt="avatar" />
                </div>
                <h2>{TEXT.SIGNUP}</h2>

                <Form onSubmit={handleClick}>
                <FormGroup>
                    <input type="text" placeholder='Username' required id='username' onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="email" placeholder='Email' required id='email' onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder='Password' required id='password' onChange={handleChange} />
                  </FormGroup>
                  <Button className='btn secondary__btn auth__btn' type='submit'>{TEXT.SIGNUP}</Button>
                </Form>

                <p>{TEXT.ALREADY_HAVE_AN_ACCOUNT} <Link to='/login'>{TEXT.LOGIN}</Link> </p> 
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
