import React, { useEffect, useRef, useState, useContext } from "react";
import "../styles/tour-details.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import {useParams } from "react-router-dom";
//import tourData from "../assets/data/tours";
import { calculateAvgRating } from "../utils/avgRating";
import avatar from "../assets/images/avatar.jpg";
import { Booking } from "../components/Booking/Booking";
import { Newsletter } from "../shared/Newsletter";
import { useFetch } from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";
import { AuthContext } from "../context/AuthContext";
import { TEXT } from "../utils/text";

export const TourDetails = () => {
  const {id}  = useParams();
  const reviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(null);

  const { user } = useContext(AuthContext);

  // fetch data from database

  const { data: tour, loading, error } = useFetch(`${BASE_URL}tours/${id}`);
  // const { data: tour, loading, error } = useFetch(`${BASE_URL}tours/search/getFeaturedTours`);
  // useEffect(()=>{
  //   if (!user || user === undefined || user === null) {
  //     alert("To view tours, first sign in please");
  //   }
  // },[]);

  const {
    photo,
    title,
    desc,
    price,
    reviews,
    city,
    distance,
    address,
    maxGroupSize,
  } = tour;
  

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const options = { day: "numeric", month: "long", year: "numeric" };

  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    try {
      if (!user || user === undefined || user === null) {
        alert("Please sign in");
      }

      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: tourRating,
      };

      const res = await fetch(`${BASE_URL}review/${id}`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(reviewObj),
      });

      const result = await res.json();
      if (res.ok) {
        // result.message
        return alert("review submitted successfully");
      }
      alert("review submitted successfully");
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tour]);

  return (
    <>
      <section>
        <Container>
          {loading && <h4 className="text-center pt-5">loading...</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <Row>
              <Col lg="8">
                <div className="tour__content">
                  <img src={photo} alt="img" />

                  <div className="tour__info">
                    <h2>{title}</h2>

                    <div className="d-flex  align-items-center gap-5">
                      <span className="tour__rating d-flex align-items-center gap-1">
                        <i
                          class="ri-star-fill"
                          style={{ color: "var(--secondary-color)" }}
                        ></i>{" "}
                        {avgRating === 0 ? null : avgRating}{" "}
                        {totalRating === 0 ? (
                          "Not Rated"
                        ) : (
                          <span>({reviews?.length})</span>
                        )}
                      </span>

                      <span>
                        <i className="ri-map-pin-fill"></i> {address}
                      </span>
                    </div>

                    <div className="tour__extra-details">
                      <span>
                        <i class="ri-map-pin-2-line"></i> {city}
                      </span>

                      <span>
                        <i class="ri-money-dollar-circle-line"></i> {price} {TEXT.PER_PERSON}
                      </span>
                      <span>
                        <i class="ri-map-pin-2-line"></i> {distance} {TEXT.KM}
                      </span>
                      <span>
                        <i class="ri-group-line"></i> {maxGroupSize} {TEXT.PEOPLE}
                      </span>
                    </div>
                    <h5>{TEXT.DESCRIPTION}</h5>
                    <p>{desc}</p>
                  </div>

                  <div className="tour__reviews mt-4">
                    <h4>{TEXT.CAPITAL_REVIEW} ({reviews?.length} {TEXT.SMALL_REVIEW})</h4>

                    <Form onSubmit={submitHandler}>
                      <div clasRajatsName="d-flex align-items-center gap-3 mb-4 rating__group">
                        <span onClick={() => setTourRating(1)} style={{cursor:"pointer"}}>
                          1 <i class="ri-star-s-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(2)}  style={{cursor:"pointer"}}>
                          2 <i class="ri-star-s-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(3)}  style={{cursor:"pointer"}}>
                          3 <i class="ri-star-s-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(4)}  style={{cursor:"pointer"}}>
                          4 <i class="ri-star-s-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(5)}  style={{cursor:"pointer"}}>
                          5 <i class="ri-star-s-fill"></i>
                        </span>
                      </div>

                      <div className="review__input">
                        <input
                          type="text"
                          ref={reviewMsgRef}
                          placeholder="Share your thoughts"
                          required
                        />
                        <button
                          className="btn primary__btn text-white"
                          type="submit"
                        >
                          {TEXT.SUBMIT}
                        </button>
                      </div>
                    </Form>

                    <ListGroup>
                      {reviews?.map((review) => (
                        <div className="review__item">
                          <img src={avatar} alt="" />

                          <div className="w-100">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5>{review?.username}</h5>
                                <p>
                                  {new Date(
                                    review.createdAt
                                  ).toLocaleDateString("en-US", options)}
                                </p>
                              </div>
                              <span className="d-flex align-items-center">
                                {review?.rating} <i class="ri-star-s-fill"></i>
                              </span>
                            </div>
                            <h6>{review?.reviewText}</h6>
                          </div>
                        </div>
                      ))}
                    </ListGroup>
                  </div>
                </div>
              </Col>
              <Col lg="4">
                <Booking tour={tour} avgRating={avgRating} />
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <Newsletter />
    </>
  );
};
