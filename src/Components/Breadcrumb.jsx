import React from 'react'
import { Link, useLocation } from 'react-router';
import { Elements } from '../Elements';

const Breadcrumb = () => {
    const location = useLocation();
    const pathArr = location.pathname.split('/');
    const pathArrWithoutHome = pathArr.filter((path) => path != "");

    return (
        <ul className={`${Elements.Container} flex items-center gap-x-2 py-5`}>
            <li className='text-[#0F8055] flex items-center italic'>
                <Link to='/'>Bosh sahifa</Link>
                 <div className='mx-5'>
                /
                </div>
            </li>{
                pathArrWithoutHome.map((path, index) => {
                    return (
                        <li>
                            {index != pathArrWithoutHome.length - 1 ? (
                                <Link className='text-[#0F8055] italic' to='/New'>{path} <span className='mx-5'>/</span></Link>
                            ) : (
                                <span className='text-[#6C674D] italic'>
                                    {path}
                                </span>
                            )}
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Breadcrumb
