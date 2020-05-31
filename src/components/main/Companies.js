import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import PostServices from '../../services/PostServices';
import Card from '../Card';
import Header from '../HeaderAdmin'
import { useCookies } from 'react-cookie';
import { Redirect } from 'react-router-dom';
const Companies = () => {
  const [cookie] = useCookies('')
  const [data, setData] = useState(null);
  const getData = async () => {
    const list = await PostServices.getAll();
    setData(list.data)

  }
  useEffect(() => {
    getData()
  }, [])
  if (data !== null && cookie.token ==='admin') {return (
    <React.Fragment>
      <Header />
      <Grid xs={12} container >
        {(data !== null) && data.data.map((item) => (
          <Grid item xs={6} spacing={2} key={item._id}>
            <Card data={{ company: item }} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>

  )}else if(cookie.token === undefined){
    return(
      <Redirect to='/login' />
    )
  }
  return (
    <React.Fragment>

    </React.Fragment>
  )
}
export default Companies;