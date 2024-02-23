import React from 'react';
import { ScrollView, View } from 'react-native';

import './src/config/ReactotronConfig';

import Header from './src/components/Header';
import SubHeader from './src/components/SubHeader';
import ProductList from './src/components/ProductList';
import Tabs from './src/components/Tabs';

const App = () => (
  <View style={{ flex: 1, backgroundColor: '#F8F8FA' }}>
    <Header />
    <ScrollView>
      <SubHeader />
      <ProductList />
    </ScrollView>
    <Tabs />
  </View>
);

export default console.tron.overlay(App);
