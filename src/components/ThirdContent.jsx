import banner from '../assets/bannerforthird.jpg';
import news from '../assets/news.jpg';

const ThirdContent = () => {
    return (
        <div style={{
            width: '765px',
            height: '286px',
            borderRadius: '20px',
            backgroundImage: `url(${banner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'flex-end'
        }}>

            <div style={{ marginRight: 'auto' }}>
                <h6 style={{color: 'white', fontSize: 30, width: 316, height: 64}}>Весенняя коллекция<br/> одежды</h6>

                <h1 style={{color: 'white', fontSize: 90}}>-30%</h1>
            </div>

        </div>
    );
};

export default ThirdContent;
