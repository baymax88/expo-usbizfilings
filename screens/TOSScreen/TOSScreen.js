import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from '@expo/vector-icons/Ionicons'
import { ScrollView, StyleSheet } from 'react-native'
import { Caption } from 'react-native-paper'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

const TOSStack = createStackNavigator()

const TOSScreen = ({ navigation }) => {
    return (
        <TOSStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#00438b',
              },
              headerTintColor: '#fff'
        }}>
            <TOSStack.Screen name="TOS" component={Screen} options={{
                title: 'Terms of Service',
                headerLeft: () => (
                <Icon.Button name="ios-arrow-back" size={25} backgroundColor="#00438b" onPress={() => navigation.goBack()}></Icon.Button>
                )
            }} />
        </TOSStack.Navigator>
    )
}

const Screen = () => {
    return (
        <ScrollView style={{paddingHorizontal: wp('5%'), marginVertical: 10}}>
            <Caption style={styles.caption}>
                USBizFilings&reg; is an online incorporation service company designed to allow you to apply in order to form your own corporation, LLC, or Not-for-Profit.
            </Caption>
            <Caption style={styles.caption}>
                USBizFilings&reg; uses the information provided on our order forms to complete the information on the required state and federal forms. USBizFilings&reg; is not a law firm and neither USBizFilings&reg; nor any of its employees or representatives provide legal services or legal advice. Further, no representations or warranties, expressed or implied, are given regarding the legal or other consequences resulting from the use of our services or forms.
            </Caption>
            <Caption style={styles.caption}>
                The information contained in USBizFilings.com site is provided for general information only and should not serve as a substitute for legal advice from an attorney familiar with the facts and circumstances of your specific situation.
            </Caption>
            <Caption style={styles.caption}>
                USBizFilings&reg;'s liability is limited only to amounts paid to USBizFilings&reg;. If you are not satisfied with our service, you may contact our customer services info@usbizfilings.com.
            </Caption>
            <Caption style={styles.caption}>
                The maximum amount USBizFilings&reg; will withhold from a cancelled order is $95, unless state filing fees or supplier fees has already been paid. Money paid to the state for filing fees or to suppliers for goods or services is not refundable. If an order is cancelled, USBizFilings&reg; will provide a refund based on the stage of order processing:
            </Caption>
            <Caption style={styles.caption}>
                If an order is cancelled after the order audit and payment processes have been completed, but before any other processing has taken place, a refund for the total order amount less a $35 processing fee will be issued.
            </Caption>
            <Caption style={styles.caption}>
                For orders requiring a preliminary name check, an additional $35 will be withheld from the refund if the preliminary name check has been completed before the order is cancelled.
            </Caption>
            <Caption style={styles.caption}>
                For orders requiring creation of state filing documents, an additional $35 will be withheld from the refund if the order is cancelled after these documents are created but before being filed with the state.
            </Caption>
            <Caption style={styles.caption}>
                A $35 fee will be added to all checks returned to USBizFilings&reg; due to non-sufficient funds or closed accounts. In addition, a bank service fee will be charged on these checks.
            </Caption>
            <Caption style={styles.caption}>
                USBizFilings&reg;, its employees, representatives and agents specifically disclaim any warranty beyond the limited warranty stated above, whether express or implied, including the implied warranties of merchantability and fitness for purpose. Under no circumstances will USBizFilings&reg;, its officials, agents, representatives and employees be liable or responsible for any damage or inconvenience caused or alleged to be caused by the use of our services.
            </Caption>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    caption: {
        marginVertical: 4,
        color: '#222'
    }
})

export default TOSScreen