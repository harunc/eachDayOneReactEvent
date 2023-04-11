import {FaChevronRight} from 'react-icons/fa';
const Sicilia = () => {


  return <article className="review">
        <div className='left'>
            <div className='courseName'><h3 style={{color:'gray'}}>Course</h3>
            <h3 style={{marginTop:2}}>JavaScript Fundamentals</h3></div>
            <div className='leftBottom'>View all chapters <a style={{color:'gray'}} href='https://infoharuncifci.web.app/'><FaChevronRight/></a></div>
            
        </div>
        <div className='right'>
            <div className='toRightUp'>
            <progress id="determinate"  value="66" min="0" max="100"></progress>
            <p className="progressb">6/9 Challanges</p>
            </div>
            <div className='toLeftUp'><h3>Chapter 4</h3></div>
            <div className='rightContent'><h2>Callbacks & Closures</h2> </div>
            <div className='toRightDown'>
            <button className="btn">Continue</button>
            </div>
            
        </div>

  </article>
};

export default Sicilia;