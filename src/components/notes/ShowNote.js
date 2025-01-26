import React from 'react';
import ShowTopNote from './ShowTopNote';
import ShowBottomNote from './ShowBottomNote';
export default function ShowNote() {
  return (
    <div className="Note">
      <ShowTopNote date="10/01/2025" message="ॐ नमः शिवाय" />
      <ShowBottomNote
        creditableMoney={[]}
        debitableMoney={[]}
        totalReceiptAmount="600000"
        totalCashSaleAmount="50000"
        LastBalanceAmount="500000"
      />
    </div>
  );
}
