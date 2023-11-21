import React from "react";
import slide1 from '../common/images/SlideCard/slide-1.png'
import slide2 from '../common/images/SlideCard/slide-2.png'
import slide3 from '../common/images/SlideCard/slide-3.png'
import slide4 from '../common/images/SlideCard/slide-4.png'
const SliderData = () => {
const data = [
{
    id: 1,
    title: "50% Off For Your First Shopping",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
    cover: slide1,
},
{
    id: 2,
    title: "50% Off For Your First Shopping",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
    cover: slide2,
},
{
    id: 3,
    title: "50% Off For Your First Shopping",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
    cover: slide3,
},
{
    id: 4,
    title: "50% Off For Your First Shopping",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
    cover: slide4,
},
];
return data;
};

export default SliderData;
