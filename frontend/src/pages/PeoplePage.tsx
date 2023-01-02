import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Typography, useTheme } from "@mui/material";
import { width } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { IndicatorLightStatus, status_to_color } from "../components/IndicatorLight";


interface SummaryPersonProps {
  username: string,
  name: string,
  pronouns: string,
  lastUpdate: Date,
  timeZone: string,
  overallStatus: IndicatorLightStatus
}

export default function PeoplePage() {
  let props = {
    people: [
      {
        username: '@darkwiiplayer',
        name: 'Talia - お姉さん',
        pronouns: 'she/her',
        lastUpdate: new Date(),
        timeZone: 'Europe/Berlin',
        overallStatus: 'recovering'
      } as SummaryPersonProps,
      {
        username: '@peipr',
        name: 'Marcy',
        pronouns: 'she/her',
        lastUpdate: new Date(),
        timeZone: 'Europe/Barcelona',
        overallStatus: 'good'
      } as SummaryPersonProps,
      {
        username: '@peipr',
        name: 'Marcy',
        pronouns: 'she/her',
        lastUpdate: new Date(),
        timeZone: 'Europe/Barcelona',
        overallStatus: 'warning'
      } as SummaryPersonProps,
      {
        username: '@peipr',
        name: 'Marcy',
        pronouns: 'she/her',
        lastUpdate: new Date(),
        timeZone: 'Europe/Barcelona',
        overallStatus: 'danger'
      } as SummaryPersonProps,
      {
        username: '@peipr',
        name: 'Marcy',
        pronouns: 'she/her',
        lastUpdate: new Date(),
        timeZone: 'Europe/Barcelona',
        overallStatus: 'crisis'
      } as SummaryPersonProps,
    ]
  };

  const theme = useTheme();
  let navigate = useNavigate();

  return <div style={{padding: '10px', ...theme.typography}}>
    {/* <p>People page</p>
    <p><Link to="/myself">I/myself</Link></p>
    <p><Link to="/@darkwiiplayer">Darkwiiplayer</Link></p>
    <p><Link to="/settings">Settings</Link></p> */}
    {props.people.map((person) => {
      return <Card sx={{marginBottom: '12px'}}>
          <CardActionArea onClick={() => {navigate('/'+person.username)}}>
            <Box sx={{ display: 'flex' }}>
              <CardMedia
                component="img"
                sx={{ width: '125px', aspectRatio: 1 }}
                image="https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/egg-3442-e1f6463624338504cd021bf23aef8441@1x.jpg"
                alt="Live from space album cover"
              />
              <CardContent>
                <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
                  {person.username}
                </Typography>
                <Typography variant="h6" component="div">
                  {person.name}
                </Typography>
                <Typography variant="body1" component="div" gutterBottom>
                  {person.pronouns} - {person.timeZone}
                </Typography>
                <Typography variant="overline" component="div" gutterBottom>
                  last updated 30 min ago
                </Typography>
                <Typography variant="overline" component="div" gutterBottom>
                  <Chip label={person.overallStatus} sx={{backgroundColor: status_to_color[person.overallStatus]}} />
                </Typography>
              </CardContent>
            </Box>
          </CardActionArea>
        </Card>;
    })}
  </div>;
}
