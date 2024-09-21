'use server'
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { FaUsers } from "react-icons/fa"
import Container from '@/components/Shared/Container';
import { getFacultyProfileInfo } from '@/services/actions/faculty';
import React from 'react';
import { FaFacebookSquare, FaGithub, FaLinkedin, FaResearchgate } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';
import { ArrowRightIcon, CalendarDaysIcon } from "lucide-react";
import Image from "next/image";

const page = async ({ params }: { params: { id: string } }) => {

    const faculty = await getFacultyProfileInfo(params.id);

    console.log(faculty.FacultyPublication);


    return (
        <Container>
            <div className="p-6 md:px-0 lg:px-40 sm:p-12 dark:bg-gray-900 dark:text-gray-100">
                <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-8 lg:space-x-32 md:flex-row">




                    <Image
                        src={faculty?.profilePhoto || ""} // Fallback URL if profilePhoto is not available
                        alt="Profile Image"
                        width={224}  // Width of the image in pixels (equivalent to w-56 in Tailwind)
                        height={400} // Height of the image in pixels
                        className="self-center object-cover flex-shrink-0 border rounded-sm md:justify-self-start dark:bg-gray-500 dark:border-gray-700" // Apply Tailwind CSS classes
                        layout="fixed" // Use fixed layout to maintain exact width and height
                    />
                    <div className="flex flex-col py-32">
                        <h4 className="text-4xl mb-5 font-semibold text-center md:text-left">{faculty.name}</h4>
                        <p className="dark:text-gray-400 text-justify">Sed non nibh iaculis, posuere diam vitae, consectetur neque. Integer velit ligula, semper sed nisl in, cursus commodo elit. Pellentesque sit amet mi luctus ligula euismod lobortis ultricies et nibh.</p>
                        <div className="flex mb-5 sm:justify-center text-2xl lg:justify-start space-x-2 my-5">
                            <a href="https://www.facebook.com/staywithmoon" target="blank">
                                {" "}
                                <FaFacebookSquare className="text-blue-600" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/mahmudul-hasan-moon/"
                                target="blank"
                            >
                                {" "}
                                <FaLinkedin className="text-blue-800 ml-4" />
                            </a>
                            <a
                                href="https://scholar.google.com/citations?user=TRKmJkEAAAAJ&hl=en&fbclid=IwAR3eorhFgHicdaKI6aAki9fxdM64GNrLtoVNVSkCcZiup59h_26esGXcbeQ_aem_AR-Z5ZoV5v_vRutXh4mjSDu4bLCXm5jF-kVsh_jb0-mMS6BcrF-F8cn6mEHhtx5WgVMQ9mDfyUkDw02SUP1XUs9X"
                                target="blank"
                            >
                                {" "}
                                <SiGooglescholar className="text-blue-500 ml-4" />
                            </a>
                            <a href="https://github.com/Mahmudul-Hasan-Moon" target="blank">
                                {" "}
                                <FaGithub className="text-black ml-4" />
                            </a>
                            <a
                                href="https://www.researchgate.net/profile/Mahmudul-Hasan-170"
                                target="blank"
                            >
                                {" "}
                                <FaResearchgate className="text-gray-500 ml-4" />
                            </a>
                        </div>
                    </div>

                </div>
                <h1 className="font-bold text-center text-3xl md:text-4xl lg:text-5xl font-heading text-black">
                    Some <span className='text-blue-600'>Publication&apos;s</span> of {faculty.name}
                </h1>

                <div>
                    {faculty?.FacultyPublication?.map((publication: any) => (
                        <div key={publication.id} className='md:grid md:grid-cols-2 justify-center items-center gap-4'>
                            <Card key={publication.id} className="w-full max-w-lg my-4">
                                <CardContent className="grid gap-4 mt-4">
                                    <h3 className="text-justify w-full ">
                                        {publication?.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <CalendarDaysIcon className="w-4 h-4" />
                                        <span>
                                            {new Date(publication?.date).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </span>                </div>
                                    <div className="flex gap-2 text-sm text-muted-foreground">
                                        <FaUsers

                                            className="w-6 h-6" />
                                        <span>{publication?.authors}</span>
                                    </div>

                                    <div className="flex justify-end">
                                        <Link href={`/publications/${publication?.link}`} className="inline-flex items-center gap-2 text-primary" prefetch={false}>
                                            See More
                                            <ArrowRightIcon className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card >
                        </div>
                    ))}

                </div>


            </div>
        </Container >
    );
};

export default page;