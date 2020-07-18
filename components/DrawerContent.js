import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { widthPercentageToDP } from 'react-native-responsive-screen';

const DrawerContent = ({...props}) => {
  return (
    <View style={styles.drawerContent}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View>
              <Title style={styles.logo}>USBizFilings&reg;</Title>
              <Title style={styles.title}>Jhon Doe</Title>
              <Caption style={styles.caption}>jhondoe@gmail.coom</Caption>
            </View>
          </View>
        </View>

        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="human-greeting" color={color} size={size} />
            )}
            label="Introduction"
            onPress={() => {props.navigation.navigate('Home')}}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="square-edit-outline" color={color} size={size} />
            )}
            label="Order"
            onPress={() => {props.navigation.navigate('Step1')}}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="email-edit-outline" color={color} size={size} />
            )}
            label="Contact"
            onPress={() => {props.navigation.navigate('Contact')}}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="email-newsletter" color={color} size={size} />
            )}
            label="Subscription"
            onPress={() => {props.navigation.navigate('Subscription')}}
          />
        </Drawer.Section>

        <Drawer.Section title="Preferences">
          <TouchableRipple onPress={() => {}}>
            <View style={styles.preference}>
              <Text>Dark Theme</Text>
              <View>
                <Switch />
              </View>
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </DrawerContentScrollView>

      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  logo: {
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    marginTop: 10,
    marginLeft: 4
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    marginLeft: 4
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15
  },
  paragraph: {
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15
  },
  bootomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
  },
  preference: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16
  }
})

export default DrawerContent;