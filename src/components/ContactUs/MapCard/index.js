// Import React library
import React from 'react';

// Define functional component MapCard
function MapCard () {
  return(
    // Render MapCard container with class "MapCard"
    <div className="MapCard">
      {/* Render MapCard content container with class "MapCard__card" */}
      <div className="MapCard__card">
        {/* Render title with class "MapCard__title" */}
        <p className="MapCard__title">POP Shop</p>
        {/* Render address with class "MapCard__address" */}
        <p className="MapCard__address">425 El Dorado Dr,</p>
        {/* Render city and state with class "MapCard__address" */}
        <p className="MapCard__address">Daly City, CA</p>
        {/* Render phone number with class "MapCard__address" */}
        <p className="MapCard__address">Phone: (787)899-1934</p>
        {/* Render fax number with class "MapCard__address" */}
        <p className="MapCard__address">Fax: (212)734-9860</p>
      </div>
    </div>
  );
}

// Export MapCard component
export default MapCard;
