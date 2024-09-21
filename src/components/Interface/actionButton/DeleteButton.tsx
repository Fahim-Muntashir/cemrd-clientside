'use client'
import { Button } from '@/components/ui/button';
import { deleteSingleData } from '@/services/actions/publication';
import { TrashIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'sonner';

const DeleteButton = ({ link }: { link: string }) => {

    const router = useRouter();

    const handleDelete = async () => {
        const res = await deleteSingleData(link)
        console.log(res);
        if (res) {
            toast.success("Deleted Suceesfully")
            router.refresh()
        }
    }
    return (
        <div>
            {/* <Button variant="outline" size="icon" onClick={() => handleEdit()}>
                <EditIcon className="h-4 w-4" />
            </Button>
             */}
            <Button variant="destructive" size="icon" onClick={handleDelete} >
                <TrashIcon className="h-4 w-4" />
            </Button>
        </div>
    );
};

export default DeleteButton;