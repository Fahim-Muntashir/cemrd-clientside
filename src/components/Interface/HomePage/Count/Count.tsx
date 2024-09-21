import Container from "@/components/Shared/Container";

const Counts = () => {
    return (
        <div className="bg-gray-200">
            <Container>
                <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
                    <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
                        <div className="flex flex-col justify-start m-2 lg:m-6">
                            <p className="text-4xl font-bold leadi lg:text-6xl">15+</p>
                            <p className="text-sm sm:text-base">Research</p>
                        </div>
                        <div className="flex flex-col justify-start m-2 lg:m-6">
                            <p className="text-4xl font-bold leadi lg:text-6xl">40+</p>
                            <p className="text-sm sm:text-base">Members</p>
                        </div>
                        <div className="flex flex-col justify-start m-2 lg:m-6">
                            <p className="text-4xl font-bold leadi lg:text-6xl">6+</p>
                            <p className="text-sm sm:text-base">Running Project</p>
                        </div>
                        <div className="flex flex-col justify-start m-2 lg:m-6">
                            <p className="text-2xl font-bold leadi lg:text-6xl">2805+</p>
                            <p className="text-sm sm:text-base">Youtube Subscriber</p>
                        </div>
                        <div className="flex flex-col justify-start m-2 lg:m-6">
                            <p className="text-4xl font-bold leadi lg:text-6xl">8+</p>
                            <p className="text-sm sm:text-base">Courses</p>
                        </div>
                        <div className="flex flex-col justify-start m-2 lg:m-6">
                            <p className="text-4xl font-bold leadi lg:text-6xl">10+</p>
                            <p className="text-sm sm:text-base">Workshops</p>
                        </div>
                    </div>
                </section>
            </Container>{" "}
        </div>
    );
};

export default Counts;