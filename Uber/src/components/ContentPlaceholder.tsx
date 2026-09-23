import { ScrollView, Image, Pressable, StyleSheet, Text, View } from "react-native";
import {sTabBar} from "./TabBarPlaceholder";
import {sProfile} from "./ProfileHeader";

export const ContentPlaceholder = () => {
  return (
    <View>
        <ScrollView horizontal={true} contentContainerStyle={s.container}>
            <View style={s.card}>
                <Image
                  style={s.image}
                  source={require("../../assets/images/chinese.png")}
                />
                <Text style={s.text}>Chinese</Text>
            </View>

          <View style={s.card}>
            <Image
              style={s.image}
              source={require("../../assets/images/sandwiches.png")}
            />
            <Text style={s.text}>Sandwiches</Text>
          </View>

          <View style={s.card}>
            <Image
              style={s.image}
              source={require("../../assets/images/korean.png")}
            />
            <Text style={s.text}>Korean</Text>
          </View>

          <View style={s.card}>
            <Image
              style={s.image}
              source={require("../../assets/images/bubble-tea.png")}
            />
            <Text style={s.text}>Bubble Tea</Text>
          </View>

          <View style={s.card}>
            <Image
              style={s.image}
              source={require("../../assets/images/healthy.png")}
            />
            <Text style={s.text}>Healthy</Text>
          </View>
        </ScrollView>


      <View style={sTabBar.c}>
        <Pressable style={[sTabBar.t, sTabBar.button, s.colorTags]}>
          <Image style={sTabBar.image} source={require("../../assets/images/pickup.png")}/>
          <Text>Pickup</Text>
        </Pressable>

        <Pressable style={[sTabBar.t, sTabBar.button, s.colorTags]}>
          <Image style={sTabBar.image} source={require("../../assets/images/offers.png")}/>
          <Text>Offers</Text>
        </Pressable>

        <Pressable style={[sTabBar.t, sTabBar.button, s.colorTags]}>
          <Text>Delivery fee</Text>
          <Image style={sTabBar.image} source={require("../../assets/images/deliveryFeeArrow.png")}/>
        </Pressable>

        <Pressable style={[sTabBar.t, sTabBar.button, s.colorTags]}>
          <Text>Un</Text>
        </Pressable>
      </View>

      <View style={s.container}>
        <Text >
          Delivery Fees & Service Fees are charged for delivery orders in
          addition to item prices
        </Text>
      </View>
      <Text style={s.learnMore}>Learn more</Text>

      <View style={s.container}>
        <Text style={s.subHeading}>Featured on Uber Eats</Text>
        <Image style={s.arrowImage} source={require("../../assets/images/rightArrow.png")}/>
      </View>

      <View style={s.container}>
          <Text style={s.subHeading}>Most reviewed</Text>
          <Image style={s.arrowImage} source={require("../../assets/images/rightArrow.png")}/>
      </View>
      
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    width: "100%", //chatgpt, to make the container 100% of parent
  },
  card: {
    alignItems: "center",
  },
  space: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 255, //chatgpt
  },
  left:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: 255, //chatgpt
  },
  image: {
    height: 70,
    width: 70,
  },
  smallIcon:{
    width:20,
    height:20,
  },
  scrollImage:{
    height: 170,
    width: 280,
    margin: 5,
    borderRadius: 10,
  },
  arrowImage:{
    height:40,
    width:40,
  },
  heartImage:{
    height:25,
    width:30,
  },
  greatValue:{
    backgroundColor: "rgb(242, 202, 202)",
    color: "rgb(187, 15, 15)",
    fontWeight:"bold",
    borderWidth: 1, //chatgpt
    borderColor: "white",
    borderRadius: 5,
  },
  learnMore:{
    marginLeft: 16,
    textDecorationLine: "underline",
  },
  subHeading:{
    fontWeight: "bold",
    fontSize: 22,
  },
  colorTags:{
    backgroundColor: "rgb(243, 243, 243)" //chatgpt
  }
});
