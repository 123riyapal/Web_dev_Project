import { useState } from "react";
import data from "./data";
import "./style.css";

function Accordion() {
  const [change, setChange] = useState(false);
  const [selected, setSelected] = useState(null);
  const [multiSelected, setMultiSelected] = useState([]);

  const handleMultipleClick = (itemId) => {
    if (multiSelected.includes(itemId)) {
      setMultiSelected(multiSelected.filter(id => id !== itemId));
    } else {
      setMultiSelected([...multiSelected, itemId]);
    }
  };

  const handleClick = (itemId) => {
    if (!change) {
      setSelected(itemId === selected ? null : itemId);
    } else {
      handleMultipleClick(itemId);
    }
  };

  const toggleMode = () => {
    setChange(!change);
    setSelected(null);
    setMultiSelected([]);
  };

  return (
    <div className="container">
      <h3 className="heading">FAQ about React</h3>
      <div className="toggle-buttons">
        <button className={change ? "inactive" : "active"} onClick={toggleMode}>
          Single Select
        </button>
        <button className={change ? "active" : "inactive"} onClick={toggleMode}>
          Multiple Select
        </button>
      </div>

      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="item">
              <div onClick={() => handleClick(dataItem.id)} className="title">
                <h3 className="quest">{dataItem.question}</h3>
                <span className="click">
                  {change 
                    ? (multiSelected.includes(dataItem.id) ? "-" : "+") 
                    : (selected === dataItem.id ? "-" : "+")}
                </span>
              </div>

              {change ? (
                multiSelected.includes(dataItem.id) && (
                  <div className="content">{dataItem.answer}</div>
                )
              ) : (
                selected === dataItem.id && (
                  <div className="content">{dataItem.answer}</div>
                )
              )}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
