(this["webpackJsonpportfolio-final"]=this["webpackJsonpportfolio-final"]||[]).push([[0],{14:function(e,a,t){e.exports=t.p+"static/media/me.92402475.png"},16:function(e,a,t){e.exports=t(28)},21:function(e,a,t){},28:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(13),s=t.n(i),l=(t(21),t(2)),c=t(3),o=t(5),m=t(4),u=t(6),d=t(14),p=t.n(d),g=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).sidebarData=e.sidebarData,t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-info fixed-top",id:"sideNav"},r.a.createElement("a",{className:"navbar-brand js-scroll-trigger",href:"#page-top"},r.a.createElement("span",{className:"d-block d-lg-none"},this.sidebarData.firstName," ",this.sidebarData.lastName),r.a.createElement("span",{className:"d-none d-lg-block"},r.a.createElement("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:p.a,alt:""}))),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#about"},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#experience"},"Experience")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#education"},"Education")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#skills"},"Skills")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#interests"},"Interests")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#projects"},"Projects")))))}}]),a}(n.Component),h=t(8),b=t(11),E=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).landingData=e.landingData,t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"about"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h1",{className:"mb-0"},this.landingData.firstName,r.a.createElement("span",{className:"text-info"},this.landingData.lastName)),r.a.createElement("div",{className:"subheading mb-5"},this.landingData.phoneNumber," \xb7",r.a.createElement("a",{className:"text-danger",href:"joshualelito@gmail.com"},this.landingData.email)),r.a.createElement("p",{className:"lead mb-5"},this.landingData.bio),r.a.createElement("div",{className:"social-icons"},r.a.createElement("a",{href:this.landingData.linkedin,target:"_blank"},r.a.createElement(h.a,{icon:b.b})),r.a.createElement("a",{href:this.landingData.github,target:"_blank"},r.a.createElement(h.a,{icon:b.a})))))}}]),a}(n.Component),f=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).experience=e.experience,t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex justify-content-center",id:"experience"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Experience"),this.experience.map((function(e,a){return r.a.createElement("div",{key:a,className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},r.a.createElement("div",{className:"resume-content"},r.a.createElement("h3",{className:"mb-0"},e.position),r.a.createElement("div",{className:"subheading mb-3"},e.organization),r.a.createElement("p",null,e.aboutWork)),r.a.createElement("div",{className:"resume-date text-md-right"},r.a.createElement("span",{className:"text-primary"},e.fromDate," - ",e.toDate)))}))))}}]),a}(n.Component),v=t(15),N=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).skills=e.skills,t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"skills"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Skills"),r.a.createElement("div",{className:"subheading mb-3"},"Programming Languages & Tools"),r.a.createElement("div",{className:"row"},this.skills.map((function(e,a){return r.a.createElement("div",{key:a,className:"col-6"},r.a.createElement("p",{className:"list-item"},r.a.createElement(h.a,{icon:v.a,color:"green"}),r.a.createElement("span",{className:"ml-3"},e.name)))})))))}}]),a}(n.Component),j=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).education=e.education,t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"education"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Education"),this.education.map((function(e,a){return r.a.createElement("div",{key:a,className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},r.a.createElement("div",{className:"resume-content"},r.a.createElement("h3",{className:"mb-0"},e.university),r.a.createElement("div",{className:"subheading mb-3"},e.degree),r.a.createElement("p",null,e.gpa)),r.a.createElement("div",{className:"resume-date text-md-right"},r.a.createElement("span",{className:"text-primary"},e.fromDate," - ",e.toDate)))}))))}}]),a}(n.Component),k=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).interests=e.interests,t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"interests"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Interests"),r.a.createElement("p",null,this.interests.paragraphOne),r.a.createElement("p",{className:"mb-0"},this.interests.paragraphTwo)))}}]),a}(n.Component),y=t(7),O=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={landingData:y.landing,experience:y.experience,education:y.education,skills:y.skills,interests:y.interests,projects:y.projects},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,{sidebarData:this.state.landingData}),r.a.createElement("div",{className:"container-fluid p-0"},r.a.createElement(E,{landingData:this.state.landingData}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(f,{experience:this.state.experience}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(N,{skills:this.state.skills}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(j,{education:this.state.education}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(k,{interests:this.state.interests})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(27);s.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e){e.exports=JSON.parse('{"landing":{"firstName":"Josh","lastName":"Lelito","phoneNumber":"484","bio":"Currently I am working on building and testing Decentralized applications on the Ethereum blockchain.","email":"joshualelito@gmail.com","linkedin":"https://www.linkedin.com/in/joshua-lelito/","github":"https://github.com/jlelito"},"experience":[{"position":"Information Technology Intern","organization":"SAS","aboutWork":"Automated the decommissioning process for virtual hosting environments using Python and PowerShell","fromDate":"May 2019","toDate":"August 2019"},{"position":"Business Analyst","organization":"Haggard Law Information System","aboutWork":"Completed the SDLC for building an information system for a law firm in Greenville, NC","fromDate":"January 2019","toDate":"May 2019"}],"education":[{"university":"East Carolina University","degree":"Management Information Systems","gpa":"3.88","fromDate":"August 2016","toDate":"May 2020"}],"skills":[{"name":"HTML5"},{"name":"CSS3"},{"name":"Javascript"},{"name":"React"},{"name":"PowerShell"},{"name":"Python"},{"name":"Solidity"},{"name":"Truffle"}],"interests":{"paragraphOne":"Apart from being a web developer, I enjoy researching about blockchain technology and the different use-cases behind it","paragraphTwo":"Development rocks!"},"projects":[{"projectName":"State Loan Machine","projectDetail":"Smart Contract designed to give out loans","link":"https://github.com/jlelito/solidity/tree/master/day16-loan-state-machine"},{"projectName":"Voting Machine","projectDetail":"Smart contract to add voters, create new votes, and vote on Proposals","link":"https://github.com/jlelito/solidity/tree/master/day14-voting"},{"projectName":"Decentralized Autonomous Organization (DAO)","projectDetail":"A DAO using Ether contributed to emulate shares and voting power of a company. ","link":"https://github.com/jlelito/solidity/tree/master/day15-dao"},{"projectName":"Event Organization","projectDetail":"Create and buy tickets for events using a decentralized application.","link":"https://github.com/jlelito/solidity/tree/master/day17-event-organization"}]}')}},[[16,1,2]]]);
//# sourceMappingURL=main.8c5a4f36.chunk.js.map