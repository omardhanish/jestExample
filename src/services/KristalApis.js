
import { ERROR, NEGATIVE, NO_INTERNET, STATUS_400, STATUS_422, STATUS_500, STATUS_SUCCESS } from "../constants/CommonConstants";
import { ACCESS_TOKEN, getData, storeJSONData, storeStringData } from "../local/LocalDataHelper";
import NativeUtils from "../utils/NativeUtils";

function apiStatusLogs(tag, message) {
    NativeUtils.print(tag, message)
}

async function storeAccessToken(token) {
    if (token != null) {
        storeStringData(ACCESS_TOKEN, token)
    }
}

export async function commonPostApiLogin(url, params, handleAlert = false) {
    apiStatusLogs("commonPostApiLogin", url + ":" + JSON.stringify(params))
    var resposeJSON
    var statusCode

    var isConnected = await NativeUtils.isNetworkAvailable()
    if (!isConnected) {
        return [NO_INTERNET, '{}']
    }
    try {
        let res = await fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        });

        resposeJSON = await res.json()
        statusCode = resposeJSON.statusCode
        storeAccessToken(resposeJSON.data.token)
        apiStatusLogs("commonPostApiLogin:token", resposeJSON.data.token)
        apiStatusLogs("commonPostApiLogin:resposeJSON", resposeJSON)
    } catch (error) {
        resposeJSON = ERROR
        statusCode = -1
        apiStatusLogs("commonPostApiLogin:error", error.message)
    }

    if (handleAlert) {
        try {
            if (statusCode == NO_INTERNET) {
                NativeUtils.checkInternetConnectionAlert()
                return [statusCode, '{}']
            } else if (statusCode == STATUS_500) {
                alert(resposeJSON?.data?.message)
                return [statusCode, '{}']
            } else if (statusCode == STATUS_400) {

                if (resposeJSON?.data?.message != undefined) {
                    alert(resposeJSON?.data?.message)
                } else {
                    NativeUtils.somethingWrongAlert()
                }
                return [statusCode, '{}']
            } else if (statusCode == STATUS_422) {
                alert(Object.values(resposeJSON.data.errors).join('\r\n'))
                return [statusCode, resposeJSON]
            } else if (statusCode != STATUS_SUCCESS) {
                return [statusCode, '{}']
            }
        } catch (error) {
            statusCode = ERROR
            resposeJSON = '{}'
        }
    }

    return [statusCode, resposeJSON]
}


export async function commonPostApi(url, params, handleAlert = true) {
    apiStatusLogs("commonPostApi", url + ":" + JSON.stringify(params))
    var resposeJSON
    var statusCode
    var token = await getData(ACCESS_TOKEN)
    var bearerToken = "Bearer " + token
    apiStatusLogs("token", bearerToken)

    var isConnected = await NativeUtils.isNetworkAvailable()
    if (!isConnected) {
        statusCode = NO_INTERNET
    }

    if (statusCode != NO_INTERNET) {
        try {
            let res = await fetch(url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': bearerToken,
                },
                body: JSON.stringify(params)
            });

            resposeJSON = await res.json()
            statusCode = resposeJSON.statusCode
            apiStatusLogs("commonPostApi:statusCode", statusCode)
            apiStatusLogs("commonPostApi:resposeJSON" + "-----" + url, resposeJSON)
        } catch (error) {
            resposeJSON = ERROR
            statusCode = -1
            apiStatusLogs("commonPostApi:error", error.message)
        }
    }

    if(statusCode == STATUS_SUCCESS){
        try {

            // if(resposeJSON?.data?.tokenDuration < 30){
            //     CommonApiHandler.callRefreshApi(null, (data) => {
            //         NativeUtils.print('TOKEN UPDATED $$$$$$$$$$$$$$$$$$$$$ ---------------> ' + ' ' + data?.token)
            //         storeAccessToken(data?.token)
            //     })
            // }
           
        } catch (error) {
            
        }
    }

    if (handleAlert) {
        try {
            if (statusCode == NO_INTERNET) {
                NativeUtils.checkInternetConnectionAlert()
                return [statusCode, '{}']
            } else if (statusCode == STATUS_500) {
                alert(resposeJSON?.data?.message)
                return [statusCode, '{}']
            } else if (statusCode == STATUS_400) {

                if (resposeJSON?.data?.message != undefined) {
                    alert(resposeJSON?.data?.message)
                } else {
                    NativeUtils.somethingWrongAlert()
                }
                return [statusCode, '{}']
            } else if (statusCode == STATUS_422) {
                alert(Object.values(resposeJSON.data.errors).join('\r\n'))
                return [statusCode, resposeJSON]
            } else if (statusCode != STATUS_SUCCESS) {
                // Alert.alert(
                //     'Alert',
                //     COMMON_STRINGS.SOMETHING_WENT_WRONG,
                //     [
                //         {
                //             text: 'Okay', onPress: () => {
                //                 CommonApiHandler.callRefreshApi(null, (data) => {
                //                     NativeUtils.print('TOKEN UPDATED $$$$$$$$$$$$$$$$$$$$$ ---------------> ' + ' ' + data?.token)
                //                     storeAccessToken(data?.token)
                //                 })
                //             }
                //         }
                //     ],
                //     { cancelable: false }
                // )

                // return [statusCode, '{}']
            }
        } catch (error) {
            statusCode = ERROR
            resposeJSON = '{}'
        }
    }

    return [statusCode, resposeJSON]
}

