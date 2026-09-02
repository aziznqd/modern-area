import './Trusted.css'
import logo_1 from '../../assets/logo-placeholder-1.svg'
import logo_2 from '../../assets/logo-placeholder-2.svg'
import logo_3 from '../../assets/logo-placeholder-3.svg'
import logo_4 from '../../assets/logo-placeholder-4.svg'
import logo_5 from '../../assets/logo-placeholder-5.svg'
import logo_6 from '../../assets/logo-placeholder-6.svg'

export default function Trusted(){
    return(
        <section className='trusted-section'>
            <p className='font-dm-sans font-normal text-grey-1'>Trusted by:</p>
            <div className='partners-box'>
                <img src={logo_1} alt="logo-1" />
                <img src={logo_2} alt="logo-2" />
                <img src={logo_3} alt="logo-3" />
                <img src={logo_4} alt="logo-4" />
                <img src={logo_5} alt="logo-5" />
                <img src={logo_6} alt="logo-6" />
            </div>
        </section>
    )
}