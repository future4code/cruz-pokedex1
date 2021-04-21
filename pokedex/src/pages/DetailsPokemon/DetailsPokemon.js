import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import {goToBack} from '../../router/coordinator'
import {useHistory} from 'react-router-dom'
import {PowersCard} from '../../components/powerscard/PowersCard'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Details() {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = useState(true);

  const close = () => {
    setOpen(false);
    setTimeout(function(){goToBack(history)}, 300)
    
  }
  return (
    <div>
      <Dialog fullScreen open={open} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="close">
              <button onClick={close}>fechar</button>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Detalhes do asd
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          <PowersCard/>
        </List>
      </Dialog>
    </div>
  );
}