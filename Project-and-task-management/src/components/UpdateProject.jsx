import { useDispatch } from "react-redux";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

const UpdateProject = ({ project }) => {

  const dispatch = useDispatch();

  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);

  const handleUpdate = () => {

    dispatch(updateProject({
      id: project.id,
      name: name,
      description: description
    }));

  };

  return (
    <div>

      <TextField
        label="Project name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <Button variant="outlined" onClick={handleUpdate}>
        Update
      </Button>

    </div>
  );
};

export default UpdateProject;