// import React from "react";

// import ChevronDown from "../../assets/icons/chevron-down.svg";
// import ChevronUp from "../../assets/icons/chevron-up.svg";

// class Dropdown extends React.Component {
//   state = { isVisible: false };

//   showDropdown = () => {
//     this.setState((prevState) => ({
//       isVisible: prevState.isVisible ? false : true,
//     }));
//   };

//   render() {
//     const { name, content } = this.props;
//     const { isVisible } = this.state;

//     return (
//       <div className="dropdown">
//         <div
//           onClick={this.showDropdown}
//           className={`dropdown__title ${
//             isVisible ? "dropdown__title--open" : ""
//           }`}
//         >
//           {name}
//           {isVisible ? (
//             <img
//               src={ChevronUp}
//               alt="chevron up"
//               className="dropdown__chevron-up"
//             />
//           ) : (
//             <img
//               src={ChevronDown}
//               alt="chevron down"
//               className="dropdown__chevron-up"
//             />
//           )}
//         </div>
//         <div
//           className={`dropdown__content ${
//             isVisible ? "dropdown__content--open" : ""
//           }`}
//         >
//           {content}
//         </div>
//       </div>
//     );
//   }
// }

// export default Dropdown;
