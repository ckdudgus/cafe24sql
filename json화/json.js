// 폼필드에 내가 원하는댈 사용자가 데이터를 삽입했음 
var  jsonstr = decodeURIComponent($("[name='"+props.botable+"']").serialize());           
var  json_form = JSON.stringify(jsonstr).replace(/\&/g, '\",\"') 
json_form = "{\""+ json_form.replace(/=/gi, '\":\"') + "\"}"
// json화시킴 -> 노드