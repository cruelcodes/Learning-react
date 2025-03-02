import { useState } from 'react';
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import { RefreshCw } from "lucide-react";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = currencyInfo ? Object.keys(currencyInfo) : [];

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  const convert = () => {
    if (currencyInfo && currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-vector/digital-indian-rupee-rise-up-arrow-background-trading-concept_1017-42460.jpg?t=st=1740817691~exp=1740821291~hmac=570fd9c2bc2a497702ae0a495e3b917f982d5a8c631d16053d8a9cc9e8b097eb&w=1800')`,
      }}
    >
      <div className="w-full">
      <div className="w-full max-w-md mx-auto border border-gray-200 rounded-lg p-6 
  backdrop-blur-lg bg-white/10 shadow-lg">

          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={setFrom}
                selectedCurrency={from}
                onAmountChange={setAmount}
              />
            </div>
            <div className="relative w-full h-0.5">
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full 
              shadow-lg border border-gray-300 hover:bg-gray-100 active:rotate-180 transition-all"
              onClick={swap}
            >
              <RefreshCw className="text-blue-600" size={24} />
            </button>

              
              
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={setTo}
                selectedCurrency={to}
                amountDisable
              />
            </div>
            <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-3 rounded-xl 
                shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
              >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
