import React from 'react';
import LogoTitle from './Logo'
import { Button, Text, View, Image } from 'react-native';

class HomeScreen extends React.Component {
    // static navigationOptions = ({ navigation }) => {
    //     const params = navigation.state.params || {};

    //     return {
    //         headerLeft: (
    //             <Button
    //               onPress={() => navigation.navigate('MyModal')}
    //               title="Info"
    //               color="#fff"
    //             />
    //           ),
    //     headerTitle: <LogoTitle />,
    //     headerRight: (
    //         <Button onPress={params.increaseCount} title="+1" color="#fff" />
    //     ),
    //     }
    //   };

    static navigationOptions = {
        drawerLabel: 'Home',
        // drawerIcon: ({ tintColor }) => (
        //   <Image
        //     source={require('./mars.png')}
        //     style={[styles.icon, {tintColor: tintColor}]}
        //   />
        // ),
      };

      componentWillMount() {
        this.props.navigation.setParams({ increaseCount: this._increaseCount });
      }
    
      state = {
        count: 0,
      };
    
      _increaseCount = () => {
        this.setState({ count: this.state.count + 1 });
      };
      
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Collin's First Screen</Text>
          <Text>Counter: {this.state.count}</Text>
          <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'my first detail!'
          })}
        />
          <Button
          title="Toggle Drawer"
          onPress={() => this.props.navigation.toggleDrawer()}
        />
        </View>
      );
    }
  }

  export default HomeScreen;