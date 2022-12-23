import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import cusColors from '../../Utils/colors';
import CusButton from '../Components/cusButton';
import CusTextInput from '../Components/cusTextInput';

export default function Signin() {
  const [inputText, setInputText] = useState({});
  const [listItems, setListItems] = useState([]);
  const [index, setIndex] = useState('');

  const addHandler = () => {
    console.log(index);
    if (index >= '0') {
      listItems[index] = inputText;
      setListItems([...listItems]);
      // console.log(listItems)
      setInputText('');
      setIndex('');
    } else if (inputText) {
      listItems.push(inputText);
      setListItems([...listItems]);
      setInputText('');
      console.log(listItems);
    }
  };
  const delHandler = ind => {
    listItems.splice(ind, 1);
    // setListItems(...listItems.splice(ind, 1));
    setListItems([...listItems]);
    console.log(listItems);
  };
  const editHandler = ind => {
    setIndex(ind);
    setInputText(listItems[ind]);
  };
  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>Signin</Text>
      </View>
      <View style={styles.bodyView}>
        <View style={styles.inputView}>
          <ScrollView>
            <CusTextInput
              label="email"
              labelColor="lightgreen"
              onChangeText={e => setInputText({...inputText, email: e})}
              value={inputText.email || ' '}
              onDelete={() => setInputText(delete inputText.email)}
            />
            <CusTextInput
              label="password"
              labelColor="lightgreen"
              onChangeText={e => setInputText({...inputText, passowrd: e})}
              value={inputText.password || ' '}
              onDelete={() => setInputText(delete inputText.passowrd)}
            />
          </ScrollView>
        </View>
        <CusButton
          title="Submit"
          style={{
            backgroundColor: 'lightgreen',
            color: '#071e30',
            width: '30%',
          }}
          styleChild={{color: cusColors.greenShadeDark}}
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#071e30',
  },
  headerView: {
    height: '15%',
    minHeight: '1%',
    alignText: 'center',
    justifyContent: 'center',
    // marginVertical: '5%',
    // backgroundColor: "yellow",
  },
  headerText: {
    fontSize: 35,
    color: 'lightgreen',
  },
  bodyView: {
    width: '100%',
    maxHeight: '88%',
    alignItems: 'center',
  },
  inputView: {
    width: '60%',
    height: '50%',
  },

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
