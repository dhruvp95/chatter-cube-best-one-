import React from 'react';
import $ from 'jquery';
// import axios from 'axios';

var Submit = ({ sending }) => (
  <div>
    <br></br>
    <form action="#" id="send" >
    <input type="text" name="message" id="message"/>
    <input type="submit" name="submit" className="submit" 
    onClick={() => { sending($("#message").val()); }}/>
  </form>
  </div>

)

export default Submit;