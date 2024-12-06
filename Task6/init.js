const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main()
   .then(()=>{
     console.log("connection sucessfull");
   })
   .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/chatapp');
}

let allchats = [
    { 
      from: "Emily", 
      to: "Daniel",
      msg: "Good morning, Daniel. Could you please review the report I sent yesterday?", 
      created_at: new Date() 
     }, 
     { 
     from: "Daniel", 
     to: "Emily", 
     msg: "Good morning, Emily. I'll review the report and get back to you by this afternoon.", 
     created_at: new Date() 
     }, 
     { 
     from: "Michael", 
     to: "Sarah", 
     msg: "Sarah, I need your input on the new project proposal. Can we discuss it today?", 
     created_at: new Date() 
     }, 
     { 
     from: "Sarah", 
     to: "Michael", 
     msg: "Sure, Michael. Let's schedule a meeting for 2 PM.", 
     created_at: new Date() 
     }, 
     { 
     from: "Alex", 
     to: "Karen", 
     msg: "Karen, please update the client on the progress of their order.", 
     created_at: new Date() 
     }, 
     { 
     from: "Karen", 
     to: "Alex", 
     msg: "Will do, Alex. I'll send them an email right away.", 
     created_at: new Date() 
     }, 
     { 
     from: "Laura", 
     to: "James", 
     msg: "James, can you provide feedback on the draft by EOD?", 
     created_at: new Date() 
     }, 
     { 
     from: "James", 
     to: "Laura", 
     msg: "Sure, Laura. I'll review the draft and share my comments by the end of the day.", 
     created_at: new Date() 
     }, 
     { 
     from: "David", 
     to: "Sophia", 
     msg: "Sophia, can you join the client call at 3 PM?", 
     created_at: new Date() 
     }, 
     { 
     from: "Sophia", 
     to: "David", 
     msg: "Yes, David. I'll be there.", 
     created_at: new Date() }, 
     { 
     from: "Oliver", 
     to: "Emma", 
     msg: "Emma, please make sure the presentation is ready for tomorrow's meeting.", 
     created_at: new Date() 
     }, 
     { 
     from: "Emma", 
     to: "Oliver", 
     msg: "Understood, Oliver. I'll finalize the presentation today.", 
     created_at: new Date() 
     }, { 
     from: "John", 
     to: "Alice", 
     msg: "Alice, can you confirm the venue for the conference?", 
     created_at: new Date() 
     }, 
     { 
     from: "Alice", 
     to: "John", 
     msg: "Yes, John. The venue is confirmed. I'll send you the details shortly.", 
     created_at: new Date() 
     }, 
     { 
     from: "Robert", 
     to: "Megan", 
     msg: "Megan, could you prepare the budget report for the next quarter?", 
     created_at: new Date() 
     }, 
     { 
     from: "Megan", 
     to: "Robert", 
     msg: "Sure, Robert. I'll have it ready by the end of this week.", 
     created_at: new Date() 
     }, 
     { 
     from: "Christine", 
     to: "Mark", 
     msg: "Mark, we need to finalize the agenda for tomorrow's meeting.", 
     created_at: new Date() 
     }, 
     { 
     from: "Mark", 
     to: "Christine", 
     msg: "I'll work on it and send you a draft by this afternoon.", 
     created_at: new Date() 
     }
]

Chat.insertMany(allchats);