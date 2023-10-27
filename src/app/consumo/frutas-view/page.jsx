
import { redirect } from "next/navigation";


export default async function Frutaview() {
  
    let frutas;
    
    
    try{
        const response = await fetch("http://localhost:3000/dados/produto-api")
        frutas = await response.json()
        
        
    
    }catch(error){

        console.log(error)
        redirect("/error")
    }
    

    return (
    <div>Fruta view</div>
  )
}
