import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteBorder';
import classNames from 'classnames';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import Modal from '@material-ui/core/Modal';


const styles = theme => ({
    root: {
        'max-width': 160,
        width: '100%',
        height: 160,
        position: 'relative',
        padding: '3px 4px 0',
        cursor: 'pointer',
        '&:hover': {
            boxShadow: '0px 1px 5px 1px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -1px rgba(0, 0, 0, 0.12)'
        },
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
    },
    modal: {
        background: 'white',
        width: '50%',
        height: '50%',
        margin: 'auto',
        marginTop: 100
    }
});

class BeerCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            beer: props.beer
        }
    }

    render() {

        function getModalStyle() {
            const top = 50;
            const left = 50;

            return {
                top: `${top}%`,
                left: `${left}%`,
                transform: `translate(-${top}%, -${left}%)`,
            };
        }

        let self = this;

        const { classes, styles, beer } = this.props;

        function saveToFavorites(e) {
            e.stopPropagation();
            console.log('Save');
            self.setState({
                beer: {
                    ...self.state.beer,
                    favorite: !self.state.beer.favorite
                }
            });
        }

        function handleOpen(e) {
            e.stopPropagation();
            console.log('hi');
            self.setState({ open: true });
        };

        function handleClose() {
            self.setState({ open: false });
        };

        return (
            <React.Fragment>
                <Paper style={styles} className={classes.root} onClick={handleOpen}>
                    <Typography variant="body2" className={classNames(classes['card-font'], classes.title)}>{beer.name}</Typography>
                    {self.state.beer.favorite &&
                        <IconButton aria-label="FavoriteIcon" onClick={saveToFavorites} className={classes.favorite}>
                            <FavoriteIcon />
                        </IconButton>
                    }
                    {!self.state.beer.favorite &&
                        <IconButton aria-label="FavoriteOutlinedIcon" onClick={saveToFavorites} className={classes.favorite}>
                            <FavoriteOutlinedIcon />
                        </IconButton>
                    }
                    <Typography
                        variant="body2"
                        className={classNames(classes['card-font'], classes.price)}>
                        ${(beer.price / 100).toFixed(2)}
                    </Typography>
                    <div style={{ 'display': 'flex' }}>
                        <img src="https://media.gettyimages.com/photos/beer-glass-with-overflowing-foam-picture-id183341783" />
                        <div>
                            <Typography variant="body2" style={{ 'textAlign': 'center' }} className={classes['card-font']}>Type: {beer.type}</Typography>
                            <ul className={classes['attr-list']}>
                                <li><Typography variant="body2" className={classes['card-font']}>{beer.attributes[0]}</Typography></li>
                                <li><Typography variant="body2" className={classes['card-font']}>{beer.attributes[1]}</Typography></li>
                                <li><Typography variant="body2" className={classes['card-font']}>{beer.attributes[2]}</Typography></li>
                            </ul>
                        </div>
                    </div>
                    <div className={classes.statusGroup}>
                        <Typography variant="body2" className={classes['card-font']}>{beer.status}</Typography>
                        {beer.status === 'Brewing' &&
                            <React.Fragment>
                                <Typography variant="body2" className={classes['card-font']}>Brewed By: <span style={{ color: '#3570ce' }}>{beer.brewer}</span></Typography>
                                <Typography variant="body2" className={classes['card-font']}>{beer.totalToBeMade - beer.committed} Left!</Typography>
                            </React.Fragment>
                        }
                        {beer.status !== 'Brewing' &&
                            <Typography variant="body2" className={classes['card-font']}>{beer.committed} Committed!</Typography>
                        }
                    </div>
                </Paper>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={self.state.open}
                    onClose={handleClose}
                >
                    <div className={classes.modal}>
                        <Typography variant="body2" className={classNames(classes['card-font'], classes.title)}>{beer.name}</Typography>                    
                    </div>
                </Modal>
            </React.Fragment>

        )
    }
}

BeerCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BeerCard);