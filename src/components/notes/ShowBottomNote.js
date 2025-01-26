import React from 'react'

export default function ShowBottomNote({
  creditableMoney,
  debitableMoney,
  totalReceiptAmount,
  totalCashSaleAmount,
  LastBalanceAmount
}) {
  const paytmMoney = [
    { amount: 20000, name: "Pintu" },
    { amount: 30000, name: "Vivek" },
    { amount: 204000, name: "Sandeep" },
    { amount: 39200, name: "Vikram" },
  ];
  return (
    <div className="noteBottom flex">
      <div className="notes left">
        <div className="NonCash">
          <ol>
            {paytmMoney.map((paytm, index) => (
              <li key={index + "paytm"}>
                {paytm.amount} : {paytm.name}
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="notes center">
        <ol id="receiptMoney">
          {paytmMoney.map((receipt, index) => (
            <li key={index + "recipt"}>
              {receipt.amount} : {receipt.name}
            </li>
          ))}
        </ol>
        <p className="CalulatedAmount">{totalReceiptAmount}</p>
        <ol id="CreditMoney">
          <li>+ 10000: total Cash Sale</li>
          <li>+ 500000: Last Balance</li>
          {creditableMoney.map((credit, index) => (
            <li key={index + "credit"}>
              {credit.amount} : {credit.name}
            </li>
          ))}
        </ol>
        <p className="CalulatedAmount">
          {Number(totalReceiptAmount) + Number(totalCashSaleAmount) + Number(LastBalanceAmount)}
        </p>
        <ol id="DebitMoney">
          {debitableMoney.map((debit, index) => (
            <li key={index + "debit"}>
              {debit.amount} : {debit.name}
            </li>
          ))}
        </ol>
      </div>
      <div className="notes right">Right</div>
    </div>
  );
}
