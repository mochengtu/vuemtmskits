import axios, { AxiosRequestConfig, AxiosPromise} from 'axios';


interface FetchGet {
    method: string | any;
    api: string;
    responseType?: string;
    payload: any;
    callback:(res: any) => void;
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
        data: {
            ...payload
        }
    }).then((res: any) => {
        console.log(res);
        callback(res);
    }).catch((error: any) => {
        console.dir(error.message)
    });

}