/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import Header from '../Header/Header';
import Currencies from '../Currencies/Currencies';
import Amount from '../Amount/Amount';
import Button from '../Button/Button';

// Currencies import
import currencies from '../../data/currencies';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currenciesOpen: true,
      baseAmount: 1,
      currencyName: 'United States Dollar',
      inputSearch: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClickOnCurrency = this.handleClickOnCurrency.bind(this);
    this.setSearchValue = this.setSearchValue.bind(this);
  }

  // here we reverse currenciesOpen's value in the state when we click on the "=" button
  handleClick() {
    const { currenciesOpen } = this.state;
    this.setState({
      currenciesOpen: !currenciesOpen,
    });
  }

  // when we choose a currency, we want to retrieve his name in the amount (result) component
  handleClickOnCurrency(newCurrencyName) {
    this.setState({
      currencyName: newCurrencyName,
    });
  }

  // each time a character is entered in the text field, it will change the value of inputSearch
  setSearchValue(newValue) {
    this.setState({
      inputSearch: newValue,
    });
  }

  // Here, we are calculating the conversion result.
  computeAmount() {
    const { currencyName, baseAmount } = this.state;

    // Here, we want to retrieve the corresponding conversion rate for the selected currency
    const selectedCurrency = currencies.find(
      (item) => item.name === currencyName
    );

    // Here, we multiply the conversion rate by our base amount.
    const result = baseAmount * selectedCurrency.rate;

    // We want to limit the result to 2 decimal places.
    const roundedResult = result.toFixed(2);

    return roundedResult;
  }

  // This function will allow us to filter the currencies based on what the user has typed in the text field
  filterCurrencies() {
    const { inputSearch } = this.state;

    // If the user has entered one or several uppercase letters, we convert the entire string to lowercase.
    const inputSearchLowered = inputSearch.toLowerCase();
    const filteredCurrencies = currencies.filter((item) => {
      const nameLowered = item.name.toLowerCase();
      return nameLowered.includes(inputSearchLowered);
    });
    return filteredCurrencies;
  }

  render() {
    const { currenciesOpen, baseAmount, currencyName, inputSearch } =
      this.state;

    // We calculate the conversion and store the result in a variable.
    const result = this.computeAmount();

    // We store the filtered currencies based on the search field in a variable.
    const filteredCurrencies = this.filterCurrencies();

    return (
      <div className="App">
        <Header currentAmount={baseAmount} />
        <main>
          <Button clickTreatment={this.handleClick} isOpen={currenciesOpen} />
          {currenciesOpen && (
            <Currencies
              currenciesList={filteredCurrencies}
              handleClick={this.handleClickOnCurrency}
              searchValue={inputSearch}
              setSearchValue={this.setSearchValue}
            />
          )}
          <Amount
            selectedCurrencyName={currencyName}
            convertedAmount={result}
          />
        </main>
      </div>
    );
  }
}

export default App;
