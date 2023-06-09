import React from "react";
import {Link} from "react-router-dom";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={`${classes.sidebar}`}>
      <Link to={'/'}>
      <p className="text-gray-600 text-lg text-center font-semibold mx-4 my-2 px-2 py-3 bg-gray-100 rounded hover:bg-gray-300 hover:text-gray-800">
        Contacts
      </p>
      </Link>
      <Link to={'/charts'}>
      <p className="text-gray-600 text-lg text-center font-semibold mx-4 my-2 px-2 py-3 bg-gray-100 rounded hover:bg-gray-300 hover:text-gray-800">
        Charts and Maps
      </p>
      </Link>
    </div>
  );
};

export default Sidebar;
