import { useDispatch } from "react-redux";
import { deleteProject } from "../store/ProjectSlice";
import { Button } from "@mui/material";

const DeleteProject = ({ id }) => {

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProject(id));
  };

  return (
    <>
      <Button variant="outlined" color="error" onClick={handleDelete}>
        Delete
      </Button>
    </>
  );
};

export default DeleteProject;