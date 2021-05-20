import React from "react";
import useSymbol from "./useSymbol";

const SymbolCard = () => {
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
            <div>
              <hr />
              <div className="name">
                {symbolState.name}{" "}
                {symbolState.symbol ? `(${symbolState.symbol})` : ""}
              </div>
              <div className="prices">
                <div className="price">{symbolState.lastPrice}</div>
                <div
                  className={
                    symbolState.change >= 0 ? "changePlus" : "changeMinus"
                  }
                >
                  {symbolState.change}
                </div>
                <div
                  className={
                    symbolState.changePercent >= 0
                      ? "changePlus"
                      : "changeMinus"
                  }
                >
                  ({symbolState.changePercent}%)
                </div>
              </div>
              <div className="timestamp">As of {symbolState.timestamp}</div>
              <hr className="break-line" />
              <div className="ranges">
                <div className="item-left">Range</div>
                <div className="item-right">
                  {symbolState.low} - {symbolState.high}
                </div>
              </div>
              <hr className="break-line" />
              <div className="ranges">
                <div className="item-left">Open</div>
                <div className="item-right">{symbolState.open}</div>
              </div>
              <hr className="break-line" />
              <div className="ranges">
                <div className="item-left">Volume</div>
                <div className="item-right">{symbolState.volume}</div>
              </div>
              <hr className="break-line" />
              <div className="ranges">
                <div className="item-left">Market Cap</div>
                <div className="item-right">{symbolState.marketCap}</div>
              </div>
              <hr className="break-line" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SymbolCard;
