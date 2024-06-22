import React from 'react'
import { Drawer } from 'expo-router/drawer';
import { colorTokens } from '@tamagui/themes';

const Home = () => {
	return (
		<Drawer screenOptions={{
			// headerShown: false,
			// drawerHideStatusBarOnOpen: true
			drawerActiveBackgroundColor: colorTokens.dark.blue.blue7,
			drawerActiveTintColor: '#fff'
		}}>
			<Drawer.Screen name='(home)' options={{}} />
			<Drawer.Screen name='(favorites)' options={{}} />
		</Drawer>
	)
}

export default Home;