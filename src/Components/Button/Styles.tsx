import { StyleSheet } from "react-native";
import { Colors } from "../../../Colors";

export const styles = StyleSheet.create({
  functionButton: {
    marginHorizontal: 2.5, marginVertical: 8, height: 30, width: 60,
    backgroundColor: Colors.AppTheme, justifyContent: 'center', alignItems: 'center', borderRadius: 5,
  },
  label: {color: Colors.white}
})