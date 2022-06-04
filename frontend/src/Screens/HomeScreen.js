/* eslint-disable no-unused-vars */
import React from "react";
// import data from "../data";
import { useReducer, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import logger from "use-reducer-logger";
import Product from "../components/Product.js"
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    errors: "",
  });
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (e) {
        dispatch({ type: "FETCH_FAIL", payload: e.message });
      }
      // setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h2 className="product-feature">
        Featured <b> Products </b>
      </h2>
      <div className="product-list">
        {loading ? (
          <div>Loading</div>
        ) : error ? (
          <div>Error</div>
        ) : (
        <Row>{
          products.map((product) => (
            <Col sm={6} md={4} lg={3} key={product.slug}className="product m-10">
            <Product product={product}  />
          </Col>
          ))
        }
        </Row>
        )}
      </div>
    </div>
  );
}
export default HomeScreen;
