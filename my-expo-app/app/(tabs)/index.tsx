import React, { useState } from "react";
import { Text, Button, View } from "react-native";

export default () => {
  const [pressCount, setPressCount] = useState(0);
  
  return (
      <View style = {{ alignContent: "center", marginTop: 20}}>
        <Text>You've pressed the button: {pressCount} time(s)</Text>
        <Button title="Press me" onPress={() => setPressCount(pressCount + 1)}/>
      </View>
  )
};

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });
