
import PubCards, { Publication } from '@/components/Interface/common/PubCard';
import Container from '@/components/Shared/Container';
import { getAllPublications } from '@/services/actions/publication';
import React from 'react';

const page = async () => {
    const res: Publication[] = await getAllPublications();

    return (
        <Container>
            <div className='grid lg:grid-cols-3 gap-4 md:grid-cols-2'>
                {
                    res.map((publication) => (
                        <PubCards key={publication.id} publication={publication} />
                    ))
                }
            </div>
        </Container>
    );
};

export default page;
