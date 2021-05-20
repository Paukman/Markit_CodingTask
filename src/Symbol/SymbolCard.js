import React from "react";
import "./SymbolCard.css";

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

const SymbolCard = ({ symbolState }) => {
  return (
    <div>
      <hr />
      <div className="name">
        {symbolState.name} {symbolState.symbol ? `(${symbolState.symbol})` : ""}
      </div>
      <div className="prices">
        <div className="price">{symbolState.lastPrice}</div>
        <div className={symbolState.change >= 0 ? "changePlus" : "changeMinus"}>
          {symbolState.change}
        </div>
        <div
          className={
            symbolState.changePercent >= 0 ? "changePlus" : "changeMinus"
          }
        >
          ({symbolState.changePercent}%)
        </div>
      </div>
      <div className="timestamp">
        {symbolState.timestamp ? `As of ${symbolState.timestamp}` : null}
      </div>
      <hr className="break-line" />
      {symbolState.low && symbolState.high ? (
        <OptionalData
          text="Range"
          value={`${symbolState.low} - ${symbolState.high}`}
        />
      ) : null}
      {symbolState.open ? (
        <OptionalData text="Open" value={symbolState.open} />
      ) : null}
      {symbolState.volume ? (
        <OptionalData text="Volume" value={symbolState.volume} />
      ) : null}
      {symbolState.marketCap ? (
        <OptionalData text="Market Cap" value={symbolState.marketCap} />
      ) : null}
    </div>
  );
};

export default SymbolCard;
