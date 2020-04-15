import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import Header from './Header';
import Menu from './Menu';
import HomePage from './HomePage/HomePage';

const useStyles = makeStyles(() => ({
  app: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%'
  },
  contet: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%'
  },
  homePage: {
    paddingLeft: '50px',
    width: '100%',
    height: '100%'
  }
}));

export default () => {
  const classes = useStyles();
  const [sidenavOpen, setSidenavOpen] = React.useState(false);

  const handleSidenavClickButton = () => {
    setSidenavOpen(!sidenavOpen);
  }

  //useContext???
  return (
    <Box className={classes.app}>
      <Header OnSidenavButtonClick={handleSidenavClickButton} />
      <div className={classes.contet}>
        <Menu isOpen={sidenavOpen} />
        <HomePage className={classes.homePage} />
      </div>
    </Box>
  );
}