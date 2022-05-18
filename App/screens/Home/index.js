import React, {useState, useMemo} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import DraggableGrid from '../components/DraggableGrid';

const Home = () => {
  const [data, setData] = useState([
    {name: '1', key: 'one'},
    {name: '2', key: 'two'},
    {name: '3', key: 'three'},
    {name: '4', key: 'four'},
    {name: '5', key: 'five'},
    {name: '6', key: 'six'},
    {name: '7', key: 'seven'},
    {name: '8', key: 'eight'},
    {name: '9', key: 'night'},
    {name: '0', key: 'zero'},
  ]);

  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={{fontSize: 40, color: '#FFFFFF'}}>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.wrapper}>
      <Text style={{color: 'black'}}>Home</Text>
      <DraggableGrid
        numColumns={3}
        renderItem={renderItem}
        data={data}
        onDragRelease={data => {
          setData(data);
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  item: {
    width: 100,
    height: 100,
    borderRadius: 8,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
