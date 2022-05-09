import { Paper } from '@mui/material';
import profileImage from '../../images/Profile_Large.jpg';

const styles = {
  imgPaper: {
    backgroundImage: `url(${profileImage})`,
    height: 350,
    width: 350,
    borderRadius: '50%',
    margin: '28px',
    backgroundSize: 'cover',
  }
}

function Headshot() {
  return ( 
    <Paper  elevation={ 0 } style={ styles.imgPaper } />
  );
}

export default Headshot;