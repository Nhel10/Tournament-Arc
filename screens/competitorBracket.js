import React, { Component } from "react";
import { render } from "react-dom";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";


export default function CompetitorBracket() {
  var bracket = window.brackets[0];
  console.log(bracket);
    return (
      <ScrollView horizontal={true}>
        <View style={{ flexDirection: "column" }}>
          <View style={{marginTop: 10, flexDirection: "row"}}>
            <View style={{ marginLeft:20, flexDirection: "column" }}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Winners Round 1
              </Text>
              <Text style={{fontSize: 10}}> Apr, 18, 2021 7:00PM PDT</Text>
            </View>
            <View style={{ marginLeft:60, flexDirection: "column" }}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Winners Semi-Final
              </Text>
              <Text style={{fontSize: 10}}> Apr, 18, 2021 7:30PM PDT</Text>
            </View>
            <View style={{ marginLeft:60, flexDirection: "column" }}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Winners Finals
              </Text>
              <Text style={{fontSize: 10}}> Apr, 18, 2021 7:45PM PDT</Text>
            </View>
          </View>

          {/* Start of first round */}
          <View style={{ marginTop: 10, flexDirection: "row" }}>
            <View>
              <TouchableOpacity style={styles.firstBracket}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.username}>bracket.Round.matchList[0]</Text>
                  <View
                    style={{
                      backgroundColor: "gray",
                      width: 20,
                      marginLeft: 95,
                    }}
                  >
                    <Text style={{ textAlign: "center", color: "white" }}>
                      0
                    </Text>
                  </View>
                </View>
                <View
                  style={{ borderBottomColor: "gray", borderBottomWidth: 1 }}
                ></View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.username}>KarateKid</Text>
                  <View
                    style={{
                      backgroundColor: "gray",
                      width: 20,
                      marginLeft: 82.5,
                    }}
                  >
                    <Text style={{ textAlign: "center", color: "white" }}>
                      0
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.firstBracket}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.username}>GeorgeLopez</Text>
                  <View
                    style={{
                      backgroundColor: "gray",
                      width: 20,
                      marginLeft: 60,
                    }}
                  >
                    <Text style={{ textAlign: "center", color: "white" }}>
                      0
                    </Text>
                  </View>
                </View>
                <View
                  style={{ borderBottomColor: "gray", borderBottomWidth: 1 }}
                ></View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.username}>Ben 10</Text>
                  <View
                    style={{
                      backgroundColor: "gray",
                      width: 20,
                      marginLeft: 101,
                    }}
                  >
                    <Text style={{ textAlign: "center", color: "white" }}>
                      0
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.firstBracket}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.username}>SpongeBob</Text>
                  <View
                    style={{
                      backgroundColor: "gray",
                      width: 20,
                      marginLeft: 72,
                    }}
                  >
                    <Text style={{ textAlign: "center", color: "white" }}>
                      0
                    </Text>
                  </View>
                </View>
                <View
                  style={{ borderBottomColor: "gray", borderBottomWidth: 1 }}
                ></View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.username}>JimmyNeutron</Text>
                  <View
                    style={{
                      backgroundColor: "gray",
                      width: 20,
                      marginLeft: 51.5,
                    }}
                  >
                    <Text style={{ textAlign: "center", color: "white" }}>
                      0
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.firstBracket}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.username}>LimaBeans</Text>
                  <View
                    style={{
                      backgroundColor: "gray",
                      width: 20,
                      marginLeft: 74,
                    }}
                  >
                    <Text style={{ textAlign: "center", color: "white" }}>
                      0
                    </Text>
                  </View>
                </View>
                <View
                  style={{ borderBottomColor: "gray", borderBottomWidth: 1 }}
                ></View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.username}>Benjamin</Text>
                  <View
                    style={{
                      backgroundColor: "gray",
                      width: 20,
                      marginLeft: 85,
                    }}
                  >
                    <Text style={{ textAlign: "center", color: "white" }}>
                      0
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            {/* End of the first round */}
            {/* Start of the second round */}
            <View style={{ marginLeft: 10 }}>
              <TouchableOpacity
                style={{
                  marginTop: 45,
                  flexDirection: "column",
                  borderRadius: 1,
                  borderWidth: 1,
                  borderColor: "gray",
                  width: 170,
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.username}>KarateKid</Text>
                  <View
                    style={{
                      backgroundColor: "gray",
                      width: 20,
                      marginLeft: 82.5,
                    }}
                  >
                    <Text style={{ textAlign: "center", color: "white" }}>
                      0
                    </Text>
                  </View>
                </View>
                <View
                  style={{ borderBottomColor: "gray", borderBottomWidth: 1 }}
                ></View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.username}>Ben10</Text>
                  <View
                    style={{
                      backgroundColor: "gray",
                      width: 20,
                      marginLeft: 103,
                    }}
                  >
                    <Text style={{ textAlign: "center", color: "white" }}>
                      0
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  marginTop: 70,
                  flexDirection: "column",
                  borderRadius: 1,
                  borderWidth: 1,
                  borderColor: "gray",
                  width: 170,
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.username}>SpongeBob</Text>
                  <View
                    style={{
                      backgroundColor: "gray",
                      width: 20,
                      marginLeft: 71,
                    }}
                  >
                    <Text style={{ textAlign: "center", color: "white" }}>
                      0
                    </Text>
                  </View>
                </View>
                <View
                  style={{ borderBottomColor: "gray", borderBottomWidth: 1 }}
                ></View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.username}>Benjamin</Text>
                  <View
                    style={{
                      backgroundColor: "gray",
                      width: 20,
                      marginLeft: 85,
                    }}
                  >
                    <Text style={{ textAlign: "center", color: "white" }}>
                      0
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            {/* End of the second round */}
            {/* Start of the finals round */}
            <View>
              <TouchableOpacity
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  marginTop: 100,
                  flexDirection: "column",
                  borderRadius: 1,
                  borderWidth: 1,
                  borderColor: "gray",
                  width: 170,
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.username}>KarateKid</Text>
                  <View
                    style={{
                      backgroundColor: "gray",
                      width: 20,
                      marginLeft: 82.5,
                    }}
                  >
                    <Text style={{ textAlign: "center", color: "white" }}>
                      0
                    </Text>
                  </View>
                </View>
                <View
                  style={{ borderBottomColor: "gray", borderBottomWidth: 1 }}
                ></View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.username}>SpongeBob</Text>
                  <View
                    style={{
                      backgroundColor: "gray",
                      width: 20,
                      marginLeft: 71.5,
                    }}
                  >
                    <Text style={{ textAlign: "center", color: "white" }}>
                      0
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }


const styles = StyleSheet.create({
  firstBracket: {
    marginLeft: 10,
    marginTop: 15,
    flexDirection: "column",
    borderRadius: 1,
    borderWidth: 1,
    borderColor: "gray",
    width: 170,
  },
  username: {
    marginLeft: 5,
  },
});
