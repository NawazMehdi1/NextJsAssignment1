import React from "react"
export const getStaticProps = () =>{
    return {
        props : {footerstatus : true}
    }
}

const Playground = () => {
    return(
        <div>
            <h2>This is Playground page</h2>
        </div>
    )
}

export default Playground