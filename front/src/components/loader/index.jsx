import { Container } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import useStyles from './styles';

export default function Loader() {
  const classes = useStyles();

  return (
    <Container disableGutters={true} maxWidth={false} className={classes.main}>
      <CircularProgress />
    </Container>
  );
}
