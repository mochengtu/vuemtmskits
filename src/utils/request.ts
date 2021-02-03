import axios from 'axios';
import { ElMessage } from 'element-plus'
import {IMessageHandle} from "element-plus/packages/message/src/types";


interface FetchGet {
    method: string | any;
    api: string;
    responseType?: string;
    payload: any;
    callback:(res: any) => void;
}


const getCodeMessage = (status: string) => {
    switch (status) {
        case '200': return '服务器成功返回请求的数据。';
        case '201': return '新建或修改数据成功。';
        case '202': return '一个请求已经进入后台排队（异步任务）。';
        case '204': return '删除数据成功。';
        case '400': return '发出的请求有错误，服务器没有进行新建或修改数据的操作。';
        case '401': return '用户没有权限（令牌、用户名、密码错误）。';
        case '403': return '用户得到授权，但是访问是被禁止的。';
        case '404': return '发出的请求针对的是不存在的记录，服务器没有进行操作。';
        case '406': return '请求的格式不可得。';
        case '410': return '请求的资源被永久删除，且不会再得到的。';
        case '422': return '当创建一个对象时，发生一个验证错误。';
        case '500': return '服务器发生错误，请检查服务器。';
        case '502': return '网关错误。';
        case '503': return '服务不可用，服务器暂时过载或维护。';
        case '504': return '网关超时。';
    }
}

/**
 *
 * @param method     post/get  请求的类型
 * @param api        url       请求的API接口地址
 * @param payload              请求的参数
 * @param callback             回调函数的方法
 */
export const fetchGet = ({method, api, payload, callback}: FetchGet): void => {
    axios({
        method: method,
        url: api,
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json;charset=utf-8",
        },
        responseType: 'stream',
        params: {
            ...payload
        }
    }).then((res: any) => {
        console.log("=======: ",res)
        if(res.status === 200) {
            console.log(res)
            errorHandler(res.status);
            callback(res.data);
        }

    }).catch((error: any) => {
        ElMessage({
            showClose: true,
            message: error.message,
            type: 'error'
        });

    });

}

/** 异常处理程序 */
const errorHandler = (res: number): void => {
    ElMessage({
        showClose: true,
        message: getCodeMessage(res.toString()),
        type: 'error'
    });
}

/*
const errorHandler = (error: { response: Response }): Response => {
    const { response } = error;
    if (response && response.status) {
        const errorText = codeMessage[response.status] || response.statusText;
        const { status, url } = response;

        notification.error({
            message: `请求错误 ${status}: ${url}`,
            description: errorText,
        });
    } else if (!response) {
        notification.error({
            description: '您的网络发生异常，无法连接服务器',
            message: '网络异常',
        });
    }
    return response;
};*/
