import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 225,
  },
  top: {
    marginTop: 20,
    paddingLeft: 10,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
  },
  content: {
    minWidth: 310,
    marginTop: 50,
  },
}));

export default useStyles