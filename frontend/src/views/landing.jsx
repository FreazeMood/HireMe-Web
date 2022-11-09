import PrimarySearchAppBar from "../components/navbar"
import Pages from "../components/pagination";
import UserList from "../components/userList";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";


const Landing = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const create = async () => {
      const res = await fetch('http://localhost:8080/api/users/', { mode: 'cors' })
          const respData = await res.json()
          setData(respData.test);
        }
    create()
  }, [])

  return (
    <>
      <PrimarySearchAppBar />
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
