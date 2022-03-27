// import styled from "styled-components";

// export default function PopUp() {
//   return (
//     <PopUpContainer className="hide-for-mobile">
//       <div className="pop-up">
//         <div className="pop-up-inner">
//           <div className="pop-up-header">
//             <div className="banner">
//               <div className="banner_inner">
//                 <p>
//                   Hire me - Hire me - Hire me - Hire me - Hire me - Hire me -
//                   Hire me - Hire me - Hire me - Hire me - Hire me - Hire me -
//                   Hire me - Hire me - Hire me - Hire me - Hire me - Hire me -
//                   Hire me - Hire me - Hire me - Hire me - Hire me - Hire me -
//                   Hire me - Hire me
//                 </p>
//                 <p>
//                   - Hire me - Hire me - Hire me - Hire me - Hire me - Hire me -
//                   Hire me - Hire me - Hire me - Hire me - Hire me - Hire me -
//                   Hire me - Hire me - Hire me - Hire me - Hire me - Hire me -
//                   Hire me - Hire me - Hire me - Hire me - Hire me - Hire me -
//                   Hire me - Hire me
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="pop-up-middle">
//             <div className="center">AVAILABLE - FOR HIRE</div>
//           </div>
//           <div className="pop-footer">
//             <span>Godwin.a.ebikwo@gmail.com</span>
//           </div>
//         </div>
//       </div>
//     </PopUpContainer>
//   );
// }

// const PopUpContainer = styled.div`
//   .pop-up {
//     text-transform: uppercase;
//     position: absolute;
//     top: 35%;
//     left: 35%;
//     height: 300px;
//     z-index: -1;
//     user-select: auto;
//     width: 308px;
//   }

//   .pop-up-inner {
//     position: absolute;
//     bottom: 0;
//     right: 0;
//     left: 0;
//     top: 0;
//     background-color: var(--bg);
//     border: 3px solid var(--bg);
//     overflow: hidden;
//     border-top: none;

//     .pop-up-header {
//       display: flex;
//       justify-content: space-between;
//       cursor: grab;
//       border-bottom: 1px solid var(--text-color);
//       top: 0;
//       background: var(--bg);
//       padding: 0.5rem;

//       & > span {
//         display: inline-block;
//       }

//       .banner {
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         position: relative;

//         .banner_inner {
//           width: 100%;
//           white-space: nowrap;
//           overflow: hidden;

//           p {
//             display: inline-block;
//             white-space: nowrap;
//             animation: marquee 55s linear infinite;
//             margin-top: 0;
//             user-select: none;
//             flex-shrink: 0;
//           }
//         }
//       }

//       @keyframes marquee {
//         0% {
//           transform: translate(0, 0);
//         }
//         100% {
//           transform: translate(-100%, 0);
//         }
//       }
//     }

//     .pop-footer {
//       position: absolute;
//       bottom: 0;
//       padding: 0.5rem;
//       box-sizing: border-box;
//       display: flex;
//       justify-content: space-between;
//       background: var(--bg);
//     }
//   }
// `;
