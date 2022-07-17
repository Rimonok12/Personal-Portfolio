import React from 'react'
import './Testimonials.css'
// import {Swiper, SwiperSlide } from 'swiper/react'
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'
import { Pagination } from 'swiper';

// import {Pagination} from 'swiper';
// import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'


const Testimonials = () => {

    const clients=[
       {
        img: profilePic1, 
        review: "Lorem ipsum dolor sit amet,consectetur adipiscing"
       } ,
       {
        img: profilePic2, 
        review: "Lorem ipsum dolor sit amet,consectetur adipiscing"
       } ,
       {
        img: profilePic3, 
        review: "Lorem ipsum dolor sit amet,consectetur adipiscing"
       } ,
       {
        img: profilePic4, 
        review: "Lorem ipsum dolor sit amet,consectetur adipiscing"
       } 
    ]



  return (
    <div className="t-wrapper" id="Testimonials" >
        <div className="t-heading">
            <span>Client always get</span>
            <span> Exceptional Work </span>
            <span>from me...</span>
                <div className="blur t-blur1" 
                style={{background:"var(--purple)"}}>
                </div>
                <div className="blur t-blur2" 
                style={{background:"skyblue"}}>
                </div>
        </div>
    {/* swiper part */}
    <Swiper modules={[Pagination]}
    slidesPerView={1} 
    pagination={{clickable:true}}>


    {clients.map((client,index) => {
        return(
            <SwiperSlide key={index}>
            <div className="testimonials">
                <img src={client.img} alt="" />
                <br/>
                <span>{client.review}</span>
            </div>
            </SwiperSlide>
        )
    })}
    </Swiper>
    </div>
  )
}

export default Testimonials