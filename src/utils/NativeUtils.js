import NetInfo from "@react-native-community/netinfo";
import { Alert, Platform } from "react-native";
import { COMMON_STRINGS } from "../constants/HeptagonConstants";
import Toast from 'react-native-simple-toast'

export function print(key, value = undefined) {
    try {
        if (__DEV__) {
            if (value == undefined) {
                console.log(key)
            } else {
                console.log(key, value)
            }
        }
    } catch (error) {

    }
}
export default class NativeUtils {

    static async isNetworkAvailable() {
        const response = await NetInfo.fetch();
        return response.isConnected;
    }

    static async getSSID() {
        NetInfo.fetch("wifi").then(state => {
            console.log("SSID------------------------------>", state.details.ssid);
        });
    }

    static async commonAlert(mesasge, callback, cancelable = true) {
        Alert.alert(
            'Alert',
            mesasge,
            [
                { text: 'OK', onPress: () => callback() },
            ],
            { cancelable: cancelable }
        )
    }

    static async checkInternetConnectionAlert() {
        alert(COMMON_STRINGS.CHECK_INTERNET_CONNECTION)
    }

    static async somethingWrongAlert() {
        alert(COMMON_STRINGS.SOMETHING_WENT_WRONG)
    }

    static checkParamsContainsKey(key, props) {
        try {
            return props.route.params != undefined && key in props.route.params
        } catch (error) {
            return false
        }
    }

    static checkString(value) {
        try {
            if (value.trim() == '' || value == undefined || value == null) {
                return '-'
            } else {
                return value
            }
        } catch (error) {
            return '-'
        }
    }

    static notifyMessage(msg) {
        if (Platform.OS === 'android') {
            Toast.show(msg, Toast.SHORT)
        } else {
            Toast.show(msg, Toast.SHORT)
        }
    }

    static notifyMessageLONG(msg) {
        if (Platform.OS === 'android') {
            Toast.show(msg, Toast.LONG)
        } else {
            Toast.show(msg, Toast.LONG)
        }
    }

    static isAndroid() {
        if (Platform.OS === 'android') {
            return true
        } else {
            return false
        }
    }

    static notifyMessageSHORT(msg) {
        if (Platform.OS === 'android') {
            Toast.show(msg, Toast.SHORT)
        } else {
            Toast.show(msg, Toast.SHORT)
        }
    }

    static roundToX(num, X = 2) {
        return +(Math.round(num + "e+" + X) + "e-" + X);
    }

    static round(num) {
        try {
            return Math.round(num)
        } catch (error) {
            return 0
        }
    }

    static displayDate(date) {
        try {
            if (date.includes('/')) {
                return date
            }
            return date.split('-').reverse().join('/')
        } catch (error) {
            return ''
        }
    }


    static sendDateFormat(date) {
        try {
            if (date.includes('/')) {
                return date.split('/').reverse().join('-')
            }
            return date
        } catch (error) {
            return ''
        }
    }

    static relDiff(a, b) {
        try {
            return 100 * Math.abs((a - b) / ((a + b) / 2));
        } catch (error) {
            return 0
        }
    }

    static findPercent(a, b) {
        try {
            let smallValue = a > b ? b : a
            let bigValue = a > b ? a : b

            return Math.abs((smallValue / bigValue) * 100)
        } catch (error) {
            return 0
        }
    }

    static print(key, value = undefined) {
        try {
            if (__DEV__) {
                if (value == undefined) {
                    console.log(JSON.stringify(key))
                } else {
                    console.log(key, JSON.stringify(value))
                }
            }
        } catch (error) {

        }
    }

    static isNumeric(num) {

        try {
            return !isNaN(num)
        } catch (error) {
            return false
        }
    }

    static isWholeNumeric(num) {
        try {
            return Number.isInteger(parseFloat(num))
        } catch (error) {
            return false
        }
    }

    static within100(value) {
        if (value == undefined) {
            return 0
        }
        else {
            let v = value * 10

            return v > 100 ? 100 : v
        }
    }

    static getMonthName(value) {
        let monthNames = ["Jan", "Feb", "Mar", "Apr",
            "May", "June", "July", "Aug", "Sep", "Oct",
            "Nov", "Dec"
        ];

        return monthNames[value]
    }

    static getDateForShowing(gobackValue = undefined) {
        let date = new Date()
        let monthNames = ["Jan", "Feb", "Mar", "Apr",
            "May", "June", "July", "Aug", "Sep", "Oct",
            "Nov", "Dec"
        ];

        if (gobackValue != undefined) {
            date.setMonth(date.getMonth() - gobackValue);
        }
        let sDate = `${date.getFullYear()}-${monthNames[date.getMonth()]}-${date.getDate()}`
        return sDate
    }

    static getDate(gobackValue = undefined) {
        let date = new Date()
        if (gobackValue != undefined) {
            date.setMonth(date.getMonth() - gobackValue);
        }
        let sDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        return sDate
    }

    static findPercent2(value, divValue) {
        if (divValue > 0) {
            //NativeUtils.print(value/divValue)
            return value / divValue
        } else {
            return 0
        }
    }

    static arrayRemove(arr, value) {

        return arr.filter(function (ele) {
            return ele != value;
        });
    }

    static checkIfAmazonImage(path) {
        try {
            if ((path.includes('https:/') ||
                path.includes('amazonaws'))) {
                return true
            } else {
                return false
            }
        } catch (error) {
            return false
        }

    }

    static isNumeric2(num) {
        let value1 = num.toString();
        let value2 = parseFloat(num).toString();
        return (value1 === value2);
    }

    static hasNumbers(t) {
        var regex = /\d/g;
        return regex.test(t);
    }

}