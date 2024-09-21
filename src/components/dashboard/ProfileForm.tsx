'use client'
import { useState, useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { updateProfileInfo } from '@/services/actions/users'

type ProfileFormData = {
    name: string; // for name
    file: FileList; // for profile photo
}

// Mock function for getUserInfo

const ProfileForm = ({ data }: { data: any }) => {

    const id = data?.id;

    const [isEditing, setIsEditing] = useState(false)
    const [profile, setProfile] = useState(data)
    const { register, handleSubmit, watch } = useForm<ProfileFormData>()

    const watchFile = watch('file')
    console.log(profile);
    useEffect(() => {
        if (watchFile && watchFile.length > 0) {
            const file = watchFile[0]
            const reader = new FileReader()
            reader.onloadend = () => {
                setProfile((prev: any) => ({ ...prev, profilePhoto: reader.result as string }))
            }
            reader.readAsDataURL(file)
        }
    }, [watchFile])

    const onSubmit: SubmitHandler<ProfileFormData> = async (newData) => {
        // Here you would typically send the updated profile to your backend

        console.log(newData);
        const formData = new FormData();

        if (newData.file) {
            formData.append('file', newData.file[0]);
        }

        const { file, ...dataWithoutImage } = newData; // Remove image property

        formData.append('data', JSON.stringify(dataWithoutImage));


        const res = await updateProfileInfo(formData, id)
        console.log(res);

    }
    return (
        <div>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="flex justify-center">
                        <Avatar className="w-36 h-36">
                            <AvatarImage className='object-cover' src={profile?.profilePhoto || "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.1.2070558022.1715361181&semt=ais_hybrid"} alt={profile?.name} />
                            <AvatarFallback className=''>{profile?.name}</AvatarFallback>
                        </Avatar>
                    </div>
                    {isEditing && (
                        <div className="text-center">
                            <Label htmlFor="file" className="cursor-pointer text-sm text-blue-500 hover:text-blue-600">
                                Change Photo
                            </Label>
                            <Input
                                id="file"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                {...register('file')}
                            />
                        </div>
                    )}
                    <div className="space-y-2">
                        <Label htmlFor="data">Name</Label>
                        <Input
                            id="name"
                            defaultValue={profile?.name}
                            {...register('name')}
                            readOnly={!isEditing}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            value={profile?.email}
                            readOnly
                            className="bg-gray-100 text-gray-600"
                        />
                        <p className="text-sm text-muted-foreground">Email cannot be changed.</p>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-end">
                {isEditing ? (
                    <>
                        <Button type="submit" onClick={handleSubmit(onSubmit)} className="mr-2">Save</Button>
                        <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
                    </>
                ) : (
                    <Button onClick={() => setIsEditing(true)}>Edit</Button>
                )}
            </CardFooter>
        </div>
    );
};

export default ProfileForm;