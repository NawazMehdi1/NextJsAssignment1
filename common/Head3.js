import React from "react";
import Button from "react-bootstrap/Button";
import Link from "next/link";

const Head3 = () => {
    return(
        <div className="col-11">
            <ul className="navbar-nav sm-icons mr-0 d-block float-right text-end">
            <li className="float-left d-inline-block m-3"><i className="fa fa-twitter text-white"></i></li>
            <li className="float-left d-inline-block m-3"><i className="fa fa-pinterest-p text-white"></i></li>
            <li className="float-left d-inline-block m-3"><i className="fa fa-facebook-f text-white"><Link href="../login"><Button variant="primary">Login</Button></Link></i></li>
            <li className="float-left d-inline-block m-3"><i className="fa fa-facebook-f text-white"><Link href="../register"><Button variant="primary">Register</Button></Link></i></li>
        </ul>
        </div>
    )
}

export default Head3;