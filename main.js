const quotes = [
    {
        name: '"The greatest glory in living lies not in never falling, but in rising every time we fall."',
        author: 'Nelson Mandela'
    },
    {
        name: '"The way to get started is to quit talking and begin doing."',
        author: 'Walt Disney'
    },
    {
        name: '"Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking."',
        author: 'Steve Jobs'
    },
    {
        name: '"If life were predictable it would cease to be life, and be without flavor."',
        author: 'Eleanor Roosevelt'
    },
    {
        name: '"If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough."',
        author: 'Oprah Winfrey'
    },
    {
        name: '"If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success."',
        author: 'James Cameron'
    },
    {
        name: '"Life is what happens when you\'re busy making other plans."',
        author: 'John Lennon'
    },
    {
        name: '"Spread love everywhere you go. Let no one ever come to you without leaving happier."',
        author: 'Mother Teresa'
    },
    {
        name: '"When you reach the end of your rope, tie a knot in it and hang on." ',
        author: 'Franklin D. Roosevelt'
    },
    {
        name: '"Always remember that you are absolutely unique. Just like everyone else."',
        author: 'Margaret Mead'
    },
    {
        name: '"Don\'t judge each day by the harvest you reap but by the seeds that you plant." ',
        author: 'Robert Louis Stevenson'
    },
    {
        name: '"The future belongs to those who believe in the beauty of their dreams."',
        author: 'Eleanor Roosevelt'
    },
    {
        name: '"Tell me and I forget. Teach me and I remember. Involve me and I learn."',
        author: 'Benjamin Franklin'
    },
    {
        name: '"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart."',
        author: 'Helen Keller'
    },
    {
        name: '"It is during our darkest moments that we must focus to see the light."',
        author: 'Aristotle'
    },
    {
        name: '"Whoever is happy will make others happy too." ',
        author: 'Anne Frank'
    },
    {
        name: '"Do not go where the path may lead, go instead where there is no path and leave a trail." ',
        author: 'Ralph Waldo Emerson'
    },
    {
        name: '"You will face many defeats in life, but never let yourself be defeated." ',
        author: 'Maya Angelou'
    },
    {
        name: '"In the end, it\'s not the years in your life that count. It\'s the life in your years."',
        author: 'Abraham Lincoln'
    },
    {
        name: '"Never let the fear of striking out keep you from playing the game."',
        author: 'Babe Ruth'
    },
    {
        name: '"Many of life\'s failures are people who did not realize how close they were to success when they gave up."',
        author: 'Thomas A. Edison'
    },
    {
        name: '"Get busy living or get busy dying."',
        author: 'Stephen King'
    },
    {
        name: '"The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself."',
        author: 'Mark Caine'
    },
    {
        name: '"When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us."',
        author: 'Helen Keller'
    },
    {
        name: '"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do."',
        author: 'Mark Twain'
    },
    {
        name: '"When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid."',
        author: 'Audre Lorde'
    },
    {
        name: '"Great minds discuss ideas; average minds discuss events; small minds discuss people."',
        author: 'Eleanor Roosevelt'
    },
    {
        name: '"A successful man is one who can lay a firm foundation with the bricks others have thrown at him."',
        author: 'David Brinkley'
    },
    {
        name: '"Those who dare to fail miserably can achieve greatly."',
        author: 'John F. Kennedy'
    },
    {
        name: '"I can’t give you a sure-fire formula for success, but I can give you a formula for failure: try to please everybody all the time."',
        author: 'Herbert Bayard Swope'
    },
    {
        name: '"It is hard to fail, but it is worse never to have tried to succeed."',
        author: 'Theodore Roosevelt'
    },
    {
        name: '"I’m a success today because I had a friend who believed in me and I didn’t have the heart to let him down."',
        author: 'Abraham Lincoln'
    },
    {
        name: '"Love yourself first and everything else falls into line. You really have to love yourself to get anything done in this world."',
        author: 'Lucille Ball'
    },
    {
        name: '"Let us always meet each other with smile, for the smile is the beginning of love."',
        author: 'Mother Teresa'
    },
    {
        name: '"Challenges are what make life interesting and overcoming them is what makes life meaningful."',
        author: 'Joshua J. Marine'
    },
    {
        name: '"Love is a serious mental disease."',
        author: 'Plato'
    },
    {
        name: '"Our greatest fear should not be of failure… but of succeeding at things in life that don’t really matter."',
        author: 'Francis Chan'
    },
    {
        name: '"It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things."',
        author: 'Leonardo Da Vinci'
    },
    {
        name: '"Remember that the happiest people are not those getting more, but those giving more."',
        author: 'H. Jackson Brown, Jr.'
    },
    {
        name: '"It is our choices, that show what we truly are, far more than our abilities"',
        author: 'JK Rowling'
    },
    {
        name: '"Only put off until tomorrow what you are willing to die having left undone."',
        author: 'Pablo Picasso'
    },
    {
        name: '"Success is just a war of attrition. Sure, there’s an element of talent you should probably possess. But if you just stick around long enough, eventually something is going to happen."',
        author: 'Dax Shepard'
    },
    {
        name: '"The opposite of love is not hate; it’s indifference."',
        author: 'Elie Wiesel'
    },
    {
        name: '"The good news is that the moment you decide that what you know is more important than what you have been taught to believe, you will have shifted gears in your quest for abundance. Success comes from within, not from without."',
        author: 'Elie Wiesel'
    },
    {
        name: '"I never knew how to worship until I knew how to love."',
        author: 'Henry Ward Beecher'
    },
    {
        name: '"“Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world."',
        author: 'Harriet Tubman'
    },
    {
        name: '"It is impossible to escape the impression that people commonly use false standards of measurement — that they seek power, success and wealth for themselves and admire them in others, and that they underestimate what is of true value in life."',
        author: 'Sigmund Freud'
    },
    {
        name: '"A friend is someone who gives you total freedom to be yourself"',
        author: 'Jim Morrison'
    },
    {
        name: '"Success in business requires training and discipline and hard work. But if you’re not frightened by these things, the opportunities are just as great today as they ever were"',
        author: 'David Rockefeller'
    },
    {
        name: '"The No. 1 reason people fail in life is because they listen to their friends, family, and neighbors."',
        author: 'Napoleon Hill'
    },
    {
        name: '"The three great essentials to achieve anything worthwhile are, first, hard work; second, stick-to-itiveness; third, common sense."',
        author: 'Thomas A. Edison'
    },
    {
        name: '"It does not matter how slowly you go as long as you do not stop."',
        author: 'Confucius'
    }
]
const contentBox = document.getElementsByClassName('content-box')
const mainButton = document.getElementsByClassName('bt-1')[0]
const secondaryButton = document.getElementsByClassName('bt-1')[1]
const modalBox = document.getElementsByClassName('modal-box')[0]
const modalContent = document.getElementsByClassName('modal-content')[0]
const closeBtn = document.getElementById('close-btn')
const quoteTitle = document.getElementById('quote-title')
const quoteMain = document.getElementById('quote-main')
const author = document.getElementById('author')

const quoteRandomizer = () => {
    let randomQuoteIndex = Math.floor(Math.random() * quotes.length)
    let quoteResult = quotes[randomQuoteIndex]
    let quoteName = quoteResult.name
    let quoteAuthor = quoteResult.author

    quoteMain.textContent = quoteName
    author.textContent = quoteAuthor
    
}
const modalBoxOp = () => {
    modalBox.classList.add('modal-active')
}
const modalBoxClose = () => {
    modalBox.classList.remove('modal-active')
}
mainButton.addEventListener('click', quoteRandomizer)
secondaryButton.addEventListener('click', modalBoxOp)
closeBtn.addEventListener('click', modalBoxClose)
