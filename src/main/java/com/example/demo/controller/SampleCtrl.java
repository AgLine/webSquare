package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.example.demo.vo.SampleVO;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.svc.SampleSvc;

@Controller
public class SampleCtrl {

	@Autowired
	private SampleSvc sampleSvc;
	
	@RequestMapping(value="/selectAll", method=RequestMethod.POST)
	public @ResponseBody Map<String, Object> selectAll(){
	
		Map<String, Object> result = new HashMap<String, Object>();
		
		List<SampleVO> list = new ArrayList<>();
		list = sampleSvc.selectAll();
		
		result.put("dlt_list", list);
		return result;
	}
	
	@RequestMapping(value="/serch", method=RequestMethod.POST)
	public @ResponseBody Map<String, Object> serch(@RequestBody Map<String, SampleVO> param){
	
		Map<String, Object> result = new HashMap<String, Object>();
		
		result.put("dlt_list", sampleSvc.serch(param.get("dma_req")));
		return result;
	}
	
	@RequestMapping(value="/save", method=RequestMethod.POST)
	public @ResponseBody Map<String, Object> save(@RequestBody Map<String, Object> param){
	
		Map<String, Object> result = new HashMap<String, Object>();
		//System.out.println(param);
		ObjectMapper mapper = new ObjectMapper(); 
		
		//List<SampleVO> sampleVOList = (List<SampleVO>) param.get("dlt_list");
		List<SampleVO> sampleVOList = mapper.convertValue(param.get("dlt_list"), new TypeReference<List<SampleVO>>() {});
		
		for(int i = 0; i < sampleVOList.size(); i++) {
			//System.out.println(sampleVOList.get(i));
			
			if("C".equals(sampleVOList.get(i).getRowStatus())) {
				sampleSvc.insert(sampleVOList.get(i));
			}
			if("U".equals(sampleVOList.get(i).getRowStatus())) {
				sampleSvc.update(sampleVOList.get(i));
			}
			if("D".equals(sampleVOList.get(i).getRowStatus())) {
				sampleSvc.del(sampleVOList.get(i));
			}
		}
		
		return result;
	}
	
	@RequestMapping(value="/testJson", method=RequestMethod.POST)
	public @ResponseBody Map<String, Object> testJson(@RequestBody Map<String, Object> param){
	
		Map<String, Object> result = new HashMap<String, Object>();
		
		List<Object> useList = new ArrayList<Object>();
		Map<String, Object> user1 = new HashMap<String, Object>();
		user1.put("id", "I001");
		user1.put("name", "사용자 1");
		user1.put("tel", "010-1000-0011");
		useList.add(user1);
		
		Map<String, Object> user2 = new HashMap<String, Object>();
		user1.put("id", "I002");
		user1.put("name", "사용자 2");
		user1.put("tel", "010-2000-0022");
		useList.add(user1);
		result.put("dlt_list", useList);
		
		return result;
	}
}
