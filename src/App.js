import "./App.css";
import React, { useEffect, useState } from "react";
import $ from "jquery"
// class App extends React.Component{

//   constructor(props){
//     super(props);
//     this.state={
//       label_val2:"Enter Your University Name",
//       label_val3:"Enter Your Roll Number",
//       label_val1:"Enter Your Name"
//     }
//   }

//   func11  = (e) => {
//     // alert("Hi I am "+this.state.name+". I have scored "+this.state.val+" in year "+this.state.year);
//     // this.setState({val:500});
//     this.setState ( {name : e.target.value});     // USE E.TARGET.VALUE TO EXTRACT VALUE OF INPUT USING REACT! INPUT MAI VALUE ATTRIBUTR NAHI DENA KYUKI AGAR VALUE ATTRIBITE DIA TOH HAM USS INPUT KI VALUE KO CHANGE NAHI KAR PAENGE! ALSO LIKE THERE EXIST ONCLICK ON BUTTON HERE ON INPUT THERE EXIST ONCHANGE WHICH IS CALLES EVEREYTIME WHEN INPUT VALUE IS CHANGED.
//   }

//   func12  = (e) => {
//     // alert("Hi I am "+this.state.name+". I have scored "+this.state.val+" in year "+this.state.year);
//     // this.setState({val:500});
//     this.setState ( {university : e.target.value});
//   }

//   func13  = (e) => {
//     // alert("Hi I am "+this.state.name+". I have scored "+this.state.val+" in year "+this.state.year);
//     // this.setState({val:500});
//     this.setState ( {rollno : e.target.value});
//   }

//   clicked=() => {
//     alert("Name is "+this.state.name +" , university is "+this.state.university+" , rollno is "+this.state.rollno);
//   }

//   render(){
//     return(
//       <div>
//       {/* <h1>Hello World</h1> */}
//       {/* <button onClick={this.func11} > Click me</button> */}
//       <form>
//       <label>{this.state.label_val1} </label>
//       <input type="text" onChange={this.func11}></input>
//       <br/>
//       <label>{this.state.label_val2} </label>
//       <input type="text" onChange={this.func12}></input>
//       <br/>
//       <label>{this.state.label_val3} </label>
//       <input type="number" onChange={this.func13}></input>

//       <button type="button" onClick={this.clicked} >Submit</button>

//       </form>
//       </div>
//     )
//   }

// }





















// var func = () =>  {
//   // counter++;          //UNABLE TO CHANGE COUNT WHICH IS USED INSIDE JSX ELEMENTS..........
//   this.state.counter++;    //UNABLE TO CHANGE COUNT WHICH IS USED INSIDE JSX ELEMENTS..........
//   console.log(this.state.counter);
// }


// class App extends React.Component{


//   constructor(props){
//     super(props);
  
//   this.abc={
//     counter:0
//   };

//   }

