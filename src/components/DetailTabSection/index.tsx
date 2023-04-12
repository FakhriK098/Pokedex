import {StyleSheet, Text, useWindowDimensions} from 'react-native';
import React from 'react';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import About from '../About';
import Evolution from '../Evolution';
import Moves from '../Moves';
import Constant from '../../assets/Contants';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicator}
    style={styles.tabBarStyle}
    tabStyle={styles.tabStyle}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          color: focused ? Constant.Color.Black : Constant.Color.grey_D7D7D7,
        }}>
        {route.title}
      </Text>
    )}
  />
);

const renderScene = SceneMap({
  0: About,
  1: Evolution,
  2: Moves,
});

const DetailTabSection = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 0, title: 'About'},
    {key: 1, title: 'Evolution'},
    {key: 2, title: 'Moves'},
  ]);
  console.log('kkk', layout.height);
  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width, height: layout.height}}
      renderTabBar={renderTabBar}
      style={{flex: 1}}
    />
  );
};

export default DetailTabSection;

const styles = StyleSheet.create({
  indicator: {
    backgroundColor: Constant.Color.Black,
    height: 3,
    width: 0.5,
  },
  tabBarStyle: {
    backgroundColor: 'white',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomColor: Constant.Color.White,
    borderBottomWidth: 1,
  },
  tabStyle: {width: 'auto'},
  content: {paddingTop: 8, marginHorizontal: 24},
});
