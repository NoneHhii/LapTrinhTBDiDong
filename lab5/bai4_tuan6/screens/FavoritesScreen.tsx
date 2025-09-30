import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native'
import {useFavor} from '../hooks/FavorContext'
import FavorCard from '../components/FavorCard'

interface Product {
  name: string,
  manu: string,
  price: number,
  sale: number,
  rate: number,
  img: string,
  color: string,
  id: number,
}

const FavoritesScreen: React.FC = () => {
  const {favorList} = useFavor();

  const renderFavor = ({item}: {item: Product}) => {
    return (
      <FavorCard product={item}/>
    )
  }

  if(favorList.length <= 0) {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Text>Favorites list is empty</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favorList}
        renderItem={renderFavor}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  }
})

export default FavoritesScreen;