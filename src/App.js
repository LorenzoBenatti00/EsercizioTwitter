import logo from './logo.svg';
import './App.css';

function App() {
  const tweet= [
    {
      id: 55,
      image:'https://i0.wp.com/tecnicafotografica.net/wp-content/uploads/2020/05/zajdgnxsmeg-e1590956555206.jpg?resize=768%2C432&ssl=1',
      user: "Lorenzo Benatti",
      tweetText: "testo Tweet",
      tweetDate: new Date(),
      likes: 20, 
    },
    {
      id: 56,
      image:'https://i0.wp.com/tecnicafotografica.net/wp-content/uploads/2020/05/zajdgnxsmeg-e1590956555206.jpg?resize=768%2C432&ssl=1',
      user: "Lorenzo Benatti",
      tweetText: "testo Tweet",
      tweetDate: new Date(),
      likes: 20,
    },
    {
      id: 57,
      image:'https://i0.wp.com/tecnicafotografica.net/wp-content/uploads/2020/05/zajdgnxsmeg-e1590956555206.jpg?resize=768%2C432&ssl=1',
      user: "Lorenzo Benatti",
      tweetText: "testo Tweet",
      tweetDate: new Date(),
      likes: 20,
    },
  ];
  
 return (
  <Tweet />
 );
}

export default App;
