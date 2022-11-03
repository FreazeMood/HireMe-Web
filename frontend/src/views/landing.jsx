import PrimarySearchAppBar from "../components/navbar"
import Test from '../components/test';
import Pages from "../components/pagination";
import UserList from "../components/userList";
import { Grid } from "@mui/material";


const data = [
  { key: '1', username: 'freaze' },
  { key: '2', username: 'freazemood' },
  { key: '3', username: 'freaze_24' },
  { key: '4', username: 'freaze_mood' },
  { key: '5', username: 'freazeMood' },
  { key: '6', username: 'freaze23' },
  { key: '7', username: 'freaze22' },
  { key: '8', username: 'freaze21' },
  { key: '9', username: 'freaze2' },
] // temporary data set for testing


const Landing = () => {
  return (
    <>
      <PrimarySearchAppBar />
      <Test />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        style={{ minHeight: '100vh' }}
      >

        <Grid item xs={3}>
              <UserList data={data}/>
        </Grid>   
            <Pages /> 
      </Grid>
    </>
  );
}

export default Landing;
