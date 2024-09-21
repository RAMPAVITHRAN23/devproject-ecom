import { bmwimage } from "../../../assets/image"
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Content = () => {  // Ensure the component name starts with an uppercase letter
    return (
        <>
            <LazyLoadImage
                alt={bmwimage}
                effect="blur"
                wrapperProps={{
                    // If you need to, you can tweak the effect transition using the wrapper style.
                    style: { transitionDelay: "0.1s" },
                }}
                src={bmwimage}
            />

            {/* <img src={bmwimage} alt='Bmw image' />  Use the imported Image variable */}
        </>
    );
}

export default Content;
