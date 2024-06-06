import rating1 from '../assets/rating1.jpg';
import rating2 from '../assets/rating2.jpg';
import rating3 from '../assets/rating3.jpg';
import wing1 from '../assets/wing1.jpg';
import wing2 from '../assets/wing2.jpg';
import moment1 from '../assets/moment1.jpg'
import moment2 from '../assets/moment2.jpg'
import moment3 from '../assets/moment3.jpg'
import moment4 from '../assets/moment4.jpg'
const MainContent = () => {
    return (
        <div style={{
            width: '765px',
            height: '696px',
            borderRadius: '20px',
            backgroundColor: '#FFFFFF',
            padding: 20,
        }}>
            <div>
                <p style={{color: '#7B7EA5', fontSize: '12px'}}>
                    Спортивная Борьба : 12 марта, 2024 в 16:03
                </p>
                <h4 style={{color: "black", fontSize: '20px'}}>
                    Результаты соревнования по чемпионату 2024 по спортивной борьбе (греко-римская борьба)
                </h4>

                <div className="rating" style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    gap: '20px',
                    marginTop: '20px'
                }}>
                    {/* Первый участник */}

                    {/* Второй участник */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        position: 'relative',
                    }}>
                        <img src={rating2} width={80} height={80} alt="Rating 2"/>
                        <p style={{
                            backgroundColor: '#C0C0C0',
                            width: 32,
                            height: 32,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            margin: 0,
                            marginTop: '-18px'
                        }}>
                            2
                        </p>
                        <h3 style={{color: "black", fontSize: 14}}>Дмитрий <br/> Романов</h3>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        position: 'relative',
                    }}>
                        <img src={rating1} width={100} height={100} alt="Rating 1" style={{zIndex: 2}}/>
                        <div style={{
                            position: 'absolute',
                            top: '10px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            zIndex: 1,
                            display: 'flex',
                            gap: '40px'
                        }}>
                            <img src={wing1} width={68} height={75} alt="Wing 1"
                                 style={{position: 'relative', right: '35px'}}/>
                            <img src={wing2} width={68} height={75} alt="Wing 2"
                                 style={{position: 'relative', left: '35px'}}/>
                        </div>

                        <p style={{
                            backgroundColor: '#C46236',
                            width: 32,
                            height: 32,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            margin: 0,
                            marginTop: '-18px',
                            zIndex: 2,
                        }}>
                            1
                        </p>
                        <h3 style={{color: "black", fontSize: 14, zIndex: 2}}>Александр <br/>Магомедов </h3>
                    </div>

                    {/* Третий участник */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        position: 'relative',
                    }}>
                        <img src={rating3} width={80} height={80} alt="Rating 3"/>
                        <p style={{
                            backgroundColor: '#CD7F32',
                            width: 32,
                            height: 32,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            margin: 0,
                            marginTop: '-18px'
                        }}>
                            3
                        </p>
                        <h3 style={{color: "black", fontSize: 14}}>Иван<br/> Петров</h3>
                    </div>
                </div>

                <p style={{color: '#7B7EA5', fontSize: '12px', marginTop: '15px'}}>
                    Лучшие моменты соревнования
                </p>
            </div>


            {/* лучшие моменты*/}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '10px',
                marginTop: '20px'
            }}>
                <img src={moment1} width={174} height={250} alt="Moment 1"/>
                <img src={moment2} width={174} height={250} alt="Moment 2"/>
                <img src={moment3} width={174} height={250} alt="Moment 3"/>
                <img src={moment4} width={174} height={250} alt="Moment 4"/>
            </div>
            <button style={{
                width: "139px",
                height: "40px",
                backgroundColor: '#F1F3F7',
                color: "black",
                fontSize: 14,
                marginTop: 20,

            }}>Смотреть все
            </button>


        </div>
    );
};

export default MainContent;
