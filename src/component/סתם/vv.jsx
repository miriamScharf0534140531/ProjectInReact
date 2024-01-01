import React, { useState } from 'react';
import UpdateDetails from './UpdateDetails';
// import AlertInvertedColors from './AlertInvertedColors';
import { Button } from 'כאן יש להוסיף את ה-import של ה-Button מהספרייה שאת משתמשת בה';

const YourComponent = () => {
  const [shouldShowUpdateDetails, setShouldShowUpdateDetails] = useState(false);

  const callApdate = () => {
    // כאן את יכולה להוסיף תנאים נוספים לפי הצורך
    const conditionIsMet = true; // כאן יכול להיות תנאי מסוים

    if (conditionIsMet) {
      setShouldShowUpdateDetails(true);
    } else {
      setShouldShowUpdateDetails(false);
      // וכאן תוכלי להציג את ה-Alert
    }
  };

  return (
    <div>
      {shouldShowUpdateDetails ? (
        <UpdateDetails />
      ) : (
        <>
          <Button type="submit" onClick={() => callApdate()} variant="solid">
            update
          </Button>
          {/* נניח שכאן יש קומפוננטה הכוללת הצגת התוכן הנוכחי */}
        </>
      )}
    </div>
  );
};

export default YourComponent;
