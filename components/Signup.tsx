"use client"
import axios from "axios";
import { useState } from "react";
export default function Signup(){

    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    async function onClickHanlder(){
        const response = await axios.post("http://localhost:3000/api/user", {
            email,
            password
        });
        // window.alert(email + " " + password);
    }
    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                <div>
                    <div className="px-10">
                        <div className="text-3xl font-extrabold">
                            Sign in
                        </div>
                    </div>
                    <div className="pt-2">
                        <LabelledInput label="Username" placeholder="harkirat@gmail.com" stateVariable={setEmail}/>
                        <LabelledInput label="Password" type={"password"} placeholder="123456" stateVariable={setPassword} />
                        <button type="button" onClick={onClickHanlder} className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Sign in</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string;
    stateVariable: any

}

function LabelledInput({ label, placeholder, type, stateVariable }: LabelledInputType) {
    function onchangeHanlder(e: any){
        stateVariable(e.target.value);
    }

    return <div>
        <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
        <input onChange={onchangeHanlder} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>
}