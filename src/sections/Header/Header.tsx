import { useState } from 'react'
import ipad from '../../assets/ipad.png'
import iphone from '../../assets/iphone.png'
import './Header.css'

export default function Header() {

    const [imageLoaded, setImageLoaded] = useState(false);

    function onImageLoad(){
        setImageLoaded(true)
    }

    return (
        <section className="header-section">
            <h1 className="font-crimson font-normal text-[clamp(76px,10vw,160px)] text-center leading-none">Browse <br className="lg:hidden"/> everything.</h1>
            <div className={`header-image-box ${imageLoaded ? "is-ready" : ""}`}>
                <img src={iphone} alt="iphone" className='block md:hidden' onLoad={onImageLoad}/>
                <img src={ipad} alt="ipad" className='hidden md:block' onLoad={onImageLoad}/>
            </div>
        </section>
    )
}
