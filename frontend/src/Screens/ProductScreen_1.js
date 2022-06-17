/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useReducer, useEffect } from "react";
import "./ProductScreen.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import Rating from "../components/Rating";
import Button from "react-bootstrap/esm/Button";
import CardHeader from "react-bootstrap/esm/CardHeader";
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, product: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
function ProductScreen() {
  const params = useParams();
  const { slug } = params;
  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: "",
    loading: true,
    errors: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(`/api/products/slug/${slug}`);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (e) {
        dispatch({ type: "FETCH_FAIL", payload: e.message });
      }
    };
    fetchData();
  }, [slug]);
  return loading ? (
    <div>loading</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div class="container">
      <div class="card">
        <div class="container-fluid">
          <div class="wrapper row">
            <div class="preview col-md-6">
              <div class="preview-pic tab-content">
                <div class="tab-pane active" id="pic-1">
                  <img src="http://placekitten.com/400/252" alt="" />
                </div>
                <div class="tab-pane" id="pic-2">
                  <img src="http://placekitten.com/400/252" alt="" />
                </div>
                <div class="tab-pane" id="pic-3">
                  <img src="http://placekitten.com/400/252" alt="" />
                </div>
                <div class="tab-pane" id="pic-4">
                  <img src="http://placekitten.com/400/252" alt="" />
                </div>
                <div class="tab-pane" id="pic-5">
                  <img src="http://placekitten.com/400/252" alt="" />
                </div>
              </div>
              <ul class="preview-thumbnail nav nav-tabs">
                <li class="active">
                  <a data-target="#pic-1" data-toggle="tab">
                    <img src="http://placekitten.com/200/126" alt="" />
                  </a>
                </li>
                <li>
                  <a data-target="#pic-2" data-toggle="tab">
                    <img src="http://placekitten.com/200/126" alt="" />
                  </a>
                </li>
                <li>
                  <a data-target="#pic-3" data-toggle="tab">
                    <img src="http://placekitten.com/200/126" alt="" />
                  </a>
                </li>
                <li>
                  <a data-target="#pic-4" data-toggle="tab">
                    <img src="http://placekitten.com/200/126" alt="" />
                  </a>
                </li>
                <li>
                  <a data-target="#pic-5" data-toggle="tab">
                    <img src="http://placekitten.com/200/126" alt="" />
                  </a>
                </li>
              </ul>
            </div>
            <div class="details col-md-6">
              <h3 class="product-title">men's shoes fashion</h3>
              <div class="rating">
                <div class="stars">
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  />
                </div>
              </div>
              <p class="product-description">
                Suspendisse quos? Tempus cras iure temporibus? Eu laudantium
                cubilia sem sem! Repudiandae et! Massa senectus enim minim
                sociosqu delectus posuere.
              </p>
              <h4 class="price">
                current price: <span>$180</span>
              </h4>
              <p class="vote">
                <strong>91%</strong> of buyers enjoyed this product!{" "}
                <strong>(87 votes)</strong>
              </p>
              <h5 class="sizes">
                sizes:
                <span class="size" data-toggle="tooltip" title="small">
                  s
                </span>
                <span class="size" data-toggle="tooltip" title="medium">
                  m
                </span>
                <span class="size" data-toggle="tooltip" title="large">
                  l
                </span>
                <span class="size" data-toggle="tooltip" title="xtra large">
                  xl
                </span>
              </h5>
              <h5 class="colors">
                colors:
                <span
                  class="color orange not-available"
                  data-toggle="tooltip"
                  title="Not In store"
                ></span>
                <span class="color green"></span>
                <span class="color blue"></span>
              </h5>
              <div class="action">
                <button class="add-to-cart btn btn-default" type="button">
                  add to cart
                </button>
                <button class="like btn btn-default" type="button">
                  <span class="fa fa-heart"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductScreen;
