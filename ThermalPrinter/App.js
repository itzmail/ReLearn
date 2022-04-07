import React, { useState, useEffect } from 'react';
import { SafeAreaView, useColorScheme, Button, TextInput } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import ThermalPrinterModule from 'react-native-thermal-printer';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [macAddres, setMacAddress] = useState();
  const [state, setState] = useState({
    text:
      '[C]<img>http://via.placeholder.com/100.jpg</img>\n' +
      '[L]\n' +
      "[C]<u><font>ORDER N°045</font></u>\n" +
      '[L]\n' +
      '[C]================================\n' +
      '[L]\n' +
      '[L]<b>BEAUTIFUL SHIRT</b>[R]9.99e\n' +
      '[L]  + Size : S\n' +
      '[C]================================\n' +
      '[L]\n' +
      "[L]<font size='tall'>Customer :</font>\n" +
      '[L]Raymond DUPONT\n' +
      '[L]5 rue des girafes\n' +
      '[L]31547 PERPETES\n' +
      '[L]Tel : +33801201456\n' +
      '[L]\n' +
      "[C]<barcode type='ean13' height='10'>831254784551</barcode>\n" +
      "[C]<qrcode size='20'>http://www.google.com</qrcode>",
  });

  useEffect(() => {
    getDeviceBluetooth();
  }, [])

  const getDeviceBluetooth = async () => {
    try{
      const deviceList = await ThermalPrinterModule.getBluetoothDeviceList();
      console.log(deviceList);
    } catch(e){
      console.log(e.message);
    }
    
  }

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onPress = async () => {
    try {
      console.log('We will invoke the native module here!');
      await ThermalPrinterModule.printBluetooth({ 
        payload: "[C]<qrcode>http://www.google.com</qrcode>", 
        macAddress: "66:22:5A:B0:B6:08",
        printerDpi: 250,
        mmFeedPaper: 30,
        printerWidthMM: 70,
        printerNbrCharactersPerLine: 50,
      });

      //
      // bluetooth
      // await ThermalPrinterModule.printBluetooth({ payload: state.text });
      //

      console.log('done printing');
    } catch (err) {
      //error handling
      console.log(err.message);
    }
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <TextInput
        value={state.text}
        onChangeText={(text) => setState((prev) => ({ ...prev, text }))}
      />
      <Button
        title="Click to invoke your native module!"
        color="#841584"
        onPress={onPress}
      />
    </SafeAreaView>
  );
};

export default App;