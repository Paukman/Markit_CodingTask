import { useState } from "react";

const useSymbol = () => {
  const [symbolState, setSymbolState] = useState({
    securityInput: "",
    message: "Please enter symbolState and press search to get current status.",
    name: "", // 1
    symbol: null, // 2
    lastPrice: null, // 3
    change: null, // 4
    changePercent: null, // 5
    timestamp: null, // 6
    low: null, // 7
    high: null, // 8
    open: null, // 9
    volume: null, // 10
    marketCap: null, // 11
  });

  const getQuote = async (symbol) => {
    return {
      Name: "MICROSOFT CORP",
      Symbol: "MSTF",
      LastPrice: 72.28,
      Change: -0.52,
      ChangePercent: -0.72,
      Timestamp: "10:00:00 PM ET",
      Low: 71.81,
      High: 72.89,
      Open: 71.97,
      Volume: "33M",
      MarketCap: "558B",
    };
  };

  // general method to change single object value
  const onChange = ({ name, value }) => {
    setSymbolState((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    onChange({ name: "securityInput", value: e.target.value });
  };

  const updateSignOnChange = (change) => {
    if (!change) {
      return null;
    }
    if (change >= 0) {
      return `+${change}`;
    }
    return change;
  };

  const onSearchSymbol = async (e) => {
    e.preventDefault();
    console.log(symbolState.securityInput);
    if (!symbolState.securityInput) {
      onChange({ name: "message", value: "Please enter minimum 1 character" });
      return;
    } else {
      onChange({ name: "message", value: null });
    }
    try {
      const result = await getQuote(symbolState.securityInput);
      console.log(result);
      setSymbolState((state) => ({
        ...state,
        name: "" || result.Name,
        symbol: "" || result.Symbol,
        lastPrice: "" || result.LastPrice,
        change: "" || updateSignOnChange(result.Change),
        changePercent: "" || updateSignOnChange(result.ChangePercent),
        timestamp: "" || result.Timestamp,
        low: "" || result.Low,
        high: "" || result.High,
        open: "" || result.Open,
        volume: "" || result.Volume,
        marketCap: "" || result.MarketCap,
      }));
    } catch (err) {
      onChange({
        name: "message",
        value: `Failed to retireve data for ${symbolState.securityInput}. Please try again later.`,
      });
    }
  };

  return { symbolState, handleInputChange, onSearchSymbol };
};

export default useSymbol;
