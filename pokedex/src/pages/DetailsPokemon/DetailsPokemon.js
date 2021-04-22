import React, {useState, useEffect, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {List, AppBar, Toolbar, IconButton, Typography, Slide, Dialog} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import {goToBack} from '../../router/coordinator'
import {useHistory} from 'react-router-dom'
import {DetailsComponent} from '../../components/detailscard/DetailsCard'
import { useParams } from 'react-router-dom'
import GlobalStateContext from "../../global/GlobalStateContext";
import {DetailsCard} from '../../globalStyled'

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
  const { id } = useParams();
  const { pokemons } = useContext(GlobalStateContext);

  const index = pokemons.findIndex((item) => {
    return item.name === id;
  })
  
  const close = () => {
    setOpen(false);
    setTimeout(function(){goToBack(history)}, 200)
  }
  return (
    <div>
      <Dialog fullScreen open={open} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="close" onClick={close}>
              <CloseIcon/>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Detalhes do {id}
            </Typography>
          </Toolbar>
        </AppBar>
        <DetailsCard>
          {pokemons[index] && <>
  
          <DetailsComponent 
          powers={pokemons[index].stats}
          moves={pokemons[index].moves}
          sprites={pokemons[index].sprites}
          name={pokemons[index].name}
          />
          </>
          }
        </DetailsCard>
      </Dialog>
    </div>
  );
}