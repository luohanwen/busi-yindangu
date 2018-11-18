var entities = require('./mock/entities.json');
  var Vue = require('vue');
  var v3webpack = require('v3webpack-cli');
  /* 增加本地预览标示变量 */
  window._$v3platform_preview_env = true;
  false
  document.body.innerHTML="<div id='app'></div>";
var widget={"componentCode":"yindangu_saas_portal","windowCode":"Product","widgetCode":"JGDiv1","elementId":"app"};
var attrs = [];
var data = {};

  for(var ds in entities){
    var val = entities[ds];
    data[ds] = [];
    /* data[ds].current = {}; */
    attrs.push(` :${ds}="${ds}" `);
  }
  
  var tagName = v3webpack.getWindowComponentName(widget.componentCode,widget.windowCode,widget.widgetCode);
  var templateStr = `<${tagName} ${attrs.join("")}></${tagName}>`;
  new Vue({
    el : "#"+widget.elementId,
    template : templateStr,
    data: data,
    methods : {aa:function(){alert(11);}},
  mounted(){
    setTimeout(()=>{
      for(var ds in entities){
        var val = entities[ds];
        var datas = [];
        if(val){
          for(var i=0,l=val.length;i<l;i++){
            var rd = val[i];
            var metadata = {
              dsName : ds,
              isCurrent : i==0,
              isSelected : i==0
            };
            rd._metadata_ = metadata;
            datas.push(rd);
          }
          datas.current= val.length>0 ? val[0]:{};
          this[ds] = datas;
        }
      }
    },500);
  }
});