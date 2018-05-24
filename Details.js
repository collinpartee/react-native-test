import React from 'react';
import { Button, Text, View } from 'react-native';

class DetailsScreen extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
        
        return {
          title: params ? params.otherParam : 'A Nested Details Screen',
        //   headerStyle: {
        //       backgroundColor: navigationOptions.headerTintColor,
        //   },
        //   headerTintColor: navigationOptions.headerStyle.backgroundColor,
        };
      };

    render() {

        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const otherParam = navigation.getParam('otherParam', 'no other params :(');
        console.log(this.props.navigation.state.params);
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
          <Text>itemId: {JSON.stringify(itemId)}</Text>
          <Text>otherParam: {JSON.stringify(otherParam)}</Text>
          <Button
            title="Update the title"
            onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
            />
          <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
         <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        </View>
      );
    }
  }

  export default DetailsScreen;