import React from "react";

function PageNotFound () {
  return(
    <div className="error">
      {/* Heading for the error page */}
      <h1 className="error__header">404 Page Not Found</h1>
      {/* Title for the error page */}
      <h2 className="notFoundTitle">Oops! That page can’t be found.</h2>
      {/* Description for the error page */}
      <p className="notFoundDesc">
        It looks like nothing was found at this location. Maybe try one of the
        links in the menu or press back to go to the previous page.
      </p>
    </div>
  );
}

export default PageNotFound;
