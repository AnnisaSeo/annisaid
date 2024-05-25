import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Link } from "gatsby";

const Layout = ({ children }) => {
  return ( 
      <div className="flex flex-col min-h-screen" >
          <nav className="flex sm:justify-between justify-around text-justify bg-blue-700 lg:px-20 sm:px-10 py-8 text-gray-900">
              <ul className="flex space-x-4">
                  <li>
                    < Link to="/">Home</Link>
                   </li>
                    <li>
                    < Link to="/about">Tentang kami</Link>
                    </li>
                     <li>
                    < Link to="/contact">Contact</Link>
                  </li>
                  <li> 
                    < Link to="/produk">Produk</Link>

                  </li>
                  <li> 
                    < Link to="/gallery">Gallery</Link>
                  </li>
                  <li>
                    < Link to="/blog">Blog</Link>
                  </li>
                  </ul>

            </nav>

           <Header />
            <main className="flex-grow">{children}</main>
           <Footer />
         </div>
      
  )
}

export default Layout