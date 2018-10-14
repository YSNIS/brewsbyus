import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';


const styles = theme => ({
    layout: {
        width: 'auto',
        display: 'block', // Fix IE11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});


class SignUp extends React.Component {

    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        curPage: 1,
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        zipCode: ''
    }

    nextPage = () => {
        this.setState({
            curPage: this.state.curPage + 1
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const url = process.env.API_URL;      

        const username = this.state.email;
        const password = this.state.password;
        const firstName = this.state.firstName;
        const lastName = this.state.lastName;
        const zipCode = this.state.zipCode;

        fetch(`${url}/user/register`, {
            method: 'post',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                'username': username,
                'password': password,
                'firstName': firstName,
                'lastName': lastName,
                'zipCode': zipCode
            })
        })
            .then((response) => {
                if (response.status === 200) {
                    window.location.reload();
                }
            })
            .catch((error) => {
                console.error(error);
            })
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

        console.log(this.state);

    }

    componentDidMount() {
        this.setState((state, props) => {
            return { classes: props.classes }
        });
    }

    render(props) {
        let { curPage } = this.state;
        return (
            <div className={this.props.classes.layout}>
                <Paper className={this.props.classes.paper}>
                    <Avatar className={this.props.classes.avatar}>
                        <LockIcon />
                    </Avatar>
                    <Typography variant="headline">Sign Up</Typography>
                    <form className={this.props.classes.form} onSubmit={this.handleSubmit}>
                        {curPage === 1 &&
                            <>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input
                                    id="email"
                                    name="email"
                                    onChange={this.handleInputChange}
                                    autoFocus
                                />
                            </FormControl>

                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    onChange={this.handleInputChange}
                                    
                                />
                            </FormControl>

                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="retypePassword">Retype Password</InputLabel>
                                <Input
                                    name="retypePassword"
                                    type="password"
                                    id="retypePassword"
                                    onChange={this.handleInputChange}
                                />
                            </FormControl>

                            <Button
                                type="button"
                                fullWidth
                                variant="raised"
                                color="primary"
                                onClick={this.nextPage}
                                className={this.props.classes.submit}
                            >
                                Next Page
                            </Button>
                            </>
                        }
                        {curPage === 2 &&
                            <>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="firstName">First Name</InputLabel>
                                <Input
                                    id="firstName"
                                    name="firstName"
                                    onChange={this.handleInputChange}                                    
                                    autoFocus
                                />
                            </FormControl>

                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="lastName">Last Name</InputLabel>
                                <Input
                                    name="lastName"
                                    id="lastName"
                                    onChange={this.handleInputChange}                                    
                                />
                            </FormControl>

                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="zipCode">ZIP Code</InputLabel>
                                <Input
                                    name="zipCode"
                                    id="zipCode"
                                    onChange={this.handleInputChange}                                    
                                />
                            </FormControl>

                            <Button
                                type="submit"
                                fullWidth
                                variant="raised"
                                color="primary"
                                className={this.props.classes.submit}
                            >
                                Sign Up
                            </Button>
                            </>
                        }

                    </form>
                </Paper>
            </div>
        )
    }
}

SignUp.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUp);