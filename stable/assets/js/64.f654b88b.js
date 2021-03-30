(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{594:function(_,e,t){"use strict";t.r(e);var a=t(18),s=Object(a.a)({},(function(){var _=this,e=_.$createElement,t=_._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"components-of-url"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#components-of-url"}},[_._v("#")]),_._v(" Components of URL")]),_._v(" "),t("p",[_._v("This page provides definitions and a diagram to make sure everyone is using the same terms. These terms are often overloaded. This page tries to follow the terms used in Swagger documentation.")]),_._v(" "),t("h2",{attrs:{id:"definitions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#definitions"}},[_._v("#")]),_._v(" Definitions")]),_._v(" "),t("p",[_._v("REST APIs have a "),t("em",[_._v("baseUrl")]),_._v(" to which the endpoint paths are appended. The base URL is defined by "),t("em",[_._v("scheme")]),_._v(", "),t("em",[_._v("host")]),_._v(", "),t("em",[_._v("port")]),_._v(" and "),t("em",[_._v("basePath")])]),_._v(" "),t("p",[_._v("where:")]),_._v(" "),t("ul",[t("li",[t("p",[t("strong",[t("code",[_._v("baseUrl")])]),_._v(" is an absolute URL prefix that is different for each instance of the service, or when the service is accessed via the API Gateway.")]),_._v(" "),t("p",[_._v("The endpoint paths are relative paths that follow the documentation of the REST API.")])]),_._v(" "),t("li",[t("p",[t("strong",[t("code",[_._v("scheme")])]),_._v(" is the transfer protocols used by the API. APIML supports the "),t("code",[_._v("http")]),_._v(", "),t("code",[_._v("https")]),_._v(", and WebSocket schemes - "),t("code",[_._v("ws")]),_._v(" and "),t("code",[_._v("wss")]),_._v(".")])]),_._v(" "),t("li",[t("p",[t("strong",[t("code",[_._v("host")])]),_._v(" is the domain name or IP address (IPv4) of the host that serves the API. It may include the port number if it is different from the scheme's default port (80 for HTTP and 443 for HTTPS). Note that this must be the host only, without a scheme or sub-paths.")])]),_._v(" "),t("li",[t("p",[t("strong",[t("code",[_._v("basePath")])]),_._v(" is the URL prefix for all API paths, relative to the host root. It must start with a leading slash "),t("code",[_._v("/")]),_._v(". If basePath is not specified then all endpoint paths start at the host root.")])])]),_._v(" "),t("p",[_._v("When a service is accessed without the API Gateway then the format the "),t("code",[_._v("basePath")]),_._v(" depends on the service. It can be empty or have several parts (e.g. "),t("code",[_._v("/fileMasterPlus/api/v1")]),_._v(").")]),_._v(" "),t("p",[_._v("When a service is accessed via the API Gateway then the format of the URL is standardized in one of the following formats:")]),_._v(" "),t("ul",[t("li",[_._v("Using service type ("),t("code",[_._v("t")]),_._v("), major version ("),t("code",[_._v("v")]),_._v("), and "),t("code",[_._v("serviceId")])]),_._v(" "),t("li",[_._v("Using service type ("),t("code",[_._v("t")]),_._v(") and "),t("code",[_._v("serviceId")])])]),_._v(" "),t("p",[_._v("where:")]),_._v(" "),t("ul",[t("li",[t("p",[t("strong",[t("code",[_._v("t")])]),_._v(" is the type of the service. It can be "),t("code",[_._v("api")]),_._v(", "),t("code",[_._v("ui")]),_._v(", or "),t("code",[_._v("ws")])])]),_._v(" "),t("li",[t("p",[t("strong",[t("code",[_._v("v")])]),_._v(" is the major version the REST API.")]),_._v(" "),t("p",[t("strong",[_._v("Example:")]),_._v(" "),t("code",[_._v("v1")]),_._v(", "),t("code",[_._v("v2")]),_._v(". It is optional since some existing services can have versioning in the endpoint path.")])]),_._v(" "),t("li",[t("p",[t("strong",[t("code",[_._v("serviceId")])]),_._v(" is a unique name of the service that is set during the installation of the service.")])])]),_._v(" "),t("p",[_._v("The fundamental principle is that by changing the base URL you can access different services with the same API because the structure after the base URL is the same.")]),_._v(" "),t("p",[_._v("The base URL is the parameter the can be set in Zowe CLI in order to access the service. The endpoint path is prepared by the Zowe CLI plug-in but the base URL needs to be provided by the user based on installation of the REST API service.")]),_._v(" "),t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[_._v("#")]),_._v(" Examples")]),_._v(" "),t("h3",{attrs:{id:"url-to-a-service-endpoint-without-api-gateway"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#url-to-a-service-endpoint-without-api-gateway"}},[_._v("#")]),_._v(" URL to a service endpoint without API gateway")]),_._v(" "),t("div",{staticClass:"language-txt extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("http://ca11.ca.com:19876/fileMasterPlus/api/v1/mvs/dataSets/test/ping\n\\_____/\\_______________/\\____________________/\\_____________________/\nscheme       host             basePath             endpointPath\n\\____________________________________________/\n                 baseUrl\n")])])]),t("h3",{attrs:{id:"url-with-empty-basepath"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#url-with-empty-basepath"}},[_._v("#")]),_._v(" URL with empty basePath")]),_._v(" "),t("div",{staticClass:"language-txt extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("https://ca32.ca.com:1443/zosmf/info\n\\_____/\\_______________/\\_________/\nscheme       host        endpointPath\n\\______________________/\n        baseUrl\n")])])]),t("h3",{attrs:{id:"url-to-a-service-endpoint-via-api-gateway"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#url-to-a-service-endpoint-via-api-gateway"}},[_._v("#")]),_._v(" URL to a service endpoint via API gateway")]),_._v(" "),t("div",{staticClass:"language-txt extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("https://ca3x.ca.com:10310/api/v1/cafilemasterplus/mvs/dataSets/test/ping\n\\______/\\_______________/\\______________________/\\_____________________/\nscheme       host             basePath                  endpointPath\n                          \\_/ \\/\\______________/\n                           t  v    serviceId\n\n\\_______________________________________________/\n                 baseUrl\n\n")])])]),t("p",[_._v("Or, alternatively:")]),_._v(" "),t("div",{staticClass:"language-txt extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("https://ca3x.ca.com:10310/cafilemasterplus/api/v1/mvs/dataSets/test/ping\n\\______/\\_______________/\\______________________/\\_____________________/\nscheme       host             basePath                  endpointPath\n                          \\______________/\\__/\\/\n                            serviceId      t  v\n\n\\_______________________________________________/\n                 baseUrl\n\n")])])]),t("h3",{attrs:{id:"url-to-a-service-endpoint-via-api-gateway-without-version"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#url-to-a-service-endpoint-via-api-gateway-without-version"}},[_._v("#")]),_._v(" URL to a service endpoint via API gateway without version")]),_._v(" "),t("div",{staticClass:"language-txt extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("https://ca3x.ca.com:10310/api/zosmfca32/zosmf/info\n\\_____/\\________________/\\____________/\\_________/\nscheme        host          basePath    endpointPath\n                          \\_/\\________/\n                           t  serviceId\n\n\\______________________/\n        baseUrl\n")])])]),t("p",[_._v("Or, alternatively:")]),_._v(" "),t("div",{staticClass:"language-txt extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("https://ca3x.ca.com:10310/zosmfca32/api/zosmf/info\n\\_____/\\________________/\\____________/\\_________/\nscheme        host          basePath    endpointPath\n                          \\________/\\_/\n                           serviceId t\n\n\\______________________/\n        baseUrl\n")])])]),t("h3",{attrs:{id:"resources"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[_._v("#")]),_._v(" Resources")]),_._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://swagger.io/docs/specification/2-0/api-host-and-base-path/",target:"_blank",rel:"noopener noreferrer"}},[_._v("https://swagger.io/docs/specification/2-0/api-host-and-base-path/"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=s.exports}}]);