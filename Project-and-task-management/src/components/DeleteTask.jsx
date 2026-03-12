import { useDispatch } from "react-redux"
import { deleteTask } from "../store/TaskSlice"
import { Button } from "@mui/material";

const DeleteTask=({id})=>{
    const dispatch = useDispatch();
    const handleDelete=()=>{
        dispatch(deleteTask(id))
    }
    return(
        <>
        <Button variant="outlined" color="error" onClick={handleDelete}>Delete</Button>
        </>
    )
}
export default DeleteTask