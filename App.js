import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Signup from './src/Config/Screens/signup';
import Home from './src/Config/Screens/home';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CusHeader from './src/Config/Components/header';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();
const TopTab = createMaterialTopTabNavigator();

function TopTabNav() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="home" component={Home} />
      <TopTab.Screen name="signup" component={Signup} />
    </TopTab.Navigator>
  )
}

export default function App() {
  return (
    <SafeAreaView style={styles.mainView}>
      <CusHeader />
      <View>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="topTabNav" component={TopTabNav} />
            {/* <Stack.Screen name="Signup" component={Signup} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    width: "100%",
    flex: 1,
  },
})

// import React, { useEffect, useState } from 'react';
// import {
//   ImageBackground,
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
//   Image
// } from 'react-native';



// const data = [
//   {
//     title: "Bolan Hi-roof",
//     description: "7-seater",
//     details: "full AC, Wifi, sound system",
//     bookingType: "Picnic & tour, Pick & drop, wedding & Events, family trip",
//     availabilityStatus: `${new Date()}`,
//     serviceProvider: "Shah-Enterprises",
//     ProviderContact: "0333-5487629",
//     withDriver: "yes",
//     fare: `Rs: ${5000}/per day`,
//     image: require("./src/Utils/Images/vehicle-01.jpg")

//   },
//   {
//     title: "Nissan Clipper",
//     description: "7-seater",
//     details: "full AC, Wifi, sound system, soft & comfortable seats, professional & Trained Drivers",
//     bookingType: "Picnic & tour, Pick & drop, small family trip",
//     availabilityStatus: `${new Date()}`,
//     serviceProvider: "Tabraiz-Enterprises",
//     ProviderContact: "0333-5487629",
//     withDriver: "yes",
//     fare: `Rs: ${6000}/per day`,
//     image: require("./src/Utils/Images/vehicle-02.jpg")
//   },
//   {
//     title: "Toyota Hiace High-roof ",
//     description: "13-seater",
//     details: "full AC, Wifi, enough space for luggage, sound system, professional & Trained Drivers",
//     bookingType: "Picnic & tour, Pick & drop, wedding & Events, family trip",
//     availabilityStatus: `${new Date()}`,
//     serviceProvider: "Byego rental services",
//     ProviderContact: "0333-5487629",
//     withDriver: "yes",
//     fare: `Rs: ${8000}/ per day`,
//     image: require("./src/Utils/Images/vehicle-03.jpg")
//   },
//   {
//     title: "Toyota Coaster latest-model",
//     description: "22-seater",
//     details: ["full AC", "Wifi", "enough space for luggage", "sound system", "professional & Trained Drivers"],
//     bookingType: "Picnic & tour, Pick & drop, wedding & Events, family trip, school & University trip",
//     availabilityStatus: `${new Date()}`,
//     serviceProvider: "Fresh air tour and travel",
//     ProviderContact: "0333-5487629",
//     withDriver: "yes",
//     fare: `Rs: ${10000}/ per day`,
//     image: require("./src/Utils/Images/vehicle-04.jpg")
//   },
//   {
//     title: "New Atrai Vagon",
//     description: "7-seater",
//     details: ["full AC", "Wifi", "good for family trip", "sound system", "professional & Trained Drivers"],
//     bookingType: "Picnic & tour, Pick & drop, wedding & Events, family trip, school & University trip",
//     availabilityStatus: `${new Date()}`,
//     serviceProvider: "Go there Rental services ",
//     ProviderContact: "0333-5487629",
//     withDriver: "yes",
//     fare: `Rs: ${13000}/ per day`,
//     image: require("./src/Utils/Images/vehicle-05.jpg")
//   },
// ]

// // import data from "./src/Utils/data"
// // import { data } from "./src/Utils/data"

// export default function Home() {

//   return (
//     <SafeAreaView style={styles.mainView}>
//       <View style={styles.headerView}>
//         <ImageBackground resizeMode="stretch"
//           source={require("./src/Utils/Images/background02.png")}>
//           <View style={styles.bgColorOverlap}>
//           </View>
//         </ImageBackground>
//       </View>
//       <View style={styles.bodyView}>
//         <View style={styles.cardView}>
//           <ScrollView>
//             {data.length > 0
//               ? data.map((el, i) => (
//                 <View key={i} style={styles.productContainer}>
//                   {/* <View style= {styles.imageView}> */}
//                   <Image
//                     style={styles.image}
//                     resizeMode='stretch'
//                     source={el.image}
//                   // source={require("./src/Utils/Images/vehicle-01.jpg")} 
//                   />
//                   {/* </View> */}
//                   <View key={i} style={styles.productView}>
//                     <View style={{ marginLeft: "47%", marginBottom: "2%", }}>
//                       <Text style={[styles.text, { fontSize: 14, fontWeight: '600' }]}>{el.title}:</Text>
//                       <Text style={styles.text}>{el.description}</Text>
//                       <Text style={styles.text}>{el.serviceProvider}</Text>
//                       <Text style={styles.text}>{el.ProviderContact}</Text>
//                       <Text style={styles.text}>{el.fare}</Text>
//                     </View>
//                     <Text style={styles.text}>{el.details}</Text>
//                     <Text style={styles.text}>{el.bookingType}</Text>
//                   </View>
//                 </View>
//                 // ${el.image}
//               )) : null}
//           </ScrollView>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   mainView: {
//     width: "100%",
//     flex: 1,
//   },
//   headerView: {
//     width: "100%",
//     flex: 1.6,
//     // borderBottomWidth: 8,
//     // borderBottomColor: "lightyellow"
//     // backgroundColor: "#00000035"
//   },
//   bgColorOverlap: {
//     width: "100%",
//     height: "100%",
//     backgroundColor: "#9ACD3230"
//   },
//   bodyView: {
//     // marginTop: "3%",
//     width: "100%",
//     flex: 5,
//     padding: "3%",
//     paddingTop: "5%",
//     backgroundColor: "#071e30",
//     // backgroundColor: "lightblue",
//   },
//   cardView: {
//     width: "100%",
//     height: "100%",
//     // flexDirection: "row",
//     // justifyContent: "flex-end",
//     // alignItems: "flex-end",
//     // backgroundColor: "lightyellow",

//   },
//   productContainer: {
//     width: "90%",
//     aspectRatio: 1.6,
//     marginBottom: "3%",
//     marginTop: "7%",
//     padding: 8,
//     marginLeft: "auto",
//     position: "relative",
//     borderBottomRightRadius: 80,
//     backgroundColor: "lightyellow",
//     // backgroundColor: "#2e242c",

//   },
//   // imageView: {
//   //   justifyContent: "center",
//   //   alignItems: "center"
//   // },
//   image: {
//     // alignSelf: "flex-start",
//     width: "55%",
//     height: "60%",
//     flex: 4,
//     backgroundColor: "white",
//     marginRight: 6,
//     position: "absolute",
//     left: -25,
//     top: -15,
//     zIndex: 1,
//     borderWidth: 5,
//     borderColor: "black",
//     borderTopLeftRadius: 50,
//     // marginHorizontal: 6,
//   },
//   productView: {
//     width: "100%",
//     height: "100%",
//     flex: 5,
//     padding: 6,
//     // alignSelf: "flex-end",
//     borderBottomRightRadius: 72,
//     backgroundColor: "lightgreen",
//     // position: "absolute",
//   },
//   text: {
//     fontSize: 13,
//     color: "#071e30",
//     // borderColor: "yellow"
//   }

// });

