import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default class ScanScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            hasCameraPermissions : null,
            scanned : false,
            scannedData : '',
            buttonState : 'normal'
        }
    }

    getCameraPermissions = async(id)=>{
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState[{
            //status === "granted" is true when user has granted permission
            //status === "granted" is false when user has not granted permission
            hasCameraPermissions : status === "granted",
            buttonState : id,
            scanned : false
        }]
    }

    handleBarcodeScanner = async({type,data})=>{
        
        this.setState({
            scanned : true,
            scannedData : data,
            buttonState : 'normal'
        });
        
    }

    /*render() {
        if() {
            return (
                
            );
        } else {
            return (
                
            );
        }
    }*/

}