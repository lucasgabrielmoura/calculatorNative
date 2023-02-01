import React from "react";
import { StyleSheet, Text, View } from "react-native";

type tiposPropsD = {
    valor?: any,
}

const styles = StyleSheet.create({
    display: {
      flex: 1,
      padding: 20,
      justifyContent: "center",
      backgroundColor: "#0009",
      alignItems: "flex-end",
    },
    displayValue: {
        fontSize: 60,
        color: "#fff"
    }
});

export default function Display(props:tiposPropsD){
    return(
        <View style={styles.display}>
            <Text style={styles.displayValue} numberOfLines={1}>{props.valor}</Text>
        </View>
    )
}