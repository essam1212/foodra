import React from 'react'
import Header from './Headar'
import './header.css'
import about from '../../imegs/1.png'
import about2 from '../../imegs/2.png'
import blog1 from '../../imegs/01.jpg'
import blog2 from '../../imegs/02.jpg'
import blog3 from '../../imegs/03.jpg'
import slider1 from '../../imegs/22.jpg'
import slider2 from '../../imegs/11.jpg'
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Footer from '../Footer'
export default function Home() {
    return <>
        <Header />
        <section id="reate" className='py-3 text-center'>
            <div className=' container'>
                <div className="row">
                    <div className="col-md-3 ">
                        <h3>1287+</h3>
                        <p>SAVINGS</p>
                    </div>
                    <div className="col-md-3">
                        <h3>5786+</h3>
                        <p>PHOTOS</p>
                    </div>
                    <div className="col-md-3">
                        <h3>1440+</h3>
                        <p>ROCKETS</p>
                    </div>
                    <div className="col-md-2">
                        <h3>7110+</h3>
                        <p>GLOBES</p>
                    </div>
                </div>
            </div>
        </section>
        {/* ----------------------------------------------------------- */}
        <section id='about'>
            <div className=' container'>
                <div className="row">
                    <div className="col-md-5">
                        <img src={about} alt="about" className='  w-100 py-5 my-5   ' />
                    </div>
                    <div className="col-md-6 offset-1">

                        <h2 className='pt-5 mt-5  fs-1 '> We pride ourselves on making real food from the best ingredients.</h2>
                        <p className=' py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. </p>

                        <button id='lernMoreAbout' className=' btn' >lern more</button>
                    </div>
                </div>
            </div>

        </section>
        {/* ------------------------------------------------------------ */}
        <section id='about2'>
            <div className=' container'>
                <div className="row">

                    <div className="col-md-6  mt-5" >

                        <h2 className='pt-5 mt-5  fs-1 '> We make everything by hand with the best possible ingredients.</h2>
                        <p className=' py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away,<br /> behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
                        <ul className=' py-3'>
                            <li><i className="fa-solid fa-check pe-2 text-danger"></i>Etiam sed dolor ac diam volutpat.
                            </li>
                            <li><i className="fa-solid fa-check pe-2 text-danger"></i>Erat volutpat aliquet imperdiet.
                            </li>
                            <li><i className="fa-solid fa-check pe-2 text-danger"></i>purus a odio finibus bibendum.
                            </li>

                        </ul>
                        <button id='lernMoreAbout' className=' btn' >lern more</button>

                    </div>
                    <div className="col-md-6">
                        <img src={about2} alt="about" className='  w-100 py-5 my-5 ' />
                    </div>
                </div>
            </div>

        </section>
        {/* ====================================================================== */}
        <section className='paralex'>
            <div className=' container'>
                <div className="row">
                    <div className="col-md-12 text-center ">
                        <h2 className='pt-5 mt-5'>When a man's stomach is full it makes no <br />
                            difference whether he is rich or poor.</h2>
                        <p className=' pt-2 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio <br />
                            finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
                        </p>
                        <a href="#">watch ours story<i class="fa-solid fa-play ps-1 pb-5 mb-5"></i></a>
                    </div>
                </div>
            </div>
        </section>
        {/* =============================================================================== */}
        <section className=' blogs py-5 my-5'>
            <div className=' container text-center'>
                <h1>Explore Our Foods</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a
                    finibus bibendum <br /> in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains,<br /> far from the countries Vokalia and Consonantia,
                    there live the blind texts. Separated they live in Bookmarksgrove.</p>
                <div className="row my-5 py-5">
                    <div className="col-md-4">
                        <Card >
                            <Card.Img variant="top" src={blog1} />
                            <Card.Body>
                                <Card.Title>Rainbow Vegetable Sandwich
                                </Card.Title>
                                <Card.Text>
                                    Time: 15 - 20 Minutes | Serves: 1


                                </Card.Text>
                                <h3>$12.50 </h3>
                                <button id='blog' className=' btn' >Order Naw</button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card >

                            <Card.Img variant="top" src={blog2} />
                            <Card.Body>
                                <Card.Title>Vegetarian Burger
                                </Card.Title>
                                <Card.Text>
                                    Time: 30 - 45 Minutes | Serves: 1


                                </Card.Text>
                                <h3>$10.50</h3>
                                <button id='blog' className=' btn' >Order Naw</button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card >

                            <Card.Img variant="top" src={blog3} />
                            <Card.Body>
                                <Card.Title>Raspberry Stuffed French Toast
                                </Card.Title>
                                <Card.Text>
                                    Time: 10 - 15 Minutes | Serves: 1


                                </Card.Text>
                                <h3>$9.20 </h3>

                                <button id='blog' className=' btn' >Order Naw</button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

            </div>
        </section>
        {/* ========================================================== */}
        <section id='slider' className='py-5 my-5 position-relative'>
            <h1 className=' text-white text-center'>Testimonials</h1>
            <div className=' container '>
                <div className="row justify-content-center align-items-center ">
                    <div className="col-md-8  text-center my-5 py-5  ">
                        <div className="  bg-white py-5 rounded-5">
                            <Carousel>
                                <Carousel.Item>
                                    <img src={slider1} className=" rounded-pill  my-2 " />

                                    <p className='pb-5 mb-5'>"Far far away, behind the word mountains, far from the countries Vokalia
                                        and Consonantia, there live the blind texts. Separated they live far from the countries Vokalia."</p>

                                    <h2 className='pb-5 mb-5'>Simab Dave - Web Designer</h2>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={slider2} className=" rounded-pill my-2 " />
                                    <p className='pb-5 mb-5'>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                        there live the blind texts. Separated they live."</p>

                                    <h2 className='pb-5 mb-5' >Johnthan Doe - UX Designer</h2>
                                </Carousel.Item>

                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        {/* ================================= */}
        <section id='faq' className='my-5 py-5 ' >
            <h2 className='my-5 py-5 text-center  fs-1'>Frequently Asked Questions</h2>
            <div className=' container'>
                <div className="row">
                    <div className="col-md-6">
                        <h3> Is Foodera Bread really baked fresh each day?</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia
                            and Consonantia, there live the blind texts. Separated they live in
                            Bookmarksgrove right at the coast of the Semantics, a large language.

                        </p>
                        <h3 className=' pt-5'>Can I order your products online?</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia 
                            and Consonantia, there live the blind texts. Separated they 
                            live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    </div>
                    <div className="col-md-6">
                        <h3> Do you bake breads containing animal fats or products?</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and 
                            Consonantia, there live the blind texts. Separated 
                            they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>

                            <h3 className=' pt-4'>When are you opening a shop near me?</h3>
                            <p>Far far away, behind the word mountains, far from the countries 
                                Vokalia and Consonantia, there live the blind texts. Separated they 
                                live in Bookmarksgrove right at the coast of the Semantics, a large language</p>
                    </div>
                </div>
            </div>

        </section>
       <Footer/>
 
    </>
}
