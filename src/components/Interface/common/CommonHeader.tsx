const CommonHeader = ({ title, description }: { title: string, description: string }) => {
    return (
        <div>
            <div className="max-w-xl mb-6 md:mx-auto sm:text-center lg:max-w-2xl md:mb-8">
                <div></div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="247432cb-6e6c-4bec-9766-564ed7c230dc"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#247432cb-6e6c-4bec-9766-564ed7c230dc)"
                                width="52"
                                height="24"
                            />
                        </svg>
                    </span>{" "}
                    {title}
                </h2>
                <p className="text-base text-gray-700 md:text-lg">{description}</p>
            </div>
        </div>
    );
};

export default CommonHeader;