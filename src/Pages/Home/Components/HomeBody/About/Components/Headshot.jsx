import { Paper } from '@mui/material';
import profileImage from '../../images/Profile_Large.jpg';

const styles = {
  imgPaper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${profileImage})`,
    height: 350,
    width: 350,
    borderRadius: '50%',
    backgroundSize: 'cover',
  }
}

function Headshot() {
  return ( 
    <Paper  elevation={ 0 } style={ styles.imgPaper } />
  );
}

export default Headshot;