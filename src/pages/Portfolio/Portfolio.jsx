import React, { useState , useEffect} from "react"
import { Heading } from "../../Common/Heading"

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import './portfolio.scss'

const allCategory = ["Fur Babies", "Portraits"];
export const Portfolio = () => {

    const [list, setLists] = useState([]);
    const [category, setCategory] = useState(allCategory);
    const [imageDict, setImageDict] = useState({});

    const filterItems = (selectedCategory) => {
      const newItems = selectedCategory === "all" ? [] : imageDict[selectedCategory];
      setLists(newItems || []);
    };

    useEffect(() => {
    // Fetch data or images here (e.g., from an API or static data)

    // Example:
    const fetchedData = [
        { cover: "/img/portfolio/pets/1.jpg", category: "Fur Babies", title: "Title 1", name: "Name 1" },
        { cover: "/img/portfolio/pets/2.jpg", category: "Fur Babies", title: "Title 1", name: "Name 1" },
        { cover: "/img/portfolio/pets/3.jpg", category: "Fur Babies", title: "Title 1", name: "Name 1" },
        { cover: "/img/portfolio/pets/4.jpg", category: "Fur Babies", title: "Title 1", name: "Name 1" },
        { cover: "/img/portfolio/pets/5.jpg", category: "Fur Babies", title: "Title 1", name: "Name 1" },
        { cover: "/img/portfolio/pets/6.jpg", category: "Fur Babies", title: "Title 1", name: "Name 1" },
        { cover: "/img/portfolio/pets/7.jpg", category: "Fur Babies", title: "Title 1", name: "Name 1" },
        { cover: "/img/portfolio/portraits/1.jpg", category: "Portraits", title: "Title 2", name: "Name 2" },
        { cover: "/img/portfolio/portraits/2.jpg", category: "Portraits", title: "Title 2", name: "Name 2" },
        { cover: "/img/portfolio/portraits/3.jpg", category: "Portraits", title: "Title 2", name: "Name 2" },
        { cover: "/img/portfolio/portraits/4.jpg", category: "Portraits", title: "Title 2", name: "Name 2" },
        { cover: "/img/portfolio/portraits/5.jpg", category: "Portraits", title: "Title 2", name: "Name 2" },
        { cover: "/img/portfolio/portraits/6.jpg", category: "Portraits", title: "Title 2", name: "Name 2" },
        { cover: "/img/portfolio/portraits/7.jpg", category: "Portraits", title: "Title 2", name: "Name 2" },
        // Add more data as needed
    ];
    const dict = {};
    fetchedData.forEach((item) => {
        if (!dict[item.category]) {
        dict[item.category] = [];
        }
        dict[item.category].push(item);
    });

    setImageDict(dict);
    filterItems("Fur Babies");
    }, []);



  return (
        <div className='Pcontainer'>
          <Heading title='Portfolio' />
          <div className='catButton'>
            {category.map((category) => (
              <button className='PprimaryBtn' onClick={() => filterItems(category)} data-aos='zoom-out-down'>
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
        </div>
  )
}

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