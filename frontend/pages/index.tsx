import Head from 'next/head'
import Button from '@mui/material/Button'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import Paper from '@mui/material/Paper';

export default function Home() {
  return (
    <>
      <Head>
        <title>MHSP</title>
        <meta name="description" content="Mental Health Status Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{display: 'flex', flexDirection: 'column'}}>
        <main style={{flexGrow: 1}}>
          <Button variant="contained">Hello World</Button>
        </main>
        <Paper sx={{ width: '100%' }} elevation={3}>
          <BottomNavigation
            showLabels
            value={0}
          >
            <BottomNavigationAction label="Myself" icon={<AccountCircleIcon />} />
            <BottomNavigationAction label="People" icon={<PeopleIcon />} />
            <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
          </BottomNavigation>
        </Paper>
      </main>
    </>
  )
}
