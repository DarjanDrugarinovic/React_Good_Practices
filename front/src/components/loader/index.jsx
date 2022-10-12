import { Container } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import useStyles from './styles';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function Loader({app=false}) {
  const classes = useStyles();

  return (
    
    app ?
    <Box sx={{ width: '100%' }}>
    <LinearProgress />
    </Box>
  :
    <Container disableGutters={true} maxWidth={false} style={{display: "flex", justifyContent: "center"}} >
      <CircularProgress />
    </Container>
  );
}
