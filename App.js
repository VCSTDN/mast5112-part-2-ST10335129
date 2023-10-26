import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
      View,
      Text,
      TouchableHighlight,
      StyleSheet,
      Button,
      TextInput,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

const genreList = [
  {id: '1' ,name: 'Action and adventure', category: 'Fiction', count: 0},
  {id: '2' ,name: 'Alternate history', category: 'Fiction', count: 0},
  {id: '3' ,name: 'Anthology', category: 'Fiction', count: 0},
  {id: '4' ,name: 'Chick lit', category: 'Fiction', count: 0},
  {id: '5' ,name: 'Children', category: 'Fiction', count: 0},
  {id: '6' ,name: 'Classic', category: 'Fiction', count: 0},
  {id: '7' ,name: 'Comic book', category: 'Fiction', count: 0},
  {id: '8' ,name: 'Coming-of-age', category: 'Fiction', count: 0},
  {id: '9' ,name: 'Crime', category: 'Fiction', count: 0},
  {id: '10' ,name: 'Drama', category: 'Fiction', count: 0},
  {id: '11' ,name: 'Fairytale', category: 'Fiction', count: 0},
  {id: '12' ,name: 'Fantasy', category: 'Fiction', count: 0},
  {id: '13' ,name: 'Graphic novel', category: 'Fiction', count: 0},
  {id: '14' ,name: 'Historical fiction', category: 'Fiction', count: 0},
  {id: '15' ,name: 'Horror', category: 'Fiction', count: 0},
  {id: '16' ,name: 'Mystery', category: 'Fiction', count: 0},
  {id: '17' ,name: 'Paranormal romance', category: 'Fiction', count: 0},
  {id: '18' ,name: 'Picture book', category: 'Fiction', count: 0},
  {id: '19' ,name: 'Poetry', category: 'Fiction', count: 0},
  {id: '20' ,name: 'Political thriller', category: 'Fiction', count: 0},
  {id: '21' ,name: 'Romance', category: 'Fiction', count: 0},
  {id: '22' ,name: 'Satire', category: 'Fiction', count: 0},
  {id: '23' ,name: 'Science fiction', category: 'Fiction', count: 0},
  {id: '24' ,name: 'Short story', category: 'Fiction', count: 0},
  {id: '25' ,name: 'Suspense', category: 'Fiction', count: 0},
  {id: '26' ,name: 'Thriller', category: 'Fiction', count: 0},
  {id: '27' ,name: 'Western', category: 'Fiction', count: 0},
  {id: '28' ,name: 'Young adult', category: 'Fiction', count: 0},
  {id: '29' ,name: 'Art/architecture', category: 'Non-fiction', count: 0},
  {id: '30' ,name: 'Autobiography', category: 'Non-fiction', count: 0},
  {id: '31' ,name: 'Biography', category: 'Non-fiction', count: 0},
  {id: '32' ,name: 'Business/economics', category: 'Non-fiction', count: 0},
  {id: '33' ,name: 'Crafts/hobbies', category: 'Non-fiction', count: 0},
  {id: '34' ,name: 'Cookbook', category: 'Non-fiction', count: 0},
  {id: '35' ,name: 'Diary', category: 'Non-fiction', count: 0},
  {id: '36' ,name: 'Dictionary', category: 'Non-fiction', count: 0},
  {id: '37' ,name: 'Encyclopedia', category: 'Non-fiction', count: 0},
  {id: '38' ,name: 'Guide', category: 'Non-fiction', count: 0},
  {id: '39' ,name: 'Health/fitness', category: 'Non-fiction', count: 0},
  {id: '40' ,name: 'History', category: 'Non-fiction', count: 0},
  {id: '41' ,name: 'Home and garden', category: 'Non-fiction', count: 0},
  {id: '42' ,name: 'Humor', category: 'Non-fiction', count: 0},
  {id: '43' ,name: 'Journal', category: 'Non-fiction', count: 0},
  {id: '44' ,name: 'Math', category: 'Non-fiction', count: 0},
  {id: '45' ,name: 'Memoir', category: 'Non-fiction', count: 0},
  {id: '46' ,name: 'Philosophy', category: 'Non-fiction', count: 0},
  {id: '47' ,name: 'Prayer', category: 'Non-fiction', count: 0},
  {id: '48' ,name: 'Religion, spirituality, and new age', category: 'Non-fiction', count: 0},
  {id: '49' ,name: 'Textbook', category: 'Non-fiction', count: 0},
  {id: '50' ,name: 'True crime', category: 'Non-fiction', count: 0},
  {id: '51' ,name: 'Review', category: 'Non-fiction', count: 0},
  {id: '52' ,name: 'Science', category: 'Non-fiction', count: 0},
  {id: '53' ,name: 'Self help', category: 'Non-fiction', count: 0},
  {id: '54' ,name: 'Sports and leisure', category: 'Non-fiction', count: 0},
  {id: '55' ,name: 'Travel', category: 'Non-fiction', count: 0},
  {id: '56' ,name: 'True crime', category: 'Non-fiction', count: 0}
 ];

