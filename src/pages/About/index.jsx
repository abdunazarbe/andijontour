

import "./style.scss"
import Xonabod from "../../assets/images/xonabod sihatgohi.jpg"
const index = () => {
    return (
        <section className="mt-[160px]">
            <div className="container">
                <div className="xonabod items-center flex gap-x-5">
                    <img src={Xonabod} alt="xonaobodsihatgohi" />
                    <div className="titles">

                        <h1 className="text-[#0154A7] font-['MontserratSemiBold'] text-[24px]  md:mb-[15px] ">
                            «Xonobod» sihatgohi - salomatligingiz garovi
                        </h1>

                        <p className="text-[#4682bb] font-['MontserratSemiBold'] text-[14px]  md:mb-[15px]">Bugungi kunda O‘zbekistonda salomatlikni tiklash va dam olish uchun eng yaxshi maskanlardan biri hisoblangan Xonobod sihatgohi barchani o‘z xizmatlaridan foydalanishga chorlaydi.
                            
                            Xonobod – vodiyning go‘zal tabiatli, musaffo havoli, ekoturizm uchun qulay hududi. Bu yerda Siz hordiq chiqarish bilan birga betakror tabiat manzaralaridan zavq olasiz. Sihatgohda mijozlarga yuqori sifatli xizmat ko‘rsatish uchun barcha qulayliklar mavjud. Keng va yorug‘ xonalar eng so‘nggi zamonaviy tibbiyot uskunalari bilan ta'minlangan.
                            “Xonobod”da Siz vodiyning eng malakali shifokorlari nazorati ostida bo‘lasiz. Shu bilan birga, jahon standartlariga muvofiq fizioterapiya xonalarida kerakli davolanish muolajalarini olasiz.

                            Sihatgohda quyidagi xizmat turlari taqdim etiladi:

                            Sog‘lomlashtiruvchi jismoniy tarbiya – bu maxsus jismoniy mashqlarni qo‘llash asosida davolash, profilaktika va tibbiy reabilitatsiya usullari to‘plami.

                            Suzish havzasi alohida sog‘lomlashtirish-sport xizmatlarini taklif etish va ommaviy sport tadbirlarini o‘tkazish uchun barcha shart sharoitlarga ega. Suzish bir olam ijobiy kayfiyat bag‘ishlash bilan birga mushaklarni mustahkamlaydi, immunitetni oshiradi.

                            Fizioterapiya muolajalari – tibbiyotning eng qadimgi davolash va profilaktika yo‘nalishlaridan biri. Fizioterapiya og‘riqni kamaytirish, shish va yallig‘lanishni bartaraf etish uchun mo‘ljallangan samarali davolash usuli hisoblanadi. </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default index;