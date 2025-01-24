import PanelLayout from "@/Pages/Panel/Layout/PanelLayout";

export default function Users({user}:any){
    return (
        <>
            <PanelLayout>
                {user?.name}
            </PanelLayout>
        </>
    )
}
