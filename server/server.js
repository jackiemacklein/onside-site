/* express utils */
import "isomorphic-fetch";
import express from "express";
//import cors from "cors";
import fs from "fs";
import path from "path";
import serialize from "serialize-javascript";
import https from "https";
import http from "http";

import { ServerStyleSheet, StyleSheetManager } from "styled-components";

//import sourceMapSupport from "source-map-support";
/* React utils */

import React from "react";
//import ReactDOMServer from "react-dom/server";
import { renderToString } from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";

/* my componets */
import App from "../src/App";
import routes from "../src/routes";

/* certificates config */
//const privateKey = fs.readFileSync("keys/key.key", "utf8");
//const certificate = fs.readFileSync("keys/cert.crt", "utf8");
//const pass = "@VidaVgD2020$";

//const credentials = { cert: certificate, key: privateKey, passphrase: pass };

/* express config */
//const PORT = 80;
const PORT = 3001;
const PORT_HTTPS = 443;
const app = express();

//app.use(cors());

app.use(function (req, res, next) {
  /* if (!req.connection.encrypted) {
    res.redirect("https://" + req.headers.host + req.url);
  } else {*/
  next();
  //}
});

//app.use("/", express.static(path.resolve(__dirname, "..", "construction/index.html")));

app.use("/sitemap.xml", express.static(path.resolve(__dirname, "..", "build/static/sitemap.xml")));
app.use("/robots.txt", express.static(path.resolve(__dirname, "..", "build/static/robots.txt")));
app.use("/static", express.static(path.resolve(__dirname, "..", "build/static")));
app.use("/static", express.static(path.resolve(__dirname, "..", "build/static/media")));

app.get("*", (req, res, next) => {
  const activeRoute = routes.find(route => matchPath(req.url, route));
  const sheet = new ServerStyleSheet();

  const requestInitialData = activeRoute && activeRoute.requestInitialData ? activeRoute.requestInitialData() : [];

  Promise.resolve(requestInitialData)
    .then(initialData => {
      const context = { ...initialData, statusCode: res.statusCode };
      const markup = renderToString(
        <StaticRouter location={req.url} context={context}>
          <StyleSheetManager sheet={sheet.instance}>
            <App {...initialData} />
          </StyleSheetManager>
        </StaticRouter>,
      );

      fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
        if (err) return res.status(500).send("internal error");

        res.status(context.statusCode).send(
          injectHTML(data, {
            markup,
            meta: renderHead(activeRoute, initialData),
            initialData,
            sheet: renderToString(sheet.getStyleElement()),
          }),
        );
      });
    })
    .catch(next);
});

app.get("/construcao", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "construction/index.html"));
});

const injectHTML = (data, { markup, meta, link, scripts, initialData, sheet }) => {
  if (meta) data = data.replace("</head>", `${meta}</head>`);
  if (link) data = data.replace("</head>", `${link}</head>`);
  if (sheet) data = data.replace("</head>", `${sheet}</head>`);
  if (initialData) data = data.replace("</head>", `<script>window.initialData__ = ${serialize(initialData)}</script></head>`);
  if (scripts) data = data.replace("</body>", scripts.join("") + "</body>");

  data = data.replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
  return data;
};

const renderHead = (activeRoute, initialData) => {
  if (activeRoute && activeRoute.options && activeRoute.options.Head) {
    return renderToString(<activeRoute.options.Head {...initialData} />);
  } else {
    return "";
  }
};

var httpServer = http.createServer(app);
//var httpsServer = https.createServer(credentials, app);

httpServer.listen(PORT, function () {
  console.log("Server is running on HTTP PORT: " + PORT);
});
/*httpsServer.listen(PORT_HTTPS, function () {
  console.log("Server is running on HTTPS PORT: " + PORT_HTTPS);
});*/
