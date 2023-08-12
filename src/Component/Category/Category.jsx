import React from 'react'
import './Category.css'
import CategoryItem from './CategoryItem'
import img1 from '../../Images/Header/img14.jpg'
import { Link } from 'react-router-dom'
import {AiOutlineDoubleRight} from 'react-icons/ai'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFade, Pagination, Navigation, Autoplay } from 'swiper/modules';
const Category = () => {
    const data = [
        {
            title: "Engagement",
            path: "/engagement",
            img: img1
        },
        {
            title: "Pre wedding",
            path: "/pre-wedding",
            img: img1
        },
        {
            title: "Wedding",
            path: "/wedding",
            img: img1
        },
        {
            title: "Maternity",
            path: "/maternity",
            img: img1
        },
        {
            title: "Birthday",
            path: "/birthday",
            img: img1
        },
        {
            title: "Anniversary",
            path: "/anniversary",
            img: img1
        }
    ]

    return (
        <section className='category-section'>
            <div className='category-wrapper'>
                <div>
                <span className='section-header'>Our Services</span>
                <p className='section-header-content'>From the sparkle of an engagement to the cherished memories of anniversaries,
                    we're here to capture life's most precious moments. Let us tell your unique
                    love story through our expert photography services, ensuring every smile,
                    tear, and laughter is frozen in time. </p>
                </div>
                <div className='swiper-container'>
                    <Swiper
                        slidesPerView={'auto'}
                        centeredSlides={true}
                        spaceBetween={0}
                        autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                            clickable: true,
                        }}
                        // navigation={true}
                        modules={[Pagination , Navigation , Autoplay]}
                        className="mySwiper"
                    >
                        {data.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div className='slide-container'>
                                    <img src={image.img} alt={`Slide ${index + 1}`} />
                                    <div>
                                        <span>{image.title}</span>
                                        <button>

                                            <Link to={image.path}>view More <AiOutlineDoubleRight /></Link>
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>


                </div>



            </div>
        </section>
    )
}

export default Category