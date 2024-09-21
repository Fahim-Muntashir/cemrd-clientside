'use server'
import MessageCard, { ContactInfo } from "@/components/dashboard/MessageCard"
import PageContainer from "@/components/layout/page-container"
import { getAllMessage } from "@/services/actions/message"


const MessagePage = async () => {

    const res = await getAllMessage();
    console.log(res);
    const contactInfo = res.result;

    return (
        <PageContainer scrollable={true}>

            {
                contactInfo.map((data: ContactInfo) => (
                    <MessageCard contactInfo={data} key={data.email} />
                ))
            }


        </PageContainer >
    )
}
export default MessagePage;