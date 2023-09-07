import React from 'react'
import './gallery.css'
import Masonry from "react-responsive-masonry"
import img1 from '../../Images/Header/img9.jpg'
import img2 from '../../Images/Header/img10.jpg'
import img3 from '../../Images/Header/img11.jpg'
import img4 from '../../Images/Header/img2.jpg'
import { ResponsiveMasonry } from 'react-responsive-masonry'
const PhotoGallery = () => {
    const columnsCountBreakPoints = { 300: 1, 350: 2, 750: 3, 900: 3, 1100: 4 }
    const images = [img1, img2, img4, img3, img1, img2, img3, img1, img4, img2, img3, img4];
    return (
        <section className='gallery-section'>
           <div>

            <span className='section-header'>
                Portfolio
            </span>
            <p className='section-header-content'>
                Step into our captivating world of visual storytelling through our diverse
                and mesmerizing portfolio. Each photograph is an artful blend of passion,
                creativity, and mastery, capturing the essence of every moment.
                From enchanting landscapes to candid emotions, our collection showcases
                the beauty of life and the art of photography. Explore our portfolio and embark
                on a journey of wonder and inspiration. Let our images speak volumes and
                weave unforgettable tales of love, joy, and adventure.
            </p>
           </div>
            <div>
                <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
                    <Masonry gutter={4}>
                        {images.map((image) => (
                            <img src={image} alt='gallery'/>
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </section>
    )
}

export default PhotoGallery