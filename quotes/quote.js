let quotes =[
    {
        quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
        author: "Thomas Edison"
      },
        {
        quote: "When you doubt your power, you give power to your doubt.",
        author: "Honore de Balzac"
      },
      {
        quote: "The cause is hidden. The effect is visible to all.",
        author: "Ovid"
      },
      {
        quote: "A prudent question is one half of wisdom.",
        author: "Francis Bacon"
      },
      {
        quote: "The path to success is to take massive, determined action.",
        author: "Tony Robbins"
      },
      {
        quote: "I allow my intuition to lead my path.",
        author: "Manuel Puig"
      },
      {
        quote: "Nature takes away any faculty that is not used.",
        author: "William R. Inge"
      },
      {
        quote: "If you wish to be a writer, write.",
        author: "Epictetus"
      },
      {
        quote: "There is no way to prosperity, prosperity is the way.",
        author: "Wayne Dyer"
      },
      {
        quote: "Either you run the day or the day runs you.",
        author: "Jim Rohn"
      },
      {
        quote: "Better be ignorant of a matter than half know it.",
        author: "Publilius Syrus"
      },
      {
        quote: "Patience is the companion of wisdom.",
        author: "Saint Augustine"
      },
      {
        quote: "The mind is everything. What you think you become.",
        author: "Buddha"
      },
      
      {
        quote: "Worry gives a small thing a big shadow.",
        author: null
      },
      {
        quote: "Fears are nothing more than a state of mind.",
        author: "Napoleon Hill"
      },
      {
        quote: "The journey of a thousand miles begins with one step.",
        author: "Lao Tzu"
      },
      {
        quote: "Efficiency is doing things right; effectiveness is doing the right things.",
        author: "Peter Drucker"
      },
      {
        quote: "Blaze with the fire that is never extinguished.",
        author: "Luisa Sigea"
      },
      {
        quote: "Don't cry because it's over. Smile because it happened.",
        author: "Dr. Seuss"
      },
      {
        quote: "No is easier to do. Yes is easier to say.",
        author: "Jason Fried"
      },
      {
        quote: "To be wrong is nothing unless you continue to remember it.",
        author: "Confucius"
      },
      {
        quote: "Yesterdays home runs don't win today's games.",
        author: "Babe Ruth"
      },
      {
        quote: "Silence is deep as Eternity, Speech is shallow as Time.",
        author: "Carlyle"
      },
      {
        quote: "Don't smother each other. No one can grow in the shade.",
        author: "Leo F. Buscaglia"
      },
      {
        quote: "An ant on the move does more than a dozing ox",
        author: "Lao Tzu"
      },
      {
        quote: "You can't shake hands with a clenched fist.",
        author: "Indira Gandhi"
      },
      {
        quote: "A good decision is based on knowledge and not on numbers.",
        author: "Plato"
      },
      {
        quote: "The cautious seldom err.",
        author: "Confucius"
      },
      {
        quote: "If there is no struggle, there is no progress.",
        author: "Frederick Douglass"
      },
      {
        quote: "Where there is great love, there are always miracles.",
        author: "Willa Cather"
      },
      {
        quote: "Time you enjoy wasting, was not wasted.",
        author: "John Lennon"
      },
      {
        quote: "Every problem has a gift for you in its hands.",
        author: "Richard Bach"
      },
      {
        quote: "Sadness flies away on the wings of time.",
        author: "Jean de la Fontaine"
      },
      {
        quote: "I have often regretted my speech, never my silence.",
        author: "Publilius Syrus"
      },
      {
        quote: "Never put off till tomorrow what you can do today.",
        author: "Thomas Jefferson"
      },
      {
        quote: "Minds are like parachutes. They only function when open.",
        author: "Thomas Dewar"
      },
      {
        quote: "If a man does his best, what else is there?",
        author: "George Patton"
      },
      {
        quote: "The secret of success is constancy to purpose.",
        author: "Benjamin Disraeli"
      },
      {
        quote: "Life is a progress, and not a station.",
        author: "Ralph Emerson"
      },
      {
        quote: "All seasons are beautiful for the person who carries happiness within.",
        author: "Horace Friess"
      },
      {
        quote: "To avoid criticism, do nothing, say nothing, be nothing.",
        author: "Elbert Hubbard"
      },
      {
        quote: "All things change; nothing perishes.",
        author: "Ovid"
      },
      {
        quote: "Absence makes the heart grow fonder.",
        author: "Haynes Bayly"
      },
      {
        quote: "Imagination is the highest kite one can fly.",
        author: "Lauren Bacall"
      },
      {
        quote: "The beginning of knowledge is the discovery of something we do not understand.",
        author: "Frank Herbert"
      },
      {
        quote: "Love doesn't make the world go round, love is what makes the ride worthwhile.",
        author: "Elizabeth Browning"
      }
    ]
    
    let h2=document.querySelector("h2");
    let h3=document.querySelector("h3");
    let button=document.querySelector("button");
    
    button.addEventListener("click",()=>{
      let random= Math.floor(Math.random() * quotes.length)
       console.log(random);
    
     h2.innerText = quotes [random].quote;
     h3.innerText = quotes [random].author;
    });

//     let colors =['blue','yellow','black','red','brown','orange'];
// let button= document.getElementById('button');
// button.addEventListener('click',function(){
//     var randomColor =colors[Math.floor(Math.random()*colors.length)]
//     let container =document.getElementById('container');
//     container.style.background=randomColor;
// })