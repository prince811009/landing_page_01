import Link from 'next/link';

export default function Home() {
    return (
        <div className="wrap">
            <div id="wrapper" className="uk-background-gray-100 uk-text-white uk-dark">               
                <header id="header" className="uk-panel uk-overflow-hidden uk-position-z-index uk-background-gray-100">
                    <div className="uk-position-top uk-position-z-index-negative uk-blend-hard-light" data-uk-height-viewport="">
                        <img className="uk-position-top uk-blur-large" style={{left: "25%", top: "-80%"}} width="700" src="images/gradient-circle.svg" alt="Circle" />
                    </div>
                    <div className="uk-container">
                        <div className="uk-section-large uk-section-xlarge@m uk-flex-center uk-flex-middle" data-uk-height-viewport="offset-bottom: 30;">
                            <img className="uk-position-top-left uni-animation-spin uk-visible@m" width="40" src="images/objects/sparkle-light.png" alt="object" style={{top: "45%", left: "30%"}} />
                            <img className="uk-position-top-right uni-animation-spin uk-visible@m" width="40" src="images/objects/sparkle-light.png" alt="object" style={{top: "35%", right: "30%"}} />
                            <img className="uk-position-top-left uni-animation-bounce uni-animation-delay-small uk-visible@m" width="24" src="images/objects/orange-ball-blur.png" alt="object" style={{top: "16%", left: "24%"}} data-uk-svg="" />
                            <img className="uk-position-left uni-animation-bounce uni-animation-delay-large uk-visible@m" width="40" src="images/objects/violet-ball.png" alt="object" style={{top: "34%", left: "16%"}} data-uk-svg="" />
                            <img className="uk-position-bottom-left uni-animation-bounce uk-visible@m" width="24" src="images/objects/orange-ball.png" alt="object" style={{bottom: "30%", left: "24%"}} />
                            <img className="uk-position-top-right uni-animation-bounce uni-animation-delay-small uk-visible@m" width="36" src="images/objects/violet-ball.png" alt="object" style={{top: "16%", right: "24%"}} data-uk-svg="" />
                            <img className="uk-position-right uni-animation-bounce uni-animation-delay-large uk-visible@m" width="40" src="images/objects/orange-ball.png" alt="object" style={{top: "34%", right: "16%"}} data-uk-svg="" />
                            <img className="uk-position-bottom-right uni-animation-bounce uk-visible@m" width="24" src="images/objects/violet-ball-blur.png" alt="object" style={{bottom: "30%", right: "24%"}} />
                            <div className="uk-panel uk-flex-column uk-flex-middle uk-text-center uk-position-z-index">
                                <img className="uk-visible@m" width="100" src="images/nerko-icon.svg" alt="Nerko" />
                                <img className="uk-hidden@m" width="80" src="images/nerko-icon.svg" alt="Nerko" />
                                <img className="uk-margin-top uk-visible@m" width="240" src="images/nerko-dark.svg" alt="Nerko" />
                                <img className="uk-margin-top uk-hidden@m" width="160" src="images/nerko-dark.svg" alt="Nerko" />
                                <p className="uk-text-lead uk-margin-top uk-margin-medium-top@m">
                                    NFT Portfolio Onepage <br />
                                    React Next JS Template
                                </p>
                                <a href="#demos" className="uk-button uk-button-medium uk-button-large@m uk-button-gradient uk-margin-top uk-margin-medium-top@m" data-uk-scroll>Live Preview</a>
                            </div>
                        </div>
                    </div>
                </header>
                <img className="uk-width-2xsmall uk-flex-center uk-margin-auto" src="images/divider-01.svg" alt="Divider" />              
                <div id="demos" className="uk-panel uk-section-large uk-section-xlarge@m uk-padding-small-top@m uk-overflow-hidden">
                    <div className="uk-container">
                        <div className="uk-grid-xsmall uk-grid-xlarge@m uk-child-width-1-3@m uk-text-center uk-margin-medium-top uk-margin-xlarge-top@s uk-grid">
                            <div>
                                <div className="uk-panel">
                                    <div className="uk-panel uk-card uk-card-xsmall uk-radius-large uk-box-shadow-xsmall uk-box-shadow-hover-large uk-overflow-hidden uk-background-gray-80">
                                        <img src="images/demo/landing_01_light.png" alt="Landing 01 - Light" width="580" height="318" className="uk-width-1-1 uk-radius-medium" loading="lazy" /> <Link href="landing-01" className="uk-position-cover"></Link>
                                        <p className="uk-text-semibold uk-padding-xsmall">Landing 01 - Light</p>
                                    </div>
                                </div>
                            </div>
                            <div className="uk-grid-margin2">
                                <div className="uk-panel">
                                    <div className="uk-panel uk-card uk-card-xsmall uk-radius-large uk-box-shadow-xsmall uk-box-shadow-hover-large uk-overflow-hidden uk-background-gray-80">
                                        <img src="images/demo/landing_02_light.png" alt="Landing 02 - Light" width="580" height="318" className="uk-width-1-1 uk-radius-medium" loading="lazy" /> <Link href="landing-02" className="uk-position-cover"></Link>
                                        <p className="uk-text-semibold uk-padding-xsmall">Landing 02 - Light</p>
                                    </div>
                                </div>
                            </div>
                            <div className="uk-grid-margin2">
                                <div className="uk-panel">
                                    <div className="uk-panel uk-card uk-card-xsmall uk-radius-large uk-box-shadow-xsmall uk-box-shadow-hover-large uk-overflow-hidden uk-background-gray-80">
                                        <img src="images/demo/landing_03_light.png" alt="Landing 03 - Light" width="580" height="318" className="uk-width-1-1 uk-radius-medium" loading="lazy" /> <Link href="landing-03" className="uk-position-cover"></Link>
                                        <p className="uk-text-semibold uk-padding-xsmall">Landing 03 - Light</p>
                                    </div>
                                </div>
                            </div>
                            <div className="uk-grid-margin3">
                                <div className="uk-panel">
                                    <div className="uk-panel uk-card uk-card-xsmall uk-radius-large uk-box-shadow-xsmall uk-box-shadow-hover-large uk-overflow-hidden uk-background-gray-80 uk-margin-xlarge-top">
                                        <img src="images/demo/landing_04_light.png" alt="Landing 04 - Light" width="580" height="318" className="uk-width-1-1 uk-radius-medium" loading="lazy" /> <Link href="landing-04" className="uk-position-cover"></Link>
                                        <p className="uk-text-semibold uk-padding-xsmall">Landing 04 - Light</p>
                                    </div>
                                </div>
                            </div>
                            <div className="uk-grid-margin3">
                                <div className="uk-panel">
                                    <div className="uk-panel uk-card uk-card-xsmall uk-radius-large uk-box-shadow-xsmall uk-box-shadow-hover-large uk-overflow-hidden uk-background-gray-80 uk-margin-xlarge-top">
                                        <img src="images/demo/landing_05_light.png" alt="Landing 05 - Light" width="580" height="318" className="uk-width-1-1 uk-radius-medium" loading="lazy" /> <Link href="landing-05" className="uk-position-cover"></Link>
                                        <p className="uk-text-semibold uk-padding-xsmall">Landing 05 - Light</p>
                                    </div>
                                </div>
                            </div>                            
                            <div className="uk-grid-margin3">
                                <div className="uk-panel">
                                    <div className="uk-panel uk-card uk-card-xsmall uk-radius-large uk-box-shadow-xsmall uk-box-shadow-hover-large uk-overflow-hidden uk-background-gray-80 uk-margin-xlarge-top">
                                        <img src="images/demo/soon.png" alt="Upcoming Pages" width="580" height="318" className="uk-width-1-1 uk-radius-medium" loading="lazy" /> <a href="main/#" className="uk-position-cover" aria-label="Upcoming Pages"></a>
                                        <p className="uk-text-semibold uk-padding-xsmall">Upcoming Pages</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="uk-width-2xsmall uk-flex-center uk-margin-auto" src="images/divider-01.svg" alt="Divider" />
                <footer id="footer" className="uk-panel uk-overflow-hidden uk-position-z-index uk-background-gray-100">
                    <div className="uk-position-bottom uk-position-z-index-negative uk-blend-hard-light" data-uk-height-viewport="">
                        <img className="uk-position-bottom uk-blur-large" style={{left: "25%", bottom: "-80%"}} width="700" src="images/gradient-circle.svg" alt="Circle" />
                    </div>
                    <div className="uk-container">
                        <div className="uk-section-large uk-section-xlarge@m uk-flex-center uk-flex-middle" data-uk-height-viewport="offset-bottom: 30; media: @m;">
                            <img className="uk-position-top-left uni-animation-bounce uni-animation-delay-small uk-visible@m" width="24" src="images/objects/orange-ball-blur.png" alt="object" style={{top: "16", left: "24%"}} data-uk-svg="" />
                            <img className="uk-position-left uni-animation-bounce uni-animation-delay-large uk-visible@m" width="40" src="images/objects/violet-ball.png" alt="object" style={{top: "34", left: "16%"}} data-uk-svg="" />
                            <img className="uk-position-bottom-left uni-animation-bounce uk-visible@m" width="24" src="images/objects/orange-ball.png" alt="object" style={{bottom: "30", left: "24%"}} />
                            <img className="uk-position-top-right uni-animation-bounce uni-animation-delay-small uk-visible@m" width="36" src="images/objects/violet-ball.png" alt="object" style={{top: "16%", right: "24%"}} data-uk-svg="" />
                            <img className="uk-position-right uni-animation-bounce uni-animation-delay-large uk-visible@m" width="40" src="images/objects/orange-ball.png" alt="object" style={{top: "34%", right: "16%"}} data-uk-svg="" />
                            <img className="uk-position-bottom-right uni-animation-bounce uk-visible@m" width="24" src="images/objects/violet-ball-blur.png" alt="object" style={{bottom: "30%", right: "24%"}} />
                            <div className="uk-panel uk-flex-column uk-flex-middle uk-text-center uk-position-z-index">
                                <span className="uk-text-overline uk-text-bold uk-text-gradient">Purchase template</span>
                                <h3 className="uk-h4 uk-h3@m uk-margin-medium-top@m">
                                    Do you like this template? <br />
                                    Buy Nerko now!
                                </h3>
                                <a href="https://1.envato.market/P0eVqR" className="uk-button uk-button-medium uk-button-large@m uk-button-gradient uk-margin-top" target="_blank">
                                    <i className="uk-icon unicon-shopping-bag"></i>
                                    <span>Buy now</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}