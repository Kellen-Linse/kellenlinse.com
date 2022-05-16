import { Typography, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { FadeIn } from '../../../../../../Effects/FadeIn';
import skillsList from './SkillsList';

const gridStyle = {
  border: '4px solid white',
  width: {
    xs: '110px',
    lg: '140px',
  },
  height: {
    xs: '100px',
    lg: '150px',
  },
  borderRadius: '5%',
  justifyContent: 'center',
  alignItems: 'center',
  direction: 'column',
  m: 3,
  px: 3,
  pt: 2,
  mb: 1,
  transition: 'transform 0.15s ease-in-out',
  '&:hover': { transform: 'scale3d(1.1, 1.1, 1)' },
};

function Skills() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('lg'));
  return (
    <Grid item xs={12} container justifyContent='center' alignContent='center'>
      {skillsList.map((skill, i) => {
        return (
          <FadeIn key={i}>
          <Grid
            container  justifyContent='center' alignContent='center'
            sx={{
              ...gridStyle,
              borderColor: skill.color,
              display: skill.display,
            }}
            
          >

              <i
                style={{
                  fontSize: matches ? '50px' : '80px',
                  color: 'whitesmoke',
                  justifyContent: 'center',
                  alignItems: 'center',
                  direction: 'column',
                }}
                className={skill.class}
              ></i>
              <Typography textAlign='center' sx={{ mt: 0, color: 'whitesmoke' }}>
                {skill.title}
              </Typography>
        
          </Grid>
              </FadeIn>
        );
      })}
    </Grid>
  );
}

export default Skills;
