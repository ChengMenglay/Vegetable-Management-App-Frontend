import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Modal,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { styled } from "nativewind";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { request } from "../../lib/Require";
import { Picker } from "@react-native-picker/picker";
import { router } from "expo-router";
import moment from "moment";

const StyledView = styled(View);
const StyledText = styled(Text);

const Overview = () => {
  const [tableData, setTableData] = useState([]);
  const tableHead = [
    "No.",
    "Farmer Name",
    "Village",
    "Commune",
    "District",
    "Province",
    "Agriculture Cooperative",
    "District Facilitate",
    "Vegetable Growing",
    "Vegetable",
    "Land Cultivation",
    "Date Of Seeding",
    "Date Of Planting",
    "Date Of Harvesting",
    "Estimate Product",
  ];

  useEffect(() => {
    getOverviewData();
  }, []);

  const getOverviewData = async () => {
    const response = await request("vegetable_detail/get", "get");
    if (response.data) {
      setTableData(response.data);
    }
  };
  return (
    <ScrollView horizontal={true}>
      <StyledView className="flex-1 bg-green-700 py-4 relative">
        <StyledView style={styles.table}>
          <StyledView style={styles.headerRow} className="bg-green-500">
            {tableHead.map((head, index) => (
              <StyledText
                key={index}
                style={[styles.cell, { fontSize: hp(1.8) }]}
                className="text-center font-psemibold"
              >
                {head}
              </StyledText>
            ))}
          </StyledView>
          {tableData.map((rowData, rowIndex) => (
            <StyledView key={rowIndex} style={styles.row}>
              <StyledText
                style={styles.cell}
                className="text-center bg-green-300 "
              >
                {rowIndex + 1}
              </StyledText>
              <StyledText
                style={styles.cell}
                className="text-center bg-green-300 "
              >
                {rowData.first_name + " " + rowData.last_name}
              </StyledText>
              <StyledText
                style={styles.cell}
                className="text-center bg-green-300 "
              >
                {rowData.village}
              </StyledText>
              <StyledText
                style={styles.cell}
                className="text-center bg-green-300 "
              >
                {rowData.commune}
              </StyledText>
              <StyledText
                style={styles.cell}
                className="text-center bg-green-300 "
              >
                {rowData.district}
              </StyledText>
              <StyledText
                style={styles.cell}
                className="text-center bg-green-300 "
              >
                <View>
                  <Text>{rowData.province}</Text>
                </View>
              </StyledText>
              <StyledText
                style={styles.cell}
                className="text-center bg-green-300 "
              >
                <View>
                  <Text>
                    {rowData.ac_first_name + " " + rowData.ac_last_name}
                  </Text>
                </View>
              </StyledText>
              <StyledText
                style={styles.cell}
                className="text-center bg-green-300 "
              >
                <View>
                  <Text>{rowData.df_name}</Text>
                </View>
              </StyledText>
              <StyledText
                style={styles.cell}
                className="text-center bg-green-300 "
              >
                <View>
                  <Text>{rowData.vegetable_growing}</Text>
                </View>
              </StyledText>
              <StyledText
                style={styles.cell}
                className="text-center bg-green-300 "
              >
                <View>
                  <Text>{rowData.vegetable_name}</Text>
                </View>
              </StyledText>
              <StyledText
                style={styles.cell}
                className="text-center bg-green-300 "
              >
                <View>
                  <Text>{rowData.land_vegetable_cultivation}</Text>
                </View>
              </StyledText>
              <StyledText
                style={styles.cell}
                className="text-center bg-green-300 "
              >
                <View>
                  <Text>
                    {moment(rowData.date_of_seeding).format("YYYY-MM-DD")}
                  </Text>
                </View>
              </StyledText>
              <StyledText
                style={styles.cell}
                className="text-center bg-green-300 "
              >
                <View>
                  <Text>
                    {moment(rowData.date_of_planting).format("YYYY-MM-DD")}
                  </Text>
                </View>
              </StyledText>
              <StyledText
                style={styles.cell}
                className="text-center bg-green-300 "
              >
                <View>
                  <Text>
                    {moment(rowData.date_of_harvesting).format("YYYY-MM-DD")}
                  </Text>
                </View>
              </StyledText>
              <StyledText
                style={styles.cell}
                className="text-center bg-green-300 "
              >
                <View>
                  <Text>{rowData.estimated_product}</Text>
                </View>
              </StyledText>
            </StyledView>
          ))}
        </StyledView>
        <TouchableOpacity
          onPress={() => router.push("/create_list")}
          className="absolute bottom-4 left-4"
        >
          <Ionicons name="create-outline" size={hp(5)} color="white" />
        </TouchableOpacity>
      </StyledView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderColor: "#C1C0B9",
  },
  headerRow: {
    flexDirection: "row",
    // backgroundColor: "yellow",
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    width: wp(30),
    minHeight: hp(6),
    borderRightWidth: 1,
    borderColor: "#C1C0B9",
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 2,
    fontSize: hp(1.5),
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#9ca3cf",
    borderRadius: 10,
    overflow: "hidden",
  },
  picker: {
    height: 50,
    width: "100%",
    color: "gray",
  },
  pickerItem: {
    color: "gray",
    fontSize: 16,
  },
});

export default Overview;
