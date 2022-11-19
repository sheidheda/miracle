import * as React from 'react';
import './Buybtn.css'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
 


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Buybtn() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 

  return (
    <div>
 
        <div className="bkbuttons">

            <button id='i'  onClick={() => {handleClickOpen();}} >
                Buy now
            </button>
        </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
         
        <DialogContent>
           
          <img src="https://drive.google.com/uc?export=view&id=1eGLY-y7ct2oEyZNIvRTwS9Z9GWKDWik7" alt="paystack image" className='paystack-img' loading="lazy"/>
            <h3>You are being redirected to paystack</h3>
            <a href="https://paystack.com/buy/a-royal-priesthood-vbmdcm" target="_blank" rel="noopener noreferrer">

            <button className='paystack-btn'>
                Find more books  
            </button> 
            </a>
        </DialogContent>
 
      </Dialog>
    </div>
  );
}