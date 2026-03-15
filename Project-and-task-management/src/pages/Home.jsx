import Button from '@mui/joy/Button';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage: `url('/task_image.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw',
        margin: 0,
        padding: 0,
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '30px',
        backgroundColor: 'rgba(0,0,0,0.3)',
        backgroundBlendMode: 'darken',
      }}
    >
      <h1 style={{color: 'white',fontSize: '3.5rem',fontWeight: 'bold',textAlign: 'center',textShadow: '2px 2px 8px rgba(0,0,0,0.6)',letterSpacing: '3px',margin: 0,}}>
        Task Management
      </h1>
      <p style={{color: 'rgba(255,255,255,0.85)',fontSize: '1.2rem',textAlign: 'center',textShadow: '1px 1px 4px rgba(0,0,0,0.5)',margin: 0,}}>
        Organize your work, achieve your goals
      </p>
      <Button
        endDecorator={<KeyboardArrowRight />}
        onClick={() => navigate("/login")}
        style={{
          marginTop: '10px',
          padding: '14px 40px',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          backgroundColor: '#1976d2',
          color: 'white',
          borderRadius: '30px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
        }}
      >
        Get Started
      </Button>
    </div>
  );
};

export default Home;