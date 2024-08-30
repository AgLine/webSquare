package com.example.demo.svc.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.mapper.SampleMapper;
import com.example.demo.svc.SampleSvc;
import com.example.demo.vo.SampleVO;

@Service
public class SampleSvcImpl implements SampleSvc{
	
	@Autowired
	private SampleMapper sampleMapper;
	
	@Override
	public List<SampleVO> selectAll(){
		return sampleMapper.selectAll();
	}
	
	@Override
	public List<SampleVO> serch(SampleVO sampleVO) {
		return sampleMapper.serch(sampleVO);
	}
	
	@Override
	public void insert(SampleVO sampleVO) {
		sampleMapper.insert(sampleVO);
	}
	
	@Override
	public void update(SampleVO sampleVO) {
		sampleMapper.update(sampleVO);
	}
	
	@Override
	public void del(SampleVO sampleVO) {
		sampleMapper.del(sampleVO);
	}

}
