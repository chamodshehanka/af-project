import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './FeaturedCard.css';
import { CardActions } from '@material-ui/core';

class FeatureCard extends Component{

    render(){
        return(
            <Card>
                <CardMedia>
                    <img className='featureImage' alt="Category Feature Img" src={'https://s3.ap-south-1.amazonaws.com/www.kellyfelder.com/banners/4f587420069060f35438cdb84b8e11273b054d6d.jpg'}/>
                </CardMedia>
                <CardContent className='featureContent'>
                <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Learn More</Button>
        </CardActions>
      </Card>
    );
  }
}

export default FeatureCard;
