import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';


const styles = theme => ({
    root: {
        'max-width': 300,
        width: '100%',
        height: 300
    },
    favorite: {
        float: 'right'
    },
    paragraph: {
        margin: 0
    },
    ul: {
        margin: 0
    }
});

class BeerCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        const { beer } = this.props;

        return (
            <Paper className={classes.root}>
                <Typography variant="body2">{beer.name}</Typography>
                <IconButton aria-label="FavoriteIcon" className={classes.favorite}> 
                    <FavoriteIcon/>
                </IconButton>
                <Typography variant="body2">{beer.price}</Typography>            
                <Typography variant="body2">Type: {beer.type}</Typography>
                <ul>
                    <li><Typography variant="body2">{beer.attributes[0]}</Typography></li>
                    <li><Typography variant="body2">{beer.attributes[1]}</Typography></li>
                    <li><Typography variant="body2">{beer.attributes[2]}</Typography></li>
                </ul>                
                <Typography variant="body2">{beer.status}</Typography>            
                <Typography variant="body2">{beer.brewer}</Typography>            
                <Typography variant="body2">{beer.committed}</Typography>            
                <Typography variant="body2">{beer.totalToBeMade}</Typography>
            </Paper>
        )
    }
}

BeerCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BeerCard);