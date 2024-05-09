import { Outlet } from "react-router-dom";
import FormBuilder from "../components/FormBuilder";
import './Base.scss';

const Base = () => {
  return (
    <div className="l-base">
      <div className="l-base__side">
        <FormBuilder />
      </div>
      <div className="l-base__content">
        <Outlet />
      </div>
    </div>
  );
}

export default Base;