
const DelteProject=()=> {
 const handleDelete =()=> {
 dispatch(deleteProject(id))}
 return(<>
<Button variant="outlined" color="error" onClick={handleDelete}>
  Delete
</Button></>
)
}