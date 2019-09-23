export default {
    bindMethods(methods, obj) {
        methods.forEach(func => {
            if(typeof obj[func] === 'function') {
                obj[func] = obj[func].bind(obj);
            }
        })
    },
    createNewData(txtArr,picArr){
      let newData={};
          newData.title='测试title';
          newData.time='测试time';
          newData.content=[];
          newData.image=[];
          newData.isCharts=[1,1,0,0];
          for(let item of txtArr){
              newData.content.push({
                  'content':item,
              })
          }
          for(let item of picArr){
              newData.image.push({
                  'introduce':item.des,
                  'url':item.url,
              })
          }
          return newData
    }
}