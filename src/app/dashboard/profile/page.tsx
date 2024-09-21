
import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getUserInfo } from '@/services/auth.service'
import { getProfile } from '@/utils/getProfileData'
import { getProfileInfo } from '@/services/actions/users'
import ProfileForm from '@/components/dashboard/ProfileForm'

const Profile = async () => {
    // const [data, setData] = useState(null)
    // const [isLoading, setLoading] = useState(true)
    // const profile = getUserInfo();


    const profileInfo = getProfile();

    const data = await getProfileInfo(profileInfo?.id)


    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">Profile</CardTitle>
            </CardHeader>
            <ProfileForm data={data}></ProfileForm>
        </Card>
    )
}
export default Profile; 