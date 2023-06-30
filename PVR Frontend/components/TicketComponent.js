import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { MovieCard } from '../Context'

const TicketComponent = () => {

    const {ticket} = useContext(MovieCard);

  return (
    <View>
        {ticket.slice(0,1).map((item,index)=>(
        <ImageBackground
        style={{ aspectRatio: 5 / 2, height: 170 }}
        source={{
          uri: item.image,
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
            YOUR TICKET
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
                {item.name}
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
                VIEW TICKET
              </Text>
            </Pressable>
          </View>
          <Text style={{ marginTop: 10, fontSize: 15, fontWeight: "500" }}>
            {item.mall}
          </Text>
        </Pressable>
      </ImageBackground>
      ))}
      <View style={{marginTop:110}}/>
    </View>
  )
}

export default TicketComponent

const styles = StyleSheet.create({})