'use client';

import * as z from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormLabel, FormItem, FormMessage } from "@/components/ui/form"
import { CardWrapper } from "./card-wrapper";
import { LoginSchema } from '../../../schemas';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { FormError } from '../form-error';
import { FormSuccess } from '../form-success';

import { useState, useTransition } from 'react';

import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { storeUserInfo } from '@/services/auth.service';
import { login } from '@/services/actions/login';

export const LoginForm = () => {
    const router = useRouter();

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    const [isPending, startTransition] = useTransition();
    const [loading, setLoading] = useState(false);
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    if (loading) {
        toast.loading("Waiting for login!")
    }

    const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
        setError("");
        setSuccess("");
        startTransition(async () => {
            try {
                setLoading(true)
                const res = await login(values)
                setLoading(false);
                if (res?.data?.accessToken) {
                    setSuccess(res.message)
                    storeUserInfo({ accessToken: res?.data?.accessToken })
                    router.push("/")
                }
            } catch (err: any) {
                console.log(err.message);
            }
        })
    }

    return (
        <CardWrapper
            headerLabel="Welcome Back"
            backButtonLabel="Don't Have an Account?"
            backButtonHref="/auth/register"
            showSocial
        >


            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                    <div className='space-y-4'>
                        <FormField control={form.control} name="email" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input {...field}
                                        disabled={isPending}
                                        placeholder='john.doe@example.com' type="email" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="password" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input disabled={isPending}
                                        {...field} placeholder='********' type="password" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    </div>
                    <FormError message={error}></FormError>
                    <FormSuccess message={success}></FormSuccess>

                    <Button type="submit" disabled={isPending}
                        className='w-full'>Login</Button>
                </form>
            </Form>
        </CardWrapper>
    );
};
