import cat1 from '../../common/images/top/category-1.png'
import cat2 from '../../common/images/top/category-2.png'
import cat3 from '../../common/images/top/category-2.png'
const TopData = () => {
    const data = [
        {
            cover: cat1,
            para: "headphone",
            desc: "3k orders this week",
        },
        {
            cover: cat2,
            para: "watch",
            desc: "4k orders this week",
        },
        {
            cover: cat3,
            para: "sunglass",
            desc: "6k orders this week",
        },
        {
            cover: cat2,
            para: "watch",
            desc: "4k orders this week",
        },
        {
            cover: cat1,
            para: "sunglass",
            desc: "6k orders this week",
        },
    ]
    return data;

}

export default TopData