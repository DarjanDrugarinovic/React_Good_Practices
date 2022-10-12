//----capsule.css----

// .base {
//     background-color: white;
//     border-radius: 12px;
//     box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);
//     box-sizing: border-box;
//     color: rgb(114, 110, 101);
//     font-size: 11px;
//     margin-top: 24px;
//     min-height: 54px;
//     padding: 20px;
//     position: relative;
// }
// .clickable {
//     composes: base;
//     cursor: pointer;
// }
// .withIcon {
//     composes: base;
//     padding-left: 62px;
// }

import styles from './capsule.css';

return (
  <div classNames={`${styles.base} ${styles.clickable} ${styles.withIcon}`} />
);
