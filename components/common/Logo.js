const Logo = () => {
    return (        
        <>
            <img className="uk-visible dark:uk-hidden" width="120" src="/images/ShibaPixLogo.png" alt="ShibaPix" loading="lazy" /> 
            <img className="uk-hidden dark:uk-visible" width="120" src="/images/ShibaPixLogo.png" alt="ShibaPix" loading="lazy" /> 
        </>
    )
}

export default Logo;