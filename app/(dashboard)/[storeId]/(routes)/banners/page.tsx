import db from "@/lib/db";
import { BannersClient } from "./components/client";

const BannersPage = async ({
    params
}: {
    params: {storeId: string}
}) => {
    const banners = await db.banner.findMany({
        where: {
            storeId: params.storeId
        }, 
        orderBy: {
            createdAt: 'desc'
        }
    })

    return ( 
        <div className="flex-col gap-8"> 
            <div className="flex-1 space-y-4 p-8 pt-6">
                <BannersClient data={banners}/>
            </div>
        </div>
     );
}
 
export default BannersPage;