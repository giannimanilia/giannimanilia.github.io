(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,,,,function(e,a,t){e.exports=t(30)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/profile-pic.ffb6ff29.jpg"},,,function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/uniapp-usb.4f5064aa.png"},function(e,a,t){e.exports=t.p+"static/media/sudoku-solver.38cc0743.png"},function(e,a,t){e.exports=t.p+"static/media/pokemon-list.399cca3d.png"},function(e,a,t){e.exports=t.p+"static/media/portfolio.749d0ba4.png"},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(11),i=t.n(l),c=(t(20),t(21),t(1)),o=t(2),s=t(4),m=t(3),u=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{id:"home"},r.a.createElement("nav",{id:"nav-wrap"},r.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),r.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),r.a.createElement("ul",{id:"nav",className:"nav"},r.a.createElement("li",{className:"current"},r.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Projects")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),r.a.createElement("div",{className:"row banner"},r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",{className:"responsive-headline"},"Hi! I'm ",e.name),r.a.createElement("hr",null))),r.a.createElement("p",{className:"scrolldown"},r.a.createElement("a",{className:"smoothscroll",href:"#about"},r.a.createElement("i",{className:"icon-down-circle"})))))}}]),t}(n.Component),p=function(e){Object(s.a)(n,e);var a=Object(m.a)(n);function n(){return Object(c.a)(this,n),a.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement("section",{id:"about"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"main-col"},r.a.createElement("img",{className:"profile-pic",src:t(22),alt:""}),r.a.createElement("h2",null,"About Me"),r.a.createElement("p",null,e.aboutme))))}}]),n}(n.Component),d=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement("section",{id:"resume"},r.a.createElement("div",{className:"row education"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Education"))),r.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map((function(e){return r.a.createElement("div",{className:"row item",key:e.university},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("h3",null,e.university,", (",e.location,")"),r.a.createElement("p",{className:"info"},e.career,r.a.createElement("span",null,"\u2022")," ",r.a.createElement("em",{className:"date"},e.startDate," - ",e.endDate)),r.a.createElement("p",null,e.description)))})))),r.a.createElement("div",{className:"row work"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Work"))),r.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map((function(e){return r.a.createElement("div",{className:"row item",key:e.company},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("h3",null,e.company,", (",e.location,")"),r.a.createElement("p",{className:"info"},e.position,r.a.createElement("span",null,"\u2022")," ",r.a.createElement("em",{className:"date"},e.startDate," - ",e.endDate)),r.a.createElement("p",null,e.description)))})))))}}]),t}(n.Component),f=t(6),h=t(7);function E(){var e=Object(f.a)([""]);return E=function(){return e},e}function v(){var e=Object(f.a)(["\n\tflex: 50%;\n\tmax-width: 50%;\n\tpadding: 0 4px;\n\n\timg {\n\t\tmargin-top: 8px;\n\t\tvertical-align: middle;\n\t\twidth: 100%;\n\t}\n\n\t@media screen and (max-width: 800px){\n\t\t& {\n\t\t\tflex: 50%;\n\t\t\tmax-width: 50%;\n\t\t}\n\t}\n\n\t@media screen and (max-width: 600px){\n\t\t& {\n\t\t\tflex: 100%;\n\t\t\tmax-width: 100%;\n\t\t}\n\t}\n"]);return v=function(){return e},e}function g(){var e=Object(f.a)(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tpadding: 0 4px;\n"]);return g=function(){return e},e}var b=h.a.div(g()),N=h.a.div(v()),k=(h.a.div(E()),t(25),function(e){Object(s.a)(n,e);var a=Object(m.a)(n);function n(){return Object(c.a)(this,n),a.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("section",{id:"portfolio"},r.a.createElement("h1",null,"Check Out Some of My Projects."),r.a.createElement(b,null,r.a.createElement(N,null,r.a.createElement("div",{className:"grid"},r.a.createElement("div",{className:"effect-zoe"},r.a.createElement("img",{src:t(26),alt:"uniapp-usb"}),r.a.createElement("figcaption",null,r.a.createElement("h2",{className:"project-name hidden-xs"},"UniApp USB"),r.a.createElement("p",{className:"icon-links"},r.a.createElement("a",{href:"https://play.google.com/store/apps/details?id=com.gmail.gmaniliapp",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-android"})))))),r.a.createElement("div",{className:"grid"},r.a.createElement("div",{className:"effect-zoe"},r.a.createElement("img",{src:t(27),alt:"sudoku-solver"}),r.a.createElement("figcaption",null,r.a.createElement("h2",{className:"project-name hidden-xs"},"Sudoku Solver"),r.a.createElement("p",{className:"icon-links"},r.a.createElement("a",{href:"https://play.google.com/store/apps/details?id=com.gmaniliapp.sudokusolver",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-android"})),r.a.createElement("a",{href:"https://bitbucket.org/GManiliapp/sudoku-solver",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-bitbucket"}))))))),r.a.createElement(N,null,r.a.createElement("div",{className:"grid"},r.a.createElement("div",{className:"effect-zoe"},r.a.createElement("img",{src:t(28),alt:"pokemon-list"}),r.a.createElement("figcaption",null,r.a.createElement("h2",{className:"project-name hidden-xs"},"Pokemon List"),r.a.createElement("p",{className:"icon-links"},r.a.createElement("a",{href:"https://bitbucket.org/GManiliapp/pokemon-list",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-bitbucket"})))))),r.a.createElement("div",{className:"grid"},r.a.createElement("div",{className:"effect-zoe"},r.a.createElement("img",{src:t(29),alt:"portfolio"}),r.a.createElement("figcaption",null,r.a.createElement("h2",{className:"project-name hidden-xs"},"Portfolio"),r.a.createElement("p",{className:"icon-links"},r.a.createElement("a",{href:"https://github.com/giannimanilia/giannimanilia.github.io",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-github"})))))))))}}]),n}(n.Component)),w=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{id:"contact"},r.a.createElement("div",{className:"row section-head"},r.a.createElement("div",{className:"ten columns"},r.a.createElement("p",{className:"lead"},"Feel free to contact me for any work or suggestions"))))}}]),t}(n.Component),y=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement("footer",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:e.className})))}))),r.a.createElement("p",null,"\xa9 2020 by Gianni Antonio Manilia ")),r.a.createElement("div",{id:"go-top"},r.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},r.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(n.Component),j={imagebaseurl:"https://giannimanilia.github.io/",name:"Gianni",linkedinId:"gianni-antonio-manilia",skypeid:"giannimanilia@gmail.com",socialLinks:[{name:"instagram",url:"https://www.instagram.com/giannimanilia/",className:"fa fa-instagram"},{name:"linkedin",url:"https://www.linkedin.com/in/gianni-antonio-manilia/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/giannimanilia",className:"fa fa-github"},{name:"bitbucket",url:"https://bitbucket.org/GManiliapp/",className:"fa fa-bitbucket"}],aboutme:"I am computer engineer with a strong passion for android development. I'm always looking forward to new challenges and learn new things. I have lived, studied and worked in two different realities, which has allowed me to overcome obstacles and understand that everything is possible when you try your best to achieve a goal. However, I have also failed, and that gave me the opportunity of learn a lot through my mistakes.",address:"Padua, Italy",website:"https://giannimanilia.github.io/",education:[{university:"University of Padua",location:"Padua, Italy",career:"Bachelor's degree in computer engineering",startDate:"09/2017",endDate:"03/2019",description:"Final grade: 96/110"},{university:"Sim\xf3n Bol\xedvar University",location:"Caracas, Venezuela",career:"Computer engineering student",startDate:"09/2012",endDate:"07/2017",description:"Final grade: 3,6573/5"}],work:[{company:"OpenSymbol",location:"Vicenza, Italy",position:"Software Developer",startDate:"10/2018",endDate:"03/2020",description:"CRM software development"},{company:"Kratos & 2waysports",location:"Caracas, Venezuela",position:"Junior Android Developer",startDate:"06/2017",endDate:"08/2017",description:"Colombian national soccer team: https://play.google.com/store/apps/details?id=com.Wise.SeleccionColombiaOficial"}]};var O=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u,{resumeData:j}),r.a.createElement(p,{resumeData:j}),r.a.createElement(d,{resumeData:j}),r.a.createElement(k,{resumeData:j}),r.a.createElement(w,{resumeData:j}),r.a.createElement(y,{resumeData:j}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.995006a7.chunk.js.map