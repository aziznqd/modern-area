import ipad from '../../assets/Ipad.png'
import iphone from '../../assets/Iphone.png'
import './Header.css'

export default function Header() {
    return (
        <section className="header-section">
            <h1 className="font-crimson font-normal text-[clamp(76px,10vw,160px)] text-center leading-none">Browse <br className="lg:hidden"/> everything.</h1>
            <div className='header-image-box'>
                <img src={iphone} alt="iphone" className='block md:hidden'/>
                <img src={ipad} alt="ipad" className='hidden md:block'/>
            </div>
        </section>
    )
}
