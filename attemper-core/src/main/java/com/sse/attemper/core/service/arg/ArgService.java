package com.sse.attemper.core.service.arg;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.sse.attemper.common.param.dispatch.arg.ArgGetParam;
import com.sse.attemper.common.param.dispatch.arg.ArgListParam;
import com.sse.attemper.common.param.dispatch.arg.ArgRemoveParam;
import com.sse.attemper.common.param.dispatch.arg.ArgSaveParam;
import com.sse.attemper.common.result.dispatch.arg.Arg;
import com.sse.attemper.core.dao.mapper.arg.ArgMapper;
import com.sse.attemper.sys.service.BaseServiceAdapter;
import com.sse.attemper.sys.util.PageUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.Map;

@Transactional
@Service
public class ArgService extends BaseServiceAdapter {
    @Autowired
    private ArgMapper mapper;

    /**
     * 添加新的参数
     *
     * @param saveParam
     * @return
     */
    public Arg add(ArgSaveParam saveParam) {
        Arg arg = get(ArgGetParam.builder().argName(saveParam.getArgName()).build());
        if (arg != null) {
            throw new DuplicateKeyException(saveParam.getArgName());
        }
        arg = toArgument(saveParam);
        arg.setTenantId(injectAdminedTenant().getId());
        arg.setCreateTime(new Date());
        arg.setUpdateTime(new Date());
        mapper.add(arg);
        return arg;
    }

    /**
     * 根据 argName tenantId 获取相应参数
     *
     * @param getParam
     * @return
     */
    public Arg get(ArgGetParam getParam) {
        Map<String, Object> paramMap = injectAdminedTenantIdToMap(getParam);
        return mapper.get(paramMap);
    }

    /**
     * 获取 Argument 分页数据，
     *
     * @param listParam
     * @return
     */
    public Map<String, Object> list(ArgListParam listParam) {
        Map<String, Object> paramMap = injectAdminedTenantIdToMap(listParam);
        PageHelper.startPage(listParam.getCurrentPage(), listParam.getPageSize());
        Page<Arg> list = (Page<Arg>) mapper.list(paramMap);
        return PageUtil.toResultMap(list);
    }

    /**
     * 删除 argNames 列表中的对应参数
     *
     * @param removeParam
     */
    public void remove(ArgRemoveParam removeParam) {
        Map<String, Object> paramMap = injectAdminedTenantIdToMap(removeParam);
        mapper.delete(paramMap);
    }

    /**
     * 保存或更新。argName 不存在则新加，否则更新对应的数据。
     *
     * @param updateParam
     * @return
     */
    public Arg update(ArgSaveParam updateParam) {
        Arg argOld = get(ArgGetParam.builder().argName(updateParam.getArgName()).build());
        if (get(ArgGetParam.builder().argName(updateParam.getArgName()).build()) == null) {
            return add(updateParam);
        }
        Arg argNew = toArgument(updateParam);
        argNew.setTenantId(injectAdminedTenant().getId());
        argNew.setUpdateTime(new Date());
        argNew.setCreateTime(argOld.getCreateTime());
        mapper.update(argNew);
        return argNew;
    }

    private Arg toArgument(ArgSaveParam saveParam) {
        Arg arg = new Arg();
        arg.setArgName(saveParam.getArgName());
        arg.setArgType(saveParam.getArgType());
        arg.setDefVal(saveParam.getDefVal());
        arg.setRemark(saveParam.getRemark());
        return arg;
    }
}