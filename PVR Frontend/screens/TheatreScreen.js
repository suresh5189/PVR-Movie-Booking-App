import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  Alert,
} from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MovieCard } from "../Context";
import { useStripe } from "@stripe/stripe-react-native";

const TheatreScreen = () => {
  const route = useRoute();

  const navigation = useNavigation();

  const { seats, setSeats, occupied } = useContext(MovieCard);

  const onSeatSelect = (item) => {
    const seatsSelected = seats.find((seat) => seat === item);

    // console.log(seatsSelected);

    if (seatsSelected) {
      setSeats(seats.filter((seat) => seat !== item));
    } else {
      setSeats([...seats, item]);
    }
  };
  // console.log(seats);

  const displaySeats = [...seats];

  // console.log(displaySeats);

  const fee = 87;
  const noOfSeats = seats.length;
  const priceValue = noOfSeats * 240;
  const total = seats?.length > 0 ? fee + noOfSeats * 240 : 0;

  const showSeats = () => {
    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {seats.map((seat, index) => (
          <Text
            style={{ marginTop: 4, fontSize: 17, paddingHorizontal: 4 }}
            key={index}
          >
            {seat}
          </Text>
        ))}
      </View>
    );
  };

  const stripe = useStripe();

  const subscribe = async () => {
    const response = await fetch("http://192.168.29.230:8000/payment", {
      method: "POST",
      body: JSON.stringify({
        amount: Math.floor(total * 100),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    if (!response.ok) return Alert.alert(data.message);
    const clientSecret = data.clientSecret;
    const initSheet = await stripe.initPaymentSheet({
      paymentIntentClientSecret: clientSecret,
      merchantDisplayName: "Merchant Name",
    });
    if (initSheet.error) return Alert.alert(initSheet.error.message);
    const presentSheet = await stripe.presentPaymentSheet({
      clientSecret,
    });
    if (presentSheet.error) return Alert.alert(presentSheet.error.message);
    else {
      occupied.push(...seats);
      navigation.navigate("Ticket", {
        name: route.params.name,
        mall: route.params.mall,
        timeSelected: route.params.timeSelected,
        total: total,
        image: route.params.image,
        date: route.params.date,
        selectedSeats: displaySeats,
        priceValue: priceValue,
      });

      setSeats([]);
    }
  };

  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            name="arrow-back"
            size={24}
            color="black"
            style={{ marginLeft: 5 }}
            onPress={() => {
              navigation.goBack();
            }}
          />
          <View style={{ marginLeft: 6 }}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              {route.params.name}
            </Text>
            <Text
              style={{
                marginTop: 1,
                color: "grey",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              {route.params.mall}
            </Text>
          </View>
        </View>
        <AntDesign
          name="sharealt"
          size={24}
          color="black"
          style={{ marginRight: 14 }}
        />
      </View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 18,
          fontWeight: "bold",
          marginTop: 10,
        }}
      >
        {route.params?.timeSelected}
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontSize: 14,
          color: "grey",
          marginTop: 10,
        }}
      >
        CLASSIC (240.00)
      </Text>
      <View style={{ marginTop: 10, alignItems: "center" }}>
        <FlatList
          numColumns={7}
          data={route.params?.tableSeats}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => onSeatSelect(item)}
              style={{
                margin: 10,
                borderWidth: 0.5,
                borderColor: "grey",
                borderRadius: 6,
              }}
            >
              {seats?.includes(item) ? (
                <Text
                  style={{
                    backgroundColor: "#ffc40c",
                    padding: 9,
                    borderRadius: 6,
                  }}
                >
                  {item}
                </Text>
              ) : occupied?.includes(item) ? (
                <Text
                  style={{
                    backgroundColor: "989898",
                    padding: 9,
                    borderRadius: 6,
                  }}
                >
                  {item}
                </Text>
              ) : (
                <Text style={{ padding: 9 }}>{item}</Text>
              )}
            </Pressable>
          )}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 10,
          backgroundColor: "#D8D8D8",
          padding: 10,
        }}
      >
        <View style={{marginHorizontal:40}}>
          <FontAwesome
            name="square"
            size={24}
            color="#ffc40c"
            style={{ textAlign: "center", marginBottom: 4 }}
          />
          <Text>Selected</Text>
        </View>
        <View style={{ marginHorizontal: 40 }}>
          <FontAwesome
            name="square"
            size={24}
            color="white"
            style={{ textAlign: "center", marginBottom: 4 }}
          />
          <Text>Vacant</Text>
        </View>
        <View style={{marginHorizontal:40}}>
          <FontAwesome
            name="square"
            size={24}
            color="#989898"
            style={{ textAlign: "center", marginBottom: 4 }}
          />
          <Text>Occupied</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 15, marginBottom: 4, fontWeight: "500" }}>
            Show End Approx 6:51PM
          </Text>
          {seats?.length > 0 ? (
            showSeats()
          ) : (
            <Text style={{ fontSize: 16 }}>No Seats Selected</Text>
          )}
        </View>
        <View
          style={{
            backgroundColor: "#E0E0E0",
            padding: 6,
            borderTopLeftRadius: 6,
            borderBottomLeftRadius: 6,
          }}
        >
          <Text style={{ width: 100 }}>Now With Ticket Cancellation</Text>
        </View>
      </View>
      <Pressable
        style={{
          backgroundColor: "#ffc40c",
          padding: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 10,
          height: 70,
        }}
      >
        {seats?.length > 0 ? (
          <Text style={{ fontSize: 16, fontWeight: "500" }}>
            {seats?.length} Seat's Selected
          </Text>
        ) : (
          <Text></Text>
        )}
        <Text></Text>
        <Pressable onPress={subscribe}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>PAY ₹{total}</Text>
        </Pressable>
      </Pressable>
    </SafeAreaView>
  );
};

export default TheatreScreen;

const styles = StyleSheet.create({});
