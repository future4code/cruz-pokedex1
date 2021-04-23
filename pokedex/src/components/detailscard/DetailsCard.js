import React, {useEffect, useState} from "react"
import {DivPowerCards, DivAtacksCards, DivImgCards, ButtonGroupDetails, Title} from "../../globalStyled"
import NotInterested from '@material-ui/icons/NotInterested';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles, withStyles } from '@material-ui/core/styles';
const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5,
    },
  }))(LinearProgress);
const useStyles = makeStyles({
    root: {
      width: '100%',
      height: 10,
    },
  });
  
export const DetailsComponent = ({powers, moves, sprites, name}) => {
    const classes = useStyles();
    const [progress, setProgress] = React.useState(0);
    const [buffer, setBuffer] = React.useState(0);
    const [keyImg, setKeyImg] = useState('front_default')
    const onChangeImg = (e) => {
        setKeyImg(e.target.value)
    }
    const keysImg = ['back_default', 'back_female', 'back_shiny', 'back_shiny_female', 'front_default', 'front_female', 'front_shiny', 'front_shiny_female']
    const iconesUrlsImg= ['back/25.png', 'back/female/25.png', 'back/shiny/25.png', 'back/shiny/female/25.png','25.png', 'female/25.png', 'shiny/25.png', 'shiny/female/25.png']
    const baseUrlimg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'; 
    useEffect(() => {
            setProgress(100)
            setBuffer(100)
    }, [])
    
      
    return <>
    <Title>{name}</Title>
    <DivImgCards>
        <div id="divImg">
        {
            sprites[keyImg] ?
            <img src={sprites[keyImg]}/>:
        <>
        <NotInterested style={{ fontSize: 200 }} color="secondary"/>
        <h3>Sem imagens</h3>
        </>
        }
        </div>  
        <h2>{keyImg.replace("_", " ").replace("_", " ")}</h2>
        <ButtonGroupDetails onChange={onChangeImg} value={keyImg}>
            {keysImg.map((item, index) => {
                return (<div>
                    <input type="radio" id={item+"_radio"} value={item} name="urlImg" checked={keyImg === item}/>
                    <label for={item+"_radio"} id={item}>
                        <img src={baseUrlimg+iconesUrlsImg[index]}/>
                        </label></div>)
            })}
        </ButtonGroupDetails>
     
    </DivImgCards>
    <DivPowerCards>
        <h1>Poderes</h1>

        {powers.map((item) => {
            const percent = item.base_stat/2 > 100 ? 100 : item.base_stat/2; 
            return ( <>
            <h3><p>{item.stat.name}</p>
            <p>{item.base_stat}</p></h3>
            <div className={classes.root}>
                <BorderLinearProgress variant="buffer" value={progress === 100 ? percent : progress }  valueBuffer={buffer} />
            </div>
            </>)
        })}
    </DivPowerCards>
    <DivAtacksCards>
        <h1>Principais Ataques</h1>
        {moves.map((item, index) => {
            return(
                   index < 10 && (<h3>{item.move.name}</h3>)
              )
        })}
</DivAtacksCards>
    </>
}