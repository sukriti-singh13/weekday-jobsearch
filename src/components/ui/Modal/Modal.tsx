
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40%',
  bgcolor: 'background.paper',
  borderRadius:"20px",
  boxShadow: 24,
  p: 4,
};

export default function JobModal({ open, handleClose, content }) {
  return (
  
      <Modal
      
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style} >
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            About Company
          </Typography>
          <Typography id='modal-modal-description' marginTop={2}>
            {content}
          </Typography>
        </Box>
      </Modal>

  );
}
