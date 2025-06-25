import { DeleteButton } from "@/components/delete-button";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Grupos } from "@/models/grupos";
import { Edit } from "lucide-react";
const response = await fetch('http://localhost:3002/grupos',{
    cache:"no-store"
  })
  const grupos:Grupos[] = await response.json();
export function GruposProdutoList() {
  return (
    <section className="mt-8 rounded-md border">
      <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-10">ID</TableHead>
                  <TableHead>Nome</TableHead>
                  <TableHead>SubGrupo</TableHead>
                  <TableHead className="w-[100px]">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {grupos.map((grupo) => (
                  <TableRow key={grupo.id}>
                    <TableCell className="font-medium">{grupo.id}</TableCell>
                    <TableCell>{grupo.nome}</TableCell>
                    <TableCell>{grupo.subGrupo}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="icon">
                          <Edit />
                        </Button>
                        <DeleteButton></DeleteButton>             
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
    </section>
  );
}
