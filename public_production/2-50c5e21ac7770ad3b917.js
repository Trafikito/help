(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{175:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(35),s=a.n(o);a.d(t,"a",function(){return s.a}),a.d(t,"c",function(){return o.withPrefix});a(242);var c=r.a.createContext({}),u=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},207:function(e,t,a){"use strict";var n=a(433),r=a(0),i=a.n(r),l=a(4),o=a.n(l),s=a(246),c=a.n(s),u=a(175);function p(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,o=e.title;return i.a.createElement(u.b,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})},data:n})}p.defaultProps={lang:"en",meta:[],keywords:[]},p.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=p;var m="1025518380"},213:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),l=a.n(i),o=a(417),s=a.n(o),c=a(419),u=a.n(c),p=a(159),m=a.n(p),h=a(202),d=a.n(h),f=a(421),y=a.n(f),g=a(422),v=a.n(g),E=a(4),b=a.n(E),k=a(329),x=a.n(k),C=a(351),S=a.n(C),R=a(234),w=a.n(R),T=a(254),q=a.n(T),D=a(324),O=a.n(D),j=a(326),L=a.n(j),N=a(176),A=a.n(N),M=function(e){var t=e.icon,a=e.isActive,n=e.title,r=a?A.a[500]:null,i=a?"#FFFFFF":null;return l.a.createElement(q.a,{button:!0,style:{backgroundColor:r}},t?l.a.createElement(O.a,{style:{color:i}},t):null,l.a.createElement(L.a,{disableTypography:!1,primary:l.a.createElement("span",{style:{color:i}},n)}))};M.propTypes={icon:b.a.oneOfType([b.a.string,b.a.object]),isActive:b.a.bool.isRequired,title:b.a.string.isRequired};var _=M,P=a(354),B=a.n(P),I=a(362),Q=a.n(I),F=a(361),W=a.n(F),H=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.isOpen,t=this.props.handleClose;return l.a.createElement(x.a,{open:e,onClose:t},l.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",margin:"12px 3px"}},l.a.createElement("div",null,l.a.createElement(m.a,{align:"center",variant:"h5"},"Trafikito"),l.a.createElement(m.a,{align:"center",variant:"caption"},"MONITOR ANYTHING"))),l.a.createElement(S.a,null),l.a.createElement(w.a,null,l.a.createElement("a",{className:"lnu",href:"https://trafikito.com",onClick:t},l.a.createElement(_,{isActive:!1,icon:l.a.createElement(B.a,null),title:"Home"})),l.a.createElement("a",{className:"lnu",href:"https://trafikito.com/servers",onClick:t},l.a.createElement(_,{isActive:!1,icon:l.a.createElement(W.a,null),title:"Dashboard"})),l.a.createElement("a",{className:"lnu",href:"https://trafikito.com/user/account/update-details",onClick:t},l.a.createElement(_,{isActive:!1,icon:l.a.createElement(Q.a,null),title:"My Account"})),l.a.createElement("a",{className:"lnu",href:"https://trafikito.com/price",onClick:t},l.a.createElement(_,{isActive:!1,title:"Price"})),l.a.createElement("a",{className:"lnu",href:"https://trafikito.com/who-built-this",onClick:t},l.a.createElement(_,{isActive:!1,title:"Who built this?"})),l.a.createElement("a",{className:"lnu",href:"https://trafikito.com/support",onClick:t},l.a.createElement(_,{isActive:!1,title:"Help & Support"}))))},t}(l.a.Component);H.propTypes={isOpen:b.a.bool.isRequired,handleClose:b.a.func.isRequired};var U=H,V=a(363),J=a.n(V),G=(a(239),a(365)),K=a.n(G),z=a(34),X=a.n(z),Y=a(416),Z=a.n(Y),$=(a(74),a(380)),ee=a.n($),te=a(411),ae=a.n(te),ne=a(412),re=a.n(ne),ie=a(378),le=a.n(ie),oe=a(240),se=a.n(oe),ce=a(371),ue=a.n(ce),pe=a(373),me=a.n(pe),he=a(374),de=a.n(he),fe=a(200),ye=a.n(fe),ge=a(143),ve=a.n(ge),Ee=a(199),be=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={offset:0},a}return r()(t,e),t.prototype.render=function(){var e=this,t=this.props.videos;if(!t||0===t.length)return null;var a=t.length>4+this.state.offset,n=this.state.offset>0,r=[];return t.forEach(function(t,a){var n=e.props.searchQuery?Ee.highlight(Ee.single(e.props.searchQuery,t.obj.title)):t.obj.title;r.push(l.a.createElement(ye.a,{in:a<=e.state.offset+3,key:t.obj.id,timeout:{enter:500*(a-e.state.offset)},duration:350,delay:350},l.a.createElement("div",{style:{margin:4}},l.a.createElement(se.a,{style:{width:205}},l.a.createElement("img",{src:t.obj.img,alt:t.obj.title,style:{width:205,height:115}}),l.a.createElement("a",{href:t.obj.url},l.a.createElement(m.a,{className:ve.a.results_match,variant:"subtitle2",style:{padding:"16px 16px 0",height:110},component:"div"},l.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}})))))))}),l.a.createElement("div",{style:{position:"relative",margin:"28px 0"}},l.a.createElement("div",{style:{overflow:"hidden",margin:a||n>0?"0 24px 0 24px":0,transition:"all 350ms"}},l.a.createElement("div",{style:{position:"relative",left:213*this.state.offset*-1,transition:"left 350ms",display:"flex"}},r)),a&&l.a.createElement("div",{style:{position:"absolute",transition:"all 350ms",right:0,top:86}},l.a.createElement(ue.a,{color:"primary",classes:{root:ve.a.fab_root},"aria-label":"Next",onClick:function(){var t=e.state.offset+3;e.setState({offset:t})}},l.a.createElement(me.a,null))),n&&l.a.createElement("div",{style:{position:"absolute",left:0,top:86}},l.a.createElement(ue.a,{color:"primary",classes:{root:ve.a.fab_root},"aria-label":"Next",onClick:function(){var t=e.state.offset-4;e.setState({offset:t<0?0:t})}},l.a.createElement(de.a,null))))},t}(l.a.Component);be.propTypes={videos:b.a.array.isRequired,searchQuery:b.a.string};var ke=be,xe=a(241),Ce=(a(36),a(243)),Se=a.n(Ce),Re=a(173),we=a.n(Re),Te=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).timers=[],t.handleOnClick=function(){var e=setTimeout(function(){clearTimeout(e),t.timers.splice(t.timers.indexOf(e),1),t.props.onClick()},250);t.timers.push(e)},t}r()(t,e);var a=t.prototype;return a.componentWillUnmount=function(){this.timers.length>0&&this.timers.forEach(function(e){return clearTimeout(e)})},a.render=function(){var e=Object.assign({},this.props);return delete e.iconButton,delete e.buttonBase,delete e.onClick,delete e.children,!0===this.props.iconButton?l.a.createElement(d.a,Object.assign({},e,{onClick:this.handleOnClick}),this.props.children):!0===this.props.buttonBase?l.a.createElement(we.a,Object.assign({},e,{onClick:this.handleOnClick}),this.props.children):l.a.createElement(Se.a,Object.assign({},e,{onClick:this.handleOnClick}),this.props.children)},t}(i.Component);Te.propTypes={children:b.a.node,iconButton:b.a.bool,buttonBase:b.a.bool,onClick:b.a.func};var qe=Te,De=a(199),Oe=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={allData:null,scrolled:!1,scrolledDom:null,query:"",videos:[]},a.inputRef=l.a.createRef(),a.loadData=a.loadData.bind(X()(a)),a.resetScroll=a.resetScroll.bind(X()(a)),a.getSearchResult=a.getSearchResult.bind(X()(a)),a.getSearchResultVideos=a.getSearchResultVideos.bind(X()(a)),a}r()(t,e);var a=t.prototype;return a.componentWillMount=function(){this.loadData()},a.componentDidUpdate=function(e,t,a){this.state.query===t.query&&this.state.scrolled===t.scrolled||this.resetScroll()},a.resetScroll=function(){this.state.scrolledDom&&this.state.scrolledDom.scrollTo({top:0,left:0,behavior:"smooth"})},a.getSearchResult=function(){var e=[];return this.state.allData&&(this.state.query?e=De.go(this.state.query,this.state.allData,{key:"title",limit:100}):this.state.allData.forEach(function(t){e.length<=100&&e.push({obj:t})})),e},a.getSearchResultVideos=function(){var e=[];return this.state.videos&&(this.state.query?e=De.go(this.state.query,this.state.videos,{key:"title",limit:1e3}):this.state.videos.forEach(function(t){e.length<=1e3&&e.push({obj:t})})),e},a.loadData=function(){this.setState({allData:this.props.searchableData})},a.render=function(){var e=this;if(!this.state.allData)return console.log("#kjrlkejge searchable JSON must be ready before rendering search results."),null;var t=this.getSearchResult(),a=this.getSearchResultVideos();return l.a.createElement(le.a,{open:!0,PaperProps:{style:{margin:"6px 3px"}},maxWidth:"md",fullWidth:!0,onKeyDown:function(t){e.inputRef&&e.inputRef.current&&1===t.key.length&&/[a-z0-9]/i.test(t.key)&&e.inputRef.current.focus()},onKeyUp:function(t){"Escape"===t.key&&e.props.handleClose(),e.resetScroll()}},l.a.createElement("div",{style:{top:1,display:"flex",padding:"48px 12px 48px 24px",margin:0,alignItems:"center",boxShadow:this.state.scrolled?"0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)":""}},l.a.createElement(ee.a,{autoFocus:!0,label:"Search",placeholder:"",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},onChange:function(t){e.setState({query:t.target.value,scrolled:!1})},onKeyUp:function(){return e.resetScroll()},value:this.state.query,inputRef:this.inputRef}),l.a.createElement(qe,{iconButton:!0,onClick:this.props.handleClose,style:{margin:"0 6px 0 12px"}},l.a.createElement(ae.a,null))),l.a.createElement(re.a,{onScroll:function(t){var a=t.currentTarget.getBoundingClientRect().top,n=t.currentTarget.firstChild.getBoundingClientRect().top;n<a&&!1===e.state.scrolled?e.setState({scrolled:!0,scrolledDom:t.currentTarget}):n>a&&!0===e.state.scrolled?e.setState({scrolled:!1,scrolledDom:t.currentTarget}):e.setState({scrolledDom:t.currentTarget})}},l.a.createElement("div",{id:"bar"},l.a.createElement(ke,{videos:a,searchQuery:this.state.query}),l.a.createElement(xe.a,{articles:t,searchQuery:this.state.query}))))},t}(l.a.Component);Oe.propTypes={handleClose:b.a.func.isRequired,searchableData:b.a.array.isRequired};var je=Oe,Le=a(414),Ne=Le.blurRemove,Ae=Le.blurAdd,Me=a(415),_e=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={open:!1,searchableData:null},a.dataPreload=null,a.preload=a.preload.bind(X()(a)),a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.dataPreload=setTimeout(function(){e.preload()},100)},a.componentDidUpdate=function(e,t,a){t.open!==this.state.open&&(this.state.open?Ae():Ne())},a.componentWillUnmount=function(){clearTimeout(this.dataPreload)},a.preload=function(){var e=K()(J.a.mark(function e(){var t,a;return J.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==this.state.searchableData){e.next=5;break}return e.next=3,Me({url:"https://trafikito.com/support/search.json"});case 3:t=e.sent;try{a=JSON.parse(t),this.setState({searchableData:a})}catch(n){}case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),a.render=function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{color:"inherit","aria-label":"Search",style:{marginLeft:3},"aria-haspopup":"true",variant:"contained",onClick:function(){return e.setState({open:!0})}},l.a.createElement(Z.a,null)),this.state.open&&this.state.searchableData&&l.a.createElement(je,{searchableData:this.state.searchableData,handleClose:function(){e.setState({open:!1}),Ne()}}))},t}(l.a.Component),Pe=a(175),Be=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={isLeftMenuOpen:!1},t}return r()(t,e),t.prototype.render=function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{position:"static"},l.a.createElement(u.a,null,l.a.createElement(d.a,{color:"inherit","aria-label":"Menu",style:{marginLeft:-12,marginRight:6},onClick:function(){return e.setState({isLeftMenuOpen:!0})}},l.a.createElement(y.a,null)),l.a.createElement(m.a,{variant:"h6",color:"inherit",style:{flexGrow:1},noWrap:!0},l.a.createElement(Pe.a,{to:"/",style:{color:"#fff"}},"Help & Support")),l.a.createElement(_e,null),l.a.createElement("a",{className:"lnu a-white",href:"https://trafikito.com/user/account/update-details"},l.a.createElement(d.a,{color:"inherit","aria-label":"Account",style:{marginRight:-12}},l.a.createElement(v.a,null))))),l.a.createElement(U,{isOpen:this.state.isLeftMenuOpen,handleClose:function(){return e.setState({isLeftMenuOpen:!1})}}))},t}(l.a.Component),Ie=a(144),Qe=a.n(Ie),Fe=a(246),We=a.n(Fe),He=a(431),Ue=a.n(He),Ve=a(169),Je=a(430),Ge=a.n(Je),Ke=Object(Ve.createMuiTheme)({palette:{primary:{light:A.a[300],main:A.a[500],dark:A.a[700]},secondary:{light:Ge.a[300],main:Ge.a[500],dark:Ge.a[700]}},typography:{useNextVariants:!0}}),ze=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement(Ve.MuiThemeProvider,{theme:Ke},l.a.createElement(Ue.a,null),l.a.createElement(We.a,null,l.a.createElement("meta",{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"})),l.a.createElement(m.a,{component:"div",className:Qe.a.main_holder},l.a.createElement(Be,null),l.a.createElement("div",{className:Qe.a.content_holder},l.a.createElement("div",{style:{padding:"24px 6px"}},l.a.createElement("main",null,this.props.children)))))},t}(l.a.Component);t.a=ze},241:function(e,t,a){"use strict";a(74);var n=a(7),r=a.n(n),i=a(0),l=a.n(i),o=a(4),s=a.n(o),c=a(159),u=a.n(c),p=a(175),m=a(200),h=a.n(m),d=a(243),f=a.n(d),y=a(143),g=a.n(y),v=a(199),E=a(201),b=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={page:1},a}r()(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t,a){e.searchQuery!==this.props.searchQuery&&1!==this.state.page&&this.setState({page:1})},a.render=function(){var e=this,t=this.props.articles,a=[],n=0,r=null;return t&&t.length>0?(t.forEach(function(t,r){if(t=t.obj||t,r>=15*e.state.page)n++;else{var i=e.props.searchQuery?v.highlight(v.single(e.props.searchQuery,t.title)):t.title,o=350*(r+1-15*(e.state.page-1));a.push(l.a.createElement(h.a,{in:r<15*e.state.page,key:t.id,timeout:{enter:o>1500?1500:o},duration:350,delay:350},l.a.createElement("div",{style:{marginBottom:28}},l.a.createElement("a",{style:{margin:"4px 0",display:"block",cursor:"pointer"},href:Object(p.c)(t.uri)+".html"},l.a.createElement(u.a,{style:{color:"inherit",fontSize:17},className:g.a.results_match,variant:"h5",component:"div"},l.a.createElement("div",{dangerouslySetInnerHTML:{__html:i}}))),l.a.createElement(u.a,{variant:"caption"},E(t.excerpt)))))}}),r=n>0?l.a.createElement("div",null,l.a.createElement(u.a,{component:"div",style:{textAlign:"center",margin:"24px 24px 6px"}},"Showing ",15*this.state.page," of ",t.length),l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement(f.a,{variant:"contained",color:"primary",onClick:function(){return e.setState({page:e.state.page+1})}},"Load more"))):l.a.createElement(u.a,{component:"div",style:{textAlign:"center",margin:"24px 24px 6px"}},"Showing ",t.length," of ",t.length)):r=l.a.createElement(u.a,{component:"div",style:{textAlign:"center",margin:"24px 24px 6px"}},"No results. Try different query."),l.a.createElement("div",null,a,r)},t}(l.a.Component);b.propTypes={variant:s.a.oneOf(["compact"]),articles:s.a.array.isRequired,searchQuery:s.a.string},t.a=b},242:function(e,t,a){var n;e.exports=(n=a(375))&&n.default||n},375:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(68),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},414:function(e,t){e.exports={blurAdd:function(){var e=document.getElementById("___gatsby");return e&&e.classList&&e.classList.add&&e.classList.add("blur"),!0},blurRemove:function(){var e=document.getElementById("___gatsby");return e&&e.classList&&e.classList.remove&&e.classList.remove("blur"),!0}}},415:function(e,t,a){a(39),e.exports=function(e){var t=e.url;return new Promise(function(e){var a=new XMLHttpRequest;a.onreadystatechange=function(){4===a.readyState&&200===a.status&&e(a.response)},a.open("GET",t,!0),a.send()})}},433:function(e){e.exports={data:{site:{siteMetadata:{title:"Trafikito - monitor output of any command",description:"Trafikito is monitoring solution. It runs super light POSIX opens ource agent on linux machine and executes commands you select. Then Trafikito servers will parse the output and do all the magic of monitoring - charts, notifications etc.",author:"Lukas Liesis"}}}}}}]);
//# sourceMappingURL=2-50c5e21ac7770ad3b917.js.map