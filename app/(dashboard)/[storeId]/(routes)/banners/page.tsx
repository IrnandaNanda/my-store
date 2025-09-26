import { BannersClient } from "./components/client";

const BannersPage = () => {
    return ( 
        <div className="flex-col gap-8"> 
            <div className="flex-1 space-y-4 p-8 pt-6">
                <BannersClient/>
            </div>
        </div>
     );
}
 
export default BannersPage;