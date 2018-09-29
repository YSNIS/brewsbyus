import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import classNames from 'classnames';


const styles = theme => ({
    root: {
        'max-width': 160,
        width: '100%',
        height: 160,
        position: 'relative',
        padding: '3px 4px 0',
        '& img': {
            width: 64,
            height: 64
        }
    },
    favorite: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 24,
        height: 24,
        '& svg': {
            width: 16,
            height: 16
        }
    },
    'card-font': {
        'font-size': 10
    },
    title: {
        'text-align': 'center'
    },
    price: {
        'text-align': 'right'
    },
    'attr-list': {
        margin: 0,
        '& li': {
            height: 12,
            'font-size': 12
        }
    },
    statusGroup: {
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 54
    }
});

class BeerCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { classes, beer } = this.props;

        return (
            <Paper className={classes.root}>
                <Typography variant="body2" className={classNames(classes['card-font'], classes.title)}>{beer.name}</Typography>
                <IconButton aria-label="FavoriteIcon" className={classes.favorite}> 
                    <FavoriteIcon/>
                </IconButton>
                <Typography 
                    variant="body2" 
                    className={classNames(classes['card-font'], classes.price)}>
                    ${(beer.price/100).toFixed(2)}
                </Typography>    
                <div style={{'display': 'flex'}}>
                    <img src="https://media.gettyimages.com/photos/beer-glass-with-overflowing-foam-picture-id183341783" />
                    <div>
                        <Typography variant="body2" style={{'textAlign': 'center'}} className={classes['card-font']}>Type: {beer.type}</Typography>
                        <ul className={classes['attr-list']}>
                            <li><Typography variant="body2" className={classes['card-font']}>{beer.attributes[0]}</Typography></li>
                            <li><Typography variant="body2" className={classes['card-font']}>{beer.attributes[1]}</Typography></li>
                            <li><Typography variant="body2" className={classes['card-font']}>{beer.attributes[2]}</Typography></li>
                        </ul>
                    </div>
                </div>
                <div className={classes.statusGroup}>
                    <Typography variant="body2" className={classes['card-font']}>{beer.status}</Typography>            
                    { beer.status === 'Brewing' &&                     
                        <React.Fragment>
                            <Typography variant="body2" className={classes['card-font']}>{beer.brewer}</Typography> 
                            <Typography variant="body2" className={classes['card-font']}>{beer.totalToBeMade - beer.committed} Left!</Typography>
                        </React.Fragment>
                    }
                    { beer.status !== 'Brewing' &&
                        <Typography variant="body2" className={classes['card-font']}>{beer.committed} Committed!</Typography>                        
                    }
                </div>
            </Paper>
        )
    }
}

BeerCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BeerCard);