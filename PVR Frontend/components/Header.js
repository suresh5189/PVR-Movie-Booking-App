import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const Header = () => {
  const types = [
    {
      id: "0",
      name: "IMAX",
    },
    {
      id: "1",
      name: "4DX",
    },
    {
      id: "2",
      name: "PXL",
    },
    {
      id: "3",
      name: "GOLD",
    },
    {
      id: "4",
      name: "PLAYHOUSE",
    },
    {
      id: "5",
      name: "SAPPHIRE",
    },
    {
      id: "6",
      name: "LUXE",
    },
    {
      id: "7",
      name: "ONYX",
    },
  ];

  return (
    <View>
      <ImageBackground
        style={{ aspectRatio: 5 / 2, height: 170 }}
        source={{
          uri: "https://originserver-static1-uat.pvrcinemas.com/newweb/movies/big/1460x600/HO00020779.jpg",
        }}
      >
        <Pressable
          style={{
            position: "absolute",
            height: 130,
            backgroundColor: "white",
            padding: 10,
            borderRadius: 6,
            top: 140,
            left: 29,
            width: "82%",
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "500", color: "grey" }}>
            Releasing in 1 days
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <View>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                VIKRANT RONA
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "400",
                  color: "grey",
                  marginTop: 4,
                }}
              >
                U/A • KANNADA
              </Text>
            </View>
            <Pressable
              style={{
                backgroundColor: "#ffc40c",
                padding: 10,
                borderRadius: 6,
                marginRight: 10,
              }}
            >
              <Text
                style={{ fontSize: 14, fontWeight: "500", textAlign: "center" }}
              >
                BOOK
              </Text>
            </Pressable>
          </View>
          <Text style={{ marginTop: 10, fontSize: 15, fontWeight: "500" }}>
            Fantasy, Thriller, Action
          </Text>
        </Pressable>
      </ImageBackground>
      <View style={{ marginTop: 110 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {types.map((item, index) => (
            <View
              key={index}
              style={{
                margin: 10,
                borderColor: "C0C0C0",
                borderWidth: 0.4,
                borderRadius: 4,
                padding: 10,
              }}
            >
              <Text
                style={{ textAlign: "center", fontSize: 14, fontWeight: "500" }}
              >
                {item.name}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
