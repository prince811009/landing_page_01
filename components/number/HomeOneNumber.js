const HomeOneNumber = () => {
    return (        
        <>
            <div id="uni_numbers" className="uni-numbers uk-section uk-section-large@m">
                <div className="uk-container">
                    <div className="uk-panel">
                        <img className="uk-position-bottom-left uk-text-secondary uni-animation-delay-large" width="32" src="images/objects/orange-ball.png" alt="Object" style={{bottom: "-32%", left: "30%"}} data-anime="opacity:[0, 1]; scale:[0, 1]; onview: -250; delay: 200;" />
                        <img className="uk-position-top-right" width="24" src="images/objects/ethereum-01.png" alt="Object" style={{top: "-25%", right: "25%"}} data-anime="opacity:[0, 1]; scale:[0, 1]; onview: -250; delay: 200;" />
                        <div className="uk-grid uk-grid-large uk-grid-2xlarge@m uk-child-width-expand@m uk-text-center uk-text-muted" data-anime="targets: > *; opacity:[0, 1]; scale:[0.5, 1]; onview: -250; delay: anime.stagger(100);">
                            <div className="uk-first-column">
                                <div className="uk-panel">
                                    <h4 className="uk-h3 uk-heading-d3@m uk-text-gradient uk-margin-xsmall uk-margin@m">5,000+</h4>
                                    <span>Let your creativity shine.</span>
                                </div>
                            </div>
                            <div>
                                <div className="uk-panel">
                                    <h4 className="uk-h3 uk-heading-d3@m uk-text-gradient uk-margin-xsmall uk-margin@m">54M+</h4>
                                    <span>One of the most popular AI models in the world.</span>
                                </div>
                            </div>
                            <div>
                                <div className="uk-panel">
                                    <h4 className="uk-h3 uk-heading-d3@m uk-text-gradient uk-margin-xsmall uk-margin@m">2.5x</h4>
                                    <span>The speed of generating images has increased.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeOneNumber;