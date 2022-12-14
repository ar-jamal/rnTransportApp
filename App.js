import React, { startTransition, useEffect, useState } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';

const data = [
  {
    title: "Bolan Hi-roof",
    description: "7-seater",
    details: ["full AC", "Wifi", "sound system"],
    bookingType: ["Picnic & tour", "Pick & drop", "wedding & Events", "family trip",],
    availabilityStatus: `${new Date()}`,
    serviceProvider: "Shah-Enterprises",
    ProviderContact: "0333-5487629",
    withDriver: "yes",
    fare: `Rs: ${5000}/per day`,
    image: "./vehicle-01"

  },
  {
    title: "Nissan Clipper",
    description: "7-seater",
    details: ["full AC", "Wifi", "sound system", "soft & comfortable seats", "professional & Trained Drivers"],
    bookingType: ["Picnic & tour", "Pick & drop", "small family trip",],
    availabilityStatus: `${new Date()}`,
    serviceProvider: "Tabraiz-Enterprises",
    ProviderContact: "0333-5487629",
    withDriver: "yes",
    fare: `Rs: ${6000}/per day`,
    image: "./vehicle-02"
  },
  {
    title: "Toyota Hiace High-roof ",
    description: "13-seater",
    details: ["full AC", "Wifi", "enough space for luggage", "sound system", "professional & Trained Drivers"],
    bookingType: ["Picnic & tour", "Pick & drop", "wedding & Events", "family trip",],
    availabilityStatus: `${new Date()}`,
    serviceProvider: "Byego rental services",
    ProviderContact: "0333-5487629",
    withDriver: "yes",
    fare: `Rs: ${8000}/ per day`,
    image: "./vehicle-03"
  },
  {
    title: "Toyota Coaster latest-model",
    description: "22-seater",
    details: ["full AC", "Wifi", "enough space for luggage", "sound system", "professional & Trained Drivers"],
    bookingType: ["Picnic & tour", "Pick & drop", "wedding & Events", "family trip", "school & University trip",],
    availabilityStatus: `${new Date()}`,
    serviceProvider: "Fresh air tour and travel",
    ProviderContact: "0333-5487629",
    withDriver: "yes",
    fare: `Rs: ${10000}/ per day`,
    image: "./vehicle-04"
  },
  {
    title: "New Atrai Vagon",
    description: "7-seater",
    details: ["full AC", "Wifi", "good for family trip", "sound system", "professional & Trained Drivers"],
    bookingType: ["Picnic & tour", "Pick & drop", "wedding & Events", "family trip", "school & University trip",],
    availabilityStatus: `${new Date()}`,
    serviceProvider: "Go there vehicle Rental services ",
    ProviderContact: "0333-5487629",
    withDriver: "yes",
    fare: `Rs: ${13000}/ per day`,
    image: "./vehicle-05"
  },
]

// import data from "./src/Utils/data"
// import { data } from "./src/Utils/data"

export default function Home() {

  // const data = useState(data)
  // console.log(data)

  // useEffect(() => {
  //   const data
  // })

  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.headerView}>
        <ImageBackground resizeMode="stretch"
          source={require("./src/Utils/Images/suzukiBackground.jpg")}>
          <View style={styles.bgColorOverlap}>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.bodyView}>
        {data.length > 0
          ? data.map((el, i) => (
            <View key={i} style={styles.cardView}>
              <Image
                style={styles.image}
                resizeMode='contain'
                source={require(`${el.image}`)} />
            </View>
          )) : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    width: "100%",
    flex: 1,
  },
  headerView: {
    width: "100%",
    flex: 2,
    // backgroundColor: "#00000035"
  },
  bgColorOverlap: {
    width: "100%",
    height: "100%",
    backgroundColor: "#00000095"
  },
  bodyView: {
    width: "100%",
    flex: 5,
    padding: 15,
    backgroundColor: "lightblue",
  },
  cardView: {
    width: 50,
    aspectRatio: 1,
  }

});

