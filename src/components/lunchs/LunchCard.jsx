import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/styles';
import classnames from 'classnames';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import moment from 'moment'
import './styles/card.scss'
import 'moment/locale/fr'
moment.locale('fr')


const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default class LunchCard extends Component {
  render() {
    const classNames = {cardAvatar: 'lunch-card-avatar'}
    const { title, description, author, lunch_date, photo_url } = this.props;
    return (
      <Card className={"classes.card"}>
        <CardHeader
          avatar={
            <CardMedia
              image={author.avatar_url}
              component='img'
              classes={{media: "lunch-card-avatar"}}
            />
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={title}
          subheader={moment(lunch_date).format('dddd Do, MMMM YYYY')}
        />
        <CardMedia
          className={"lunch-card-media"}
          image={photo_url}
          title={title}
        />
        <CardContent>
          <Typography component="p">
            {description}
        </Typography>
        </CardContent>
        <CardActions className={"classes.actions"}>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    )
  }
}
