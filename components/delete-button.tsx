"use client";
import { deletarMarca } from "@/actions/marca-actions";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { toast } from "sonner";
type DeleteButtonProps = {
  id: string;
};
export function DeleteButton({ id }: DeleteButtonProps) {
  const handleDelete = async () => {
    const { sucesso, mensagem } = await deletarMarca(id);
    if (sucesso) {
      toast.success(mensagem);
    } else {
      toast.error(`Erro: ${mensagem}`);
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" size="icon">
          <Trash />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Exclusão de Registro</AlertDialogTitle>
          <AlertDialogDescription>
            Tem certeza que deseja excluir este registro? Esta ação não pode ser
            desfeita.

          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction asChild>

            <Button variant="destructive" onClick={handleDelete}>
              Excluir
            </Button>

          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

  );
}