//   func = (e) =>  {
//     // counter++;          //UNABLE TO CHANGE COUNT WHICH IS USED INSIDE JSX ELEMENTS..........
//     // this.state.counter++;    //UNABLE TO CHANGE COUNT WHICH IS USED INSIDE JSX ELEMENTS..........
//     this.setState({           //CLASS COMPONENT MAI KHEL STATE KA NAHI HAI , KHEL INN FUNCTIONS KA HAI KIKE THIS.SETSTATE BECAUSE THESE FUNCTIONS RE-RENDER THE COMPONENT AUTOMATICALLY AFTER INCREACMENTING THE COUNTER BUT IF WE SIMPLY DO COUNTER++; THEN IT NOT REDEN ALL COMPONENTS BY YES IT IS INCREASI G THE COUNTER AS WE ARE ABLE TO SEE IN CONSOLE BUT SINCE NO RE-RENDERING THEREFORRE UNABLR TO DSEE CHANGES IN REACT ELEMETS I.E. JSX!  ALSO STATE NAAM DENA APNE OBJECT KO S NOT NECESSARY WE CAN GIVE ANY NAME BUT THESE FUNCTIONS HAVE ONE MNAME ONLY I.E. SETSTATE SO GENERALLY WE GIVE OUR OBJECT NAME AS STATE WHICH MATCHES WITH THIS.SETSTATE !  AND SIMILARLY WE HAVE USESTATE ETC FUNCTIONS TO USE THIS SAME PROPERTIES OF RE-RENDERING , THESE FUNCTIONS FOR FUNCTIONAL COMPONENTS ARE CALLED HOOKS WHICH INTRODUCED RECENTLY SO WE CAN SWITCH FRON CLASS TO FUNCRIONAL COMPOMENT!  RAECT HOOKS HAMESHA FUNCTIONAL COMPONENTS KE ANDAR HI USE HO SAKTE HAI USS KE BAHAR NAHI LIKHNA MATLAB KUCH BHI. 
//       counter:this.abc.counter++    // JO USESTATE HOOK HAI VO JUST INSIDE MAIN FUNTIONAL COMONET KE ANDAR HI USE HONA CHAHIYE AGAR USSE HAM KISE FUNCTION KE ANDAR USE KARENGE JO MAIN FUNCTIONAL COMPOMET WALE FUNCTION KE ANDAR HO TOH VO ERROR DEGA , THEREFORE IT SHUOLD BE CALLED JUST INSIDE MAIN FUNCTIONAL COMPINET WALE FUNCTION KE ANDAR HI!
//                                        // AUR CLASS COMONENT MAI BHI KYUKI HAM THIS KEYWORD USE KARTE HAI TOH HAME SAB KUCH CLASS KE ANDAR HI LIKHNE HOGA OUTISDE REDER FUNCTION AS IN CLASS BOTH RENDER AUR RETURN THERE EXIST SO WRITE EVERYTHING OUTSIDE RENDER ONLY NOT INSIDE RENDER ABOVE RETURN. AUR FUNCTIONAL COMPONENT MAI SIRF RETURN HI USE HOTA HAI TOH HAME SAB KUCH OUTSIDE RETURN LIKHNA HAI FUNCTIONAL COMPONENT KE ANDAR HI! ALSO TO USE JAVASCRIPT INSIDE RETURN THEN WE NEED TO USE {} FOR BOTH FUNCTIONAML AND CLASS COMPONENT . ALSO NOTHING WILL BE WRITTEN OUTSIDE WHOLE FUNCTIONAL OR WHOLE CLASS COMPOMENT.
//     });
//     console.log(this.abc.counter);
//   }


//   render(){
//     return(
//       <>
//       <button onClick={this.func} >click</button>
//       <p>{this.abc.counter}</p>
//       </>
//     )
//   }
// }







// function App() {
//   // var [counter,updatecounter]=useState(0);
//   var state = {
//     count: 0,
//   };
//   var count1=0;
//   var handleClick = (e) => {
//     // updatecounter(counter+=1); // jab yaha par counter++ kar raha hu toh 2 baar click karne par 1 increament ho raha hai ??

 
//     // state.count++;  //UNABLE TO CHANGE COUNT WHICH IS USED INSIDE JSX ELEMENTS..........
//     // count1++;       //UNABLE TO CHANGE COUNT WHICH IS USED INSIDE JSX ELEMENTS..........


//   };

//   return (
//     <div className="App">
//       <button onClick={handleClick}>Click me</button>
//       <p>You clicked {state.count} times</p>
//     </div>
//   );
// }




// USESTATE HOOK IN REACT , IF WE USE IT FOR SINGE SINGLE VARIABLE THEN WE NEED TO WRITE MANY NUMBER OF USESTETE WHICH MAKE CODE ;LENGHTY SO TO AVID THIS WE CAN ALSO PASS OBJECT OF VARIABLES AS FIRST ARGUMENT OF USETSATE HOOK AND THEN FUTHER BY USING LOGICS WE CAN USE THESE VARIABLES VIA SINGLE HANDLER FUNCTION I.E. SECONG ARGUMENT OF USESTATE TO USE DIFFERNT VARIABLES FOR DIFFERENT PURPOSES , EXAMPLE TO FETCH VAUES OF MANY NUMBEROF INPUTS WE CA USE OBJECT OF VARIABLES FOR RESPECTIVE INPUTS AND IN HANDLER FUNCTION WE CAN DISTINGUISH BY E.TARGET.NAME BY GIVING DIFFERENT NAME ATTRIBES TO AL INPUT TAGS. 


