import {React, useState} from "react";
import About from "./pages/About"
import Contact from "./pages/Contact"
import ProjectPage from "./pages/ProjectPage"
import Header from "./Header"
import Footer from "./Footer"

function Main() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Projects') {
      return <ProjectPage />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="page-container">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default Main;