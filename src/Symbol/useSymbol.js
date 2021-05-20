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
      Volume: "223321000",
      MarketCap: "558455666334",
    };
  };

  const formatCash = (number) => {
    if (!number) {
      return null;
    }
    if (number < 1e3) return number;
    if (number >= 1e3 && number < 1e6) return +(number / 1e3).toFixed(2) + "K";
    if (number >= 1e6 && number < 1e9) return +(number / 1e6).toFixed(2) + "M";
    if (number >= 1e9 && number < 1e12) return +(number / 1e9).toFixed(2) + "B";
    if (number >= 1e12) return +(number / 1e12).toFixed(2) + "T";
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
      // const result = await Promise.reject();
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
        volume: "" || formatCash(result.Volume),
        marketCap: "" || formatCash(result.MarketCap),
      }));
    } catch (err) {
      console.log("error");
      onChange({
        name: "message",
        value: `Failed to retireve data for ${symbolState.securityInput}. Please try again later.`,
      });
    }
  };

  return { symbolState, handleInputChange, onSearchSymbol };
};

export default useSymbol;
