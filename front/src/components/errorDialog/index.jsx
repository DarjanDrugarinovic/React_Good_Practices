import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux';

export default function ResponsiveDialog(props) {
  const { error, handleError } = props;
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(handleError(null));
  };

  useEffect(() => {
    return () => {
      dispatch(handleError(null));
    };
  }, [dispatch, handleError]);

  console.log((JSON.parse(error)).stack)

  return (
    <Dialog open={true} onClose={handleClose}>
      <DialogTitle>Error</DialogTitle>
      <DialogContent >
        <DialogContentText style={{whiteSpace: 'break-spaces'}}>
          {`${(JSON.parse(error)).message}\nFor more details open developer tools.`}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          Zatvori
        </Button>
      </DialogActions>
    </Dialog>
  );
}
