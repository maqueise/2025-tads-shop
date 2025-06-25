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
import { Unidade } from "@/models/unidade-medida";
import { Edit } from "lucide-react";
const response = await fetch('http://localhost:3002/unidade',{
    cache:"no-store"
  })
  const unidades:Unidade[] = await response.json();
export function UnidadesMedidaList() {
  return (
    <section className="mt-8 rounded-md border">
      <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-10">ID</TableHead>
                  <TableHead>Nome</TableHead>
                  <TableHead>Fracionamento</TableHead>
                  <TableHead className="w-[100px]">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {unidades.map((unidade) => (
                  <TableRow key={unidade.id}>
                    <TableCell className="font-medium">{unidade.id}</TableCell>
                    <TableCell>{unidade.nome}</TableCell>
                    <TableCell>{unidade.fracionamento}</TableCell>
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
