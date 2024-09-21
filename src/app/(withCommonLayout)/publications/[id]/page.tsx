'use server';
import Container from '@/components/Shared/Container';
import { getSinglePublication } from '@/services/actions/publication';
import React from 'react';
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CalendarIcon, UsersIcon, ArrowLeftIcon } from "lucide-react"
import Link from 'next/link';
import Image from 'next/image';

const SinglePublication = async ({ params }: { params: { id: string } }) => {
    const data = await getSinglePublication(params.id);
    return (
        <Container>
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <Link href='/publications'>
                    <Button variant="ghost" className="mb-4">
                        <ArrowLeftIcon className="mr-2 h-4 w-4" /> Back
                    </Button>
                </Link>
                <Image
                    src={data?.image || '/default-image.jpg'} // Fallback image if data?.image is undefined
                    alt={data?.title || 'Image'}  // Fallback alt text
                    className="w-full h-64 object-cover rounded-lg mb-6"
                    width={800}  // Adjust width according to your design
                    height={400}  // Adjust height according to your design
                    layout="responsive"  // Make the image responsive
                />

                <h1 className="text-3xl font-bold mb-2">{data?.title}</h1>
                <h2 className="text-xl text-muted-foreground mb-4">{data?.subtitle}</h2>

                <div className="flex flex-wrap items-center gap-4 mb-6">
                    <div className="flex items-center text-sm text-muted-foreground">
                        <CalendarIcon className="mr-1 h-4 w-4" />
                        {new Date(data?.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                        <UsersIcon className="mr-1 h-4 w-4" />
                        {data?.authors}
                    </div>
                    <Badge variant="secondary">{data?.category}</Badge>
                </div>

                <Separator className="my-6" />

                <div className="prose max-w-none">
                    <h3 className="text-xl font-semibold mb-4">Description</h3>
                    <p className="mb-6">{data?.description}</p>

                    <h3 className="text-xl font-semibold mb-4">Authors</h3>
                    <ul className="list-disc pl-5 mb-6">
                        <li>{data?.authors}</li>

                    </ul>

                    <h3 className="text-xl font-semibold mb-4">Additional Information</h3>
                    <p className="mb-2"><strong>Category:</strong> {data?.category}</p>
                    <p className="mb-6"><strong>Publication Date:</strong> {new Date(data?.date).toLocaleDateString()}</p>
                </div>

                <Separator className="my-6" />

                <div className="flex justify-center">
                    <Button asChild size="lg">
                        <Link href={data?.link || "/"} target="_blank" rel="noopener noreferrer">
                            View in Scholer
                        </Link>
                    </Button>
                </div>
            </div>        </Container>
    );
};

export default SinglePublication;