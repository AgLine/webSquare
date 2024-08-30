package com.example.demo.svc;

import java.util.List;

import com.example.demo.vo.SampleVO;

public interface SampleSvc {

	public List<SampleVO> selectAll();
	
	public List<SampleVO> serch(SampleVO sampleVO);
	
	public void insert(SampleVO sampleVO);
	
	public void update(SampleVO sampleVO);
	
	public void del(SampleVO sampleVO);
}
