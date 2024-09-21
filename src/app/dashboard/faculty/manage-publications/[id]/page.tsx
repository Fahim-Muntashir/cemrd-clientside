'use client';

import EditPublication from "@/components/dashboard/EditPublication";

const Page = ({ params }: { params: { id: string } }) => {
    return (
        <div>
            <EditPublication id={params.id} />
        </div>
    );
};

export default Page;