export async function commonPostApiArray(url, params, handleAlert = true) {
    apiStatusLogs("commonPostApi", url + ":" + JSON.stringify(params))
    var resposeJSON
    var statusCode
    var token = await getData(ACCESS_TOKEN)
    var bearerToken = "Bearer " + token
    apiStatusLogs("token", bearerToken)

    var isConnected = await NativeUtils.isNetworkAvailable()
    if (!isConnected) {
        statusCode = NO_INTERNET
    }

    if (statusCode != NO_INTERNET) {
        try {
            let res = await fetch(url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': bearerToken,
                },
                body: JSON.stringify(params)
            });

            resposeJSON = await res.json()
            statusCode = resposeJSON.statusCode
            apiStatusLogs("commonPostApi:statusCode", statusCode)
            apiStatusLogs("commonPostApi:resposeJSON" + "-----" + url, resposeJSON)
        } catch (error) {
            resposeJSON = ERROR
            statusCode = -1
            apiStatusLogs("commonPostApi:error", error.message)
        }
    }

    if(statusCode == STATUS_SUCCESS){
        try {

            // if(resposeJSON?.data?.tokenDuration < 30){
            //     CommonApiHandler.callRefreshApi(null, (data) => {
            //         NativeUtils.print('TOKEN UPDATED $$$$$$$$$$$$$$$$$$$$$ ---------------> ' + ' ' + data?.token)
            //         storeAccessToken(data?.token)
            //     })
            // }
           
        } catch (error) {
            
        }
    }

    if (handleAlert) {
        try {
            if (statusCode == NO_INTERNET) {
                NativeUtils.checkInternetConnectionAlert()
                return [statusCode, '{}']
            } else if (statusCode == STATUS_500) {
                alert(resposeJSON?.data?.message)
                return [statusCode, '{}']
            } else if (statusCode == STATUS_400) {

                if (resposeJSON?.data?.message != undefined) {
                    alert(resposeJSON?.data?.message)
                } else {
                    NativeUtils.somethingWrongAlert()
                }
                return [statusCode, '{}']
            } else if (statusCode == STATUS_422) {
                alert(Object.values(resposeJSON.data.errors).join('\r\n'))
                return [statusCode, resposeJSON]
            } else if (statusCode != STATUS_SUCCESS) {
                // Alert.alert(
                //     'Alert',
                //     COMMON_STRINGS.SOMETHING_WENT_WRONG,
                //     [
                //         {
                //             text: 'Okay', onPress: () => {
                //                 CommonApiHandler.callRefreshApi(null, (data) => {
                //                     NativeUtils.print('TOKEN UPDATED $$$$$$$$$$$$$$$$$$$$$ ---------------> ' + ' ' + data?.token)
                //                     storeAccessToken(data?.token)
                //                 })
                //             }
                //         }
                //     ],
                //     { cancelable: false }
                // )

                return [statusCode, '{}']
            }
        } catch (error) {
            statusCode = ERROR
            resposeJSON = '{}'
        }
    }

    return [statusCode, resposeJSON]
}

export async function commonPostMultiPartApi(url, formData, handleAlert = true) {
    apiStatusLogs("commonPostApi", url + ":" + JSON.stringify(formData))
    var resposeJSON
    var statusCode
    var token = await getData(ACCESS_TOKEN)
    var bearerToken = "Bearer " + token
    apiStatusLogs("token", bearerToken)

    var isConnected = await NativeUtils.isNetworkAvailable()
    if (!isConnected) {
        statusCode = NO_INTERNET
    }

    if (statusCode != NO_INTERNET) {
        try {
            let res = await fetch(url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data',
                    'Authorization': bearerToken,
                },
                body: formData
            });

            resposeJSON = await res.json()
            statusCode = resposeJSON.statusCode
            apiStatusLogs("commonPostApi:statusCode", statusCode)
            apiStatusLogs("commonPostApi:resposeJSON", resposeJSON)
        } catch (error) {
            resposeJSON = ERROR
            statusCode = -1
            apiStatusLogs("commonPostApi:error", error.message)
        }
    }

    if (handleAlert) {
        try {
            if (statusCode == NO_INTERNET) {
                NativeUtils.checkInternetConnectionAlert()
                return [statusCode, '{}']
            } else if (statusCode == STATUS_500) {
                alert(resposeJSON.data.message)
                return [statusCode, '{}']
            } else if (statusCode == STATUS_422) {
                alert(Object.values(resposeJSON.data.errors).join('\r\n'))
                return [statusCode, resposeJSON]
            } else if (statusCode != STATUS_SUCCESS) {
                NativeUtils.somethingWrongAlert()
                return [statusCode, '{}']
            }
        } catch (error) {
            statusCode = ERROR
            resposeJSON = '{}'
        }
    }

    return [statusCode, resposeJSON]
}

export async function commonGetApi(url) {
    apiStatusLogs("commonGetApi", url)
    var resposeJSON
    var statusCode

    var isConnected = await NativeUtils.isNetworkAvailable()
    if (!isConnected) {
        return [NO_INTERNET, '{}']
    }
    try {
        let res = await fetch(url, {
            method: 'GET'
        });

        resposeJSON = await res.json()
        statusCode = resposeJSON.statusCode
        storeAccessToken(resposeJSON.data.token)
        apiStatusLogs("commonGetApi:token", resposeJSON.data.token)
        apiStatusLogs("commonGetApi:resposeJSON", resposeJSON)
    } catch (error) {
        resposeJSON = ERROR
        statusCode = -1
        apiStatusLogs("commonGetApi:error", error.message)
    }

    return [statusCode, resposeJSON]
}