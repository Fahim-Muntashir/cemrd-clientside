import React from 'react';
import PubCards, { Publication } from '../../common/PubCard';
import Container from '@/components/Shared/Container';
import CommonHeader from '../../common/CommonHeader';
import Link from 'next/link';

const topPublication: Publication[] = [
    {
        id: "",
        name: "asdfasdf",
        image: "",
        title: "string",
        subtitle: "string",
        description: "string",
        date: "string", // ISO date string
        authors: "string",
        category: "string",
        link: "string",
        userInfoId: "asdfasdf"
    },
    {
        id: "",
        name: "asdfasdf",
        image: "",
        title: "string",
        subtitle: "string",
        description: "string",
        date: "string", // ISO date string
        authors: "string",
        category: "string",
        link: "string",
        userInfoId: "asdfasdf"
    },

    {
        id: "",
        name: "asdfasdf",
        image: "",
        title: "string",
        subtitle: "string",
        description: "string",
        date: "4/5/2", // ISO date string
        authors: "string",
        category: "string",
        link: "string",
        userInfoId: "asdfasdf"

    }
]

const Publications = () => {
    return (

        <Container >
            <br />
            <br />
            <br />
            <CommonHeader
                title='Our Top Research Achievements'
                description="Take a quick look at the best research projects we've completed. We've tackled tough challenges and made significant breakthroughs, highlighting our dedication to quality and innovation.
"
            ></CommonHeader>
            <div className='grid gap-8 lg:grid-cols-3 md:grid-cols-2 '>
                {
                    topPublication.map((data) => (
                        <PubCards key={data.authors} publication={data}></PubCards>

                    ))
                }
            </div>

            <div className="mt-8 mb-8 flex justify-center">
                <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                >
                    View All Blogs
                </Link>
            </div>
        </Container>
    );
};

export default Publications;