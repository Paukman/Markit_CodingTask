import React from "react";
import useSymbol from "./useSymbol";
import SymbolCard from "./SymbolCard";
import "./Symbol.css";

export const OptionalData = ({ text, value }) => {
  return (
    <>
      <div className="ranges">
        <div className="item-left">{text}</div>
        <div className="item-right">{value}</div>
      </div>
      <hr className="break-line" />
    </>
  );
};

const Symbol = () => {
  const { symbolState, handleInputChange, onSearchSymbol } = useSymbol();
  return (
    <div className="box">
      <div className="inner-card">
        <form onSubmit={onSearchSymbol}>
          <input
            className="input-outline"
            type="text"
            value={symbolState.securityInput}
            onChange={handleInputChange}
            placeholder="Symbol Lookup"
          />
          <input className="symbol-submit" type="submit" value="SUBMIT" />
        </form>
        <div>
          {symbolState.message ? (
            <div className="message">{symbolState.message}</div>
          ) : (
            <SymbolCard symbolState={symbolState} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Symbol;
