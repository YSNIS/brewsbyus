import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import DashboardBeerList from './dashboard-beer-list';

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: 24,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dashboard: {}
        };
    }

    componentDidMount() {
        const url = process.env.API_URL;
        console.log(url);

        fetch(`${url}/api/mockdata/dashboard`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dashboard: responseJson
                })
                // console.log(this.state);
            })
            .catch((error) => {
                console.error(error);
            });

    }

    render() {
        const { classes } = this.props;
        let { dashboard } = this.state;
        console.log(dashboard);
        return (
            <div className={classes.root}>
                <Grid container spacing={24}>

                    <Grid item xs={12}>
                        <h1>Beers Created</h1>
                    </Grid>
                    {this.state.isLoading === false ? (
                        <DashboardBeerList beers={dashboard.created} to={'created'} />
                    ) : (
                            <div></div>
                        )}
                    <Grid item xs={12}>
                        <h1>Beers Purchased</h1>
                    </Grid>
                    {this.state.isLoading === false ? (
                        <DashboardBeerList beers={dashboard.purchased} to={'purchased'} />
                    ) : (
                            <div></div>
                        )}

                    <Grid item xs={12}>
                        <h1>Staff Recommendations</h1>
                    </Grid>{this.state.isLoading === false ? (
                        <DashboardBeerList beers={dashboard.recommended} to={'recommended'} />
                    ) : (
                            <div></div>
                        )}

                </Grid>
            </div>
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);