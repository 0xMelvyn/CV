import React from 'react'
import {BsFacebook, BsGithub, BsTwitter} from 'react-icons/bs'

const HeaderSocial = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.facebook.com/profile.php?id=100088349492050" target="_blank"><BsFacebook /></a>
            <a href="https://github.com/0xMelvyn" target="_blank"><BsGithub /></a>
            <a href="https://twitter.com/Melvyn_Tweet" target="_blank"><BsTwitter /></a>
        </div>
    );
};

export default HeaderSocial;