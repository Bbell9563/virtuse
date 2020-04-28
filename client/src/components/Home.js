import React from 'react'
import {HomeHeader, Holder, Option, Title, Main, Sub} from '../styles/HomeStyle'

export default class Home extends React.Component {

  render(){
    return(
      <>
      <Title>
        <Main>
          THERAPEUTIC YOGA BY DUSTY LADAWN BAILEY
        </Main>
        <Sub>~Shakti~</Sub>
      </Title>
      <Holder>
        <HomeHeader>Typical Yoga Options</HomeHeader>
        <Option>
        <div style={{fontSize:'20px', marginRight:'1%'}}>♦ </div><div>Private sessions- will accommodate up to 4 clients</div>
        </Option>
        <Option>
        <div style={{fontSize:'20px', marginRight:'1%'}}>♦ </div><div>Sensory Journey</div>
        </Option>
        <Option>
        <div style={{fontSize:'20px', marginRight:'1%'}}>♦ </div><div>Anatomy/Problem area yoga specialized classes</div>
        </Option>
        <Option>
        <div style={{fontSize:'20px', marginRight:'1%'}}>♦ </div><div>Basic physical therapy exercises</div>
        </Option>
        <Option>
        <div style={{fontSize:'20px', marginRight:'1%'}}>♦ </div><div>Next day follow-up, with one on one as needed</div>
        </Option>
        <Option>
        <div style={{fontSize:'20px', marginRight:'1%'}}>♦ </div><div>Specializing in autoimmune diseases</div>
        </Option>
        <Option>
        <div style={{fontSize:'20px', marginRight:'1%'}}>♦ </div><div>Restore yoga for the elderly to promote mobility and pain free living</div>
        </Option>
      </Holder>
      </>
    )
  }
}