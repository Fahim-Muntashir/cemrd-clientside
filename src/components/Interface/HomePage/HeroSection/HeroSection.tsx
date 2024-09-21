'use client'

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import Container from "@/components/Shared/Container"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function HeroSection() {
    return (


        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>

                <section className="w-full bg-gradient-to-r from-blue-900 to-slate-900 py-20 ">
                    <Container>
                        <div className="mx-auto px-4 md:px-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <div className="space-y-6">
                                    <h1 className="text-3xl md:text-6xl font-bold text-gray-50">
                                        Center for Multidisciplinary Research and Development
                                    </h1>
                                    <p className="text-lg md:text-xl text-gray-100">
                                        Pioneering Innovation and Knowledge Advancement for a Sustainable Future
                                    </p>


                                    <Link
                                        href="/about"
                                        className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-[#16cdbb]
                                        text-primary-foreground font-medium transition-colors hover:bg-[#711576]focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                        prefetch={false}
                                    >
                                        Explore Now
                                    </Link>
                                </div>
                                <div className="hidden md:block">
                                    <Image
                                        src="https://images.pexels.com/photos/159751/book-address-book-learning-learn-159751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        width="600"
                                        height="400"
                                        alt="Hero Banner"
                                        className="mx-auto rounded-lg shadow-lg"
                                        style={{ aspectRatio: "600/400", objectFit: "cover" }}
                                        layout="responsive"
                                    />
                                </div>
                            </div>
                        </div>
                    </Container>

                </section>

            </SwiperSlide>




        </Swiper>



    )
}