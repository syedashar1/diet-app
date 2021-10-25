import { useEffect, useState } from 'react';
import './App.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function App() {


  const sb ={name:'Strawberry Protien Shake' , serving : 1 , calories : 200 , pic :'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F404644.jpg&w=380&h=505&c=sc&poi=face&q=85' }
  const banana = {name:'Banana', serving : 1 , calories : 89 , pic : 'https://media.istockphoto.com/photos/single-fresh-raw-clean-isolated-one-alone-horizontally-oriented-on-picture-id1266340637?b=1&k=20&m=1266340637&s=170667a&w=0&h=m215bqBaJETpZ5Tuyl2dhIdcfqpecCxBM7tXyAZzmn8=' }
  const egg = {name:'Boiled Egg' , serving : 1 , calories : 155 , pic:'https://www.seriouseats.com/thmb/GLnX8RfV3LgV9tAYA49uDozIC-I=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2014__04__20140430-peeling-eggs-10-cd5f3eda6734438dae846e11e04cb675.jpg' }
  const ts = {name:'Turkey Sandwitch', serving : 1 , calories : 177 , pic :'https://static.toiimg.com/thumb/60480328.cms?width=300&height=300' }

  const [meal, setMeal] = useState('')
  const [cals, setCals] = useState(0)
  const [noOfMeals, setNoOfMeals] = useState(0)
  const [valError, setValError] = useState(null)
  const [generateShow, setGenerateShow] = useState(false)
  const [generatedMeal, setGeneratedMeal] = useState(null)

  useEffect(() => {
     
  }, [ ])


  const generateHandler = () =>{
    if(meal == '') { setValError('Please Select a Meal') ; return ; }
    if(cals < 1) { setValError('Please Select a Valid Calorie Range') ; return ; }
    if(noOfMeals < 1) { setValError('Please Select a Valid Number of Meals Range') ; return ; }

    setValError(null)


    let x = {
      morning : [] ,

      lunch : [] , 

      dinner : [] ,

      snack : []
    }

    let y = cals 

    if(meal == 'Vegan'){
      for (let i = 0; i < noOfMeals ; i++) {
        
        if(i==0) x.morning.push(sb)
        if(i==1) x.lunch.push(sb)
        if(i==2) x.dinner.push(sb)
        if(i==3) x.snack.push(sb)
        
      }
    }



    if(meal=='Vegetable'){

    }




  }


  return (
    <div className="App">
      <Container>
      <Grid container spacing={5}>
        <Grid item >
          <div style={{fontWeight : meal == 'Anything' ? 600 : 200}} 
          onClick={()=>setMeal('Anything')} >
          Anything
          </div>
        </Grid>
        <Grid item >
          <div  style={{fontWeight : meal == 'Paleo' ? 600 : 200}} 
          onClick={()=>setMeal('Paleo')}>
          Paleo
          </div>
        </Grid>
        <Grid item >
          <div  style={{fontWeight : meal == 'Vegetable' ? 600 : 200}} 
          onClick={()=>setMeal('Vegetable')}>
            Vegetable</div>
          </Grid>
        <Grid item >
          <div  style={{fontWeight : meal == 'Vegan' ? 600 : 200}} 
          onClick={()=>setMeal('Vegan')}>
          Vegan
          </div>
        </Grid>
        <Grid item >
          <div  style={{fontWeight : meal == 'Ketogenic' ? 600 : 200}} 
          onClick={()=>setMeal('Ketogenic')}>
          Ketogenic
          </div>
        </Grid>
        <Grid item >
          <div  style={{fontWeight : meal == 'Meditarranian' ? 600 : 200}} 
           onClick={()=>setMeal('Meditarranian')}>
        Meditarranian</div>
        </Grid>
      </Grid>

      <br/><br/>


      <Container style={{textAlign:'center'}} >
        <span>I want to Eat : </span>
        <span><TextField label='Calories' type='number' value={cals} min="1" onChange={(e)=>setCals(e.target.value)}/></span>
      </Container>


      <br/><br/>


    <Container style={{textAlign:'center'}} >
      <span>In : </span>
      <span><TextField label='Calories' type='number' value={noOfMeals} min="2" max="5" onChange={(e)=>setNoOfMeals(e.target.value)}/></span>


      <br/><br/>

      <Button size='large' variant='contained' onClick={generateHandler} >Generate</Button>

      {valError && <div style={{margin:'20px'}} >
        <Alert severity="error">{valError}</Alert>
      </div>}

    </Container>
     


      </Container>
    </div>
  );
}

export default App;