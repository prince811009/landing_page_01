import Link from 'next/link';
import { Navigation, EffectFade , Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

const BannerThreeSlider = () =>{
    return(
        <Swiper
    // install Swiper modules
    modules={[Navigation, A11y, Pagination, EffectFade  ]}
    spaceBetween={32}
    slidesPerView={1}    
    navigation  
    effect={"fade"}
    pagination={{ clickable: true }}    
    onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    className="gap-mobile"
    >
     <SwiperSlide>
        <div className="swiper-slide uk-radius-xlarge">        
            <div>
                <div className="uni-artwork uk-card uk-card-2xsmall uk-card-default uk-radius-xlarge uk-overflow-hidden dark:uk-background-white-15">
                    <div className="uni-artwork-featured-image uk-panel uk-flex-middle uk-flex-center">
                        <div className="uk-panel uk-overflow-hidden uk-radius-large">
                            <canvas width="400" height="600"></canvas>
                            <img src="images/artwork/25.png" alt="" className="uk-cover uk-position-cover" loading="lazy" /> 
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="swiper-slide uk-radius-xlarge">
            <div>
                <div className="uni-artwork uk-card uk-card-2xsmall uk-card-default uk-radius-xlarge uk-overflow-hidden dark:uk-background-white-15">
                    <div className="uni-artwork-featured-image uk-panel uk-flex-middle uk-flex-center">
                        <div className="uk-panel uk-overflow-hidden uk-radius-large">
                            <canvas width="400" height="600"></canvas>
                            <img src="images/artwork/26.png" alt="" className="uk-cover uk-position-cover" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="swiper-slide uk-radius-xlarge">
            <div>
                <div className="uni-artwork uk-card uk-card-2xsmall uk-card-default uk-radius-xlarge uk-overflow-hidden dark:uk-background-white-15">
                    <div className="uni-artwork-featured-image uk-panel uk-flex-middle uk-flex-center">
                        <div className="uk-panel uk-overflow-hidden uk-radius-large">
                            <canvas width="400" height="600"></canvas>
                            <img src="images/artwork/27.png" alt="" className="uk-cover uk-position-cover" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="swiper-slide uk-radius-xlarge">
            <div>
                <div className="uni-artwork uk-card uk-card-2xsmall uk-card-default uk-radius-xlarge uk-overflow-hidden dark:uk-background-white-15">
                    <div className="uni-artwork-featured-image uk-panel uk-flex-middle uk-flex-center">
                        <div className="uk-panel uk-overflow-hidden uk-radius-large">
                            <canvas width="400" height="600"></canvas>
                            <img src="images/artwork/28.png" alt="" className="uk-cover uk-position-cover" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="swiper-slide uk-radius-xlarge">
        <div>
            <div className="uni-artwork uk-card uk-card-2xsmall uk-card-default uk-radius-xlarge uk-overflow-hidden dark:uk-background-white-15">
                <div className="uni-artwork-featured-image uk-panel uk-flex-middle uk-flex-center">
                    <div className="uk-panel uk-overflow-hidden uk-radius-large">
                        <canvas width="400" height="600"></canvas>
                        <img src="images/artwork/29.png" alt="" className="uk-cover uk-position-cover" loading="lazy" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </SwiperSlide>
    

  
    <div className="swiper-pagination swiper-dotnav"></div>
</Swiper>
    )
}
export default BannerThreeSlider;
