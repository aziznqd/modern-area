import './Trusted.css'
import logo_1 from '../../assets/logo-placeholder-1.svg'
import logo_2 from '../../assets/logo-placeholder-2.svg'
import logo_3 from '../../assets/logo-placeholder-3.svg'
import logo_4 from '../../assets/logo-placeholder-4.svg'
import logo_5 from '../../assets/logo-placeholder-5.svg'
import logo_6 from '../../assets/logo-placeholder-6.svg'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

export default function Trusted(){

    const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true })
    const [imageLoaded, setImageLoaded] = useState(false);

    function onImageLoad(){
        setImageLoaded(true)
    }

    return(
        <section className='trusted-section' ref={ref}>
            <p className='font-dm-sans font-normal text-grey-1 text-[12px]'>Trusted by:</p>
            <div className={`partners-box ${imageLoaded ? "is-ready" : ""} ${inView ? "is-visible" : ""}`}>
                <img src={logo_1} alt="logo-1" onLoad={onImageLoad}/>
                <img src={logo_2} alt="logo-2" onLoad={onImageLoad}/>
                <img src={logo_3} alt="logo-3" onLoad={onImageLoad}/>
                <img src={logo_4} alt="logo-4" onLoad={onImageLoad}/>
                <img src={logo_5} alt="logo-5" onLoad={onImageLoad}/>
                <img src={logo_6} alt="logo-6" onLoad={onImageLoad}/>
            </div>
        </section>
    )
}