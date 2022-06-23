import React from "react";
import { Link } from 'react-router-dom';

import SearchForm from "../main/search-form";

class Catalog extends React.Component {
    render() {
        const { catalog } = this.props;
        return (
            <>
                <SearchForm {...this.props} />
                <div className='catalog'>
                    {catalog.map((brand, i) => {
                        let brandName = brand.name.split(' ').join('-');
                        return <Link
                            to={`/catalog/${brandName.toLowerCase()}`}
                            className='catalog-product'
                            key={i}
                        >
                            <img src={brand.logo} alt='brand-logo' />
                            <h3>
                                {brand.name}
                            </h3>
                            <p>
                                {brand.models ?
                                    brand.models.map((model, i) => (
                                        <span key={i}>{(i ? ', ' : '') + model}</span>
                                    ))
                                    :
                                    ''
                                }
                            </p>
                        </Link>
                    })}
                </div>
            </>
        )
    }
}

export default Catalog;