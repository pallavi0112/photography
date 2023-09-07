import React from 'react'
import './Category.css'
import img1 from '../../Images/Header/img14.jpg'
import anniversary from '../../Images/weddinganniversary.jpeg'
import birthdayimg from '../../Images/birthdayimg.jpg'
import maternity from '../../Images/maternity.jpg'
import engagement from '../../Images/engagement.jpg'
import prewed from '../../Images/prewed.jpg'
import { Link } from 'react-router-dom'
import {AiOutlineDoubleRight} from 'react-icons/ai'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
const Category = () => {
    const data = [
        {
            title: "Engagement",
            path: "/engagement",
            img: engagement
        },
        {
            title: "Pre wedding",
            path: "/pre-wedding",
            img: prewed
        },
        {
            title: "Wedding",
            path: "/wedding",
            img: img1
        },
        {
            title: "Maternity",
            path: "/maternity",
            img: maternity
        },
        {
            title: "Birthday",
            path: "/birthday",
            img: birthdayimg
        },
        {
            title: "Anniversary",
            path: "/anniversary",
            img: anniversary
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
                        delay: 4000,
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