import Content from './Content';
import Header from './Header';
import Navigation from './Navigation';
import logo from './images/profile.jpeg';


function App() {
  return (

<div>
<div className = "imagecenter">
<image className="image">
<img src={logo} alt=''  />
</image>
</div>
<Header />
<Content />
<Navigation />



</div>

  );
}

export default App;
