import { TICKER_ITEMS } from "../data/machines";
import "../css/ticker.css";

export default function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker-inner">
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((t, i) => (
          <span key={i} className="ticker-item">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
