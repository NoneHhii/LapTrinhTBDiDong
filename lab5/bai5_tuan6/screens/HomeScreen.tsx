import { View, Text} from 'react-native';

const HomeScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>🏠 Home Screen</Text>
    </View>
  );
}

export default HomeScreen;