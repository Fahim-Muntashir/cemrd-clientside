/**
 * v0 by Vercel.
 * @see https://v0.dev/t/37e3oV1dM7v
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardContent, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"
import CommonHeader from "../../common/CommonHeader"
import Container from "@/components/Shared/Container"

export default function Blog() {
    return (

        <section className="bg-muted py-12 md:py-16 lg:py-20">
            <Container>
                <CommonHeader
                    title="Check Out Our Interesting Blogs" description="Explore a range of captivating articles on different topics. Find engaging insights and perspectives that are sure to keep you interested.">
                </CommonHeader>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="p-5">
                        <CardContent className="grid gap-2">
                            <div>
                                <CardTitle className="">The Future of Web Development</CardTitle>
                                <CardDescription className="my-2">
                                    Explore the latest trends and technologies shaping the future of web development.
                                </CardDescription>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                    <Avatar className="h-5 w-5">
                                        <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                                        <AvatarFallback>AC</AvatarFallback>
                                    </Avatar>
                                    <span>Acme Inc</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <CalendarIcon className="h-4 w-4" />
                                    <span>Aug 18, 2024</span>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="pb-0">
                            <Link href="#" className="text-sm font-medium text-primary hover:underline" prefetch={false}>
                                Read More
                            </Link>
                        </CardFooter>
                    </Card>
                    
                    <Card className="p-5">
                        <CardContent className="grid gap-2">
                            <div>
                                <CardTitle className="">The Future of Web Development</CardTitle>
                                <CardDescription className="my-2">
                                    Explore the latest trends and technologies shaping the future of web development.
                                </CardDescription>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                    <Avatar className="h-5 w-5">
                                        <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                                        <AvatarFallback>AC</AvatarFallback>
                                    </Avatar>
                                    <span>Acme Inc</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <CalendarIcon className="h-4 w-4" />
                                    <span>Aug 18, 2024</span>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="pb-0">
                            <Link href="#" className="text-sm font-medium text-primary hover:underline" prefetch={false}>
                                Read More
                            </Link>
                        </CardFooter>
                    </Card>
                    
                    <Card className="p-5">
                        <CardContent className="grid gap-2">
                            <div>
                                <CardTitle className="">The Future of Web Development</CardTitle>
                                <CardDescription className="my-2">
                                    Explore the latest trends and technologies shaping the future of web development.
                                </CardDescription>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                    <Avatar className="h-5 w-5">
                                        <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                                        <AvatarFallback>AC</AvatarFallback>
                                    </Avatar>
                                    <span>Acme Inc</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <CalendarIcon className="h-4 w-4" />
                                    <span>Aug 18, 2024</span>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="pb-0">
                            <Link href="#" className="text-sm font-medium text-primary hover:underline" prefetch={false}>
                                Read More
                            </Link>
                        </CardFooter>
                    </Card>
                </div>
                <div className="mt-8 flex justify-center">
                    <Link
                        href="#"
                        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                    >
                        View All Blogs
                    </Link>
                </div>
            </Container></section>
    )
}

function CalendarIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
        </svg>
    )
}