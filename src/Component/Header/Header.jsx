import React, {useEffect } from 'react';
import './Header.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFade, Pagination,  Autoplay } from 'swiper/modules';
import AOS from 'aos';
import "aos/dist/aos.css";
import img1 from '../../Images/Header/img1.jpg'
import img3 from '../../Images/Header/img3.jpg'
import img4 from '../../Images/Header/img4.jpg'
import img5 from '../../Images/Header/img5.jpg'
import img6 from '../../Images/Header/img6.jpg'
import img7 from '../../Images/Header/img7.jpg'
import img8 from '../../Images/Header/img8.jpg'
import img9 from '../../Images/Header/img9.jpg'
import img10 from '../../Images/Header/img10.jpg'
import img12 from '../../Images/Header/img12.jpg'
import img13 from '../../Images/Header/img13.jpg'


const Header = () => {
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
    return (
        <>
            <div className='header-container-wrapper'>
                <Swiper
                    direction={'vertical'}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    effect={'fade'}
                    // navigation={true}
                    modules={[Pagination, EffectFade , Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='header-imgBx'>
                            <img src={img1} alt='Header_image_1'  style={{ objectPosition: "48% 29%" }}  />
                            <div className='absolute-fill'></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='header-imgBx'>
                            <img src={img3} alt='Header_image_3' style={{ objectPosition: "48% 29%" }}  />
                            <div className='absolute-fill'></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='header-imgBx' >
                            <img src={img4} alt='Header_image_4' style={{ objectPosition: "48% 29%" }} />
                            <div className='absolute-fill'></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='header-imgBx' >
                            <img src={img5} alt='Header_image_5' />
                            <div className='absolute-fill'></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='header-imgBx' >
                            <img src={img6} alt='Header_image_6' />
                            <div className='absolute-fill'></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='header-imgBx' >
                            <img src={img7} alt='Header_image_7' />
                            <div className='absolute-fill'></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='header-imgBx' >
                            <img src={img8} alt='Header_image_8' />
                            <div className='absolute-fill'></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='header-imgBx' >
                            <img src={img9} alt='Header_image_9' />
                            <div className='absolute-fill'></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='header-imgBx' >
                            <img src={img10} alt='Header_image_10' />
                            <div className='absolute-fill'></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='header-imgBx' >
                            <img src={img12} alt='Header_image_10' style={{ objectPosition: "center bottom" }}/>
                            <div className='absolute-fill'></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='header-imgBx' >
                            <img src={img13} alt='Header_image_10'  style={{ objectPosition: "center bottom" }} />
                            <div className='absolute-fill'></div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className='header-content'>
                     <span>LOVE TO PHOTOGRAPHY</span>
                     <p>Photography isn't just about freezing time; it's about creating memories that live on forever.</p>
                </div>
            </div>
        </>
    );
}

export default Header;