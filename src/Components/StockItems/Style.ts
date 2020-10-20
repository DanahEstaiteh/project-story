import { makeStyles } from '@material-ui/core';

export const stockItemStyles = makeStyles({
  media: {
    height: 140,
    width: 140
  },
  box: {
    width: '140px',
    height: '140px',
    borderRadius: '10px',
    color: 'white',
    '& > P': {
      paddingTop: '20px'
    }
  },
  info: {
    paddingTop: '20px'
  },
  tab: {
    display: 'inline',
    padding: '2px'
  },
  appBar: {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'static'
  },
  buttonTab: {
    backgroundColor: '#E2E2E2',
    borderBottom: '3px solid #6EC89B',
    color: '#767B81'
  },
  selectedTab: {
    backgroundColor: '#767B81',
    borderBottom: '3px solid red',
    color: '#E2E2E2'
  },
  container: {
    padding: '0px 10px'
  },
  divider: {
    height: '10px',
    borderRadius: '5px',
    backgroundColor: '#EEEFEE',
    border: 'solid 1px #767676',
    boxShadow: '1px 1px 1px 1px #767'
  },
  root: {
    width: '1000px'
  }
});
