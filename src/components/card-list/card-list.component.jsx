import React from 'react';

import { Card } from '../card/card.component'

import './card-list.styles.css'

export const CardList = props => (
     <div className='card-list'>
     {props.monsters.map(monster => (
          <Card key={monster.id} monster={monster}/>
        ))}
    </div>
    );
/* This card list component should displays the 
names of the robots. It is not responsible for anything else */