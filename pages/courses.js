import React from "react"

export const getStaticProps = async () => {
    //api call
    const response = await fetch ('https://fakestoreapi.com/products');
    const data = await response.json();
    return {
      props: {productdata : data}
    };
  };

const Courses = (props) => {
    //console.log('props', props);
    const {productdata } = props;
    return(
        <div>
            <h2>This is Courses file</h2>
            {productdata.map(item=> (
                <div>{item.title}</div>
            ))}
        </div>
    )
}

export default Courses