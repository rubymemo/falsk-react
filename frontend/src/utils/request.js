import axios from 'axios'

export default ({url,method,headers,data},options={})=>{
    var host="http://127.0.0.1:5000";
    url=host+url;
    console.log(url);
    return axios(url,{
        method:method||'GET',
        data,
        headers:headers||{
            'content-types':'application/json'
        },
        ...options
    })
}

// 封装fetch
// export default ({url,method,headers,data},options={})=>{
//     return fetch(url,{
//         method:method||'GET',
//         body:data?JSON.stringify(data):null,
//         headers:headers||{
//             'content-types':'application/json'
//         },
//         mode:'cors',
//         ...options
//     }).then(res=>res.json());
// }