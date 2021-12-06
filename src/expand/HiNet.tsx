/**
 * Send get request
 * @param api
 */
 export function Get(api:string){
    return async (params?:{})=>{
        return handleData(fetch(buildParams(api,params)))
    }
}

/**
 * process return data
 * @param doSomething
 */
 function handleData(doSomething:Promise<any>){
    return new Promise((resolve,reject)=>{
        doSomething.then((res)=>{
            const type = res.headers.get('Content-Type');
            if((type || '').indexOf('json')!=-1){
                return res.json();
            }
            return res.text();
        }).then((results)=>{
            resolve(results)
        }).catch((error)=>{
            reject(error);
        })
    })
 }

 /**
 * Build url params
 * @param url
 * @param params
 * @returns
 */
function buildParams(url:string,params?:{}|string):string{
    let newUrl=new URL(url),finalUrl;
    if(typeof params ==='object'){
        for(const [key,value] of Object.entries(params)){
            newUrl.searchParams.append(key,value as string);
        }
        finalUrl = newUrl.toString();
    }else if(typeof params ==='string'){
        finalUrl=url.endsWith("/")?url+params:url+"/"+params
    }else{
        finalUrl=newUrl.toString();
    }
    console.log('---buildParams----:', finalUrl);
    return finalUrl;
}
