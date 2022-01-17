import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="bg-VeryDarkCyan pt-36 pb-14 px-6 flex flex-col gap-4 md:flex-row justify-around items:center lg:py-60 ">
                <div className="flex flex-col gap-6 md:w-2/6" >
                    <img className="mb-8 w-2/4 md:mb-1" src='./images/logo-copy.svg' alt='logo-copy-svg' />
                    <div className="flex flex-row gap-3">
                        <img className="h-4 mt-1" src="./images/icon-location.svg" alt="location" />
                        <p className="text-white text-xs font-OpenSans font-normal lg:w-3/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                    <div className="flex flex-row gap-3 ">
                        <img className="h-3" src="./images/icon-phone.svg" alt="phone" />
                        <p className="text-white text-xs font-OpenSans font-normal">Phone: +1-543-123-4567</p>
                    </div>
                    <div className="flex flex-row gap-3">
                        <img className="h-3" src="./images/icon-email.svg" alt="email" />
                        <p className="text-white text-xs font-OpenSans font-normal">example@fylo.com</p>
                    </div>
                </div>
                <ul className='list-none flex flex-col gap-5 md:justify-center'>
                    <li className="text-white text-sm font-OpenSans font-normal">About Us</li>
                    <li className="text-white text-sm font-OpenSans font-normal">What We Do</li>
                    <li className="text-white text-sm font-OpenSans font-normal">FAQ</li>
                </ul>
                <ul className='list-none flex flex-col gap-5 md:justify-center'>
                    <li className="text-white text-sm font-OpenSans font-normal">Career</li>
                    <li className="text-white text-sm font-OpenSans font-normal">Blog</li>
                    <li className="text-white text-sm font-OpenSans font-normal">Contact</li>
                </ul>
                <div className="flex flex-col justify-center items-center gap-6 md:items-start justify-around ">
                    <div className="flex flex-row justify-center items-center gap-4">
                        <i className="text-white text-sm rounded-full border border-white p-4 h-1 w-1 flex flex-col justify-center items-center fab fa-facebook-f hover:border-ColorPink hover:text-ColorPink"></i>
                        <i className="text-white text-sm rounded-full border border-white p-4 h-1 w-1 flex flex-col justify-center items-center fab fa-twitter hover:border-ColorPink hover:text-ColorPink"></i>
                        <i className="text-white text-sm rounded-full border border-white p-4 h-1 w-1 flex flex-col justify-center items-center fab fa-instagram hover:border-ColorPink hover:text-ColorPink"></i>
                    </div>
                    <div className="copyright">
                        <p className="text-white text-xs font-OpenSans font-light">&copy; Copyright 2018 Huddle. All rights reserved.</p>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer
