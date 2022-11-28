import { useRouter } from "next/router";
import React from "react";
import style from "../../styles/Product.module.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export const getServerSideProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();
  return {
    props: { productDetail: data },
  };
};

const ProductId = (props) => {
  const prodDetails = props.productDetail;
  return (
    <>
      <Container>
        <Row>
          <Col md={4}>{<img src={prodDetails.image} width="100%" />}</Col>
          <Col md={8}>
            <h3><b>{prodDetails.title}</b></h3>
            <hr/>
            <h1 className={style.pdp_name}>{prodDetails.category}</h1>
            <p>Price : {prodDetails.price}</p>       
            <Button >ADD TO BAG</Button>   <Button >WISHLIST</Button> 
            <Col md={4}><hr></hr></Col>     
            <p>{prodDetails.description}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductId;
