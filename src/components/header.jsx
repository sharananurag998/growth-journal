import React from 'react';
import {Link} from 'react-router-dom';

export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to='/'><a className="navbar-brand" href="#">Growth&nbsp;Journal</a></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to='/'><a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a></Link>
            </li>
            <li className="nav-item active">
              <Link to='/todo'><a className="nav-link" href="#">Todo</a></Link>
            </li>
          </ul>
        </div>

        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <Link to='/signin'><a class="nav-link" href="#">Sign&nbsp;In</a></Link>
                </li>
                <li class="nav-item">
                    <Link to='/register'><a class="nav-link" href="#">Register</a></Link>
                </li>
            </ul>
        </div>
      </nav>
    );
}