package com.example.demo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.vo.SampleVO;

@Mapper
public interface SampleMapper {
	
	List<SampleVO> selectAll();
	
	List<SampleVO> serch(SampleVO sampleVO);
	
	void insert(SampleVO sampleVO);
	
	void update(SampleVO sampleVO);
	
	void del(SampleVO sampleVO);
}
