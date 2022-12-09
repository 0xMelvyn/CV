import React from 'react';
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className='container services__container'>
                <article className='service'>
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Modern Website</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Fast</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Secure</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Aesthetic</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Multi Device</p>
                        </li>
                    </ul>
                </article>

                <article className='service'>
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Flat Design</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Minimalism</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Logo</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Basic 3D</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    );
};

export default Services;