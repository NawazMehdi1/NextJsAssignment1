import React from "react"

export const getStaticProps = () =>{
    return {
        props : {footerstatus : true}
    }
}

const Library = () => {
    return(
        <div>
            <h2>This is Library page</h2>
        </div>
    )
}

export default Library