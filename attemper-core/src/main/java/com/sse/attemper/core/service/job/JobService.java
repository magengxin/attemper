package com.sse.attemper.core.service.job;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.sse.attemper.common.param.dispatch.job.JobGetParam;
import com.sse.attemper.common.param.dispatch.job.JobListParam;
import com.sse.attemper.common.param.dispatch.job.JobProjectSaveParam;
import com.sse.attemper.common.result.dispatch.job.FlowJob;
import com.sse.attemper.common.result.dispatch.project.Project;
import com.sse.attemper.core.dao.mapper.job.BaseJobMapper;
import com.sse.attemper.sys.service.BaseServiceAdapter;
import com.sse.attemper.sys.util.PageUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

/**
 * @author ldang
 */
@Service
@Transactional
public class JobService extends BaseServiceAdapter {

    @Autowired
    private BaseJobMapper mapper;

    /**
     * 根据id查询租户
     * @param getParam
     * @return
     */
    public FlowJob get(JobGetParam getParam) {
        Map<String, Object> paramMap = injectAdminedTenantIdToMap(getParam);
        return mapper.get(paramMap);
    }

    /**
     * 查询列表
     * @param listParam
     * @return
     */
    public Map<String, Object> list(JobListParam listParam) {
        Map<String, Object> paramMap = injectAdminedTenantIdToMap(listParam);
        PageHelper.startPage(listParam.getCurrentPage(), listParam.getPageSize());
        Page<FlowJob> list = (Page<FlowJob>) mapper.list(paramMap);
        return PageUtil.toResultMap(list);
    }

    /**
     * list all versions by a specified job name
     *
     * @param getParam
     * @return
     */
    public List<FlowJob> versions(JobGetParam getParam) {
        Map<String, Object> paramMap = injectAdminedTenantIdToMap(getParam);
        return mapper.versions(paramMap);
    }

    public Project getProject(JobGetParam getParam) {
        Map<String, Object> paramMap = injectAdminedTenantIdToMap(getParam);
        return mapper.getProject(paramMap);
    }

    public Void saveProject(JobProjectSaveParam param) {
        Map<String, Object> paramMap = injectAdminedTenantIdToMap(param);
        mapper.saveProject(paramMap);
        return null;
    }
}