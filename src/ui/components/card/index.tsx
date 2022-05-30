import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function RecipeReviewCard(props: any) {
  return (
    <Card style={{ backgroundColor: '#b7c0d', textAlign: 'left', paddingBottom: '0%' }} sx={{ maxWidth: 345, minHeight: 400 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src={props.element.owner.picture} height='40' width='40' sizes='(max-width: 40) 100vw, 40px' />
          </Avatar>
        }
        title={`${props.element.owner.firstName} ${props.element.owner.lastName}`}
        subheader={props.element.publishDate.split('.')[0].replace('T', ' à ')}
      />
      <CardMedia
        component="img"
        height="194"
        image={props.element.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.primary">
          {props.element.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Typography variant="body1" color="text.primary">
            {props.element.likes}
          </Typography>
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
