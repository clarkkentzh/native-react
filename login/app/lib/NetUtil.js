let NetUtil = {
  postJson(url, data, callback){
        var fetchOptions = {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data;boundary=6ff46e0b6b5148d984f148b6542e5a5d'
          },
          body:JSON.stringify(data)
        };

        fetch(url, fetchOptions)
        .then((response) => response.text())
        .then((responseJson) => {
         //  callback(JSON.parse(responseText));
         console.log("sssssss",responseJson);
           callback(responseJson);
        }).done();

  },
}
export default NetUtil;
