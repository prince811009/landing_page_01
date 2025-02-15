import { useEffect, useState } from 'react';

const HomeOneRoadMap  = () => {

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return(
        <>
            {isClient && ( 
                <div id="uni_roadmap" className="uni-roadmap uk-section uk-section-large@m uk-padding-3xlarge-bottom@m uk-panel uk-overflow-hidden swiper-parent">
                    <div className="uk-container">
                        <header className="uk-grid-xsmall uk-flex-center uk-flex-middle uk-text-center uk-child-width-auto@m uk-grid" data-uk-grid data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;">
                            <div className="uk-panel">
                                <h2 className="uk-h3 uk-h1@m">WE GOT A PLAN FOR YOU!</h2>
                            </div>
                        </header>
                        <div className="uk-panel uk-width-medium uk-margin-auto uk-margin-medium-top uk-margin-2xlarge-top@m" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;">
                            <div className="swiper swiper-match uk-overflow-unset" data-swiper="gap: 16; dots-type: progressbar;" data-swiper-m="gap: 32;">
                                <div className="swiper-wrapper uk-grid-match uk-flex-middle" data-anime="targets: > * > *; opacity:[0, 1]; scale:[0.5, 1]; onview: -400; delay: anime.stagger(200);">
                                    <div className="swiper-slide">
                                        <div>
                                            <div className="uni-phase uk-panel uk-overflow-hidden uk-card uk-card-small uk-card-medium@m uk-radius uk-radius-xlarge@m uk-box-shadow-xsmall dark:uk-background-white-5">
                                                <span className="uni-phase-progress uk-text-small uk-text-bold uk-position-top-right uk-position-small uk-text-white uk-background-gradient"><span>0</span>%</span>
                                                <div className="uk-panel">
                                                    <span className="uni-phase-count uk-text-overline uk-text-gradient">Phase 01</span>
                                                    <h3 className="uni-phase-title uk-h4 uk-h3@m uk-margin-remove-bottom">Planning</h3>
                                                    <p className="uni-phase-description uk-text-large@m">Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.</p>
                                                    <hr className="uk-width-2xsmall uk-margin-medium@m"/>
                                                    <ul className="uk-list uk-text-small uk-text-medium@m">
                                                        <li className="uk-flex-middle"><i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i> Release website and logo</li>
                                                        <li className="uk-flex-middle"><i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i> Grow community</li>
                                                        <li className="uk-flex-middle"><i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i> Launch the project</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div>
                                            <div className="uni-phase uk-panel uk-overflow-hidden uk-card uk-card-small uk-card-medium@m uk-radius uk-radius-xlarge@m uk-box-shadow-xsmall dark:uk-background-white-5">
                                                <span className="uni-phase-progress uk-text-small uk-text-bold uk-position-top-right uk-position-small uk-text-white uk-background-gradient"><span>25</span>%</span>
                                                <div className="uk-panel">
                                                    <span className="uni-phase-count uk-text-overline uk-text-gradient">Phase 02</span>
                                                    <h3 className="uni-phase-title uk-h4 uk-h3@m uk-margin-remove-bottom">Production</h3>
                                                    <p className="uni-phase-description uk-text-large@m">Starting the production on the procedurally generated planets and the smart contract for minting.</p>
                                                    <hr className="uk-width-2xsmall uk-margin-medium@m"/>
                                                    <ul className="uk-list uk-text-small uk-text-medium@m">
                                                        <li className="uk-flex-middle"><i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i> Release website and logo</li>
                                                        <li className="uk-flex-middle"><i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i> Grow community</li>
                                                        <li className="uk-flex-middle"><i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i> Launch the project</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div>
                                            <div className="uni-phase uk-panel uk-overflow-hidden uk-card uk-card-small uk-card-medium@m uk-radius uk-radius-xlarge@m uk-box-shadow-xsmall dark:uk-background-white-5">
                                                <span className="uni-phase-progress uk-text-small uk-text-bold uk-position-top-right uk-position-small uk-text-white uk-background-gradient"><span>50</span>%</span>
                                                <div className="uk-panel">
                                                    <span className="uni-phase-count uk-text-overline uk-text-gradient">Phase 03</span>
                                                    <h3 className="uni-phase-title uk-h4 uk-h3@m uk-margin-remove-bottom">Launch</h3>
                                                    <p className="uni-phase-description uk-text-large@m">Our most active community members will be able to join the whitelist so they can discover, collect and sell their NFTs.</p>
                                                    <hr className="uk-width-2xsmall uk-margin-medium@m"/>
                                                    <ul className="uk-list uk-text-small uk-text-medium@m">
                                                        <li className="uk-flex-middle"><i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i> Release website and logo</li>
                                                        <li className="uk-flex-middle"><i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i> Grow community</li>
                                                        <li className="uk-flex-middle"><i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i> Launch the project</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                
                                <div className="swiper-pagination swiper-pagination-progressbar swiper-pagination-horizontal swiper-dotnav"></div>
                            </div>

                            <a aria-label="Next" href="#next" className="swiper-next uk-button uk-button-small uk-button-icon uk-border uk-radius-circle uk-position-center-right uk-position-z-index uk-box-shadow-small dark:uk-background-gray-100"><i className="uk-icon-small" data-feather="chevron-right"></i></a>
                            <a aria-label="Prev" href="#prev" className="swiper-prev uk-button uk-button-small uk-button-icon uk-border uk-radius-circle uk-position-center-left uk-position-z-index uk-box-shadow-small dark:uk-background-gray-100"><i className="uk-icon-small" data-feather="chevron-left"></i></a>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
export default HomeOneRoadMap;