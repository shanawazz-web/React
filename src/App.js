// ! Component composition
// import React from 'react'
// import Navbar from './components/Navbar'
// import Main from './components/Main'
// import Sidebar1 from './components/Sidebar1'
// import Sidebar2 from '/components/Sidebar2'
// import Footer from './components/Footer'
// const App = () => {
//   return (
//     <div classname='app'>
//       <Navbar/>
//       <Main/>
//       <div classname='sidebar'>
//         <Sidebar1/>
//         <Sidebar2/>
//       </div>
//       <Footer/>
//     </div>
//   )
// }

// export default App

// !props

// import React, {Component} from 'react'
// import FBCPropEx from './propsex/FBCPropEx'
// // import CBCPropEx from './propsex/CBCPropEx'

// export default class App extends Component {
//   render(){
//     return(
//       <div>
//         {/* <CBCPropEx
//         username="shanawaz"
//         age={20}
//         hobbies={["gaming" , "gym"]}
//         address={{city:"karimnagar" , area:"kashmeergadda"}}
//         sendFun={function(){alert("hi i am shanawaz")}}
//         /> */}

//         <FBCPropEx
//         username="Abhinay"
//         isMarried={true}
//         hobbies={["chatting" , "Eating" , "Sleeping"]}
//         />
//       </div>
//     )
//   }
// }
  
// ! Prop children

// import React from 'react'

// const App = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default App

// ! state example

import React from 'react'
import CBCStateEx from './stateexample/CBCStateEx'
import FBCStateEx from './stateexample/FBCStateEx'

const App = () => {
  return (
    <div>
      <CBCStateEx/>
      <FBCStateEx/>
    </div>
  )
}

export default App

