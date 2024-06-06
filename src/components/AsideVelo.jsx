import React from 'react';
import velo from '../assets/velo.jpg'

const AsideVelo = () => {
    return (
        <div style={{
            width: '371px',
            height: '540px',
            borderRadius: '20px',
            backgroundImage: `url(${
                velo
            })`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#FFFFFF',
        }}>


            <div style={{width:371,height:122,backgroundColor:'#FFFFFF',marginTop:400}}>
                <h3 style={{color:"black",fontSize:32,fontWeight:"bold"}}>
                    Тур Альп-2024<br/>Этап 3
                </h3>
            </div>

        </div>
    );
};

export default AsideVelo;