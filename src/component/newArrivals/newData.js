import arr1 from '../../common/images/arrivals/arrivals1.png'
import arr2 from '../../common/images/arrivals/arrivals2.png'
import arr3 from '../../common/images/arrivals/arrivals3.png'
import arr4 from '../../common/images/arrivals/arrivals4.png'
import arr5 from '../../common/images/arrivals/arrivals5.png'
import arr6 from '../../common/images/arrivals/arrivals6.png'
const NewData = () => {
    const data = [
        {
            cover: arr1,
            name: "Sunglass",
            price: "150",
        },
        {
            cover: arr2,
            name: "Makeup",
            price: "250",
        },
        {
            cover: arr3,
            name: "Smart Watch",
            price: "50",
        },
        {
            cover: arr4,
            name: "Lipstick",
            price: "15",
        },
        {
            cover: arr5,
            name: "Green Plant",
            price: "10",
        },
        {
            cover: arr6,
            name: "Bonsai tree",
            price: "400",
        },
    ]
    return data;
}

export default NewData