import flash1 from "../../common/images/flash/flash-1.png";
import flash2 from "../../common/images/flash/flash-2.png";
import flash3 from "../../common/images/flash/flash-3.png";
import flash4 from "../../common/images/flash/flash-4.png";
import flash5 from "../../common/images/flash/flash-5.png";
import flash6 from "../../common/images/flash/flash-1.png";
const FlashData = () => {
  const data = {
    productItems: [
      {
        id: 1,
        discount: 50,
        cover: flash1,
        name: "Shoes",
        price: 100,
      },
      {
        id: 2,
        discount: 40,
        cover: flash2,
        name: "Watch",
        price: 20,
      },
      {
        id: 3,
        discount: 40,
        cover: flash3,
        name: "Smart Mobile Black",
        price: 200,
      },
      {
        id: 4,
        discount: 40,
        cover: flash4,
        name: "Smart Watch Black",
        price: 50,
      },
      {
        id: 5,
        discount: 50,
        cover: flash5,
        name: "Shoes",
        price: 100,
      },
      {
        id: 6,
        discount: 50,
        cover: flash6,
        name: "Shoes",
        price: 100,
      },
    ],
  };

  return data;
};

export default FlashData;
