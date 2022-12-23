import {StyleSheet, View} from 'react-native';
import {TouchableOpacity, Text, TextInput} from 'react-native';
import cusColors from '../../Utils/colors';

export default function CusTextInput({
  label,
  labelColor,
  delColor,
  marginLeft,
  fontSize,
  onChangeText,
  value,
  onDelete,
  keyboardType,
  delBackgroundColor,
}) {
  return (
    <>
      <Text
        style={{
          color: labelColor ?? 'powderblue',
          marginLeft: marginLeft ?? 22,
          marginTop: 4,
          fontSize: fontSize ?? 12,
        }}>
        {label}
      </Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={value}
          // keyboardType={keyboardType}
        />
        <TouchableOpacity style={styles.delView} onPress={onDelete}>
          <Text style={{fontSize: fontSize ?? 16, color: delColor ?? 'white'}}>
            x
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  inputView: {
    flexDirection: 'row',
    width: '100%',
    height: 45,
    padding: 4,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: 6,
    borderTopLeftRadius: 20,
    backgroundColor: 'lightgreen',
  },
  input: {
    width: '80%',
    padding: 5,
    // backgroundColor: "yellow"
  },
  delView: {
    width: 23,
    height: 23,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'darkred',
  },
});
