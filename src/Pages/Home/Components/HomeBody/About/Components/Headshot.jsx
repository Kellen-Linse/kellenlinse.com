import { Paper } from '@mui/material';
import profileImage from '../../../../../../images/Profile_Large.jpg';

const styles = {
  imgPaper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${profileImage})`,
    border: '3px solid darkGrey',
    height: 350,
    width: 350,
    borderRadius: '50%',
    backgroundSize: 'cover',
    mb: 5
  }
}

function Headshot() {
  return ( 
    <Paper  elevation={ 0 } sx={ styles.imgPaper } />
  );
}

export default Headshot;