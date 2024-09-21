'use client'

import { useForm, Controller, SubmitHandler, FieldValue, FieldValues } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { submitPublication } from '@/services/actions/publication'
import { getUserInfo } from '@/services/auth.service'
import { toast } from 'sonner'


type FormData = {
    name: string;
    title: string;
    subtitle: string;
    description: string;
    link: string;
    authors: string;
    date: string; // Changed to string
    image?: File[];
    category: string; // Added category field
}

export default function Page() {

    const userInfo = getUserInfo();

    const { register, handleSubmit, reset, control, formState: { errors } } = useForm<FormData>()

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {

        const formData = new FormData();


        data = ({
            ...data,
            date: data.date, // No need to format the date if it's already in ISO format
            image: undefined,
            userInfoId: userInfo.id,
        })
        const { image, ...dataWithoutImage } = data; // Remove image property
        formData.append('data', JSON.stringify(dataWithoutImage));


        const res = await submitPublication(formData);

        if (res.success) {
            toast.success("Publication Added successfully")
            reset();
        }

    }

    return (
        <div>
            <Card className="w-full max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">Publication Submission Form</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div className="space-y-2 md:col-span-2">
                                <Label htmlFor="title">Title</Label>
                                <Textarea
                                    id="title"
                                    {...register("title", { required: "Title is required" })}
                                    placeholder="Enter title"
                                />
                                {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
                            </div>

                            <div className="space-y-2 md:col-span-2">
                                <Label htmlFor="subtitle">Subtitle</Label>
                                <Textarea
                                    id="subtitle"
                                    {...register("subtitle")}
                                    placeholder="Enter subtitle"
                                />
                            </div>

                            <div className="space-y-2 md:col-span-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    {...register("description", { required: "Description is required" })}
                                    placeholder="Enter description"
                                />
                                {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="link">Link</Label>
                                <Input
                                    id="link"
                                    {...register("link", {
                                        pattern: {
                                            value: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?(\?.*)?$/,
                                            message: "Invalid URL format"
                                        }

                                    })}
                                    placeholder="Enter link"
                                    type="url"
                                />
                                {errors.link && <p className="text-red-500 text-sm">{errors.link.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="photo">Photo</Label>
                                <Input
                                    type="file"
                                    {...register('image', { required: false })} // Updated to be optional
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="authors">Authors</Label>
                                <Input
                                    id="authors"
                                    {...register("authors", { required: "Authors are required" })}
                                    placeholder="Enter authors"
                                />
                                {errors.authors && <p className="text-red-500 text-sm">{errors.authors.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="category">Category</Label>
                                <Input
                                    id="category"
                                    {...register("category", { required: "Category is required" })}
                                    placeholder="Enter category"
                                />
                                {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="date">Date</Label>
                                <Controller
                                    name="date"
                                    control={control}
                                    render={({ field }) => (
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant={"outline"}
                                                    className={`w-full justify-start text-left font-normal ${!field.value && "text-muted-foreground"}`}
                                                >
                                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                                    {field.value ? format(new Date(field.value), "PPP") : <span>Pick a date</span>}
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0">
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value ? new Date(field.value) : undefined}
                                                    onSelect={(date) => field.onChange(date?.toISOString())}
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    )}
                                />
                            </div>
                        </div>

                        <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                            Submit
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
