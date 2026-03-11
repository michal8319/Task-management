import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={[
        (theme) => ({
          bgcolor: '#fff',
          color: 'grey.800',
          border: '4px solid',
          borderColor: 'grey.300',
          p: 25,
          borderRadius: 2,
          textAlign: 'center',
          fontSize: '0.875rem',
          fontWeight: '1000',
          ...theme.applyStyles('dark', {
            bgcolor: '#101010',
            color: 'grey.300',
            borderColor: 'grey.800',
          }),
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    />
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

const ProjectDetails=()=>{
    return(
        <>
        <Box sx={{ mx: 'auto', width: 200 }}></Box>


<Box
  sx={{
    display: 'grid',
    gridAutoFlow: 'row',
    gridTemplateColumns: 'repeat(10, 8fr)',
    gridTemplateRows: 'repeat(1, 200px)',
    gap: 1,
  }}
>
  <Item sx={{ gridColumn: '1', gridRow: '1 / 25' }}>1</Item>
  <Item sx={{ gridColumn: '2', gridRow: '1 / 25' }}>2</Item>
  <Item sx={{ gridColumn: '3', gridRow: '1 / 25' }}>3</Item>
</Box>

        </>
    )
}
export default ProjectDetails