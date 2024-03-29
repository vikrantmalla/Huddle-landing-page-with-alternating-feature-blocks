import React from 'react'
import data from '../API/data'
const Card = () => {
    return (
        <>
            <section className='flex flex-col justify-center items-center px-8 gap-12 lg:px-32 my-36'>
                {
                    data.map((details) => {
                        const { id, order, img, imgAlt, title, para } = details;
                        return (
                            <article className="card bg-white-500 p-4 grid grid-rows-1 justify-center items-center gap-4 md:grid-cols-2  lg:px-20 " key={id}>
                                <img className={order} src={img} alt={imgAlt} />
                                <div className="text-center p-6 md:text-left">
                                    <h1 className="font-Poppins font-semibold text-lg mb-4 sm:text-xl">{title}</h1>
                                    <p className='mb-3 text-GrayishBlue font-OpenSans font-normal text-sm sm:text-base md:mb-0 '>{para}</p>
                                </div>
                            </article>
                        )
                    })
                }
            </section>
        </>
    )
}

export default Card