import { Image } from "expo-image";
import { StyleSheet } from "react-native";

export default function Header() {
  return (
    <Image
      source={require('@/assets/images/incherry_logo.svg')}
      style={styles.logo}
      contentFit="fill"
    />
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 40,
    height: 80,
    left: 12
  }
})