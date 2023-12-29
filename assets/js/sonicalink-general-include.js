/*
*
* Sonicalink General Include Script
* 
* This javascript should be included in every Sonicalink website.
* Report bugs at report@sonicalink.com
*
* <script src="https://www.sonicalink.com/assets/js/sonicalink-general-include.js" crossorigin="anonymous"></script>
* 
*/

/*
*
* Self-XSS Warning script
* 
* Sonicalink is dedicated to protect everyone's online safety.
* 
*/
const warningTitleCSS = 'color:red; font-size:60px; font-weight: bold;';
const warningDescCSS = 'font-size: 18px;';

console.log('%cStop!', warningTitleCSS);
console.log("%cThis is a browser feature intended for developers. By doing anthing in this console, you risk giving attackers access to your account or computer.", warningDescCSS);
console.log("%cIf someone told you to copy and paste or read something here to enable a \"hidden\" feature or \"hack\" someone, it is a scam and might harm your online safety.", warningDescCSS);
console.log('%cSee https://wikipedia.org/wiki/Self-XSS for more information.', warningDescCSS);
console.log('%cStay safe and close this.', 'color:red; font-size:30px; font-weight: bold;');

/* End of Self-XSS Warning script */