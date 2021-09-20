'use strict';
import React, { Component } from 'react'
import QRCode from 'react-native-qrcode-svg';

import {
    StyleSheet,
    View,
    TextInput
} from 'react-native';

const QrCodeScanner = () => {



    return (

            <QRCode
                value="http://awesome.link.qr"
                size={200}
            />
    );

}

export default QrCodeScanner




