import React from "react";
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import SearchForm from '../main/search-form';

const BrandCatalog = (props) => {
    const location = useLocation();
    let currentLocation = location.pathname.split('/').pop().split('-').join(' ');

    const { catalog } = props;
    let chosenBrand = catalog.filter(brand => brand.name.toLowerCase() === currentLocation);

    return (
        <>
        <SearchForm {...props} />
            <section className='brand-catalog'>
                {chosenBrand[0].models ?
                    chosenBrand[0].models.map((model, i) => {
                        let modelName = model.split(' ').join('-').toLowerCase();
                        let brandLocation = currentLocation.split(' ').join('-');
                        return <Link to={`/catalog/${brandLocation}/${modelName}`} key={i}>{model}</Link>
                    })
                    :
                    <Routes>
                        <Route path={`/${chosenBrand[0].name.toLowerCase()}`} />
                    </Routes>
                }
            </section>
        </>
    )
}

export default BrandCatalog;