import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as u,i as c}from"./assets/vendor-77e16229.js";let o=null;const t={inputDate:document.getElementById("datetime-picker"),btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]"),dataDaysEl:document.querySelector("span[data-days]"),dataHoursEl:document.querySelector("span[data-hours]"),dataMinutesEl:document.querySelector("span[data-minutes]"),dataSecondsEl:document.querySelector("span[data-seconds]")},p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,disableMobile:!0,onClose(e){const n=new Date().getTime();if(e[0]-n<=0)return c.error({title:"Error",position:"topRight",message:"Please choose a date in the future"}),null;t.btnStart.disabled=!1,t.btnStart.classList.add("disabled"),t.btnStop.style.display="none"}};t.btnStart.disabled=!0;t.btnStart.addEventListener("click",m);t.btnStop.addEventListener("click",b);const S=u(t.inputDate,p);function m(){t.btnStart.disabled=!0,t.btnStop.style.display="inline-block",t.inputDate.disabled=!0;const e=S.latestSelectedDateObj.getTime();o=setInterval(y,1e3,e)}function b(){clearInterval(o),t.btnStart.disabled=!0,t.inputDate.disabled=!1,t.btnStop.style.display="none",r({days:"00",hours:"00",minutes:"00",seconds:"00"})}function y(e){let n=e-new Date().getTime();if(n<=0){clearInterval(o),r({days:"00",hours:"00",minutes:"00",seconds:"00"}),t.btnStart.disabled=!0,t.inputDate.disabled=!1,t.btnStop.style.display="none";return}const a=f(n);r(a)}function r(e){t.dataDaysEl.innerText=String(e.days).padStart(2,"0"),t.dataHoursEl.innerText=String(e.hours).padStart(2,"0"),t.dataMinutesEl.innerText=String(e.minutes).padStart(2,"0"),t.dataSecondsEl.innerText=String(e.seconds).padStart(2,"0")}function f(e){const s=Math.floor(e/864e5),d=Math.floor(e%864e5/36e5),i=Math.floor(e%864e5%36e5/6e4),l=Math.floor(e%864e5%36e5%6e4/1e3);return{days:s,hours:d,minutes:i,seconds:l}}
//# sourceMappingURL=commonHelpers.js.map
