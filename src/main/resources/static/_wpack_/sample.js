/*amd /sample.xml 8021 e032419f6c27399b7596e252ba84c1523f2e7d98fed3c2cd36d6d2f11b71f0a3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_req',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'id',name:'id'}},{T:1,N:'w2:key',A:{dataType:'text',id:'name',name:'이름'}},{T:1,N:'w2:key',A:{id:'tel',name:'전화번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_list',repeatNode:'map',saveRemovedData:'true',style:'','ev:ondataload':'scwin.dlt_list_ondataload','ev:oninsertrow':'scwin.dlt_list_oninsertrow','ev:onremoverow':'scwin.dlt_list_onremoverow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'id',name:'id'}},{T:1,N:'w2:column',A:{dataType:'text',id:'name',name:'이름'}},{T:1,N:'w2:column',A:{dataType:'text',id:'tel',name:'전화번호'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'/selectAll',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',id:'sbm_selectAll',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'',replace:'',target:'data:json,dlt_list',style:''}},{T:1,N:'xf:submission',A:{id:'sbm_serch',ref:'data:json,dma_req',target:'data:json,dlt_list',action:'/serch',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'조회중......','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',ref:'data:json,{"action":"modified","id":"dlt_list"}',target:'',action:'/save',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
	$p.executeSubmission("sbm_selectAll");
};

scwin.btn_serch_onclick = function(e) {
	$p.executeSubmission("sbm_serch");
};

function CheckKo(inputValue) {
	var regExp = /^[A-Za-z]*$/;
	if (!regExp.test(inputValue)) {
		alert("이름이 정확하지 않습니다.");
		return inputValue;
	}
}


scwin.input_id_onchange = function(info) {
	checkKo(input_id.getValue());
};

scwin.input_id_onkeyup = function(e) {

};


scwin.dlt_list_ondataload = function() {
	span_cnt.setValue(dlt_list.getRowCount());
};

scwin.dlt_list_oninsertrow = function(info) {
	span_cnt.setValue(dlt_list.getRowCount());
};

scwin.dlt_list_onremoverow = function(info) {
	span_cnt.setValue(dlt_list.getRowCount());
};

scwin.btn_insert_onclick = function(e) {
	dlt_list.insertRow(0);
};

scwin.btn_save_onclick = function(e) {
	$p.executeSubmission("sbm_save");
	$p.reinitialize();
};

scwin.btn_del_onclick = function(e) {
	var focusIdx = user_grid.getFocusedRowIndex();
	dlt_list.deleteRow(focusIdx);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'pgtbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_fav',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label'}]},{T:1,N:'w2:textbox',A:{class:'pgt_tit',id:'',label:'SpirngBoot 2.7.5',style:'',tagname:''}},{T:1,N:'xf:group',A:{class:'breadcrumb',id:'',style:''}}]},{T:1,N:'xf:group',A:{class:'schbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'schbox_inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'768',class:'w2tb tbl ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'ID',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'input_id',style:'width: 144px;height: 21px;',ref:'data:dma_req.id',validator:'checkKo',validateOnInput:'false','ev:onchange':'scwin.input_id_onchange','ev:onkeyup':'scwin.input_id_onkeyup'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'이름',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'',style:'width: 144px;height: 21px;',ref:'data:dma_req.name'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전화번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'',style:'width: 144px;height: 21px;',ref:'data:dma_req.tel'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:span',A:{dataType:'number',style:'',label:'0',id:'span_cnt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:span',A:{label:'건',style:'',id:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn_schbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',escape:'false',id:'btn_serch',style:'',type:'button','ev:onclick':'scwin.btn_serch_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'gvw',dataList:'data:dlt_list',defaultCellHeight:'26',focusMode:'row',id:'user_grid',keepDefaultColumnWidth:'true',rowNumHeaderValue:'No',rowNumVisible:'true',rowNumWidth:'50',rowStatusHeaderValue:'상태',rowStatusVisible:'true',rowStatusWidth:'50',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'height: 150px;',visibleRowNum:'10',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column3',value:'id',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column2',value:'이름',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column1',value:'전화번호',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'id',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'name',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'tel',displayMode:'label'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:'float:right;clear:both;'},E:[{T:1,N:'xf:trigger',A:{type:'button',id:'btn_insert',style:'width: 80px;height: 23px;',class:'btn_cm  row_add','ev:onclick':'scwin.btn_insert_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행추가'}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'btn_del',style:'width: 80px;height: 23px;',class:'btn_cm  row_del','ev:onclick':'scwin.btn_del_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행삭제'}]}]},{T:1,N:'xf:trigger',A:{type:'button',id:'btn_save',style:'width: 80px;height: 23px;','ev:onclick':'scwin.btn_save_onclick',class:'btn_cm pt'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]})