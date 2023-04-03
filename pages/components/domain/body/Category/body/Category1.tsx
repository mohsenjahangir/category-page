import CategoryIcon from "../../../../../../public/svg/categoryIcon.svg";
import ProductCategoryIcon from "../../../../../../public/svg/productCetegoryIcon.svg";
import ProductCategoryIcon1 from "../../../../../../public/svg/productCategoryIconn.svg";
import MacIcon from "../../../../../../public/svg/macIcon.svg";
import MacProPho from "../../../../../../public/photos/macpro.png";
import AirMacPho from "../../../../../../public/photos/macair.png";
import MacI from "../../../../../../public/photos/maci.png";
import Image from "next/image";
const Category1 = () => {
  const textLink = "صفحه اصلی > محصولات مک > مک";
  const box: {
    label1: any;
    title: string;
    label2: any;
    image: any;
    price: any;
    discount: any;
  }[] = [
    {
      title: "آی مک",
      label1: "%40تخفیف",
      label2: "تحویل7روزه",
      image: MacI,
      price: " 2/420/000",
      discount: "1/400/000",
    },
    {
      title: "مک بوک پرو",
      label1: "%40تخفیف",
      label2: "تحویل7روزه",
      image: MacProPho,
      price: " 2/420/000",
      discount: "1/400/000",
    },
    {
      title: "ایر مک",
      label1: "%40تخفیف",
      label2: "تحویل7روزه",
      image: AirMacPho,
      price: " 2/420/000",
      discount: "1/400/000",
    },
  ];
  return (
    <>
      <div className="">
        <div className=" flex justify-start ">
          <div className="">
            <CategoryIcon />
          </div>
          <div className=" mr-6  divide-x-2  divide-slate-200 ">
            <div></div>
            <div>
              <br />
              <br />
            </div>
          </div>
          <div className=" mr-3">
            <h1 className=" font-black">محصولات مک</h1>
            <h2 className=" text-blue-400"> {textLink}</h2>
          </div>
        </div>
        <div className=" flex justify-end -mt-10">
          <div className=" flex justify-end gap-7 ">
            <div className=" bg-white w-11 h-11  pr-2 pt-2 rounded-lg mt-2 ">
              <ProductCategoryIcon />
            </div>
            <div className=" bg-slate-700 w-11 h-11 pr-2 pt-2 rounded-lg mt-2">
              <ProductCategoryIcon1 />
            </div>
            <div className="h-20">
              <h1 className=" absolute mt-5 mr-5 font-thin">بر اساس :</h1>
              <select className=" bg-white rounded-2xl w-80 h-16 pr-20">
                <option value="US">جدیدترین</option>
                <option value="CA">پرفروش ترین</option>
                <option value="FR">بیشترین بازدید</option>
                <option value="DE">کمترین قیمت</option>
                <option value="DE">بالاترین قیمت</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=" flex justify-start  gap-8">
          <div className=" border-2 active:bg-blue-700  h-12 w-20 text-center rounded-lg  pt-1 hover:bg-blue-100 ">
            همه
          </div>
          <div className=" border-2 active:bg-blue-700  h-12 w-20 text-center rounded-lg  pt-1 hover:bg-blue-100 ">
            رنگ
          </div>
          <div className=" border-2 active:bg-blue-700  h-12 w-20 text-center rounded-lg  pt-1 hover:bg-blue-100 ">
            ظرفیت
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-2 mt-2 mr-1 gap-4">
        {box.map((item) => (
          <div className=" bg-white rounded-lg mb-9">
            <div className=" flex justify-between">
              <div className=" flex justify-start mt-4 mr-4">
                <h1>
                  <MacIcon />
                </h1>
                <h1 className=" font-black mr-2">مک بوک پرو</h1>
              </div>
              <div className=" flex justify-end ml-4 mt-4 gap-2">
                <h1 className=" bg-red-500 w-24 pr-3 rounded-lg">
                  {item.label1}
                </h1>
                <h1 className="bg-purple-500 truncate w-24 pr-3 rounded-lg">
                  {item.label2}
                </h1>
              </div>
            </div>
            <div className=" flex justify-center">
              <Image src={item.image} alt="" />
            </div>
            <div>
              <h1 className=" font-black mt-5 mr-4">انتخاب هارد</h1>
              <div className=" grid grid-cols-3 mr-5 mt-3">
                <div className=" border-2 w-44 flex justify-center h-12 pt-2 rounded-lg hover:text-blue-300 hover:border-blue-300 active:text-blue-500 active:border-blue-500">
                  گیگابایت256
                </div>
                <div className=" border-2 w-44 flex justify-center h-12 pt-2 rounded-lg hover:text-blue-300 hover:border-blue-300 active:text-blue-500 active:border-blue-500">
                  گیگابایت512
                </div>
                <div className=" border-2 w-44 flex justify-center h-12 pt-2 rounded-lg hover:text-blue-300 hover:border-blue-300 active:text-blue-500 active:border-blue-500">
                  1ترابایت
                </div>
              </div>
            </div>
            <div>
              <h1 className=" font-black mt-5 mr-4">انتخاب مموری</h1>
              <div className=" grid grid-cols-4 mr-5 mt-3">
                <div className=" border-2 w-44 flex justify-center h-12 pt-2 rounded-lg hover:text-blue-300 hover:border-blue-300 active:text-blue-500 active:border-blue-500">
                  گیگابایت256
                </div>
                <div className=" border-2 w-44 flex justify-center h-12 pt-2 rounded-lg hover:text-blue-300 hover:border-blue-300 active:text-blue-500 active:border-blue-500">
                  گیگابایت512
                </div>
                <div className=" border-2 w-44 flex justify-center h-12 pt-2 rounded-lg hover:text-blue-300 hover:border-blue-300 active:text-blue-500 active:border-blue-500">
                  1ترابایت
                </div>
                <div className=" border-2 w-44 flex justify-center h-12 pt-2 rounded-lg hover:text-blue-300 hover:border-blue-300 active:text-blue-500 active:border-blue-500">
                  2ترابایت
                </div>
              </div>
            </div>
            <div>
              <h1 className=" font-black mt-5 mr-4">انتخاب سایز</h1>
              <div className=" grid grid-cols-2 mr-5 ml-5 gap-3 mt-3">
                <div className=" border-2 flex justify-center rounded-lg h-12 pt-2 hover:text-blue-300 hover:border-blue-300 active:text-blue-500 active:border-blue-500">
                  14
                </div>
                <div className=" border-2 flex justify-center rounded-lg h-12 pt-2 hover:text-blue-300 hover:border-blue-300 active:text-blue-500 active:border-blue-500">
                  14
                </div>
              </div>
              <div>
                <h1 className=" font-black mt-5 mr-4">انتخاب رنگ</h1>
                <div className=" grid grid-cols-8 mt-3" radioGroup="">
                  <div>1</div>
                  <div>1</div>
                  <div>1</div>
                  <div>
                    <label>
                      <input type="checkbox"/>
                      dffd
                    </label>
                  </div>
                </div>
              </div>
              <hr />
              <div className="grid grid-cols-4 mt-10 mb-7 mr-4 ml-4">
                <div className=" col-span-1">
                  <h3 className=" line-through text-slate-400">
                    {item.discount}
                  </h3>
                  <h1 className=" font-black">{item.price} تومان</h1>
                </div>
                <div className=" col-span-3 flex justify-center bg-blue-500 pt-2 rounded-xl">
                  افزودن به سبد خرید
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Category1;
