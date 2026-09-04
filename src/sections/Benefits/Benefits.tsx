import "./Benefits.css"
import benefits_img from '../../assets/benefits-img.jpg'
import icon_cable from '../../assets/icon-cable.svg'
import icon_planet from '../../assets/icon-planet.svg'
import icon_speech from '../../assets/icon-speech.svg'
import icon_graph from '../../assets/icon-graph.svg'

export default function Benefits(){
    return(
        <section className="benefits-section">
            <div className="benefits-header">
                <p className="text-green-1 font-normal font-roboto-mono text-[clamp(10.5px,10vw,12px)]">Benefits</p>
                <h2 className="font-normal font-crimson text-[clamp(50px,100vw,60px)]">We’ve cracked the code.</h2>
                <p className="text-grey-1 font-normal font-dm-sans text-[15px]">Area provides real insights, without the data overload.</p>
            </div>
            <div className="benefits-content">
                <div className="benefits-card">
                    <img src={icon_cable} alt="cable" />
                    <p className="font-normal font-crimson text-[18px] mt-6">Amplify Insights</p>
                    <p className="font-normal font-dm-sans text-[15px] text-grey-1 mt-5">Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.</p>
                </div>
                <div className="benefits-card">
                    <img src={icon_planet} alt="planet" />
                    <p className="font-normal font-crimson text-[18px] mt-6">Control Your Global Presence</p>
                    <p className="font-normal font-dm-sans text-[15px] text-grey-1 mt-5">Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.</p>
                </div>
                <div className="benefits-card">
                    <img src={icon_speech} alt="speech" />
                    <p className="font-normal font-crimson text-[18px] mt-6">Remove Language Barriers</p>
                    <p className="font-normal font-dm-sans text-[15px] text-grey-1 mt-5">Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.</p>
                </div>
                <div className="benefits-card">
                    <img src={icon_graph} alt="graph" />
                    <p className="font-normal font-crimson text-[18px] mt-6">Visualize Growth</p>
                    <p className="font-normal font-dm-sans text-[15px] text-grey-1 mt-5">Generate precise, visually compelling reports that illustrate your growth trajectories across all regions.</p>
                </div>
            </div>
            <img src={benefits_img} alt="landscape" className="benefits-main-img"/>
        </section>
    )
}