import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Icon, Tooltip } from 'react-native-elements';

import LargeTitle from '../../components/LargeTitle'
import Logo from '../../assets/appLogo.svg'
import LargeButton from '../../components/LargeButton'

const UserAuth = ({ navigation }) => {

    const goToTestingGround = () => {
        navigation.replace('FrontEndTestSpace');
    };

    const goToRegisterPhone = () => {
        navigation.replace('RegisterPhone');
    };

    const goToLogin = () => {
        navigation.replace('Login');
    };

    useLayoutEffect(() => {
        navigation.setOptions({

            title: '',
            headerStyle: { backgroundColor: '#fff' },
            headerTitleStyle: { color: 'black' },
            headerTintColor: 'black',

            headerLeft: () => (
                <View style={{ marginLeft: 20 }}>
                    <TouchableOpacity activeOpacity={0.5} onPress={ goToTestingGround }>
                        <Icon
                            name='alert-triangle'
                            type='feather'
                            color='orange'
                        />
                    </TouchableOpacity>
                </View>
            ),

            headerRight: () => (
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginRight: 20,
                    }}
                >
                    <Tooltip
                        popover={
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris malesuada lorem vel dui porta, in molestie justo interdum.
                                Phasellus blandit ipsum non tortor eleifend accumsan ornare vel turpis.
                                Quisque dictum.
                            </Text>
                        }
                        backgroundColor={'lightgray'}
                        containerStyle={{ width: null, height: null }}
                    >
                        <Icon
                            name='info'
                            type='feather'
                            color='black'
                        />
                    </Tooltip>
                </View>
            )
        });
    }, [navigation]);

    return (
        <SafeAreaView>
            <ScrollView style={ styles.container }>

                <LargeTitle title="Family Chat" />

                <View style={ styles.elements }>
                    <Logo width={ 150 } height={ 150 } />
                </View>
                
                <View style={ styles.elements }>
                    <LargeButton title="Create an Account" type="" onPress={ goToRegisterPhone }/>
                    <LargeButton title="Login" type="Secondary" onPress={ goToLogin }/>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

export default UserAuth;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'white'
    },

    elements: {
        alignItems: 'center',
        justifyContent: 'center',

        borderWidth: 2,
        borderColor: "#888",

        paddingVertical: 25,
        paddingHorizontal: 25,
        marginTop: 10,
    },
});