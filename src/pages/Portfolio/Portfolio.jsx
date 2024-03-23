import React, { useState , useEffect} from "react"
import { Heading } from "../../Common/Heading"
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./portfolio.scss"

const allCategory = ["Family & Lifestyle", "Pets", "Events"]
export const Portfolio = () => {
  const [list, setLists] = useState([])
  const [category, setCategory] = useState(allCategory)
  const [imageDict, setImageDict] = useState({})
  const [bottomText, setbottomText] = useState("")

  const variants = {
    initial: {
      x: -500,
      y: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  const bottomTextDetails = {
    "Family & Lifestyle" : "Moments with your family are too precious to memory alone. Capture those frames to fondly look back and relive them with your loved ones.",
    "Pets" : "Immortalize the moments with your furry friends in their comfort zone, be it your homr, a route you walk or your local park. No need for sits and stays, let them run around and play with their toys, while we capture their candid shots into long lasting frames.",
    "Events" : "I help events",
  }

  const filterItems = (selectedCategory) => {
    const newItems =
      selectedCategory === "all" ? imageDict["Pets"] : imageDict[selectedCategory]
    const selectedBottomText = selectedCategory == "all" ? "" : bottomTextDetails[selectedCategory]
    setbottomText(selectedBottomText)
    setLists(newItems || [])
  }

  useEffect(() => {
    const fetchedData = [
      {
        cover: "/img/portfolio/pets/1.jpg",
        category: "Pets",
        title: "Title 1",
        name: "Name 1",
      },
      {
        cover: "/img/portfolio/pets/2.jpg",
        category: "Pets",
        title: "Title 1",
        name: "Name 1",
      },
      {
        cover: "/img/portfolio/pets/3.jpg",
        category: "Pets",
        title: "Title 1",
        name: "Name 1",
      },
      {
        cover: "/img/portfolio/pets/4.jpg",
        category: "Family & Lifestyle",
        title: "Title 1",
        name: "Name 1",
      },
      {
        cover: "/img/portfolio/pets/5.jpg",
        category: "Family & Lifestyle",
        title: "Title 1",
        name: "Name 1",
      },
      {
        cover: "/img/portfolio/pets/6.jpg",
        category: "Family & Lifestyle",
        title: "Title 1",
        name: "Name 1",
      },
      {
        cover: "/img/portfolio/pets/7.jpg",
        category: "Family & Lifestyle",
        title: "Title 1",
        name: "Name 1",
      },
      {
        cover: "/img/portfolio/portraits/1.jpg",
        category: "Events",
        title: "Title 2",
        name: "Name 2",
      },
      {
        cover: "/img/portfolio/portraits/2.jpg",
        category: "Events",
        title: "Title 2",
        name: "Name 2",
      },
      {
        cover: "/img/portfolio/portraits/3.jpg",
        category: "Events",
        title: "Title 2",
        name: "Name 2",
      },
      {
        cover: "/img/portfolio/portraits/4.jpg",
        category: "Events",
        title: "Title 2",
        name: "Name 2",
      },
      {
        cover: "/img/portfolio/portraits/5.jpg",
        category: "Events",
        title: "Title 2",
        name: "Name 2",
      },
      {
        cover: "/img/portfolio/portraits/6.jpg",
        category: "Events",
        title: "Title 2",
        name: "Name 2",
      },
      {
        cover: "/img/portfolio/portraits/7.jpg",
        category: "Events",
        title: "Title 2",
        name: "Name 2",
      },
      // Add more data as needed
    ]
    const dict = {}
    fetchedData.forEach((item) => {
      if (!dict[item.category]) {
        dict[item.category] = []
      }
      dict[item.category].push(item)
    })

    setImageDict(dict)
    filterItems("Pets")
  }, [])

  const images = Array.from({ length: 100 }, (_, i) => ({
    src: `https://savyart.s3.amazonaws.com/akshay/image_${i}.jpg`,
    alt: `Image ${i + 1}`,
  }))

  return (
    <div className="Pcontainer">
      <Heading title="Portfolio" />
      <div className="catButton">
        {category.map((category) => (
          <button
            className="PprimaryBtn"
            onClick={() => filterItems(category)}
            data-aos="zoom-out-down"
          >
            {category}
          </button>
        ))}
      </div>
      <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}

            >
                {list.map((item) => (
                    <SwiperSlide>
                      <img src={item.cover} alt="slide_image" />
                    </SwiperSlide>
                ))}
          </Swiper>
          <motion.div className="textContainer" variants={variants}>
            <p>
              {bottomText}
            </p>
            <hr />
        </motion.div> 
      </div>
  )
}
// <Grid
        //   images={images}
        //   mode="auto"
        //   width="100%"
        //   height="100%"
        //   gridLayout={"vertical"}
        //   submit={(images) => {}}
        //>
// pagination={{ el: '.swiper-pagination', clickable: true }}
//                 navigation={{
//                 nextEl: '.swiper-button-next',
//                 prevEl: '.swiper-button-prev',
//                 clickable: true,
//                 }}
//                 modules={[EffectCoverflow, Pagination, Navigation]}
//                 className="swiper_container"

// <div className='content grid3'>
// {list.map((item) => (
//   <div className='box' data-aos='fade-up'>
//     <div className='img'>
//       <img src={item.cover} alt='' />
//     </div>
//     <div className='overlay'>
//       <h3>{item.title}</h3>
//       <span>{item.name}</span>
//       <VisibilityOutlinedIcon />
//     </div>
//   </div>
// ))}
// </div>