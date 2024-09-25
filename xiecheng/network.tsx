import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import axios from 'axios';

const url =
  'https://openapi.vmall.com/ccs/question/queryQuestionOverview?productId=中文&_becode=CN&displayUnPublic=false&displayTopQuestion=true';

const url2 =
'https://fe.xiaohongshu.com/fe_api/burdock/v2/userpage/qrcode?data=https:%2F%2Fwww.xiaohongshu.com%2Fuser%2Fprofile%2F61977c0f000000001000ea09%3Fshare_id%3D8cd14490-fb26-45c9-80ad-4fe1b49a6d0d';

function App() {
  useEffect(() => {
    const asyncFun = async () => {
      try {
        const response = await axios.get(url);
        console.log('response data', response.data, response.status);
        return response;
      } catch (e) {
        console.error('Error fetching data', e);
        return e;
      }
    };
    asyncFun();
  }, []);

  return (
    <View style={{marginTop: 50}}>
      <Text>Check console logs</Text>
    </View>
  );
}

export default App;