import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const DrawerContent = ({ data, navigation, authHandler }) => {
  return (
    <View style={styles.drawerContent}>
      <DrawerContentScrollView>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View>
              <Title style={styles.logo}>USBizFilings&reg;</Title>
              <Title style={styles.title}>{data.first_name} {data.last_name}</Title>
              <Caption style={styles.caption}>{data.email}</Caption>
            </View>
          </View>
        </View>

        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ size }) => (
              <Icon name="human-greeting" color="#00438b" size={size} />
            )}
            label="Introduction"
            onPress={() => {navigation.navigate('Home')}}
          />
          <DrawerItem
            icon={({ size }) => (
              <Icon name="square-edit-outline" color="#00438b" size={size} />
            )}
            label="Order"
            onPress={() => {navigation.navigate('Step1')}}
          />
          <DrawerItem
            icon={({ size }) => (
              <Icon name="email-edit-outline" color="#00438b" size={size} />
            )}
            label="Contact"
            onPress={() => {navigation.navigate('Contact')}}
          />
          <DrawerItem
            icon={({ size }) => (
              <Icon name="email-newsletter" color="#00438b" size={size} />
            )}
            label="Subscription"
            onPress={() => {navigation.navigate('Subscription')}}
          />
        </Drawer.Section>

      </DrawerContentScrollView>

      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ size }) => (
            <Icon name="exit-to-app" color="#f70" size={size} />
          )}
          label="Sign Out"
          onPress={() => authHandler(false)}
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
    color: '#f50'
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