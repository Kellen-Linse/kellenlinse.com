import { Typography, Grid } from '@mui/material';
import skillsList from './SkillsList';

const gridStyle = {
  border: '4px solid white',
  width: '140px',
  height: '150px',
  justifyContent: 'center',
  alignContent: 'center',
  borderRadius: '5%',
  m: 3,
  px: 3,
  py: 1,
  transition: "transform 0.15s ease-in-out",
  "&:hover": { transform: "scale3d(1.1, 1.1, 1)" },
};

function Skills() {
  return (
    <Grid item xs={12} container justifyContent='center' alignContent='center'>
      {skillsList.map((skill, i) => {
        return (
          <Grid
            container
            sx={{ ...gridStyle, borderColor: skill.color, display: skill.display }}
            key={i}
          >
            <i
              style={{ fontSize: '80px', color: 'whitesmoke' }}
              className={skill.class}
            ></i>
            <Typography sx={{ mt: 2, color: 'whitesmoke' }}>
              {skill.title}
            </Typography>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Skills;
