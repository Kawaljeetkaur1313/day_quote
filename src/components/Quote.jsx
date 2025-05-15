import  {useState} from 'react';
import quotes from '../data/quotes';
import '../App.css';

const Quote = () => {
    const [currentQuote, setCurrentQuote] = useState(null);
    const [previousQuote, setPreviousQuote] = useState(null);
    const getRandomQuote =()=>{
        let randomIndex;
        randomIndex = Math.floor(Math.random() * quotes.length);
        if(randomIndex === previousQuote){
            randomIndex = Math.floor(Math.random() * quotes.length);
            console.log({quotes});
        }
        setPreviousQuote(randomIndex);
        setCurrentQuote(quotes[randomIndex]);
    };
    return(
        <div className='quoates'>            
            {!currentQuote ? (
               <p className='start'>Click the button to get a quote</p>
            ) : (
                <blockquote>
                    <p className='parah'>{currentQuote.quote}</p>
                    <p className='writer'>--{currentQuote.author}</p>
                    </blockquote>
                )}
            <button onClick={getRandomQuote}>
                {currentQuote ? 'Get another Quote' : 'Get Quote'}
            </button>            
        </div>
    );
};
export default Quote;