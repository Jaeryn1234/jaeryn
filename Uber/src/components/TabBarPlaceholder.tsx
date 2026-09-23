import { Image, Pressable, StyleSheet, Text, View } from "react-native";
export function TabBarPlaceholder() {
  return (
    <View style={sTabBar.c}>
      <Pressable style={[sTabBar.t, sTabBar.button, sTabBar.hover]}>
        <Image
          style={sTabBar.image}
          source={require("../../assets/images/all.png")}
        />
        <Text style={{ fontWeight: "bold" }}>All</Text>
      </Pressable>

      <Pressable style={[sTabBar.t, sTabBar.button]}>
        <Image
          style={sTabBar.image}
          source={require("../../assets/images/rides.png")}
        />
        <Text>Rides</Text>
      </Pressable>

      <Pressable style={[sTabBar.t, sTabBar.button]}>
        <Image
          style={sTabBar.image}
          source={require("../../assets/images/grocery.png")}
        />
        <Text>Grocery</Text>
      </Pressable>

      <Pressable style={[sTabBar.t, sTabBar.button]}>
        <Image
          style={sTabBar.image}
          source={require("../../assets/images/convenience.png")}
        />
        <Text>Convenience</Text>
      </Pressable>
    </View>
  );
}

export const sTabBar = StyleSheet.create({
  c: {
    marginLeft: 25,
    flexDirection: "row",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  //it was not adjusting screen size with flex:1 so chatgpt said to use width:25%
  //targets each individual tab
  t: { width: "25%", padding: 1, alignItems: "center" },
  a: { borderBottomWidth: 2 },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 100,
    height: "65%",
    borderWidth: 1,
    margin: 3,
  },
  image: {
    width: 25,
    height: 25,
  },
  hover: {
    backgroundColor: "rgb(232, 232, 232)", //chatgpt
  },
});
