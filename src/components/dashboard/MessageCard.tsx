import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MessageSquare } from "lucide-react"

export type ContactInfo = {
    name: string,
    email: string,
    phoneNumber: string,
    message: string,
}

const MessageCard = ({ contactInfo }: { contactInfo: ContactInfo }) => {
    return (
        <Card className="w-full max-w-2xl mx-auto my-4">


            <CardHeader>
                <CardTitle className="text-2xl font-bold">{contactInfo.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Mail className="w-5 h-5 text-muted-foreground" />
                            <span className="text-sm">{contactInfo.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Phone className="w-5 h-5 text-muted-foreground" />
                            <span className="text-sm">{contactInfo.phoneNumber}</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <MessageSquare className="w-5 h-5 text-muted-foreground" />
                            <span className="text-sm font-medium">Message</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{contactInfo.message}</p>
                    </div>
                </div>
            </CardContent>


        </Card>
    );
};

export default MessageCard;