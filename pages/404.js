import React, { useEffect } from "react";
import {useRouter} from 'next/router'
const NotFound = () => {
    const router = useRouter();

    useEffect(() => { 
        setTimeout(() => {
            router.push('/contact');
        }, 3000);
    }, [])

    return (
        <div>
            <h2>Page Not Found. Pls check URL.</h2>
        </div>
    )
}

export default NotFound;