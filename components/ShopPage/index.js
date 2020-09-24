import React from "react";
import { View, Button, Text } from "react-native";
export const ShopPage = (props) => {
  return (
    <View>
      <Text>SHOP PAGE ARRIVED HURDUR</Text>
      <Button onPress={() => props.history.push("/")} title="GO BACK HOME" />
    </View>
  );
};
