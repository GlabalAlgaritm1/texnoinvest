// import React from 'react'
// import { Link, useLocation } from 'react-router';
// import { Elements } from '../Elements';

// const Breadcrumb = () => {
//     const location = useLocation();
//     const pathArr = location.pathname.split('/');
//     const pathArrWithoutHome = pathArr.filter((path) => path != "");

//     return (
//         <ul className={`${Elements.Container} flex items-center gap-x-5 py-5`}>
//             <li className=''>
//                 <Link to='/'>Bosh sahifa</Link>
//             </li>{
//                 pathArrWithoutHome.map((path, index) => {
//                     return (
//                         <li key={index}>
//                             {index != pathArrWithoutHome.length - 1 ? (
//                                 <Link to={path}>{path}</Link>
//                             ) : (
//                                 <span>
//                                     {path}
//                                 </span>
//                             )}
//                         </li>
//                     )
//                 })
//             }
//         </ul>
//     )
// }

// export default Breadcrumb
