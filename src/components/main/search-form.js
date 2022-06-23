import React from "react";

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenBrand: ''
        }
    }

    setChosenBrand = e => {
        this.setState({ chosenBrand: e.target.value });
    }

    render() {
        const { chosenBrand } = this.state;
        const { catalog } = this.props;
        return (
            <div className='search-form'>
                <div className='search-form__params'>
                    <h2>Поиск автозапчастей китайских автомобилей</h2>
                    <div>
                        <input type='search' placeholder='Введите деталь или артикул' />
                        <button>Поиск</button>
                    </div>
                    <div>
                        <div className='select-wrapper'>
                            <select onChange={this.setChosenBrand} value={chosenBrand}>
                                <option>Марка</option>
                                {catalog.map((brand, i) => (
                                    <option value={brand.name} key={i}>{brand.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className='select-wrapper'>
                            <select>
                                <option>Модель</option>
                                {catalog.map(brand => chosenBrand === brand.name ?
                                    brand.models.map((model, i) => (
                                        <option key={i}>{model}</option>
                                    ))
                                    :
                                    ''
                                )}
                            </select>
                        </div>
                        <div className='select-wrapper'>
                            <select>
                                <option>Тип двигателя</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='search-form__back-call'>
                    <a href='tel:+7 8442 600 389'>+7 8442 600 389</a>
                    <p>Заказ обратного звонка</p>
                </div>
            </div >
        )
    }
}

export default SearchForm;