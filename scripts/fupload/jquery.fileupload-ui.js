(function(a){if(typeof define==="function"&&define.amd){define(["jquery","tmpl","./jquery.fileupload-image","./jquery.fileupload-audio","./jquery.fileupload-video","./jquery.fileupload-validate"],a)}else{a(window.jQuery,window.tmpl)}}(function(b,a,c){b.blueimp.fileupload.prototype._specialOptions.push("filesContainer","uploadTemplateId","downloadTemplateId");b.widget("blueimp.fileupload",b.blueimp.fileupload,{options:{autoUpload:false,uploadTemplateId:"template-upload",downloadTemplateId:"template-download",filesContainer:undefined,prependFiles:false,dataType:"json",getNumberOfFiles:function(){return this.filesContainer.children().length},getFilesFromResponse:function(d){if(d.result&&b.isArray(d.result.files)){return d.result.files}return[]},add:function(j,h){var i=b(this),g=i.data("blueimp-fileupload")||i.data("fileupload"),d=g.options,f=h.files;h.process(function(){return i.fileupload("process",h)}).always(function(){h.context=g._renderUpload(f).data("data",h);g._renderPreviews(h);d.filesContainer[d.prependFiles?"prepend":"append"](h.context);g._forceReflow(h.context);g._transition(h.context).done(function(){if((g._trigger("added",j,h)!==false)&&(d.autoUpload||h.autoUpload)&&h.autoUpload!==false&&!h.files.error){h.submit()}})})},send:function(g,f){var d=b(this).data("blueimp-fileupload")||b(this).data("fileupload");if(f.context&&f.dataType&&f.dataType.substr(0,6)==="iframe"){f.context.find(".progress").addClass(!b.support.transition&&"progress-animated").attr("aria-valuenow",100).children().first().css("width","100%")}return d._trigger("sent",g,f)},done:function(k,j){var i=b(this).data("blueimp-fileupload")||b(this).data("fileupload"),f=j.getFilesFromResponse||i.options.getFilesFromResponse,h=f(j),g,d;if(j.context){j.context.each(function(e){var l=h[e]||{error:"Empty file upload result"};d=i._addFinishedDeferreds();i._transition(b(this)).done(function(){var m=b(this);g=i._renderDownload([l]).replaceAll(m);i._forceReflow(g);i._transition(g).done(function(){j.context=b(this);i._trigger("completed",k,j);i._trigger("finished",k,j);d.resolve()})})})}else{g=i._renderDownload(h)[i.options.prependFiles?"prependTo":"appendTo"](i.options.filesContainer);i._forceReflow(g);d=i._addFinishedDeferreds();i._transition(g).done(function(){j.context=b(this);i._trigger("completed",k,j);i._trigger("finished",k,j);d.resolve()})}},fail:function(i,h){var g=b(this).data("blueimp-fileupload")||b(this).data("fileupload"),f,d;if(h.context){h.context.each(function(e){if(h.errorThrown!=="abort"){var j=h.files[e];j.error=j.error||h.errorThrown||true;d=g._addFinishedDeferreds();g._transition(b(this)).done(function(){var k=b(this);f=g._renderDownload([j]).replaceAll(k);g._forceReflow(f);g._transition(f).done(function(){h.context=b(this);g._trigger("failed",i,h);g._trigger("finished",i,h);d.resolve()})})}else{d=g._addFinishedDeferreds();g._transition(b(this)).done(function(){b(this).remove();g._trigger("failed",i,h);g._trigger("finished",i,h);d.resolve()})}})}else{if(h.errorThrown!=="abort"){h.context=g._renderUpload(h.files)[g.options.prependFiles?"prependTo":"appendTo"](g.options.filesContainer).data("data",h);g._forceReflow(h.context);d=g._addFinishedDeferreds();g._transition(h.context).done(function(){h.context=b(this);g._trigger("failed",i,h);g._trigger("finished",i,h);d.resolve()})}else{g._trigger("failed",i,h);g._trigger("finished",i,h);g._addFinishedDeferreds().resolve()}}},progress:function(g,f){if(f.context){var d=Math.floor(f.loaded/f.total*100);f.context.find(".progress").attr("aria-valuenow",d).children().first().css("width",d+"%")}},progressall:function(i,g){var h=b(this),f=Math.floor(g.loaded/g.total*100),d=h.find(".fileupload-progress"),j=d.find(".progress-extended");if(j.length){j.html((h.data("blueimp-fileupload")||h.data("fileupload"))._renderExtendedProgress(g))}d.find(".progress").attr("aria-valuenow",f).children().first().css("width",f+"%")},start:function(f){var d=b(this).data("blueimp-fileupload")||b(this).data("fileupload");d._resetFinishedDeferreds();d._transition(b(this).find(".fileupload-progress")).done(function(){d._trigger("started",f)})},stop:function(g){var f=b(this).data("blueimp-fileupload")||b(this).data("fileupload"),d=f._addFinishedDeferreds();b.when.apply(b,f._getFinishedDeferreds()).done(function(){f._trigger("stopped",g)});f._transition(b(this).find(".fileupload-progress")).done(function(){b(this).find(".progress").attr("aria-valuenow","0").children().first().css("width","0%");b(this).find(".progress-extended").html("&nbsp;");d.resolve()})},processstart:function(){b(this).addClass("fileupload-processing")},processstop:function(){b(this).removeClass("fileupload-processing")},destroy:function(g,f){var d=b(this).data("blueimp-fileupload")||b(this).data("fileupload"),h=function(){d._transition(f.context).done(function(){b(this).remove();d._trigger("destroyed",g,f)})};if(f.url){b.ajax(f).done(h)}else{h()}}},_resetFinishedDeferreds:function(){this._finishedUploads=[]},_addFinishedDeferreds:function(d){if(!d){d=b.Deferred()}this._finishedUploads.push(d);return d},_getFinishedDeferreds:function(){return this._finishedUploads},_enableDragToDesktop:function(){var g=b(this),e=g.prop("href"),d=g.prop("download"),f="application/octet-stream";g.bind("dragstart",function(h){try{h.originalEvent.dataTransfer.setData("DownloadURL",[f,d,e].join(":"))}catch(i){}})},_formatFileSize:function(d){if(typeof d!=="number"){return""}if(d>=1000000000){return(d/1000000000).toFixed(2)+" GB"}if(d>=1000000){return(d/1000000).toFixed(2)+" MB"}return(d/1000).toFixed(2)+" KB"},_formatBitrate:function(d){if(typeof d!=="number"){return""}if(d>=1000000000){return(d/1000000000).toFixed(2)+" Gbit/s"}if(d>=1000000){return(d/1000000).toFixed(2)+" Mbit/s"}if(d>=1000){return(d/1000).toFixed(2)+" kbit/s"}return d.toFixed(2)+" bit/s"},_formatTime:function(e){var d=new Date(e*1000),f=Math.floor(e/86400);f=f?f+"d ":"";return f+("0"+d.getUTCHours()).slice(-2)+":"+("0"+d.getUTCMinutes()).slice(-2)+":"+("0"+d.getUTCSeconds()).slice(-2)},_formatPercentage:function(d){return(d*100).toFixed(2)+" %"},_renderExtendedProgress:function(d){return this._formatBitrate(d.bitrate)+" | "+this._formatTime((d.total-d.loaded)*8/d.bitrate)+" | "+this._formatPercentage(d.loaded/d.total)+" | "+this._formatFileSize(d.loaded)+" / "+this._formatFileSize(d.total)},_renderTemplate:function(f,e){if(!f){return b()}var d=f({files:e,formatFileSize:this._formatFileSize,options:this.options});if(d instanceof b){return d}return b(this.options.templatesContainer).html(d).children()},_renderPreviews:function(d){d.context.find(".preview").each(function(e,f){b(f).append(d.files[e].preview)})},_renderUpload:function(d){return this._renderTemplate(this.options.uploadTemplate,d)},_renderDownload:function(d){return this._renderTemplate(this.options.downloadTemplate,d).find("a[download]").each(this._enableDragToDesktop).end()},_startHandler:function(h){h.preventDefault();var d=b(h.currentTarget),f=d.closest(".template-upload"),g=f.data("data");if(g&&g.submit&&!g.jqXHR&&g.submit()){d.prop("disabled",true)}},_cancelHandler:function(g){g.preventDefault();var d=b(g.currentTarget).closest(".template-upload"),f=d.data("data")||{};if(!f.jqXHR){f.errorThrown="abort";this._trigger("fail",g,f)}else{f.jqXHR.abort()}},_deleteHandler:function(f){f.preventDefault();var d=b(f.currentTarget);this._trigger("destroy",f,b.extend({context:d.closest(".template-download"),type:"DELETE"},d.data()))},_forceReflow:function(d){return b.support.transition&&d.length&&d[0].offsetWidth},_transition:function(e){var d=b.Deferred();if(b.support.transition&&e.hasClass("fade")&&e.is(":visible")){e.bind(b.support.transition.end,function(f){if(f.target===e[0]){e.unbind(b.support.transition.end);d.resolveWith(e)}}).toggleClass("in")}else{e.toggleClass("in");d.resolveWith(e)}return d},_initButtonBarEventHandlers:function(){var d=this.element.find(".fileupload-buttonbar"),e=this.options.filesContainer;this._on(d.find(".start"),{click:function(f){f.preventDefault();e.find(".start").click()}});this._on(d.find(".cancel"),{click:function(f){f.preventDefault();e.find(".cancel").click()}});this._on(d.find(".delete"),{click:function(f){f.preventDefault();e.find(".toggle:checked").closest(".template-download").find(".delete").click();d.find(".toggle").prop("checked",false)}});this._on(d.find(".toggle"),{change:function(f){e.find(".toggle").prop("checked",b(f.currentTarget).is(":checked"))}})},_destroyButtonBarEventHandlers:function(){this._off(this.element.find(".fileupload-buttonbar").find(".start, .cancel, .delete"),"click");this._off(this.element.find(".fileupload-buttonbar .toggle"),"change.")},_initEventHandlers:function(){this._super();this._on(this.options.filesContainer,{"click .start":this._startHandler,"click .cancel":this._cancelHandler,"click .delete":this._deleteHandler});this._initButtonBarEventHandlers()},_destroyEventHandlers:function(){this._destroyButtonBarEventHandlers();this._off(this.options.filesContainer,"click");this._super()},_enableFileInputButton:function(){this.element.find(".fileinput-button input").prop("disabled",false).parent().removeClass("disabled")},_disableFileInputButton:function(){this.element.find(".fileinput-button input").prop("disabled",true).parent().addClass("disabled")},_initTemplates:function(){var d=this.options;d.templatesContainer=this.document[0].createElement(d.filesContainer.prop("nodeName"));if(a){if(d.uploadTemplateId){d.uploadTemplate=a(d.uploadTemplateId)}if(d.downloadTemplateId){d.downloadTemplate=a(d.downloadTemplateId)}}},_initFilesContainer:function(){var d=this.options;if(d.filesContainer===undefined){d.filesContainer=this.element.find(".files")}else{if(!(d.filesContainer instanceof b)){d.filesContainer=b(d.filesContainer)}}},_initSpecialOptions:function(){this._super();this._initFilesContainer();this._initTemplates()},_create:function(){this._super();this._resetFinishedDeferreds();if(!b.support.fileInput){this._disableFileInputButton()}},enable:function(){var d=false;if(this.options.disabled){d=true}this._super();if(d){this.element.find("input, button").prop("disabled",false);this._enableFileInputButton()}},disable:function(){if(!this.options.disabled){this.element.find("input, button").prop("disabled",true);this._disableFileInputButton()}this._super()}})}));