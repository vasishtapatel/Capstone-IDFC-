import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
import Meta from "../components/Meta";
import { listProducts } from "../actions/productActions";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;
  const pageType = match.params.pageType || "home";

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  console.log(pageType);
  console.log(keyword);
  console.log(products);
  return (
    <>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      )}

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>
          <Link to="/">Coffee Beans</Link>
        </h1>
        <h1>
          <Link to="/page/coffeeproducts"> Coffee Products</Link>
        </h1>
        <h1>
          {" "}
          <Link to="/page/coffeemachines">Coffee Machines</Link>
        </h1>
      </div>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : pageType === "home" || keyword !== undefined ? (
        <>
          <Row>
            {products.length !== 0 &&
              products
                .filter((product) => product.category === "coffee beans")
                .map((product) => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
                ))}
          </Row>
        </>
      ) : (
        ""
      )}

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : pageType === "coffeeproducts" || keyword !== undefined ? (
        <>
          <Row>
            {products.length !== 0 &&
              products
                .filter((product) => product.category === "coffee products")
                .map((product) => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
                ))}
          </Row>
        </>
      ) : (
        ""
      )}

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : pageType === "coffeemachines" || keyword !== undefined ? (
        <>
          <Row>
            {products.length !== 0 &&
              products
                .filter((product) => product.category === "coffee machines")
                .map((product) => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
                ))}
          </Row>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default HomeScreen;
