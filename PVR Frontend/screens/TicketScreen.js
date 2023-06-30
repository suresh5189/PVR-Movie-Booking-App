import { Image, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import moment from "moment";
import QRCode from "react-native-qrcode-svg";
import { Pressable } from "react-native";
import { MovieCard } from "../Context";

const TicketScreen = () => {
  const route = useRoute();

  const navigation = useNavigation();

  const { ticket } = useContext(MovieCard);

  const ticketDetails = route.params;

  useEffect(() => {
    const loadTicket = () => {
      ticket.push(ticketDetails);
    };
    loadTicket();
  }, []);

  // console.log(route.params.selectedSeats.length);

  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: "white",
          height: "90%",
          margin: 10,
          borderRadius: 6,
          marginTop: 10,
        }}
      >
        <View
          style={{
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "500" }}>
            {route.params.name}
          </Text>
          <Text>{route.params.selectedSeats.length}</Text>
          {/* {route.params.selectedSeats.map((item,index)=>{
                    <Text>{item}</Text>
                })} */}
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: 10,
          }}
        >
          <Text style={{ fontSize: 16, color: "grey" }}>HINDI - 2D</Text>
          <Text style={{ color: "red", fontSize: 16 }}>PVR - TICKET</Text>
        </View>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "600",
            marginHorizontal: 10,
            marginTop: 10,
          }}
        >
          {route.params.mall}
        </Text>
        <Text
          style={{
            borderColor: "black",
            textDecorationStyle: "dotted",
            height: 0.1,
            borderWidth: 0.2,
            margin: 10,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ marginTop: 10, marginLeft: 10 }}>
            <Text style={{ color: "grey", fontSize: 15, fontWeight: "500" }}>
              DATE & TIME
            </Text>
            <Text style={{ marginVertical: 4, fontSize: 16 }}>
              {route.params.timeSelected}
            </Text>
            <Text>{moment(route.params.date).utc().format("MM/DD/YYYY")}</Text>
          </View>
          <Image
            style={{ aspectRatio: 4 / 2, height: 60, borderRadius: 6 }}
            source={{ uri: route.params.image }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 12,
          }}
        >
          <View style={{ marginLeft: 14 }}>
            <Text>AUDI NO</Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 15,
                fontWeight: "500",
                marginTop: 10,
              }}
            >
              2
            </Text>
          </View>
          <View>
            <Text>TICKETS</Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 15,
                fontWeight: "500",
                marginTop: 6,
              }}
            >
              {route.params.selectedSeats.length}
            </Text>
          </View>
          <View style={{ marginRight: 15 }}>
            <Text>SEATS</Text>
            <View style={{ flexDirection: "row", alignItem: "center" }}>
              {route.params.selectedSeats.map((item, index) => (
                <Text
                  style={{
                    margin: 3,
                    fontSize: 15,
                    fontWeight: "500",
                    marginTop: 6,
                  }}
                  key={index}
                >
                  {item}
                </Text>
              ))}
            </View>
          </View>
        </View>
        <Text
          style={{
            borderColor: "#DCDCDC",
            textDecorationStyle: "dotted",
            height: 1,
            borderWidth: 0.4,
            margin: 10,
          }}
        />
        <View
          style={{
            height: 150,
            backgroundColor: "#8DA399",
            borderRadius: 6,
            margin: 12,
          }}
        >
          <View style={{ padding: 10 }}>
            <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
              PRICE DETAILS
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 4,
              }}
            >
              <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
                0's Seat Convenience
              </Text>
              <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
                ₹{route.params.priceValue}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 4,
              }}
            >
              <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
                Convenience Fee
              </Text>
              <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
                ₹87
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 4,
              }}
            >
              <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
                Grand Total
              </Text>
              <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
                ₹{route.params.total}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 4,
              }}
            >
              <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
                ID NO
              </Text>
              <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
                FDRRBG43594549
              </Text>
            </View>
          </View>
        </View>
        <Text
          style={{
            borderColor: "#DCDCDC",
            textDecorationStyle: "dotted",
            height: 1,
            borderWidth: 0.4,
            margin: 10,
          }}
        />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
            marginBottom: 20,
          }}
        >
          <QRCode value={"hello"} />
        </View>
        <Text style={{ fontSize: 16, fontWeight: "500", textAlign: "center" }}>
          W33JK3N
        </Text>
        <Text
          style={{
            borderColor: "#DCDCDC",
            textDecorationStyle: "dotted",
            height: 1,
            borderWidth: 0.4,
            margin: 10,
          }}
        />
      </View>
      <Pressable
        onPress={() => navigation.navigate("Home")}
        style={{
          backgroundColor: "green",
          marginLeft: "auto",
          marginRight: "auto",
          width: 120,
          borderRadius: 4,
          padding: 10,
        }}
      >
        <Text style={{ textAlign: "center", color: "white", fontSize: 15 }}>
          HOME
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default TicketScreen;

const styles = StyleSheet.create({});
