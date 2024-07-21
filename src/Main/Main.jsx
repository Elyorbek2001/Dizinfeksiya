import React, { useEffect, useState, useTransition } from 'react';

import axios from 'axios';


import "./Main.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Union from "./icon/Union.png"
import rasm1 from "./rasm/rasm1.png"
import strelka from "./icon/strelka.png"
import dumaloq1 from "./icon/dumaloq1.png"
import dumaloq2 from "./icon/dumaloq2.png"
import dizinfeksia from "./rasm/dizenfeksia.png"
import miyya from "./icon/miya.png"
import yetuk from "./icon/yetuk.png"
import qollar from "./icon/qollar.png"
import bosh from "./icon/boshlangich.png"
import orta from "./icon/orta.png"
import yuqori from "./icon/yuqori.png"
import rasm3 from "./rasm/rasm3.png"
import togri from "./rasm/togri.png"
import kursdan1 from "./icon/kursdan1.png"
import kursdan2 from "./icon/kursdan2.png"
import rasm4 from "./rasm/rasm4.png"
import locatsia from "./icon/locatsia.png"
import strelkaqora from "./icon/strelkaqora.png"
import phone from "./icon/phone.png"
const Main = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const [loading, setLoading] = useState(false);

    const sendMessege = (event) => {
        setLoading(true)
        event.preventDefault();
        const token = "7227974601:AAGNQNwCG8sCgztKf0W1JaqADY7vfBrdQ2w";
        const chat_id = 6563907367;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const name = document.getElementById("name").value
        const number = document.getElementById("number").value

        const messageContent = `ismi:${name}\nnumber:${number}`

        axios({
            url: url,
            method: 'POST',
            data: {
                "chat_id": chat_id,
                "text": messageContent,


            }
        }).then((res) => {
            document.getElementById("myform").reset();
            alert("xabar jonatildi")
        }).catch((error) => {
            console.log("yuborishda hatolik", error);
        }).finally(
            () => {
                setLoading(false)
            }
        )
    }












    // const { t, i18n } = useTransition()

    // const handleChange = (event) => {
    //     const selectedLaungage = event.target.value;
    //     i18n.changeLanguage(selectedLaungage);
    // }


    return (
        <div className='Container'>

            {/*================= header ============= */}

            <div className="header">

                <div className='Union'>
                    <img src={Union} alt="" />
                    <h6>Dizenfeksiya</h6>
                </div>

                <div className='ull'>
                    <ul>
                        <li><a className='aa' href="#service">Service</a></li>
                        <li><a className='aa' href="#about">About</a></li>
                        <li><a className='aa' href="#faq">Faq</a></li>
                        <li><a className='aa' href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className='but'>
                    <button>Kirish</button>
                </div>

            </div>




            {/* <h1>Tilni ozgartirish</h1>
            <select name='Lng' id='Ing' onChange={handleChange} >
                <option value="uz">Uzbek</option>
                <option value="en">English</option>
                <option value="ru">Russian</option>
            </select>
            <p>{t('olma')}</p>
            <p>{t('anor')}</p> */}

            {/*================= text_img ============= */}

            <div className="text_img" data-aos="fade-left">

                <div className="text">

                    <h1>Dizenfeksiya xizmati </h1>
                    <p>Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun</p>
                    <div className='but1'>
                        <div className='but3'>
                            <button>Bog’lanish</button>
                        </div>

                        <div className="strelka">
                            <img src={strelka} alt="" />
                        </div>

                    </div>

                    <div className="doiralar">
                        <img className='dumaloq1' src={dumaloq1} alt="" />
                        <img className='dumaloq2' src={dumaloq2} alt="" />
                        <img className='dizinfeksia' src={dizinfeksia} alt="" />
                    </div>

                </div>

                <div className="imgg">
                    <img src={rasm1} alt="" />

                </div>
            </div>

            {/*================= Avfzalliklar ============= */}

            <div id="about" className="Avfzalliklar" data-aos="fade-left">

                <h1>Avfzalliklarimiz</h1>
                <hr />

                <div className="text2">
                    <div className="tez">
                        <img src={miyya} alt="" />
                        <h3>Tezda xizmat ko’rsatish</h3>
                        <p>Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun</p>
                    </div>

                    <div className="tez">
                        <img src={yetuk} alt="" />
                        <h3>Yetuk mutahasislaimiz</h3>
                        <p>Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun</p>
                    </div>


                    <div className="tez">
                        <img src={qollar} alt="" />
                        <h3>Tezda xizmat ko’rsatish</h3>
                        <p>Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun</p>
                    </div>
                </div>

            </div>

            <div className="katta_img" data-aos="fade-left">
                <div className="text3">
                    <h3>Klapa va zararli hashorot endi yo’q deb hisoblang !!!</h3>
                    <p>Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun</p>
                    <div className="but2">
                        <button>Bog’lanish</button>
                    </div>
                </div>

            </div>

            {/* ===================Service ============== */}

            <div id="service" className="Service" data-aos="fade-left">

                <h1>Service</h1>
                <p>Bu darsliklari sizning yuqori daraja olishingizga yordam beradi</p>

            </div>

            <div className="katta" data-aos="fade-left">

                <div className='bosh'>
                    <div className="h3">
                        <h3>Boshlang’ich tushunchalar</h3>
                    </div>

                    <div className="naz">
                        <h6>Nazariy bilimlar</h6>
                    </div>

                    <div className="dars">
                        <p>16 dars</p>
                    </div>

                    <div className='img1'>
                        <img src={bosh} alt="" />
                    </div>

                </div>

                <div className='orta'>
                    <div className="h3_1">
                        <h3>O’rta</h3>
                    </div>

                    <div className="nazariy">
                        <h6>Nazariy va Amaliy bilimlar</h6>
                    </div>
                    <div className='dars1'>
                        <p>26 dars</p>
                    </div>

                    <div className='img2'>
                        <img src={orta} alt="" />
                    </div>

                </div>

                <div className='yuqori'>
                    <div className="h3_2">
                        <h3>Yuqori</h3>
                    </div>

                    <div className="nazar">
                        <h6>Amaliy bilimlar</h6>
                    </div>

                    <div className='dars2'>
                        <p>16 dars</p>
                    </div>
                    <div className='img3'>
                        <img src={yuqori} alt="" />
                    </div>

                </div>
            </div>


            <div className="katta_fon" data-aos="fade-left">

                <div className='rasm3'>
                    <img src={rasm3} alt="" />
                </div>

                <div className='text4'>
                    <div className='togri'>
                        <img src={togri} alt="" />
                    </div>

                    <div className='text5'>
                        <div className='text5_h2'>
                            <h2>Bizga ko'p yillardan beri  kompaniyamizga ishonch bildirganlar talaygina</h2>
                        </div>

                    </div>

                    <div className='btn3'>
                        <button>Bog’lanish</button>
                    </div>


                </div>


            </div>




            <div id="faq" className='faq' data-aos="fade-left">
                <hr className='hr2' />

                <div className="faq1">

                    <div className="faq2">
                        <h1>FAQ</h1>
                    </div>


                    <div className="kursdan">

                        <div className='kursdan1'>
                            <h4 className='h4'>Kursdan nima topaman</h4>
                            <img src={kursdan1} alt="" />
                        </div>
                        <hr />

                        <div className='kursdan1'>
                            <h4 className='h4'>Kursdan nima topaman</h4>
                            <img src={kursdan1} alt="" />
                        </div>
                        <hr />

                        <div className='kursdan3'>
                            <div className="kursdan2">
                                <div className="topaman">
                                    <h4>Kursdan nima topaman</h4>
                                </div>

                                <p>Bu bir nonti kaypiday kapy darsga qatnasha olmasangiz, darsdan so‘ng guruhingizga zoom zapisi tashlab beriladi</p>
                            </div>

                            <img src={kursdan2} alt="" />
                        </div>
                        <hr />



                    </div>


                </div>


            </div>


            <div id="contact" className="malumot" data-aos="fade-left">

                <div className="malum">
                    <form id='myform' onSubmit={sendMessege} className="malum1">

                        <h2 className='qol'>Malumotingizni qoldiring</h2>

                        <input id='name' className='ism' type="text" placeholder='Ism' />



                        <input id='number' className='tel' type="number" placeholder='+998' />



                        <div className="yozilish1">
                            <button type='submit' className='yozilish' loading={loading} >{loading ? "Yuborilmoqda..." : "Yuborish"}</button>
                        </div>


                    </form>


                    <div className="bizga">
                        <h4>Bizga ko'p yillardan beri  kompaniyamizga ishonch bildirganlar talaygina</h4>
                    </div>

                    <div className="rasm5">
                        <img src={rasm4} alt="" />
                    </div>
                </div>


            </div>

            <div className="footer" data-aos="fade-left">

                <div className="diz" data-aos="fade-left">
                    <div className='Union1'>
                        <img src={Union} alt="" />
                        <h6>Dizenfeksiya</h6>
                    </div>
                </div>

                <div className="joylashuv" data-aos="fade-left">

                    <div className="tosh">
                        <img src={locatsia} alt="" />
                        <p>Toshkent shahri  Yashnabod tumani  Mo’ljal Sergeli-4 bekat</p>
                        <img src={strelkaqora} alt="" />
                    </div>

                    <div className="tosh">
                        <img src={phone} alt="" />
                        <p>+998 94 099 3434</p>
                        <img src={strelkaqora} alt="" />
                    </div>

                    <hr />

                    <div className="tarmoqlar">
                        <div className="facebook">
                            <button className='fa'> <h5>Facebook</h5> <img className='qora' src={strelkaqora} alt="" /></button>
                        </div>
                        <div className="instagram">
                            <button className='fa'><h5>Instagram</h5> <img className='qora' src={strelkaqora} alt="" /></button>
                        </div>
                        <div className="telegram">
                            <button className='fa'><h5>Telegram</h5> <img className='qora' src={strelkaqora} alt="" /></button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Main
