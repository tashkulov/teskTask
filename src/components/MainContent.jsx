import React from 'react';
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import watch from '../assets/watch.svg';
import comments from '../assets/comments.svg';
import com1 from '../assets/comment1.jpg';
import com2 from '../assets/comment2.jpg';
import com3 from '../assets/comment3.jpg';
import com4 from '../assets/comment4.jpg';

const MainContent = () => {
    return (
        <div style={{
            width: '765px',
            height: '1129px',
            borderRadius: '20px',
            backgroundColor: '#FFFFFF',
            padding: 20,
        }}>
            <div>
                <p style={{ color: '#7B7EA5', fontSize: '12px' }}>
                    Спортивная Борьба : 12 марта, 2024 в 16:03
                </p>
                <h4 style={{ color: "black", fontSize: '20px' }}>
                    Илья Бессонов дал интервью для телеканала Россия-1
                </h4>
                <p style={{ color: '#7B7EA5', fontSize: '20px' }}>
                    Илья Бессонов дал интервью после большого перерыва, где поделился секретом своего успеха и рассказал
                </p>
                <p style={{ color: '#7B7EA5', fontSize: '12px', marginTop: '-15px' }}>
                    методики своих тренировок. Спортсмен сделал заявление, что возвращается в спорт и ...<span style={{ color: 'black' }}>Читать больше</span>
                </p>
            </div>
            <div style={{ padding: 20 }}>
                <img src={photo1} style={{ width: 717, height: 200 }} alt="Photo 1" />
                <img src={photo2} style={{ width: 717, height: 200, marginTop: 20 }} alt="Photo 2" />
            </div>
            <div style={{
                display: 'flex',
                gap: '20px',
                marginTop: '-10px'
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                }}>
                    <img src={watch} width={20} height={20} alt="Watch icon" />
                    <p style={{ color: '#7B7EA5', fontSize: '12px' }}>4.1k</p>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                }}>
                    <img src={comments} width={20} height={20} alt="Comments icon" />
                    <p style={{ color: '#7B7EA5', fontSize: '12px' }}>4</p>
                </div>
            </div>

            <div style={{marginTop: '20px'}}>
                <div style={{display: 'flex', marginBottom: '15px'}}>
                    <img src={com1} width={40} height={40} alt="Comment 1"/>
                    <div style={{marginLeft: '10px'}}>
                        <p style={{color: '#7B7EA5', fontSize: '12px', margin: 0}}>
                            Вадим Давыдов
                        </p>
                        <p style={{color: 'black', fontSize: '12px', margin: '5px 0'}}>
                            Наконец-то! Рад, что он вернулся в спорт
                        </p>
                        <div style={{
                            display: 'flex',
                            gap: '10px',
                            marginTop: '5px'
                        }}>
                            <p style={{color: '#7B7EA5', fontSize: '12px', margin: 0}}>
                                15 минут назад
                            </p>
                            <p style={{color: 'black', fontSize: '12px', margin: 0}}>
                                Ответить
                            </p>
                        </div>
                    </div>
                </div>
                <div style={{display: 'flex', marginLeft: 30,marginBottom:25}}>
                    <img src={com2} width={40} height={40} alt="Comment 2"/>
                    <div style={{marginLeft: '10px'}}>
                        <p style={{color: '#7B7EA5', fontSize: '12px', margin: 0}}>
                            Алексей Петров
                        </p>
                        <p style={{color: 'black', fontSize: '12px', margin: '5px 0'}}>
                            Вадим, согласен! Уже давно ждал интервью!
                        </p>
                        <div style={{
                            display: 'flex',
                            gap: '10px',
                            marginTop: '5px'
                        }}>
                            <p style={{color: '#7B7EA5', fontSize: '12px', margin: 0}}>
                                30 секунд назад
                            </p>
                            <p style={{color: 'black', fontSize: '12px', margin: 0}}>
                                Ответить
                            </p>
                        </div>
                    </div>
                </div>


                <div style={{display: 'flex',marginBottom:25}}>
                    <img src={com3} width={40} height={40} alt="Comment 1"/>
                    <div style={{marginLeft: '10px'}}>
                        <p style={{color: '#7B7EA5', fontSize: '12px', margin: 0}}>
                            Константин Романов </p>
                        <p style={{color: 'black', fontSize: '12px', margin: '5px 0'}}>
                            Похоже на шутку. В его возвращении нет ничего плохого, но лучше бои местного масштаба,
                            уверен
                            соперники найдутся, Кудряшов например или Романов, на крайняк Тищенко. </p>
                        <div style={{
                            display: 'flex',
                            gap: '10px',
                            marginTop: '5px'
                        }}>
                            <p style={{color: '#7B7EA5', fontSize: '12px', margin: 0}}>
                                20 минут назад </p>
                            <p style={{color: 'black', fontSize: '12px', margin: 0}}>
                                Ответить
                            </p>
                        </div>
                    </div>
                </div>

                <div style={{display: 'flex'}}>
                    <img src={com4} width={40} height={40} alt="Comment 1"/>
                    <div style={{marginLeft: '10px'}}>
                        <p style={{color: '#7B7EA5', fontSize: '12px', margin: 0}}>
                            Анастасия Осипова                        </p>
                        <p style={{color: 'black', fontSize: '12px', margin: '5px 0'}}>
                            Наш чемпион! Горжусь!  </p>
                        <div style={{
                            display: 'flex',
                            gap: '10px',
                            marginTop: '5px'
                        }}>
                            <p style={{color: '#7B7EA5', fontSize: '12px', margin: 0}}>
                                20 минут назад </p>
                            <p style={{color: 'black', fontSize: '12px', margin: 0}}>
                                Ответить
                            </p>
                        </div>
                    </div>
                </div>


                <button style={{width:"232px",height:"40px",backgroundColor:'#F1F3F7',color:"black",fontSize:14,marginTop:20}}>Смотреть все комментарии</button>


            </div>
        </div>
    );
};

export default MainContent;
