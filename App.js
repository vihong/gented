import React from 'react';
import styled from 'styled-components';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import LoadingScreen from './app/screens/LoadingScreen';
import FeedScreen from './app/screens/FeedScreen';
import ProductDetailsScreen from './app/screens/ProductDetailsScreen';
import MesssagesScreen from './app/screens/MesssagesScreen';
import MyAccountScreen from './app/screens/MyAccountScreen';
import { View } from 'react-native';

export default function App() {
	// return <WelcomeScreen />;
	// return <LoadingScreen />;
	// return <ViewImageScreen />;
	// return <FeedScreen />;
	// return <ProductDetailsScreen />;
	// return <MesssagesScreen />;
	return <MyAccountScreen />;
}
