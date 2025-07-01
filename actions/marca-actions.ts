'use server'

import { parceFormdata } from "@/lib/helpers"
import { redirect } from "next/navigation"
const API_URL = process.env.API_URL
const headers = {
    'Content-Type' : 'application/json'
}
export async function criarMarca(formData:FormData){
     console.log(formData)
 let response = await fetch(`${API_URL}/marca`,{
        headers,
        method:'POST',
        body:parceFormdata(formData)
    })
   
    redirect('/cadastro/marcas/')
}
export async function deletarMarca(id: number){
    let response =  await fetch(`${API_URL}/marca/${id}`,{
        method:'DELETE'
    })
    redirect('/cadastro/marcas/')
}
