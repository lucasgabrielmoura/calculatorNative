import React from "react";
import { StyleSheet, Text, Dimensions, TouchableHighlight } from "react-native";

type tiposPropsB = {
    onClick?: () => void
    label: string,
    double?: boolean,
    triple?: boolean,
    operation?: boolean,
}


const styles = StyleSheet.create({
    button: {
      fontSize: 40,
      height: Dimensions.get('window').width / 3.3,
      width: Dimensions.get('window').width / 4,
      padding: 20,
      backgroundColor: "#f0f0f0",
      textAlign: "center",
      borderWidth: 1,
      borderColor: "#888",
      textAlignVertical: "center",
      color: "#808080"
    },
    operationButton: {
        color: "#fff",
        backgroundColor: "#fa8231",
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3,
    }
});

export default function Button(props:tiposPropsB){
    const stylesButton:any[] = [styles.button]
    if(props.double) stylesButton.push(styles.buttonDouble)
    if(props.triple) stylesButton.push(styles.buttonTriple)
    if(props.operation) stylesButton.push(styles.operationButton)

    return(
        <TouchableHighlight onPress={props.onClick}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}