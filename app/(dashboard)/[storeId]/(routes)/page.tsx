import db from "@/lib/db"

interface DashboardPageProps {
    params: {stroreId: string}
}

const DashboardPage = async ({params}: DashboardPageProps) => {

    const store = await db.store.findFirst({
        where: {
            id: params.stroreId
        }
    })
    return (
        <div>
            Active Store: {store?.name}
        </div>
    )
}

export default DashboardPage