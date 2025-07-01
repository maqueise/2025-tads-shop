'use server'

import { stringifyFormData } from "@/lib/helpers"
import { redirect } from "next/navigation"
const API_URL = process.env.API_URL
const headers = {
    'Content-Type': 'application/json'
}

export async function criarMarca(formData:FormData){
        let response = await fetch(`${API_URL}/marca`,{
        headers,
        method:'POST',
        body:stringifyFormData(formData)
    })
     //console.log(await response.json())
   
    redirect('/cadastro/marcas/')
}
export async function deletarMarca(formData:FormData){
    let response =  fetch(`${API_URL}/marca`,{
        method:'DELETE',
        body:JSON.stringify({nome:formData.get('id')})
    })
    redirect('/cadastro/marcas/')
}
