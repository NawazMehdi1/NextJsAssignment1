import React from "react"

export const getStaticProps = () =>{
    return {
        props : {footerstatus : true}
    }
}

const Sports = () => {
    return(
        <div>
            <h2>This is Sports page</h2>
        </div>
    )
}

export default Sports