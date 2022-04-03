import React, { FC } from 'react';
import Link from 'next/dist/client/link';

let page = ['01', '0', '01', '01', '01'];

const Pagination: FC = () => {
  return (
    <div className="pagination-area mb-30 wow fadeInUp animated">
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-start">
          <li className="page-item">
            <Link href="/#">
              <a className="page-link">
                <i className="elegant-icon arrow_left"></i>
              </a>
            </Link>
          </li>

          {page.map((p, index) => {
            return (
              <li className="page-item" key={ index}>
                <Link href="/#">
                  <a className="page-link">{p}</a>
                </Link>
              </li>
            );
          })}

          <li className="page-item">
            <Link href="/#">
              <a className="page-link">
                <i className="elegant-icon arrow_right"></i>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
