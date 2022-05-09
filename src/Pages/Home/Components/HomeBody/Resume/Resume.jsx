import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import Title from '../../Shared_Components/Title';
import ResumeCard from './components/ResumeCard';

function Resume() {
  return (
    <Box sx={{ height: 800 }}>
      <Stack
       sx={{ height: '100%' }}
        id='resume'
        direction='column'
        alignItems='center'
      >
        <Title title='<Resume />' txtColor='primary.main'/>
        <ResumeCard />
      </Stack>
    </Box>
  );
}

export default Resume;
