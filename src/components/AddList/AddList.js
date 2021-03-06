import React, { useState } from 'react';
import List from '../List/List';
import Badge from '../Badge/Badge';

import closeSvg from '../../assets/img/close.svg';
import './AddList.scss';

const AddList = ({ colors }) => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [selectColor, setSelectColor] = useState(null);
    
    return (
        <div className="add-list">
            <List
            onClick={() => {setVisiblePopup(true)}}
            items={[
                {
                    className: 'list__add-button',
                    icon: (
                        <svg 
                            width="12" 
                            height="12" 
                            viewBox="0 0 16 16" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg">
                            <path 
                                d="M1 8H15" 
                                stroke="#B4B4B4" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            />
                            <path 
                                d="M8 1V15" 
                                stroke="#B4B4B4" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            />
                        </svg>
                    ),
                    name: 'Добавить папку'
                }
            ]}
            />
            {visiblePopup && (<div className="add-list__popup">
                <img onClick={() => setVisiblePopup(false)} className="add-list__popup-close-btn" src={closeSvg} alt="close icon"/>
                <input className="field" type="text" placeholder="Название папки"/>
                <div className="add-list__popup-colors">
                    {
                        colors.map(color => <Badge onClick={() => setSelectColor(color.id)} key={color.id} color={color.name} className={selectColor === color.id && 'active'}/>)
                    }
                </div>
                <button className="button">Добавить</button>
            </div>)}
        </div>
    );
};

export default AddList;