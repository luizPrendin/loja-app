import{promises as fs} from 'fs'
import { NextResponse } from 'next/server';



export async function GET(){
  //Realizando a leitura do arquivo db.json desde a raiz do projeto
  const file =await fs.readFile(
    process.cwd() + "/src/app/api/base/db.json",
    "utf-8"
  );

  const listaUsuarios = await JSON.parse(file);

  //Retornando os dados do arquivo
  return NextResponse.json(listaUsuarios.usuarios);
}