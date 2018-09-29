import React from 'react';
import BeerCard from '../shared/beer-card';

class DashboardBeerList extends React.Component {

    render() {
        const styles = {
            marginLeft: 12
        }
        const { beers } = this.props;
        const beerCards = beers ? beers.map((beer) => {
                return <BeerCard styles={styles} key={beer.id} beer={beer}/>
            }) : [];
        return (
            <React.Fragment>
                {beerCards}
                <div>
                    <h1>Click Me</h1>
                </div>
            </React.Fragment>
        )
    }
}

export default DashboardBeerList;
