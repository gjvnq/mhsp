import { TextField, Typography, useTheme } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import IndicatorLight, { IndicatorLightStatus } from '../components/IndicatorLight';
import "./PersonPage.css";

export default function PersonPage() {
  const params = useParams();
  const username = params['person'] || '@darkwiiplayer';

  const [date, setDate] = useState(new Date());

  let props = {
    name: 'Talia - お姉さん',
    pronouns: 'she/her',
    lastUpdate: new Date(),
    timeZone: 'Europe/Berlin',
    fronting: 'Unclear, perhaps Marcy or Mir',
    notice: 'Please don’t talk about politics today.'
  };

  function refreshClock() {
    setDate(new Date());
  };

  useEffect(() => {
      const timer = setInterval(refreshClock, 1000);
      return function cleanup() {
        clearInterval(timer);
      };
  }, []);

  const theme = useTheme();

  function format_date(date: Date) {
    return date.toLocaleTimeString('en', {timeZone: props.timeZone, hourCycle: 'h24', timeZoneName: 'shortOffset', hour: '2-digit', minute: '2-digit', second: undefined});
  }

  return <div style={theme.typography} className="person_page">
    <Typography className="username" variant="button" paragraph>{username}</Typography>
    <div className="person_card_img"></div>
    <div className="person_card_info">
      <span className="person_card_info_name">{props.name}</span>
      <span className="person_card_info_pronouns">{props.pronouns} - {props.timeZone}</span>
      <span className="person_card_info_last_update">last updated 30 min ago</span>
    </div>
    <span className="muted-label">Local time</span>
    <span>{format_date(date)}</span>
    <span className="muted-label">Fronting</span>
    <span>{props.fronting}</span>
    <span className="muted-label">Notice</span>
    <span>{props.notice}</span>
    <div id="private_notes_div">
      <TextField
        id="private_notes"
        label="My Private Notes"
        multiline
        maxRows={4}
        fullWidth
        size="small"
      />
    </div>
    <div className="lights_grid">
      <p className="indicator-lights">Indicator lights</p>
      <IndicatorLight status={IndicatorLightStatus.Off} label="Physical Pain"></IndicatorLight>
      <IndicatorLight status={IndicatorLightStatus.Recovering} label="Physical Pain"></IndicatorLight>
      <IndicatorLight status={IndicatorLightStatus.Good} label="Physical Pain"></IndicatorLight>
      <IndicatorLight status={IndicatorLightStatus.Warning} label="Physical Pain"></IndicatorLight>
      <IndicatorLight status={IndicatorLightStatus.Danger} label="Physical Pain"></IndicatorLight>
      <IndicatorLight status={IndicatorLightStatus.Crisis} label="Physical Pain"></IndicatorLight>
    </div>
  </div>;
}
