import React from 'react'

const Header = () => {
    return (
        <>
            <header className='bg-VeryPaleCyan bg-mobile-pattern md:bg-desktop-pattern lg:px-20 py-10'>
                <nav className='flex flex-row justify-between p-4 md:mx-6'>
                    <img className="w-2/5 md:w-2/12" src="./images/logo.svg" alt="logo" />
                    <button className="bg-white text-black font-Poppins font-medium text-sm rounded-full px-6 py-2.5 shadow shadow-gray-400 hover:opacity-70 md:px-10">Try It Free</button>
                </nav>
                <section className='my-8 p-4 grid grid-rows-1 justify-center items-center gap-10 md:px-12 lg:grid-cols-2'>
                    <div className="text-center">
                        <h1 className='font-Poppins font-bold text-3xl mb-4 lg:text-4xl text-left '>Build The Community Your Fans Will Love</h1>
                        <p className='font-OpenSans font-normal text-base mb-8 lg:text-left'> Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion. </p>
                        <button className="bg-ColorPink text-white font-Poppins text-xs font-bold rounded-3xl p-4 shadow hover:opacity-70 lg:block py-4 px-6">Get Started For Free</button>
                    </div>
                    <img src="./images/illustration-mockups.svg" alt="mockups"/>
                </section>
            </header>
            <section></section>
        </>
    )
}

export default Header
