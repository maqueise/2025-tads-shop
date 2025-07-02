'use server'

import { stringifyFormData } from "@/lib/helpers"
import { redirect } from "next/navigation"
const API_URL = process.env.API_URL
const headers = {
    'Content-Type': 'application/json'
}

 export type MarcaFormState = {
    nome: string
}
export async function criarMarca(prevState:MarcaFormState,formData:FormData){
        let response = await fetch(`${API_URL}/marca`,{
        headers,
        method:'POST',
        body:stringifyFormData(formData)
    })
    await new Promise((resolve)=>{setTimeout(resolve,3000)})
    return prevState
    redirect('/cadastro/marcas/')
}
export async function deletarMarca(id:number){
    let response = await fetch(`${API_URL}/marca/${id}`,{
        method:'DELETE',
    })
    redirect('/cadastro/marcas/')
}

