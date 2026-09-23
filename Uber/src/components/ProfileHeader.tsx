import { Image, StyleSheet, Text, View } from "react-native";

export const ProfileHeader = () => {
  return (
    <View style={sProfile.c}>
      <View>
        <Text>SAIT Polytechnic</Text>
      </View>

      <View style={sProfile.arrow}>
        <Image style={sProfile.arrowImage} source={require("../../assets/images/downArrow.png")} />
      </View>

      <View style={sProfile.notification}>
        <Image style={sProfile.notificationImage} source={require("../../assets/images/notification.png")} />
      </View>
    </View>
  );
};

export const sProfile = StyleSheet.create({
  c: {
    flexDirection: "row",
    alignItems: "center",
    margin: 16,
  },
  arrow: {
    flex: 2,
  },
  arrowImage:{
    height:25,
    width:25,
    marginTop:7,
    marginLeft:5,
    
  },
  notification: {
    justifyContent: "flex-end",
  },

  notificationImage:{
    height:35,
    width:35,
  },
});
