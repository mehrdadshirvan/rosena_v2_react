import { SVGAttributes } from 'react';

export default function ApplicationLogo({className}: any) {
    return (
            <img className={`className ${className}`}
                 src={`/assets/images/rosena-logo-1001-450px-94px-min.png`}
                 alt={'رزنا لوگو'}/>
    );
}
