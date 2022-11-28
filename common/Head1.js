import React from "react";
import Image from "next/image";

const Logo = () => {
    return(
        <div className="col-1">
           <Image src="/logo.jpg" alt={"logo"} width={200} height={98} />
        </div>
    )
}

export default Logo;