(this.webpackJsonpagecalc=this.webpackJsonpagecalc||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(5),o=a.n(i),c=(a(14),a(4)),s=a(6),u=a(7),h=a(9),l=a(8),d=a(3),b=a(0);function y(e){var t=e.errorData,a=t.iYear,r=t.iMonth,i=t.iDay,o=t.cYear,c=t.cMonth,s=t.cDay,u="First, Tell me your birth year!",h=Object(n.useState)("orange"),l=Object(d.a)(h,2),y=l[0],D=l[1],f=Object(n.useState)(u),j=Object(d.a)(f,2),m=j[0],g=j[1];return Object(n.useEffect)((function(){!function(e,t){""==e&&(D("orange"),g(u)),""!=e&&(e<=0&&(D("red"),g("Year should be greater than 0!")),e>t&&(D("red"),g("Year should be less than or equal ".concat(t,"!"))),e>0&&e<=t&&(D("green"),g("Well. Now tell me your birth month!")))}(a,o)}),[a]),Object(n.useEffect)((function(){!function(e,t,a,n){a==n&&a>0&&a<=n&&(e<=0&&(D("red"),g("Month should be greater than 0!")),e>t&&(D("red"),g("Month should be less than or equal ".concat(t,"!"))),e>0&&e<=t&&(D("green"),g("Well. Now tell me your birth day!"))),a!=n&&a>0&&a<=n&&(e<=0&&(D("red"),g("Month should be greater than 0!")),e>12&&(D("red"),g("Month should be less than or equal 12!")),e>0&&e<=12&&(D("green"),g("Well. Now tell me your birth day!")))}(r,c,a,o)}),[r]),Object(n.useEffect)((function(){!function(e,t,a,n,r,i){var o=r>0&&r<=i,c=a>0&&a<=12;r==i&&(c=a>0&&a<=n);var s,u=31;[4,6,9,11].includes(Number(a))&&(u=30),2==a&&(u=28,((s=Number(r))%4===0&&s%100!==0||s%400===0)&&(u=29)),o&&c&&(r==i&&a==n?(e<=0&&(D("red"),g("Day should be greater than 0!")),e>t&&(D("red"),g("Day should be less than or equal ".concat(t,"!"))),e>0&&e<=t&&(D("green"),g("Good. Submit to see your age!"))):(e<=0&&(D("red"),g("Day should be greater than 0!")),e>u&&(D("red"),g("Day should be less than or equal ".concat(u,"!"))),e>0&&e<=u&&(D("green"),g("Good. Submit to see your age!"),29==u&&(g("WoW! That is leap year. Submit to see your age!"),29==e&&g("WoW! you're born that leap year day. Submit to see your age!")))))}(i,s,r,c,a,o)}),[i]),Object(b.jsx)("div",{className:"messagebox ".concat(y),children:Object(b.jsx)("p",{className:"message",children:m})})}function D(e){var t=e.renderData,a=t.aaYear,n=t.aaYearText,r=t.aaMonth,i=t.aaMonthText,o=t.aaDay,c=t.aaDayText,s=e.renderData,u=s.naYear,h=s.naYearText,l=s.naMonth,d=s.naMonthText,y=s.naDay,D=s.naDayText,f=e.renderData,j=f.nbMonth,m=f.nbMonthText,g=f.nbDay,O=f.nbDayText;return Object(b.jsxs)("div",{className:"outputs",children:[Object(b.jsxs)("h6",{children:["ActualAge:"," ",Object(b.jsxs)("p",{children:[a," ",n,", ",r," ",i,", ",o," ",c,"."]})]}),Object(b.jsxs)("h6",{children:["NormalAge:"," ",Object(b.jsxs)("p",{children:[u," ",h,", ",l," ",d,", ",y," ",D,"."]})]}),Object(b.jsxs)("h6",{children:["NextBirthDay:"," ",Object(b.jsxs)("p",{children:[j," ",m,", ",g," ",O,"."]})]})]})}var f=function(e){Object(h.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={aaYear:20,aaMonth:10,aaDay:15,aaYearText:"year",aaMonthText:"month",aaDayText:"day",naYear:20,naMonth:10,naDay:15,naYearText:"year",naMonthText:"month",naDayText:"day",nbMonth:11,nbDay:27,nbMonthText:"month",nbDayText:"day",message:e.message,error:!1,iYear:"",iMonth:"",iDay:"",yearOff:!1,monthOff:!0,dayOff:!0,submitOff:!0},e.inputDate={iYear:"",iMonth:"",iDay:""},e.message="Everything works fine!",e.monthOf30=[4,6,9,11],e.isLeapYear=function(e){return e%4===0&&e%100!==0||e%400===0},e.yearChange=function(t){e.inputDate.iYear=t.target.value,e.setState({iYear:t.target.value}),e.yearValidate(e.inputDate.iYear),e.monthValidate(e.inputDate.iMonth),e.dayValidate(e.inputDate.iDay)},e.monthChange=function(t){e.inputDate.iMonth=t.target.value,e.setState({iMonth:t.target.value}),e.yearValidate(e.inputDate.iYear),e.monthValidate(e.inputDate.iMonth),e.dayValidate(e.inputDate.iDay)},e.dayChange=function(t){e.inputDate.iDay=t.target.value,e.setState({iDay:t.target.value}),e.yearValidate(e.inputDate.iYear),e.monthValidate(e.inputDate.iMonth),e.dayValidate(e.inputDate.iDay)},e.submitClick=function(){var t=e.state,a=t.iYear,n=t.iMonth,r=t.iDay,i=t.cYear,o=t.cMonth,c=t.cDay,s="".concat(n,"/").concat(r,"/").concat(a),u="".concat(o,"/").concat(c,"/").concat(i);console.log(s,u)},e.yearValidate=function(t){var a=!0,n=e.state.cYear;t>0&&t<=n?a=!1:(e.setState({iMonth:"",iDay:"",dayOff:!0,submitOff:!0}),e.inputDate.iMonth="",e.inputDate.iDay=""),e.setState({monthOff:a})},e.monthValidate=function(t){var a=!0,n=e.inputDate.iYear,r=e.state,i=r.cYear,o=r.cMonth;n==i?t>0&&t<=o?a=!1:(e.setState({iDay:"",submitOff:!0}),e.inputDate.iDay=""):t>0&&t<=12?a=!1:(e.setState({iDay:"",submitOff:!0}),e.inputDate.iDay=""),e.setState({dayOff:a})},e.dayValidate=function(t){var a=!0,n=31,r=e.inputDate,i=r.iYear,o=r.iMonth,c=e.state,s=c.cYear,u=c.cMonth,h=c.cDay;e.monthOf30.includes(Number(o))?n=30:2==o&&(n=28,e.isLeapYear(i)&&(n=29)),i==s&&o==u?t>0&&t<=h&&(a=!1):t>0&&t<=n&&(a=!1),e.setState({submitOff:a})},e.componentDidMount=function(){var t=new Date,a=t.getFullYear(),n=t.getMonth()+1,r=t.getDate();e.setState({cYear:a,cMonth:n,cDay:r})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.iYear,a=e.iMonth,n=e.iDay,r=e.yearOff,i=e.monthOff,o=e.dayOff,s=e.submitOff;return Object(b.jsxs)("div",{className:"agecalc",children:[Object(b.jsx)("h2",{className:"title",children:"Age Calculator"}),Object(b.jsx)(y,{errorData:Object(c.a)(Object(c.a)({},this.inputDate),this.state)}),Object(b.jsxs)("div",{className:"inputs",children:[Object(b.jsx)("input",{type:"number",placeholder:"year",disabled:r,onChange:this.yearChange,value:t}),Object(b.jsx)("input",{type:"number",placeholder:"month",disabled:i,onChange:this.monthChange,value:a}),Object(b.jsx)("input",{type:"number",placeholder:"day",disabled:o,onChange:this.dayChange,value:n}),Object(b.jsx)("input",{type:"submit",value:"submit",disabled:s,onClick:this.submitClick})]}),Object(b.jsx)(D,{renderData:this.state})]})}}]),a}(n.Component);function j(){return Object(b.jsx)(r.a.Fragment,{children:Object(b.jsx)(f,{})})}var m=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),i(e),o(e)}))};o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(j,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);