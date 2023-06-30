import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import HorizontalDatepicker from "@awrminkhodaei/react-native-horizontal-datepicker";
import malls from "../data/malls";

const MovieScreen = () => {
  const route = useRoute();

  const navigation = useNavigation();

  const [selectedDate, setSelectedDate] = useState();

  const [mall, setMall] = useState([]);

  const [seatsData, setSeatsData] = useState([]);

  const mallsData = malls;

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
          <Text style={{ fontSize: 18, fontWeight: "600", marginLeft: 5 }}>
            {route.params.name}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          }}
        >
          <Ionicons name="search" size={24} color="black" />
          <Ionicons
            name="ios-filter-outline"
            size={24}
            color="black"
            style={{ marginHorizontal: 10 }}
          />
          <Ionicons name="share-outline" size={24} color="black" />
        </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
        <AntDesign name="Safety" size={24} color="orange" />
        <Text style={{ paddingLeft: 4 }}>Your Safety Is Our Priority</Text>
      </View>
      <HorizontalDatepicker
        mode="gregorian"
        startDate={new Date("2022-08-23")}
        endDate={new Date("2022-08-30")}
        initialSelectedDate={new Date("2020-08-22")}
        onSelectedDateChange={(date) => setSelectedDate(date)}
        selectedItemWidth={170}
        unselectedItemWidth={38}
        itemHeight={38}
        itemRadius={10}
        selectedItemTextStyle={styles.selectedItemTextStyle}
        unselectedItemTextStyle={styles.selectedItemTextStyle}
        selectedItemBackgroundColor="#222831"
        unselectedItemBackgroundColor="#ececec"
        flatListContainerStyle={styles.flatListContainerStyle}
      />
      <View>
      {mallsData.map((item, index) => (
        <Pressable
          key={index}
          style={{ margin: 10 }}
          onPress={() => {
            setMall(item.name);
            setSeatsData(item.tableData);
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "600" }}>{item.name}</Text>
          {mall.includes(item.name) ? (
            <FlatList
              numColumns={3}
              data={item.showtimes}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() =>
                    navigation.navigate("Theatre", {
                      mall: mall,
                      name: route.params.name,
                      timeSelected: item,
                      tableSeats: seatsData,
                      date: selectedDate,
                      image: route.params.image,
                    })
                  }
                  style={{
                    borderColor: "green",
                    padding: 8,
                    borderWidth: 0.5,
                    width: 80,
                    borderRadius: 6,
                    margin: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 13,
                      color: "green",
                      fontWeight: "500",
                      textAlign: "center",
                    }}
                  >
                    {item}
                  </Text>
                </Pressable>
              )}
            />
          ) : null}
        </Pressable>
      ))}
      </View>
    </SafeAreaView>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({});
