import * as React from 'react-native';
import { Text, View, TouchableOpacity, StyleSheet, Image,TextInput, Alert, KeyboardAvoidingView, ToastAndroid, Image } from "react-native";
import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner";


export default class ScanScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            hasCameraPermissions: null,
            scanned: false,
            scannedData: '',
            buttonState: 'normal',

        }
    }
    render() {
      return (<View>
        <TouchableOpacity onPress={this.getCameraPermissions} style={styles.scanButton} title = 'Barcode Scanner'>
        <Text style = {styles.buttonText}> Scan QR Code </Text>
        </TouchableOpacity>
      </View>)
    }



}

getCameraPermissions = async (id) => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);

    this.setState({
      /*status === "granted" is 
      true when user has granted permission
          status === "granted" is false when user has not granted the permission
        */
      hasCameraPermissions: status === "granted",
      buttonState: id,
      scanned: false,
    });
  };  

  handleBarCodeScanned = async ({ type, data }) => {
    //destructing assignment.. const buttonState=this.state.buttonState;
    const {buttonState}=this.state;

    if(buttonState==='clicked'){
      this.setState({
        scanned: true,
        buttonState: "normal",
      });
    }
   
  };

  const styles = StyleSheet.create({

    scanButton: {
      height: 20,
      width: 20,
      alignItems: 'center',
      justifyContent: 'center',
    }

  })