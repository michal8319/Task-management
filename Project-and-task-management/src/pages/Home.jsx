import Button from '@mui/joy/Button';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  return (
    <>
      <Button
        endDecorator={<KeyboardArrowRight />}
        color="success"
        onClick={() => navigate("/login")}
      >
        Login
      </Button>
    </>
  );
};

export default Home;