function f(d){d.h.i.prototype.options.A.push({action:"validate",m:!0,a:"@",b:"@",f:"@",c:"@",disabled:"@disableValidation"});d.G("blueimp.fileupload",d.h.i,{options:{a:/(\.|\/)(doc|docx|xls|xlsx|ppt|pptx|pdf|zip|rar)$/i,b:2E7,f:void 0,c:200,j:d.v,u:{c:"Server prekrcan, datoteka nije poslana, obrati se nastavniku !",a:"Ova vrsta datoteke nije dozvoljena !",b:"Datoteka je prevelika !",f:"Datoteka je premala !"}},w:{F:function(c,a){if(a.disabled)return c;var g=d.l(),e=this.options,b=c.files[c.index];
if(a.f||a.b)var h=b.size;"number"===d.type(a.c)&&(e.j()||0)+c.files.length>a.c?b.error=e.g("maxNumberOfFiles"):!a.a||a.a.test(b.type)||a.a.test(b.name)?h>a.b?b.error=e.g("maxFileSize"):"number"===d.type(h)&&h<a.f?b.error=e.g("minFileSize"):delete b.error:b.error=e.g("acceptFileTypes");b.error||c.files.error?(c.files.error=!0,g.C(this,[c])):g.D(this,[c]);return g.B()}}})}
"function"===typeof define&&define.o?define(["jquery","./jquery.fileupload-process"],f):"object"===typeof exports?f(require("jquery"),require("./jquery.fileupload-process")):f(window.s);