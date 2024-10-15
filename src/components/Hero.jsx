import { Link, useLoaderData } from "react-router-dom"

const Hero = () => {

    const {products} = useLoaderData()
  return (
    <>
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-11">
            <div>
                <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
                    Limited Time Offer! <br />
                    Up to 50% OFF! 
                </h1>
                <p className="mt-8 max-w-xl text-lg leading-8">
                    Don`t wait - Limited Stock at Unbeatable Prices!
                </p>
                <div className="mt-10">
                    <Link to={'/products'} className="btn btn-accent">
                        Shop now
                    </Link>
                </div>
            </div>
            <div className=" hidden lg:carousel carousel-center bg-base-200 rounded-box space-x-4 p-4">
                {products.map((item) => (
                        <div className="carousel-item" key={item._id}>
                        <img
                        src={item.image}
                        className="rounded-box h-[300px] w-[300px]" />
                        </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default Hero
