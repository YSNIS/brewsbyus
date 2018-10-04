import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    navLink: {
        color: '#fff',
        'text-decoration': 'none'
    }
};

class ButtonAppBar extends React.Component {

    handleOnClickSignOut(e) {
        const url = process.env.API_URL;

        fetch(`${url}/user/logout`, {
            credentials: 'include',
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                window.location.reload();
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        const { classes, user } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Link className={classes.navLink} to='/dashboard'>
                            <IconButton className={classes.menuButton} color="inherit" aria-label="Home">
                                <HomeIcon />
                            </IconButton>
                        </Link>
                        <Link className={classes.navLink} to='/marketplace'><Button color="inherit">Marketplace</Button></Link>
                        <Link className={classes.navLink} to='/mybrewery'><Button color="inherit">My Brewery</Button></Link>
                        <div className={classes.grow} />
                        {!user &&
                            <>
                            <Link className={classes.navLink} to='/login'><Button color="inherit">Login</Button></Link>
                            <Link className={classes.navLink} to='/signup'><Button color="inherit">Signup</Button></Link>
                            </>
                        }
                        {user &&
                            <Button onClick={this.handleOnClickSignOut} color="inherit">Sign Out</Button>
                        }
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);