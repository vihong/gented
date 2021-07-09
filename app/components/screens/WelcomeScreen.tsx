import React from "react"
import { View, SafeAreaView } from "react-native"
import { ImageBackground, Platform, StyleSheet } from "react-native"
import { AppLoading } from "expo"
import { useFonts, AmaticSC_400Regular, AmaticSC_700Bold } from "@expo-google-fonts/amatic-sc"

import AppButton from "../atoms/AppButton"
import AppText from "../atoms/AppText"
import Logo from "../molecules/Logo"
import colorPalette from "../../config/colorPalette"
import defaultStyles from "../../config/defaultStyles"
import AppLink from "../molecules/AppLink"
import routes from "../navigation/routes"

type Props = {
  navigation?: any
}

function WelcomeScreen({ navigation }: Props) {
  let [fontsLoaded, error] = useFonts({
    AmaticSC_400Regular,
    AmaticSC_700Bold,
  })

  if (!fontsLoaded) return <AppLoading />

  return (
    <ImageBackground
      source={require("../../assets/images/hypster.jpg")}
      style={{ width: "100%", height: "100%" }}
      blurRadius={Platform.OS === "android" ? 1 : 1}
    >
      <View style={styles.container}>
        <SafeAreaView style={styles.logo}>
          <Logo />
          <AppText style={[defaultStyles.textLogo, styles.tagline]}>Old is the new trend</AppText>
        </SafeAreaView>
        <View style={styles.buttons}>
          <AppLink
            label="Log in"
            backgroundColor={colorPalette.white}
            color={colorPalette.dark}
            onPress={() => navigation.navigate(routes.LOGIN)}
          />
          <AppButton
            label="Register"
            backgroundColor={colorPalette.dark}
            color={colorPalette.white}
            onPress={() => navigation.navigate(routes.REGISTER)}
          />
        </View>
      </View>
    </ImageBackground>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingTop: 10,
    paddingHorizontal: "5%",
    paddingBottom: 20,
  },
  logo: {
    position: "absolute",
    top: 110,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  tagline: {
    fontSize: 35,
    fontFamily: "AmaticSC_700Bold",
    marginTop: 30,
    color: colorPalette.grey,
  },
  buttons: {
    width: "100%",
  },
})
