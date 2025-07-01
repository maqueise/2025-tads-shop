"use cliente";
import { Button } from "@/components/ui/button";
import {Trash } from "lucide-react";
type DeleteButtonprops = {
  id:number
}
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
} from "@/components/ui/alert-dialog"
import { deletarMarca } from "@/actions/marca-actions";

export function DeleteButton({id}: DeleteButtonprops){
  const handleDelete = async () => {
    deletarMarca(id)
  }
    return(<AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size="icon" variant="destructive">
                    <Trash />
                  </Button> 
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Voce tem certeza?</AlertDialogTitle>
          <AlertDialogDescription>
            Essa ação nao podera ser desfeita, tem certeza que deseja deletar essa marca?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel >Cancelar</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button variant="destructive" size="icon" onClick={handleDelete}>Confirmar</Button>
            </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>)
}