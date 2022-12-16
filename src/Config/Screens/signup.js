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
// import CusButton from './src/Utils/config/Components/cusButton';

function Signup() {
  const [inputText, setInputText] = useState('');
  const [listItems, setListItems] = useState([]);
  const [index, setIndex] = useState('');

  const addHandler = () => {
    console.log(index)
    if (index >= "0") {
      listItems[index] = inputText;
      setListItems([...listItems]);
      // console.log(listItems)
      setInputText("")
    } else {
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
      <View style={styles.headerView}>
        <Text style={styles.headerText}>Todo Signup</Text>
      </View>
      <View style={styles.bodyView}>
        <View style={styles.inputView}>
          <TouchableOpacity
            style={styles.inputTag}
            onPress={addHandler}>
            <Text style={styles.AddTodoButton}>+</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            onChangeText={(e) => setInputText(e)}
            value={inputText}
          />
        </View>
        <CusButton
          title='Submit'
          style={{
            backgroundColor: cusColors.melaWhiteGreen,
            color: cusColors.greenShadeDark,
            width: "30%"
          }}
          styleChild={{ color: cusColors.greenShadeDark }}
          onPress={addHandler}
        />
        {listItems.length > 0
          ? listItems.map((e, i) => (
            <View style={styles.todoView}
              key={i}
            >
              <TouchableOpacity
                style={styles.todoViewL}
                onPress={() => editHandler(i)}
              >
                <Text style={styles.todoViewText}>Edit</Text>
              </TouchableOpacity>
              <Text /* style={styles.todoViewText} */>{e}</Text>
              <TouchableOpacity
                onPress={() => delHandler(i)}
              >
                <Text style={styles.todoViewR}>Delete</Text>
                {/* <Icon/> */}
              </TouchableOpacity>
            </View>
          )) : null
        }
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    height: '100%',
    flex: 1,
    opacity: 0.88,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: cusColors.melaWhiteMid01,
  },
  headerView: {
    width: "100%",
    height: "17%",
    justifyContent: "center",
    backgroundColor: cusColors.melaWhiteGreen,
  },
  headerText: {
    fontSize: 35,
    alignSelf: 'center',
    // marginBottom: 70,
    color: cusColors.greenShadeDark,
  },
  bodyView: {
    width: '100%',
    height: '88%',
    alignItems: 'center',
  },
  inputView: {
    flexDirection: "row",
    // flexWrap: "wrap",
    width: "60%",
    height: 40,
    marginTop: 40,

  },
  inputTag: {
    flex: 1,
    backgroundColor: cusColors.greenShadeDark,
    alignItems: "center",
    justifyContent: 'center',
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,

  },
  AddTodoButton: {
    fontSize: 18,
    color: "white",
  },
  input: {
    flex: 4.5,
    width: "100%",
    padding: 8,
    // aspectRatio: 7,
    borderTopRightRadius: 18,
    borderBottomRightRadius: 18,
    backgroundColor: cusColors.melaWhiteGreen
  },

  todoView: {
    flexDirection: "row",
    // flexWrap: 'wrap',
    width: '80%',
    height: 35,
    justifyContent: 'space-between',
    alignItems: "center",
    // padding: 5,
    paddingRight: 7,
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
    marginBottom: 5,
    backgroundColor: cusColors.melaWhiteGreen
  },
  todoViewL: {
    height: "100%",
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
    backgroundColor: cusColors.greenShadeDark
  },
  todoViewText: {
    color: "white",
    flexWrap: 'wrap',
  },
  todoViewR: {
    paddingLeft: 9,
    borderLeftWidth: 1.5,
    borderLeftColor: "#263321",
    color: cusColors.greenShadeDark
  },
  linkText: {
    width: 80,
    fontWeight: '600',
    borderBottomWidth: 1.7,
    fontSize: 12,
    marginTop: 8,
    alignSelf: 'flex-end',
    color: cusColors.lightYellow,
    borderBottomColor: 'black',
  },
  loginOptions: {
    flexDirection: 'row',
    width: '100%',
    height: '12%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: cusColors.lightYellow,
    borderBottomLeftRadius: 70,
    backgroundColor: cusColors.onyxBlack,
  },
  text: {
    color: cusColors.lightYellow,
    height: 20,
    marginRight: 10,
  },
});

export default Signup;
