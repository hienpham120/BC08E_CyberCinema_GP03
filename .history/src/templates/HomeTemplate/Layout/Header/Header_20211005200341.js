import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { history } from "../../../../App";
import _ from "lodash";
import { ACCESS_TOKEN, USER_LOGIN } from "../../../../util/setting";
import "./_Header.scss";
export default function Header(props) {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  const renderLogin = () => {
    if (_.isEmpty(userLogin)) {
      return (
        <Fragment>
          <button
            onClick={() => {
              history.push("/login");
            }}
            className='self-center px-8 py-3 rounded text-white d-flex'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
              />
            </svg>
            Đăng Nhập
          </button>
        </Fragment>
      );
    }

    return (
      <Fragment>
        {" "}
        <button
          onClick={() => {
            history.push("/profile");
          }}
          className='self-center px-8 py-3 rounded'
        >
          Hello ! {userLogin.taiKhoan}
        </button>
        <button
          onClick={() => {
            localStorage.removeItem(USER_LOGIN);
            localStorage.removeItem(ACCESS_TOKEN);
            history.push("/home");
            window.location.reload();
          }}
          className='text-yellow-500 mr-5'
        >
          Đăng xuất
        </button>
      </Fragment>
    );
  };
  return (
    <header className='bg-black bg-opacity-40 w-full fixed z-10'>
      <nav className='container flex justify-between mx-auto'>
        <NavLink
          to='/'
          aria-label='Back to homepage'
          className='flex items-center p-2'
        >
          <img
            width={180}
            height={55}
            src='https://cybersoft.edu.vn/wp-content/uploads/2017/03/MIN-OP1.png'
            alt='https://cybersoft.edu.vn/wp-content/uploads/2017/03/MIN-OP1.png'
          />
        </NavLink>
        <ul className='items-stretch hidden space-x-3 lg:flex'>
          <li className='flex'>
            <NavLink
              to='/home'
              className='flex items-center -mb-0.5 px-4 dark:border-transparent dark:text-violet-400 dark:border-violet-400 text-white'
              activeClassName='border-b-2'
            >
              Home
            </NavLink>
          </li>
          <li className='flex'>
            <NavLink
              to='/contact'
              className='flex items-center -mb-0.5 px-4 dark:border-transparent text-white'
              activeClassName='border-b-2'
            >
              Contact
            </NavLink>
          </li>
          <li className='flex'>
            <NavLink
              to='/news'
              className='flex items-center -mb-0.5 px-4 dark:border-transparent text-white'
              activeClassName='border-b-2'
            >
              News
            </NavLink>
          </li>
        </ul>
        <div className='items-center flex-shrink-0 hidden lg:flex'>
          {renderLogin()}
        </div>
        <button className='p-4 lg:hidden'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='w-6 h-6 dark:text-coolGray-100'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </nav>
    </header>
  );
}
