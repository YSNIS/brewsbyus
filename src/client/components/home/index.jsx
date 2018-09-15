import React from 'react';

class Home extends React.Component {

    // componentDidMount() {
    //     const url = process.env.API_URL;

    //     fetch(`${url}/api/todos`)
    //         .then(response => response.json())
    //         .then(data => {
    //             this.setState({ data })
    //             console.log(this.state);
    //         });
    // }

    render() {
        return (
            <h1>Homepage</h1>
        )
    }
}

export default Home;