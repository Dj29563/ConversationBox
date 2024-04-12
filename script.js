var conversationData = [
    {
        text: "hello friend, this is theta",
        userImage: "https://cdn.discordapp.com/attachments/932168502297628673/1225381556194115664/logofin2.png?ex=6620ec81&is=660e7781&hm=58b3c7579dc32253e999f666a10175bc9041e969ea9ecc5f150496da31195f4d",
        userName: "Evil Theta"
    },
    {
        text: "Hi, I'm a different user!",
        userImage: "https://example.com/user-image.jpg",
        userName: "Another User"
    }
];// make array of data contain text,image,name

var currentConversationIndex = 0;

function createBox(text, userImage, userName) {
    var box = document.getElementById("box");
    var userImg = document.getElementById("userImg");
    var userNameElement = document.getElementById("userName");
    var userText = document.getElementById("userText");

    userImg.src = userImage;
    userNameElement.textContent = userName;
    userText.textContent = text;
    box.style.display = "block"; 
    document.getElementById("nextButton").classList.add("clicked");
}// make conversation box using data

function displayNextConversation() {
    var conversation = conversationData[currentConversationIndex];
    createBox(conversation.text, conversation.userImage, conversation.userName);
    currentConversationIndex++;
}

displayNextConversation();

document.getElementById("nextButton").addEventListener("click", function() {
    var box = document.getElementById("box");
    box.style.display = "none"; 
    document.getElementById("nextButton").classList.remove("clicked");
    displayNextConversation();
});
