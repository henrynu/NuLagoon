

**Terms of Pool A:**

**Participants:**

1. Pool A will accept deposit in BTC and NBT. The BTC deposit address is: 1PwUThmFLvUHp4WYoeDL15GggrHkD3Capw, and NBT deposit address is: BGNbLajr7tSD5LEqYmG2hztzciPhmjf4eX. Deposit transactions is public for anyone on the blockchains..
    
2. The send-from address of every deposit transaction will be the participant's account address, which is also the address to receive fund withdraw in future. If multiple inputs are used to deposit funds, the address in the first input will be the participant's account address. 

3. Deposit less than 1000NBT or 4BTC will be rejected and will be returned to the account address (the transaction fee will be subtracted).

4. To submit a full-size fund withdraw order, participant send 0.0001BTC or 0.01NBT from the account address to the pool’s deposit address. To submit a half-size fund withdraw order, participant send 0.0002BTC or 0.02NBT from the account address to the pool’s deposit address.
    
5. To submit a pool share conversion order, participant send 0.001BTC or 0.1NBT from the account address to the deposit address of the pool which participant would like to convert to. The manager will convert shares of all the pools into shares of destination pool at the accounting day. 

6. The calculation of conversion will be: The number of shares of destination pool = the number of shares of source pool * NAV of source pool / NAV of destination pool.

7. Every Monday and every Thursday during the operation of pool A is the accounting day. 14:00AM GMT will be the COB (close of business) time every accounting day. Deposit transactions and withdraw orders sent before COB time every accounting day will be effective that day. Transactions and orders sent afterward will be effective next accounting day.
    
8. The price of BTC used in the calculation will be the acquirable last trade price at COB time of the accounting day.

9. The number of shares participant get will be: Amount of NBT deposit / NAV or Amount of BTC deposit * BTC price / NAV.
    
10. The asset of participant holding will be: The number of shares * NAV.

11. Withdraw fee is 1 NBT per NBT withdraw transaction or 0.004 BTC per BTC withdraw transaction. All the withdraw fee will be added to the total asset of the pools, and thus benefit remaining pool users.
    
12. If participants withdraw full-size fund, they will get: The number of shares * NAV - Withdraw Fee (in NBT) or The number of shares * NAV / BTC price - Withdraw Fee (in BTC). If participants withdraw half-size fund, they will withdraw a half of fund and keep another half of fund in the pool. If the number of shares less than
2000, participants can only withdraw full-size fund.

**Manager:**

1. The manager will process deposit transactions and withdraw orders, and publish the accounting report of the pool after COB time every accounting day.

2. The manager will place a portion of fund in tier1 and tier2 on up to 2 exchanges. The amount of fund placed on exchanges will be set according to how much is needed based on several factors, for example the total size of the fund, the trading volume on the exchange, how often the walls will be unbalanced. The manager run the nubot(s) to support Nubits pegging at $1. 

3. If buy side or sell side of fund in tier1 and tier2 has less than 25%, the manager will manually balance it by transfer fund between tier2 and tier 3 once every working day. If either NBT or BTC in tier3 is not enough for the need of balance or withdraw, the manager will convert fund from other
LPC and exchange.

4. The manager will submit a custodian fee grant request once a month. Nu shareholders has promised to pass the fee grant in 10 days. The custodian fee granted will be added into Holding of NBT and subtracted from Custodian Fee wait to be granted.

5. The manager reserves the right to optimize the operation of the pool when situations changed, for example the Nubot upgraded.

**Fee and Calculation**

1. Now the daily custodian fee rate is 0.34%. The daily custodian fee rate could be adjusted by new motions passed by Nu Shareholder. The dividing ratio of custodian fee between pool manager and pool participants is 10:24.

2. The custodian fee rate could be adjusted by the terms in motion of the Nu Lagoon or another motion passed by shareholders in future. A new fee rate will be announced as soon as possible after it is decided, and it will only begin effect at an accounting day in future. 

3. NAV of the pool will be calculated by the following formulas:

Total asset = Holding of NBT + Holding of BTC * BTC price 

Custodian Fee = Custodian Fee in previous accounting day + Total Asset in previous accounting day * custodian fee rate * days

Manage Fee = Manage Fee in previous accounting day + Total asset in previous accounting day * manage fee rate * days

NAV = (total asset + custodian fee - Manage Fee) / total number of shares
