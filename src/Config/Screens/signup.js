import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// import CheckBox from 'react-native-check-box';
// import CusIcon from './src/Config/Components/icon';
// import CusInput from './src/Config/Components/input';
import cusColors from '../../Utils/colors';
import CusButton from '../Components/cusButton';
import CusTextInput from '../Components/cusTextInput';
// import CusButton from './src/Utils/config/Components/cusButton';

function Signup() {
  const [inputText, setInputText] = useState({});
  const [listItems, setListItems] = useState([]);
  const [index, setIndex] = useState('');

  const addHandler = () => {
    console.log(index)
    if (index >= "0") {
      listItems[index] = inputText;
      setListItems([...listItems]);
      // console.log(listItems)
      setInputText("")
      setIndex("")
    } else if (inputText) {
      listItems.push(inputText)
      setListItems([...listItems]);
      setInputText("")
      console.log(listItems)
    }
  };
  const delHandler = ind => {
    listItems.splice(ind, 1);
    // setListItems(...listItems.splice(ind, 1));
    setListItems([...listItems])
    console.log(listItems)
  };
  const editHandler = ind => {
    setIndex(ind);
    setInputText(listItems[ind]);
  };
  return (
    <SafeAreaView style={styles.mainView}>
      <Text style={styles.headerText}>Signup</Text>
      <View style={styles.bodyView}>
        <View style={styles.inputView}>
          <CusTextInput
            label="user name"
            labelColor="lightgreen"
            onChangeText={(e) => setInputText({ ...inputText, userName: e })}
            value={inputText.userName || " "}
            onDelete={() => setInputText( delete inputText.userName )}
            />
          <CusTextInput
            label="email"
            labelColor="lightgreen"
            onChangeText={(e) => setInputText({ ...inputText, email: e })}
            value={inputText.email || " "}
            onDelete={() => setInputText( delete inputText.email )}
            />
          <CusTextInput
            label="password"
            labelColor="lightgreen"
            onChangeText={(e) => setInputText({ ...inputText, passowrd: e })}
            value={inputText.password || " "}
            onDelete={() => setInputText( delete inputText.passowrd )}
          />
        </View>
        <CusButton
          title='Submit'
          style={{
            backgroundColor: "lightgreen",
            color: "#071e30",
            width: "30%",
          }}
          styleChild={{ color: cusColors.greenShadeDark }}
          onPress={addHandler}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    maxHeight: '100%',
    flex: 1,
    opacity: 0.88,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#071e30",
  },
  headerText: {
    fontSize: 35,
    maxHeight: "10%",
    alignSelf: 'center',
    marginVertical: "8%",
    color: "lightgreen",
  },
  bodyView: {
    width: '100%',
    maxHeight: '88%',
    alignItems: 'center',
  },
  inputView: {
    width: "60%",
    height: 220,
  },
  // todoView: {
  //   flexDirection: "row",
  //   // flexWrap: 'wrap',
  //   width: '80%',
  //   height: 35,
  //   justifyContent: 'space-between',
  //   alignItems: "center",
  //   // padding: 5,
  //   paddingRight: 7,
  //   borderTopLeftRadius: 18,
  //   borderBottomLeftRadius: 18,
  //   marginBottom: 5,
  //   backgroundColor: cusColors.melaWhiteGreen
  // },
  // todoViewL: {
  //   height: "100%",
  //   justifyContent: 'center',
  //   paddingHorizontal: 10,
  //   borderTopLeftRadius: 18,
  //   borderBottomLeftRadius: 18,
  //   backgroundColor: cusColors.greenShadeDark
  // },
  // todoViewText: {
  //   color: "white",
  //   flexWrap: 'wrap',
  // },
  // todoViewR: {
  //   paddingLeft: 9,
  //   borderLeftWidth: 1.5,
  //   borderLeftColor: "#263321",
  //   color: cusColors.greenShadeDark
  // },
  // linkText: {
  //   width: 80,
  //   fontWeight: '600',
  //   borderBottomWidth: 1.7,
  //   fontSize: 12,
  //   marginTop: 8,
  //   alignSelf: 'flex-end',
  //   color: cusColors.lightYellow,
  //   borderBottomColor: 'black',
  // },
  // loginOptions: {
  //   flexDirection: 'row',
  //   width: '100%',
  //   height: '12%',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   borderWidth: 1,
  //   borderColor: cusColors.lightYellow,
  //   borderBottomLeftRadius: 70,
  //   backgroundColor: cusColors.onyxBlack,
  // },
  // text: {
  //   color: cusColors.lightYellow,
  //   height: 20,
  //   marginRight: 10,
  // },
});

export default Signup;
