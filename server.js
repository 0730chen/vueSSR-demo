const Vue =require('vue')
const express = require('express')
const path = require('path')
const {createBundleRenderer}= require('vue-server-renderer')
const template = require('fs').readFileSync(path.join(__dirname,'./src/public/template.html'),'utf-8')
const serverBundle =require('./dist/vue-ssr-server-bundle.json')
const clientManifest  =require('./dist/vue-ssr-client-manifest.json')
function createRenderer(bundle,options){
  return createBundleRenderer(bundle,Object.assign(options,{
    runInNewContext: false}
  ))
}
let renderer = createRenderer(serverBundle, {
  template,
  clientManifest
});
function render(req, res) {
  const startTime = Date.now();
  res.setHeader('Content-Type', 'text/html');
  //模板字符串
  const context = {
    title: 'SSR 测试', // default title
    url: req.url
  };
  renderer.renderToString(context, (err, html) => {
    res.send(html);
  });
}
const server = express()
server.use('',(req,res)=>{
  const context = {url:req.url}
  render(req,res)
})
server.listen(8001,()=>{
  console.log('服务启动8001')
})
