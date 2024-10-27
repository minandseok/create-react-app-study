import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState("");
  const [inputs, setInputs] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onChangeCoin = (event) => {
    const selectedId = event.target.value;
    const coin = coins.find((coin) => coin.id === selectedId);
    setSelectedCoin(coin);
  };

  const onChangeInput = (event) => {
    setInputs(event.target.value);
  };

  return (
    <main>
      <div>
        <h1>The Coins! {loading ? "" : `[${coins.length}]`}</h1>
        {loading ? (
          <strong>Loading...</strong>
        ) : (
          <select onChange={onChangeCoin}>
            <option
              value=""
              disabled
              selected
            >
              Select a coin
            </option>
            {coins.map((coin) => (
              <option
                key={coin.id}
                value={coin.id}
              >
                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
        )}
      </div>
      <div>
        USD
        <input
          placeholder="USD"
          onChange={onChangeInput}
          type="number"
        ></input>
        {selectedCoin ? selectedCoin.name : "Coin Name"}
        <input
          readOnly
          disabled
          value={selectedCoin ? inputs / selectedCoin.quotes.USD.price : ""}
        ></input>
      </div>
    </main>
  );
}

export default App;
