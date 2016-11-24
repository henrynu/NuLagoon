var APIURL="https://api.nulagoon.com/v1/";
var CCY1="BKS"; var CCY2="mBTC";
var TXURL={"mBTC":"https://blockchain.info/tx/","BKS":"http://bcblockexplorer.com/transactions/"};
var ORDERAMT ={"mBTC":"0.1","BKS":"0.1"};

var OBTBLCOL = [
  {"name":"b_s","title":"","formatter":'obbsfmt'},
  {"name":"price","title":"Price","type":"number","style":{"width":90,"maxWidth":90}},
  {"name":"amount1","title":"Amount1","type":"number","style":{"width":100,"maxWidth":100},"formatter":"mynum"},
  {"name":"amount2","title":"Amount2","type":"number","style":{"width":100,"maxWidth":100},"formatter":"mynum"},
  {"name":"total","title":"Total","type":"number","formatter":"mynum"}
];
var THTBLCOL = [
  {"name":"time","title":"Time",type: "date", formatString: "MM-DD HH:mm","style":{"width":100,"maxWidth":100}},
  {"name":"price","title":"Price","type":"number","style":{"width":100,"maxWidth":100}},
  {"name":"amount1","title":CCY1,"type":"number","style":{"width":100,"maxWidth":100},"formatter":"round2"},
  {"name":"amount2","title":CCY2,"type":"number","style":{"width":100,"maxWidth":100},"formatter":"round2"},
  {"name":"b_s","title":"","formatter":"formatter"},
];
var MYORDCOL=
[
  {"name":"time","title":"Time",type: "date", formatString: "MM-DD HH:mm"},
  {"name":"b_s","title":"B/S","formatter":"b_sfmt"},
  {"name":"price","title":"Price","type":"number"},
  {"name":"amount1","title":CCY1,"type":"number","formatter":"mynum"},
  {"name":"amount2","title":CCY2,"type":"number","formatter":"mynum"},
  {"name":"executed","title":"Exec","formatter":"mynum"},
  {"name":"update","title":"","type":"html"},
  {"name":"deposit_ad","title":"DepositAddr","breakpoints":"all"},
  {"name":"receive_ad","title":"ReceiveAddr","breakpoints":"all"},
  {"name":"refund_ad","title":"RefundAddr","breakpoints":"all"},
  {"name":"txid","title":"TxId","visible":false,"breakpoints":"all"},
  {"name":"txurl","title":"","type":"html","visible":false,"breakpoints":"all"}

];
var MYTDCOL = [
  {"name":"time","title":"Time",type: "date", formatString: "YYYY-MM-DD HH:mm:ss"},
  {"name":"price","title":"Price","type":"number"},
  {"name":"amount1","title":CCY1,"type":"number","formatter":"mynum"},
  {"name":"amount2","title":CCY2,"type":"number","formatter":"mynum"},
  {"name":"b_s","title":"B/S","formatter":"b_sfmt"},
];
var MYBCTCOL = [
  {"name":"time","title":"Time",type: "date", formatString: "MM-DD HH:mm","style":{"width":130,"maxWidth":130}},
  {"name":"ccy","title":"Ccy"},
  {"name":"category","title":"S/R","formatter":"formatter"},
  {"name":"amount","title":"Amount","type":"number","formatter":"mynum"},
  {"name":"type","title":"Type"},
  {"name":"status","title":"Status","formatter":"formatter"},
  {"name":"confirmations","title":"Con","formatter":"confmt"},
  {"name":"address","title":"Address","breakpoints":"all"},
  {"name":"txid","title":"TxId","breakpoints":"all"},
  {"name":"txurl","title":"","type":"html","breakpoints":"all"}
];
