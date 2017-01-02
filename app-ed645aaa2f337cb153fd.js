webpackJsonp([0],[,,,function(t,e){},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.aboutModule=void 0;var a=n(0),s=i(a),o=n(23),l=n(24),c=n(22),r=e.aboutModule="";s.default.module(r,["ui.bootstrap"]).component("aboutEverything",o.everything).component("aboutLife",l.life).component("aboutCode",c.code)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.footer={template:n(16)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.header={template:n(17)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.main={template:n(18)}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.techsModule=void 0;var a=n(0),s=i(a),o=n(25),l=n(26),c=e.techsModule="techs";s.default.module(c,["ui.bootstrap"]).component("taylorTech",o.tech).component("taylorTechs",l.techs)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.title={template:n(21)}},function(t,e){"use strict";function n(t,e,n){n.html5Mode(!0).hashPrefix("!"),e.otherwise("/"),t.state("app",{url:"/",component:"app"})}n.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},,,function(t,e){t.exports='<div class="page-header important-text text-center">\n  <h1>code</h1>\n</div>\n<div class="row-fluid">\n  <div class="col-xs-12 col-sm-4 code-example">\n    <div class="text-center">\n      <a class="important-text" href="https://tjkemper.github.io/poke/" target="_blank">poke</a>\n      <img class="tech-img" src="http://www.w3devcampus.com/wp-content/uploads/logoAndOther/logo_JavaScript.png" alt="javascript"/>\n      <img class="tech-img" src="http://getbootstrap.com/apple-touch-icon.png" alt="bootstrap"/>\n    </div>\n    <div class="code-description">\n      <div class="important-text">who</div>\n      Jeffrey Goyette, Jacob Eanes, and myself\n    </div>\n    <div class="code-description">\n      <div class="important-text">what</div>\n      Pokemon battle!\n    </div>\n    <div class="code-description">\n      <div class="important-text">role (team lead)</div>\n      <ul class="list-group">\n        <li class="list-group-item">distribute work across team</li>\n        <li class="list-group-item">develop game logic in JavaScript</li>\n        <li class="list-group-item">design application using Bootstrap</li>\n      </ul>\n    </div>\n    <div class="code-description">\n      <div class="important-text">technologies</div>\n      JavaScript, Twitter Bootstrap, and the <a href="https://pokeapi.co/">RESTful Poke API</a>\n    </div>\n  </div>\n  <div class="col-xs-12 col-sm-4 code-example">\n    <div class="text-center">\n      <a class="important-text" href="https://github.com/tjkemper/forum" target="_blank">forum</a>\n      <img class="tech-img" src="https://i.ytimg.com/i/bn1OgGei-DV7aSRo_HaAiw/mq1.jpg?v=57d9f2ca" alt="angular"/>\n      <img class="tech-img" src="http://www.dvt.co.za/images/java-developer/logo-spring-framework.png" alt="spring"/>\n    </div>\n    <div class="code-description">\n      <div class="important-text">who</div>\n      Individual project\n    </div>\n    <div class="code-description">\n      <div class="important-text">what</div>\n      A forum to share ideas\n    </div>\n    <div class="code-description">\n      <div class="important-text">role (developer)</div>\n      <ul class="list-group">\n        <li class="list-group-item">create SPA with Angular</li>\n        <li class="list-group-item">create RESTful API using Spring</li>\n        <li class="list-group-item">manage app in AWS</li>\n      </ul>\n    </div>\n    <div class="code-description">\n      <div class="important-text">technologies</div>\n      Angular, Spring, OracleDB, AWS\n    </div>\n  </div>\n  <div class="col-xs-12 col-sm-4 code-example">\n    <div class="text-center">\n      <a class="important-text" href="https://github.com/revaturelabs/scheduler" target="_blank">scheduler</a>\n      <img class="tech-img" src="https://d3nmt5vlzunoa1.cloudfront.net/phpstorm/files/2015/10/large_v-trans.png" alt="docker"/>\n      <img class="tech-img" src="https://avatars3.githubusercontent.com/u/13629408?v=3&s=400" alt="kubernetes"/>\n    </div>\n    <div class="code-description">\n      <div class="important-text">who</div>\n      Many awesome people at Revature\n    </div>\n    <div class="code-description">\n      <div class="important-text">what</div>\n      Resource management tool\n    </div>\n    <div class="code-description">\n      <div class="important-text">role (operations)</div>\n      <ul class="list-group">\n        <li class="list-group-item">create Dockerfile to run app in container</li>\n        <li class="list-group-item">create Kubernetes cluster on AWS</li>\n        <li class="list-group-item">manage app running in Kubernetes</li>\n      </ul>\n    </div>\n    <div class="code-description">\n      <div class="important-text">technologies</div>\n      Angular, Spring, Docker, Kubernetes, AWS\n    </div>\n  </div>\n</div>\n'},function(t,e){t.exports='<div class="about-life">\n  <about-life class="conatiner-fluid"></about-life>\n</div>\n<div class="about-code">\n  <about-code class="conatiner-fluid"></about-code>\n</div>\n'},function(t,e){t.exports='<div class="row-fluid">\n  <div class="col-xs-4 text-center">\n    <img class="life-img" src="https://meritbadge.org/wiki/images/6/68/EagleScout.png" alt="Eagle Scout"/>\n    <div class="important-text">achievement</div>\n  </div>\n  <div class="col-xs-4 text-center">\n    <img class="life-img" src="http://www.texasmonthly.com/wp-content/uploads/2015/06/skeet-shoot-large.jpg" alt="Skeet Shooting"/>\n    <div class="important-text">hobby</div>\n  </div>\n  <div class="col-xs-4 text-center">\n    <img class="life-img" src="https://www.gentlemansgazette.com/wp-content/uploads/2014/01/Scotch-Cigars-go-well-together.jpg" alt="Scotch and Cigars"/>\n    <div class="important-text">vice</div>\n  </div>\n</div>\n'},function(t,e){t.exports='<footer class="footer">\n  <div class="container">\n    <div class="text-center"><i class="fa fa-code" aria-hidden="true"></i> with <i class="fa fa-heart" aria-hidden="true"></i></div>\n  </div>\n</footer>\n'},function(t,e){t.exports='<header class="navbar navbar-inverse navbar-fixed-top my-navbar">\n  <div class="container-fluid">\n\n    <div class="navbar-header">\n      <div class="header-my-name">taylor kemper</div>\n\n      <div data-toggle="collapse" class="tiny-social-nav">\n        <ul class="social-nav">\n          <li>\n            <a href="https://github.com/tjkemper" target="_blank" class="btn btn-social-icon btn-github">\n              <span class="fa fa-github"></span>\n            </a>\n          </li>\n          <li>\n            <a href="https://www.linkedin.com/in/taylorkemper" target="_blank" class="btn btn-social-icon btn-linkedin">\n              <span class="fa fa-linkedin"></span>\n            </a>\n          </li>\n          <li>\n            <a href="https://twitter.com/taylorjkemper" target="_blank" class="btn btn-social-icon btn-twitter">\n              <span class="fa fa-twitter"></span>\n            </a>\n          </li>\n        </ul>\n      </div>\n\n    </div>\n    <div class="collapse navbar-collapse">\n    <ul class="social-nav">\n      <li>\n        <a href="https://github.com/tjkemper" target="_blank" class="btn btn-block btn-social btn-github">\n          <span class="fa fa-github"></span><span class="social-text">GitHub</span>\n        </a>\n      </li>\n      <li>\n        <a href="https://www.linkedin.com/in/taylorkemper" target="_blank" class="btn btn-block btn-social btn-linkedin">\n          <span class="fa fa-linkedin"></span><span class="social-text">LinkedIn</span>\n        </a>\n      </li>\n      <li>\n        <a href="https://twitter.com/taylorjkemper" target="_blank" class="btn btn-block btn-social btn-twitter">\n          <span class="fa fa-twitter"></span><span class="social-text">Twitter</span>\n        </a>\n      </li>\n    </ul>\n    </div>\n\n  </div>\n</header>\n'},function(t,e){t.exports='<div>\n  <taylor-header></taylor-header>\n  <main class="under-header">\n    <taylor-title></taylor-title>\n    <about-everything></about-everything>\n  </main>\n  <taylor-footer></taylor-footer>\n</div>\n'},function(t,e){t.exports='<div>\n  <img style="width:100px; float:left;" ng-src="{{ $ctrl.tech.logo }}"/>\n</div>\n'},function(t,e){t.exports='<div>\n  <div>\n    <taylor-tech ng-repeat="tech in $ctrl.techs" tech="tech"></taylor-tech>\n  </div>\n</div>\n'},function(t,e){t.exports='<div class="container-fluid">\n  <div class="text-center">\n    <img class="title-my-picture" src="//avatars0.githubusercontent.com/u/17164520?v=3&s=460"/>\n    <h3>\n      <i class="fa fa-code" aria-hidden="true"></i>\n      ♞\n      <span style="font-size:31px;">♠</span>\n      <i class="fa fa-music" aria-hidden="true"></i>\n      <!-- <img src="../images/lacrosse.png" aria-hidden="true"/> -->\n\n\n    </h3>\n\n  </div>\n</div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.code={template:n(13)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.everything={template:n(14)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.life={template:n(15)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.tech={template:n(19),bindings:{tech:"<"}}},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=["$http",function t(e){var n=this;i(this,t),e.get("app/techs/techs.json").then(function(t){n.techs=t.data})}];e.techs={template:n(20),controller:a}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var a=n(0),s=i(a),o=n(8),l=n(4);n(2),n(1);var c=n(10),r=i(c),d=n(7),p=n(6),u=n(9),v=n(5);n(3),s.default.module("app",[l.aboutModule,o.techsModule,"ui.router","ui.bootstrap"]).config(r.default).component("app",d.main).component("taylorHeader",p.header).component("taylorTitle",u.title).component("taylorFooter",v.footer)}],[27]);