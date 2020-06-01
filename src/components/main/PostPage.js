import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import PostServices from '../../services/PostServices';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const [data, setData] = useState(null);
  const {id} = useParams();
  const getData = async () => {
    const list = await PostServices.getById(id);
    setData(list.data[0])
  }
  useEffect(()=>{getData()},[])
  return (
    <React.Fragment>
      {console.log(data)
      }
      <Typography variant="h6" gutterBottom>
        Xác nhận
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="body2" >
            Tên công ty:
          </Typography>
          
        </Grid>
      </Grid>
    </React.Fragment>
  );
}