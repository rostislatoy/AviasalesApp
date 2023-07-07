import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleAllChecked,
  toggleNoStopOverChecked,
  toggleOneStopOverChecked,
  toggleTwoStopOversChecked,
  toggleThreeStopOversChecked,
} from "../../redux/actions";
import "./Form.scss";

const Form = () => {
  const formState = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const {
    allChecked,
    noStopOverChecked,
    oneStopOverChecked,
    twoStopOversChecked,
    threeStopOversChecked,
  } = formState;
  const handleAllCheckedChange = () => {
    dispatch(toggleAllChecked());
  };

  const handleNoStopOverCheckedChange = () => {
    dispatch(toggleNoStopOverChecked());
  };

  const handleOneStopOverCheckedChange = () => {
    dispatch(toggleOneStopOverChecked());
  };

  const handleTwoStopOversCheckedChange = () => {
    dispatch(toggleTwoStopOversChecked());
  };

  const handleThreeStopOversCheckedChange = () => {
    dispatch(toggleThreeStopOversChecked());
  };

  return (
    <form className="form">
      <h6 className="form-title">КОЛИЧЕСТВО ПЕРЕСАДОК</h6>
      <label>
        <input
          type="checkbox"
          checked={allChecked}
          onChange={handleAllCheckedChange}
        />
        <span className="checkbox"></span>
        <span className="checkbox-label"> Все</span>
      </label>
      <label>
        <input
          type="checkbox"
          checked={noStopOverChecked}
          onChange={handleNoStopOverCheckedChange}
        />
        <span className="checkbox label"></span>
        <span className="checkbox-label"> Без пересадок</span>
      </label>
      <label>
        <input
          type="checkbox"
          checked={oneStopOverChecked}
          onChange={handleOneStopOverCheckedChange}
        />
        <span className="checkbox"></span>
        <span className="checkbox-label"> 1 пересадка</span>
      </label>
      <label>
        <input
          type="checkbox"
          checked={twoStopOversChecked}
          onChange={handleTwoStopOversCheckedChange}
        />
        <span className="checkbox"></span>
        <span className="checkbox-label"> 2 пересадки</span>
      </label>
      <label>
        <input
          type="checkbox"
          checked={threeStopOversChecked}
          onChange={handleThreeStopOversCheckedChange}
        />
        <span className="checkbox"></span>
        <span className="checkbox-label"> 3 пересадки</span>
      </label>
    </form>
  );
};

export default Form;
