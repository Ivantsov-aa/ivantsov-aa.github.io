import React from "react";
import { YMaps, Map, Clusterer, Placemark } from "react-yandex-maps";

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allStores: [],
        }
    }

    componentDidMount() {
        this.setState({ allStores: this.props.stores });
    }

    handleCityClick = e => {
        const { value } = e.target.dataset;
        const stores = this.state.allStores.map(store => {
            if (store.value === value) {
                return { ...store, selected: !store.selected };
            } else {
                return { ...store, selected: false }
            }
        })
        this.setState({ allStores: stores });

    }

    render() {
        const mapSettings = {
            center: [47.629989, 43.146086],
            zoom: 7
        };

        const { allStores } = this.state;

        return (
            <section className='contacts'>
                <div className='contacts-wrapper'>
                    {allStores.map((store, i) => (
                        <button className={store.selected ? 'active' : ''} onClick={this.handleCityClick} data-value={store.value} key={i}>г. {store.city}</button>
                    ))}
                </div>
                {allStores.map(store => (
                    store.selected &&
                    <div className='addresses-wrapper'>
                        {store.shops.map((shop, i) => (
                            <div className='addresses' key={i}>
                                <p>{shop.title}</p>
                                <p>{shop.phone}</p>
                            </div>
                        ))}
                    </div>
                ))}

                <div className='map'>
                    <YMaps>
                        <Map state={mapSettings} width='100%' height='100%'>
                            <Clusterer
                                options={{
                                    preset: 'islands#invertedVioletClusterIcons',
                                    groupByCoordinates: false
                                }}
                            >
                                {allStores.map(store => (
                                    store.shops.map((shop, i) => (
                                        <Placemark
                                            key={i}
                                            geometry={shop.coords}
                                            modules={[
                                                "geoObject.addon.balloon"
                                            ]}
                                            properties={{
                                                balloonContent: `
                                                    <h2>${store.city}</h2>
                                                    <h3>${shop.title}</h3>
                                                    <p>${shop.phone}</p>
                                                `
                                            }}
                                        />
                                    ))
                                ))}
                            </Clusterer>
                        </Map>
                    </YMaps>
                </div>
            </section>
        )
    }
}

export default Contacts;