import{Image, Pressable, StyleSheet, View, Text} from "react-native";
import {sTabBar} from "./TabBarPlaceholder";
export const BottomNavigation=()=>{
    return(
        <View style={sTabBar.c}>
            <Pressable style={[sTabBar.t, sTabBar.button]}>
                <Image style={sTabBar.image} source={require("../../assets/images/home.png")}/>
            </Pressable>

            <Pressable style={[sTabBar.t, sTabBar.button]}>
                <Image style={sTabBar.image} source={require("../../assets/images/map.png")}/>            
            </Pressable>

            <Pressable style={[sTabBar.t,sTabBar.button]}>
                <Image style={sTabBar.image} source={require("../../assets/images/search.png")}/>
                <Text>Search</Text>
            </Pressable>

            <Pressable style={[sTabBar.t, sTabBar.button]}>
                <Image style={sTabBar.image} source={require("../../assets/images/cart.png")}/>            
            </Pressable>

            <Pressable style={[sTabBar.t, sTabBar.button]}>
                <Image style={sTabBar.image} source={require("../../assets/images/profile.png")}/>            
            </Pressable>
        </View>
    );
};