/////////////////////////////////////////////////////////////////////////



// SPREAD OPERATOR (...(3 dots) followed by arrayname/objectname)(SPLIT ARRAY INTO SEPARATE ELEMENTS) IN JS WIDLY USED IN REACT :-
    
  // CASE 1. (SIMPLE) -->

  //   const fullName = ["Tanish","Sharma"];
  //   const biodata = [1,...fullName,18,"male"];
  //   console.log(biodata);

  //   OUTPUT : biodata = [1,"Tanish","Sharma",18,"male"]



  // CASE 2.(ARRAY DESTRUCTURING) -->

    // var shotterGames = ["game1","game2","game3"];
    // var [first,...remaining] = shotterGames;
    // console.log(first);
    // console.log(remaining);

    // OUTPUT : first = ["game1"] 
    //          remaining = ["game2","game3"]



    // CASE 3. (OBJECTS (work same like arrays) )  -->

    // const fullName = {fname:"Tanish",
    //                   lname:"Sharma"};
    //   const biodata = {id:1,
    //                   ...fullName,
    //                   age:18,
    //                   gender:"male"};
    //   console.log(biodata);
  
    //   OUTPUT : biodata = {id:1,
    //                     fname:"Tanish",
    //                     lname:"Sharma",
    //                     age:18,
    //                     gender:"male"}



    // CASE 4. (USING ALL ELEMNTS OF OBJECTS BY SPREAD OPERATOR BUT WANTS THAT THIS PARTICULAR KEY KI VALUE UPDATE HO JAE AUR JO PREVIOUS OBJECT MAI THI USS KI JAGAH YEH PARTICULAR VALUE BAN JAE USS KEY KI REAT OTHER SAME )  -->


          // biodata = {id:1,
          //   fname:"Tanish",
          //   lname:"Sharma",
          //   age:18,
          //   gender:"male"
          // };

          // newbiodata = {
          //   ...biodata,
          //   [lname]:"Kaushish",
          // }
          // console.log(newbiodata);



          // OUTPUT : newbiodata ={id:1,
          //   fname:"Tanish",
          //   lname:"kaushish",
          //   age:18,
          //   gender:"male"
          // };


////////////////////////////////////////////////////////////////////////////////










//  USING CLASS COMPONENT AND COMPONENTDIDMOUNT FUNCTION

// class App extends React.Component{
  
//   componentDidMount(){
//     $("span").css("fontSize","60px")
//     $("span").css("color","red")
    
//     $("#five").click(function(){
//       $("span").css("color","blue");
//     $("span").css("fontSize","48px")
//       $(this).remove();

//     })

//   }
  
  
//   render(){
//   return(
//     <>
//     <span id="one" >1</span>
//     <span id="two" >2</span>
//     <span id="three">3</span>
//     <span id="four">4</span>
//     <span id="five">5</span>

//     </>
//   )
// }
// }




//  USING FUNCTION COMPONENT AND USEEFFECT HOOK

// function App () {

//   useEffect( () =>{
    
//     $("span").css("fontSize","60px")
//     $("span").css("color","red")
        
//     $("#five").click(function(){
//       $("span").css("color","blue");
//     $("span").css("fontSize","48px")
//       $(this).remove();
    
//     })

//   }
//   )



//   return(
// <>
//  <span id="one" >1</span>
//  <span id="two" >2</span>
//  <span id="three">3</span>
//  <span id="four">4</span>
//  <span id="five">5</span>

// </>
//   )
// }







//  USING CLASS COMPONENT AND USING STATE AND PROPS ONLY (GENERALLY WE CALL/WRITE THE THE WHOLE METHOD WHEN REQUIRED, BUT USING STATE WE CALL THE METHOD ONLY ONCE BUT THE VALUE TO PASS/USE IN THIA FUNCTION CHANGES ONLY ACCORDINGLY)
// BUT HERE ON CLICK ON ANY OF DIGIT CHANGE IS REFELECTED!
// ALSO WE SHOULD TRY USING STATE/PROPS ALWAYS NOT DIRECTELY JQUERY ETC IN COMPONENTDIDMOUNT ETC!!!!!!!!!!!!111111