function HomeScreen({ navigation }) {
  const [title, setTitle] = React.useState('');
  const [Author, setAuthor] = React.useState('');
  const [numberpages, setNum] = React.useState('');
  const [genre, setGenre] = React.useState('');
  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.Heading}>Home page</Text>     
      </View>
      <View>
      <TouchableHighlight>
        <View style={styles.Button}>
          <Button title="History"
           onPress={() => navigation.navigate('History')}/>
          <Button title="Genre"
           onPress={() => navigation.navigate('Genre')}/>
          <Button title="Enter book"
           onPress={() => navigation.navigate('Enterbook')}/>
        </View>
        </TouchableHighlight>
        <View style={styles.subheading}>
      
              <Text style={styles.lastBook}>Last book read</Text>
              <Text style={styles.normalText}>Title: Middleschool</Text>
              <Text style={styles.normalText}>Author: James Patterson</Text>
              <Text style={styles.normalText}>Genre: Commedy</Text>
              <Text style={styles.normalText}>Number of pages: 288</Text>
       </View>
      </View>
      <View>
        <View>
        <View style={styles.subheading}>
          <Text style={styles.lastBook}>Average number of pages</Text>
          <Text style={styles.normalText}>Average:56</Text>
          </View>
        </View>
        <View>
        <View style={styles.subheading}>
        <Text style={styles.lastBook}>Total number of pages read across all genre's</Text>
          <Text style={styles.normalText}>Total=8858</Text>
          </View>
        </View>
      </View>
    </View>
          
  );
}
    
    
function EnterbookScreen({ navigation }) {
  const [Title, setTitle] = React.useState('');
  const [Author, setAuthor] = React.useState('');
  const [numberpages, setNum] = React.useState('');
  const [Genre, setGenre] = React.useState('');
  const [Calculate, setCalculate] = React.useState('')
  const [numberofpages, setNumPages] = React.useState('')
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <View style={styles.container}>
      <View> 
    <Text style={styles.Heading}>Enterbook</Text>
    <Button
        title="Enterbook"
        onPress={() => navigation.navigate('History')}
      />
      <Button title="Home page" onPress={() => navigation.goBack()} />
      </View>
    <View>
      <TextInput style={styles.textinput}
        placeholder='Enter the books name'
        onChangeText={setTitle}
        value={Title} />
      </View>
    <View>
      <TextInput style={styles.textinput}
        placeholder='Enter the authors name'
        onChange={setAuthor}
        value={Author} />
    </View>  
    <View>
      <TextInput style={styles.textinput}
      placeholder='Enter the number of pages'
      onChange={setNum}
      value={Author} />
      </View>
      <View style={styles.input}>
        <Picker
          selectedValue={Genre}
          onValueChange={(item2Value, item2Index) => setGenre(item2Index)}>
          {genreList.map(Genre => <Picker.Item key={Genre.id} label={Genre.name} value={Genre.name}/>)}
        </Picker>
      </View>
      <View>
      <TextInput style={styles.textinput2}
      placeholder='Average number of pages'
      onChange={setCalculate}
      value={Calculate} />
      </View>
      <View>
      <TextInput style={styles.textinput2}
      placeholder='Total number of pages'
      onChange={setNumPages}
      value={numberofpages} />
      </View>
      <View>
        <TouchableHighlight style={styles.Button2}>
          <Text style={styles.Button}>Save</Text>
        </TouchableHighlight>
      </View> 
    </View>      
    </View>
  );
}

function HistoryScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="History"
        onPress={() => navigation.navigate('History')}
      />
      <Button title="Home page" onPress={() => navigation.goBack()} />
    </View>
  );
}

function GenreScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Genre" onPress={() => navigation.goBack()} />
    </View>
  );
}

const setGenre = () => {
  AsyncStorage.getItem('@Genre').then(
          (value) => setGenre(value)
  );
const setCalculate = () => {
  setTotal(0 + getPages);
  setCount(count + 1);
  setAverage(getPages/count);
};
};
const Stack = createNativeStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home page" component={HomeScreen} />
      <Stack.Screen name="Enterbook" component={EnterbookScreen} />
      <Stack.Screen name="History" component={HistoryScreen} />
      <Stack.Screen name="Genre" component={GenreScreen} />
    </Stack.Navigator>
  );
}



 

const styles = StyleSheet.create({
  container: {
  flex: 1,
  padding: 95,
  backgroundColor: '#2FCCFD',
  },
  Button:{
    flexDirection: 'row',
    paddingHorizontal: 15,
    padding: 25,
    alignItems: 'stretch',
  },
  ButtonText:{
    fontSize: 30,
  },
  Heading:{
    fontSize: 55,
    fontWeight: 'bold',
    alignContent: 'center',
    color: '#000000',

  },
  subheading: {
    
    alignContent:'center',
    backgroundColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 15,
    padding: 10,
    fontSize: 8,
    
    
  },
  lastBook:{
    fontSize: 30,
    fontWeight: 'bold',
  },
  normalText:{
    color: '#000000',
    fontSize: 22,
  },
  textinput: {
    alignContent:'center',
    backgroundColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 5,
    marginTop: 10,
    padding: 10,
  },
  input: {
    alignContent:'center',
    backgroundColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 5,
    marginTop: 10,
    padding: 2, 
  },
  Button2: {
    backgroundColor: '#E76060',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 120,
    borderCurve: 2,
    paddingBottom: 1,
    marginBottom: 5,
    marginTop: 5,
    padding: 1,
  },
  textinput2: {
    alignContent:'center',
    backgroundColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 5,
    marginTop: 10,
    padding: 35,
  },
  
  
  
}) 



export default function App(){
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}
