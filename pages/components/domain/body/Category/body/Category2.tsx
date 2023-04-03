import React from "react";
import AllDeviceIcon from "../../../../../../public/svg/allDevicesIcon.svg";
import IpadAirIcon from "../../../../../../public/svg/ipadAirIcon.svg";
import IpadIcon from "../../../../../../public/svg/ipadIcon.svg";
import IpadMini from "../../../../../../public/svg/ipadMiniIcon.svg";
import NewKeyboardIcon from "../../../../../../public/svg/newKeyboardIcon.svg";
import ApplepencilIcon from "../../../../../../public/svg/applepencilIcon.svg";
import SubDevicesIcon from "../../../../../../public/svg/subDevicesIcon.svg";
import AppleWatchPho from "../../../../../../public/photos/appleWatch.png";
import FramePho from "../../../../../../public/photos/frame1.png";
import Image from "next/image";
import HeartIcon from "../../../../../../public/svg/heartIcon.svg";

const Category2 = () => {
  const Items: {
    id: number;
    icon: any;
    title: string;
  }[] = [
    {
      id: 1,
      icon: AllDeviceIcon,
      title: "همه دستگاه ها",
    },
    {
      id: 2,
      icon: IpadAirIcon,
      title: "آی پد ایر",
    },
    {
      id: 3,
      icon: IpadIcon,
      title: "آی پد",
    },
    {
      id: 4,
      icon: IpadMini,
      title: "آی پد مینی",
    },
    {
      id: 5,
      icon: NewKeyboardIcon,
      title: "کیبورد جدید",
    },
    {
      id: 6,
      icon: ApplepencilIcon,
      title: "Apple Pencil",
    },
    {
      id: 7,
      icon: SubDevicesIcon,
      title: "لوازم جانبی",
    },
  ];
  const products: {
    text: string;
    photo: any;
    price: string;
    discount: string;
    label: string;
  }[] = [
    {
      text: "قاب چرمی آیفون 12 پرومکس",
      photo: AppleWatchPho,
      price: "1/234/00",
      discount: "456/000",
      label: "خرید نقدی",
    },
    {
      text: "قاب چرمی آیفون 12 پرومکس",
      photo: FramePho,
      price: "1/234/00",
      discount: "456/000",
      label: "جدیدترین",
    },
    {
      text: "قاب چرمی آیفون 12 پرومکس",
      photo: AppleWatchPho,
      price: "1/234/00",
      discount: "456/000",
      label: "خرید نقدی",
    },
    {
      text: "قاب چرمی آیفون 12 پرومکس",
      photo: FramePho,
      price: "1/234/00",
      discount: "456/000",
      label: "جدیدترین",
    },
  ];
  return (
    <>
      <div className="  pt-4 bg-slate-100 rounded-3xl mr-28 mt-5 w-1700 ">
        <div className=" flex justify-center gap-24">
          {Items.map((item) => (
            <div key={item.id} className=" bg-slate-100 h-24">
              <div className=" flex justify-center">
                <item.icon />
              </div>
              <h3>{item.title}</h3>
            </div>
          ))}
          <div className=" text-blue-500 font-black flex mt-9">
            مشاهده ی همه...
          </div>
        </div>
        <div className=" mr-6 grid grid-cols-4 gap-4 ml-6 mb-10 ">
          {products.map((item) => (
            <div className=" border-4  rounded-lg">
              <div className=" flex justify-between">
                <h1 className=" mt-2 mr-2 bg-purple-500 h-8 w-24 pr-4 rounded-lg">
                  {item.label}
                </h1>
                <h1 className=" mt-10 h-48">
                  <Image src={item.photo} alt="" />
                </h1>
                <h1 className="mt-2 ml-2">
                  <HeartIcon />
                </h1>
              </div>
              <text className="font-black  flex mt-10 mr-2">{item.text}</text>
              <div className=" flex mt-4 mr-2 gap-5">
                <h1>color1</h1>
                <h1>color2</h1>
                <h1>color3</h1>
                <h1>color4</h1>
                
              </div>
              <div className=" flex justify-end mt-4 ml-2 mb-4">
                <h1 className=" ml-3 font-thin">{item.discount}</h1>
                <h1 className=" font-black">{item.price} تومان</h1>
              </div>
              <hr />
              <div className=" flex justify-center mt-2 mb-2 mx-2">
                <button className=" bg-blue-500 w-full rounded-lg h-12">
                  افزودن به سبد خرید
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-4 bg-slate-100 rounded-3xl mr-28  pr-6 pl-6 mt-5 w-1700">
        <h1 className=" font-black mb-4">معرفی محصولات مک</h1>
        <hr/>
        <p className=" mt-2 font-thin mb-10">
          آیفون ۱ با صفحه نمایش جذاب ۲۴ اینجی ۴.۵ k خود و با وضوح ۴۴۸۰ در ۲۵۲
          پیکسل و روشنایی ۵۰۰ نیت بازه رنگی p3 بیش از یک میلیارد رنگ زنده را در
          صفحه نمایش خود به نمایش میگذارد آی مک ۲۰۲۱ با پوشش ضد انعکاس خود راحتی
          و خوانایی بیش تری را ارائه می دهد. نکته قابل توجه در آی مک ۲۰۲۱ مجهز
          بودن آی مک ۲۰۲۱ به فناوری True Tone است که به طور خودکار دمای رنگ صفحه
          نمایش ای مک ۲۰۲۱ را با نور محیط تنظیم خواهد کرد تا استفاده کنندگان آی
          مک ۲۰۲۱ تجربه بسیار طبیعی تری را از مشاهده صفحع نمایش آی مک ۲۰۲۱ داشته
          باشند و این قابلیت یکی از هزارن جذابیت ای مک ۲۰۲۱ است که باعث شده همه
          چیز در آی مک ۲۰۲۱ باور نکردنی به نظر برسد آی مک ۲۰۲۱ طیف رنگی گسترده
          ای را داراست که در نسل های قبلی شاهد این موضوع نبودیم آی مک ۲۰۲۱ در
          هفت آبی -سبز-صورتی-نقره ایی- زرد-نارنجی و بنفش ارائه خواهد شد علاوه بر
          رنگ های جذاب و متنوع آی مک ۲۰۲۱ ۲۴ اینچی اپل صفحه کلید(کیبورد) ماوس و
          صفحه لمسی رنگی متناسب با رنگ آی مک ۲۰۲۱ را نیز ارائه کرده است که علاقه
          مندان ای مک ۲۰۲۱ میتوانند از لوازم جانبی هم رنگ آی مک ۲۰۲۱ خود بهره
          مند شوند کیبورد جدید آی مک ۲۰۲۱به تاچ آیدی مجهز شده است که ورود به آی
          مک ۲۰۲۱ را راحت تر و امنیت ای مک ۲۰۲۱ را نیز تا حد بالایی بالاتر برده
          است در توسعه آی مک ۲۰۲۱ از تراشه M1 اپل استفاده شده است و همانطور که
          میدانید نسل های قبلی آی مک هیچکدام دارای تراشه M1 نبوده اند و استفاده
          هوشمندانه تراشه پرقدرت M1 در آی مک ۲۰۲۱ این محصول را به سریعترین
          پردازنده تبدیل کرده است اپل با ترکیب ابر تراشه M1 با Mac OS Big Sur
          پیشرفته ترین سیستم عامل دسک تاپ در جهان آی مک ۲۰۲۱ را به سطح بالایی از
          عملکرد پردازنده و کارایی و امنیت رسانده است ایت ترکیب در ای مک ۲۰۲۱،۸
          ۵ درصد عملکرد پردازنده را سریعتر از نسل های قبلی ای مک کرده است و این
          بدان معناست که در ای مک ۲۰۲۱ می توان از برنامه هایی مانند Affinity
          photo,X c ode برای جمع آوری کدها و ویرایش عکس ها در کمترین زمان ممکن
          استفاده کرد ای مک ۲۰۲۱ با داشتن پردازنده M1 و با این حجم زیاد از کار
          همچنان خنک و بی صداست آی مک ۲۰۲۱ با ضخامت ۱۱/۵ میلی متری خود اکنون
          نازک ترین ضخامت را در بین ایمک ها داراست و این موضوع برای استفاده
          کنندگان آی مک ۲۰۲۱ بسیار جذاب خواهد بود سیستم صدایی آی مک ۲۰۲۱ دارای ۶
          اسپیکر دالبی و سه میکروفون استودیویی است که صوتی باورنکردنی در اختیار
          تان میگذارد که با توجه به صفحه نمایش ۴.۵k رتینای آی مک ۲۰۲۱ قطعا
          بهترین در دنیا است آی مک ۲۰۲۱ بهترین و پرقدرت ترین سیستم صوتی را در
          دست دارد که از فرمان هی سیری هم پشتیبانی میکند و نتیجه اینکه سیستم
          صوتی گسترده و دقیق آی مک ۲۰۲۱ به شما امکان مشاهده موسیقی و فیلم و ...
          را با سطح بسیار بالایی از صدا را خواهد داد آی مک ۲۰۲۱ همه چیز تمام است
          دوربین 1080 p Face Time HD با پردازنده تصویر M1 بهترین سیستم دوربین در
          آی مک است آی مک ۲۰۲۱ با ۳ سنسور که نور بیشتری را ضبط میکند و پردازنده
          M1 کیفیت تصویر فوق العاده ای را در ای مک ۲۰۲۱ نمایش میگذارد ای مک ۲۰۲۱
          با استفاده از تکنولوژی ISP در M1 مجموعه ای از مراحل را برای تجزیه و
          تحلیل و تقویت هر پیکسل با بیش از یک تریلیون عملیات در ثانیه و الگوریتم
          های پیشرفته و کاهش سرو صدا سطح جدیدی از وضوح را به ارمغان می آورد آی
          مک ۲۰۲۱دارای دو درگاه تاندربولت با پشتیبانی Display port-Thunderbolt
          3-USB C می باشد همچنین ای مک ۲۰۲۱دارای دو درگاه USB C با سرعت ۱۰Gb/s و
          اترنت روی شارژ می باشد ای مک ۲۰۲۱ با قیمت (۱،۲۹۹) دلار و در هفت رنگ
          جذاب و خیره کننده و با ضخامت ۱۱/۵ میلیمتر روانه بازار خواهد شد و پیش
          فروش ای مک ۲۰۲۱ از ۳۰ آپریل آغاز میگردد
        </p>
      </div>
    </>
  );
};

export default Category2;
