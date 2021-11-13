function add_user()
{
    player_1=document.getElementById("player_1name").value;
    player_2=document.getElementById("player_2name").value;

    localStorage.setItem("player 1 name" , player_1);
    localStorage.setItem("player 2 name" , player_2);

    window.location="game_page.html";
}