// class App extends React.Component{
//   constructor(){
//     super();
//     this.state ={
//       message:[1,2,3,4,5],
//       color:"red",
//       fontsize:28
//     }

//     //  this.mystyle={                 // THIS ONLY NOT VAR
//     //   color:this.state.color,       // HERE WE ARE ABLE TO READ THIS INITIALLY BUT  SINCE IT IS NOT THE STATE SO CAN;T CHANGE THIS BY SETSTATE SO NOT REFLECTED ON OUTPUT ON CHNAGING DIRECTLY!
//     //  fontSize:this.state.fontsize
//     // }



//     // this.changeThis = ()=>{                        // THIS ONLY NOT VAR , WITHOUT THIS SHOWS CHANGETHIS IS NOT DEFINED ERROR 
//     //   var newarr = this.state.message;              // WORKS
//     //   newarr.pop();
//     //   if(newarr.length===4){
//     //     this.setState({color:"blue"})
//     //     this.setState({fontsize:48})
//     //   }if(newarr.length===3){
//     //     this.setState({color:"yellow"})
//     //     this.setState({fontsize:58})
//     //   }if(newarr.length===2){
//     //     this.setState({color:"pink"})
//     //     this.setState({fontsize:68})
//     //   }if(newarr.length===1){
//     //     this.setState({color:"aqua"})
//     //     this.setState({fontsize:78})
//     //   }
//     //   this.setState({ message:newarr });
//     // }


//   }



  
//   // changeThis = ()=>{                        // NO THIS NO VAR , SHOWS ERROR WITH BOTH THIS AND VAR
//   //   var newarr = this.state.message;          // HERE ALSO WORKS (OUTSIDE CONSTRUCTOR)
//   //   newarr.pop();
//   //   if(newarr.length===4){
//   //     this.setState({color:"blue"})
//   //     this.setState({fontsize:48})
//   //   }if(newarr.length===3){
//   //     this.setState({color:"yellow"})
//   //     this.setState({fontsize:58})
//   //   }if(newarr.length===2){
//   //     this.setState({color:"pink"})
//   //     this.setState({fontsize:68})
//   //   }if(newarr.length===1){
//   //     this.setState({color:"aqua"})
//   //     this.setState({fontsize:78})
//   //   }
//   //   this.setState({ message:newarr });
//   // }





//   // mystyle={                        //NO VAR NO THIS SINCE PROPERTY OF CLASS   
//   //   color:this.state.color,                          
//   //  fontSize:this.state.fontsize    // NOT WORKING HERE , SHOWING UNDEFINED DOES NOT HAVE PROPERTY COLOR! BUT IT IS WORKING WHEN PUT INSIDE RENDER AND OUTSIDE RETURN!
//   // }

//   render(){
    
//   // this.mystyle={                      // THIS ONLY NOT VAR   
//   //   color:this.state.color,                    //WORKS      
//   //  fontSize:this.state.fontsize    
//   // }




//   // this.changeThis = ()=>{                     // THIS(KEYWORD) ONLY NOT VAR , WITHOUT THIS SHOWS CHANGETHIS IS NOT DEFINED ERROR
//   //   var newarr = this.state.message;           // WORKS
//   //   newarr.pop();
//   //   if(newarr.length===4){
//   //     this.setState({color:"blue"})
//   //     this.setState({fontsize:48})
//   //   }if(newarr.length===3){
//   //     this.setState({color:"yellow"})
//   //     this.setState({fontsize:58})
//   //   }if(newarr.length===2){
//   //     this.setState({color:"pink"})
//   //     this.setState({fontsize:68})
//   //   }if(newarr.length===1){
//   //     this.setState({color:"aqua"})
//   //     this.setState({fontsize:78})
//   //   }
//   //   this.setState({ message:newarr });
//   // }



//     return(
//     <div>
//       <h1 onClick={this.changeThis} style={this.mystyle}>{this.state.message}</h1>
//     </div>
//     )
//   }
// }





////////////////////////////////////////////////////////////////////////////////




export default App;





















   
