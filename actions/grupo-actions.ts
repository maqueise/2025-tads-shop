'use server'

import { redirect } from "next/navigation"

export async function criarGrupo(formData:FormData){
     console.log(formData)
 let response = await fetch('http://localhost:3002/grupos-produto',{
        method:'POST',
        body:JSON.stringify({nome:formData.get('nome')})
    })
   
    redirect('/cadastro/grupos-produto/')
}
export async function deletarGrupo(formData:FormData){
    let response =  fetch('http://localhost:3002/grupos-produto',{
        method:'DELETE',
        body:JSON.stringify({nome:formData.get('id')})
    })
    redirect('/cadastro/grupos-produto/')
}