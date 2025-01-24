import PanelLayout from "@/Pages/Panel/Layout/PanelLayout";
import {log} from "node:util";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";

export default function Users({user}:any){
    return (
        <>
            <PanelLayout>
                <div className="card-v2">
                    <div className="grid grid-cols-12 ">
                        <div className="col-span-6">
                            <form onSubmit={() => console.log(1)}>
                                <div className="mb-4">
                                    <InputLabel value={`عنوان`} />
                                    <TextInput name={`name`} />
                                </div>
                                <div>
                                    <InputLabel value={`گارد`} />
                                    <SelectInput name={`guard_name`}>
                                        <option value="web">web</option>
                                        <option value="api">api</option>
                                    </SelectInput>
                                </div>
                            </form>
                        </div>
                        <div className="col-span-6">
                            <img src="/assets/images/roles-and-permission.gif" alt=""/>
                        </div>
                    </div>

                </div>
            </PanelLayout>
        </>
)
}
