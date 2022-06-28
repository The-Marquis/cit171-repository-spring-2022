import {useState} from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const sendText= async (phoneNumber)=>{
  console.log("PhoneNumber: ",phoneNumber);
  await fetch('http://dev.stedi.me/twofactorlogin/'+phoneNumber),{
    method: 'POST',
    headers:{
      'content-type':'application.text'
    }
  }
}

const getToken = async ({phoneNumber, oneTimePassword}) =>{
  await fetch('http://dev.stedi.me/twofactorlogin/'+phoneNumber,{
    method: 'POST',
    body:JSON.stringify({oneTimePassword, phoneNumber})
  });

  const tokenResponseString = await tokenResponse.text();
}

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [oneTimePassword, setOneTimePassword] = useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        placeholder="222-222-2222"
      />
      <TextInput
        style={styles.input}
        onChangeText={setOneTimePassword}
        value={number}
        placeholder="1234"
        keyboardType="numeric"
        secureTextEntry={true}
      />
      <TouchableOpacity>
        style={styles.button}
        onPress={()=>{
          sendText(phoneNumber);
        }}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Login;