import Link from "next/link";

const FaqOne = () => {
    return(
        <>
            <div id="uni_faq" className="uni-faq uk-section uk-section-large@m uk-panel uk-overflow-hidden uk-padding-2xlarge-bottom@m">
                <div className="uk-container">
                    <header className="uk-grid-xsmall uk-flex-center uk-flex-middle uk-text-center uk-child-width-auto@m uk-grid" data-uk-grid data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;">
                        <div className="uk-panel">
                            <h2 className="uk-h3 uk-h1@m">FAQ</h2>
                        </div>
                    </header>
                    <div className="uk-panel uk-margin-medium-top uk-margin-2xlarge-top@m">
                        <ul className="uk-card uk-card-small uk-card-large@m uk-radius uk-radius-large@m uk-width-2xlarge@m uk-margin-auto uk-box-shadow-xsmall dark:uk-background-white-5" data-uk-accordion="collapsible: false" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;">
                            <li>
                                <Link className="uk-accordion-title uk-h5@m" href="#">What is a AI Image Generator?</Link>
                                <div className="uk-accordion-content uk-padding-small-bottom">
                                    <p className="uk-text-small uk-text-large@m uk-text-muted">AI image generator is a type of artificial intelligence application and an innovative tool that use advanced AI techniques to generate image from a text prompt, just write what you want to generate and our AI will create it.</p>
                                </div>
                            </li>
                            <li>
                                <Link className="uk-accordion-title uk-h5@m" href="#">How does AI Generate Images?</Link>
                                <div className="uk-accordion-content uk-padding-small-bottom">
                                    <p className="uk-text-small uk-text-large@m uk-text-muted">AI Image Generator creates images with vibrant colors and high quality right out of the box. Our machine learning model scans millions of internet images and associated text, enabling the AI to predict and create images tailored to your provided text. Experience next-level content creation with our AI Image Generation technology.</p>
                                </div>
                            </li>
                            <li>
                                <Link className="uk-accordion-title uk-h5@m" href="#">Can I use Generated AI images for commercial purposes?</Link>
                                <div className="uk-accordion-content uk-padding-small-bottom">
                                <p className="uk-text-small uk-text-large@m uk-text-muted">Using AI-generated images for commercial purposes depends on several factors, including the terms of service of the specific AI image generation tool, copyright laws, and ethical considerations.</p>
                                    <p className="uk-text-small uk-text-large@m uk-text-muted">ShibaPix.ai do not retain any copyright from the text-to-image generations, but make sure you do follow the T&C and our guidlines.</p>
                                </div>
                            </li>
                            <li>
                                <Link className="uk-accordion-title uk-h5@m" href="#">Why use a AI Image Generator?</Link>
                                <div className="uk-accordion-content uk-padding-small-bottom">
                                    <p className="uk-text-small uk-text-large@m uk-text-muted">There are plenty of benefits to using an AI Text to Image generator. Bring your ideas to life instantly without having to spend time designing from scratch. No more creative blocks as you start inspired and easily create stunning visuals.</p>
                                </div>
                            </li>
                            <li>
                                <Link className="uk-accordion-title uk-h5@m" href="#">Is AI Image Generator legal?</Link>
                                <div className="uk-accordion-content uk-padding-small-bottom">
                                    <p className="uk-text-small uk-text-large@m uk-text-muted">While AI-generated artwork itself cannot be copyrighted or attributed to a specific individual, it's important to note that the artwork used to train the generator algorithms is often copyrighted, owned, or credited to human artists and creators. Consequently, there is a potential for copyright infringements when producing AI-generated art.</p>
                                </div>
                            </li>
                            <li>
                                <Link className="uk-accordion-title uk-h5@m" href="#">Is it safe to us the Image Generator?</Link>
                                <div className="uk-accordion-content uk-padding-small-bottom">
                                    <p className="uk-text-small uk-text-large@m uk-text-muted">Our AI image generator will kickstart your concepts and let artful inspiration flow. To help you use Text to Image safely and responsibly, we’ve put layers of safety measures in place, including automated reviews of input prompts for terms that might generate inappropriate content. If you do come across unsafe content, let us know.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FaqOne;