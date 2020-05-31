import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { useCookies } from 'react-cookie';
const useStyles = makeStyles((theme) => {
  return {
    card: {
      display: 'flex',
      margin: theme.spacing(2)
    },
    cardDetails: {
      flex: 1,
    },
    cardMedia: {
      width: 160,
    },
  }
});

export default function FeaturedPost(props) {
  const classes = useStyles();
  const [cookie] = useCookies()
  const { company } = props.data;
 const href = cookie.token === "admin" ? `/corp/${company._id}`
  :  `/users/${company._id}`
  return (
    <CardActionArea >
      <Link to={href} style={{ textDecoration: 'none' }}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {company.companyName}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                {company.address}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {company.safary}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                Continue reading...
              </Typography>
            </CardContent>
          </div>
          {/* <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={post.image} title={post.imageTitle} />
          </Hidden> */}
        </Card>
      </Link>
    </CardActionArea>
  );
}
