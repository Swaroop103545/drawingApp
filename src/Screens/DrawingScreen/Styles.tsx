import { StyleSheet } from "react-native";
import { Colors } from "../../../Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  canvasContainer: { flex: 1, flexDirection: 'row' },
  wrapper: { backgroundColor: 'transparent', flex: 1 },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },
  strokeColorButton: {
    marginHorizontal: 2.5, marginVertical: 8, width: 30, height: 30, borderRadius: 15,
  },
  strokeWidthButton: {
    marginHorizontal: 2.5, marginVertical: 8, width: 30, height: 30, borderRadius: 15,
    justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.AppTheme
  },
  functionButton: {
    marginHorizontal: 2.5, marginVertical: 8, height: 30, width: 60,
    backgroundColor: Colors.AppTheme, justifyContent: 'center', alignItems: 'center', borderRadius: 5,
  }
});