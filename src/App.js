// import
import React from 'react'
import Header from './header';
import Body from './Body';
import Footer from './Footer';
import Card from './Card';
import ResponsiveAppBar from './Appbar';



// function
const App = () => {
  return(
    <>
    <ResponsiveAppBar/>
    <Header/>
    <Body />
    <Card title="Card title 1" text="This is a paragraph"/>
    <Card title="Card title 2" text="This is a paragraph"/>
    <Card title="Card title 3" text="This is a paragraph"/>
    <Footer />
    
    </>
  )
}


// export
export default App;
