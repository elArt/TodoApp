import React from "react";

import styles from "./styles.module.scss";

const Nav = () => {
  return (
    <div className={styles.navigation}>
      <span>All</span>
      <span>Active</span>
      <span>Done</span>
    </div>
  );
};

export default Nav;
