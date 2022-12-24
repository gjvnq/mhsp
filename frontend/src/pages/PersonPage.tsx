import { Typography, useTheme } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./PersonPage.css";

export default function PersonPage() {
  const params = useParams();
  const username = params['person'] || '@darkwiiplayer';

  const [date, setDate] = useState(new Date());

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

  return <div style={theme.typography} className="person_page">
    <Typography className="username" variant="button" paragraph>{username}</Typography>
    <div className="person_card">
      <div className="person_card_img"></div>
      <div className="person_card_info">
        <span className="person_card_info_name">Talia - お姉さん</span>
        <span className="person_card_info_pronouns">she/her</span>
        <span className="person_card_info_last_update">last updated 30 min ago</span>
      </div>
    </div>
    <div className="grid1">
      <span className="label gray_label">Local time</span>
      <span className="value">{date.toLocaleTimeString('en', {timeZone: 'Europe/Berlin', hourCycle: 'h24', timeZoneName: 'shortOffset', hour: '2-digit', minute: '2-digit', second: undefined})}</span>
      <span className="label gray_label">Fronting</span>
      <span className="value">Unclear, perhaps Marcy or Mir</span>
      <span className="label gray_label">Notes</span>
      <span className="value">Please don’t talk about politics today. </span>
    </div>
    <p className="gray_label center">Indicator lights</p>
  </div>;
}
