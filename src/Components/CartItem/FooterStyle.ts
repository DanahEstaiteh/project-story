import makeStyles from '@material-ui/core/styles/makeStyles';

export const cartFooterStyles = makeStyles({
  topic: {
    width: '200px',
    backgroundColor: '#F5F5F5',
    height: '25px',
    borderRight: '1px solid black',
    fontWeight: 'bold',
    fontSize: '16px',
    padding: '10px'
  },
  list: {
    padding: '10px',
    '& >li': {
      height: '45px',
      padding: '0px'
    }
  },
  discountText: {
    border: 'none',
    backgroundColor: '#F5F5F5',
    width: '50px',
    height: '30px',
    color: '#66678A',
    fontSize: 'medium'
  },
  total: {
    color: '#2ECC71'
  },
  data: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '250px',
    color: '#66678A',
    '& > *': {
      padding: '10px'
    }
  }
});
