import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import Boat from './components/Boats';

const AllBoats = ()=> {
  return (
      <ScrollView>
        <Text>
          GetABoat - For Sale
        </Text>
        <View>
            <Boat name="Sea Ray 500 Sundancer"
                  description="Contoured lines and dramatic styling reveal a refined
                   and powerful presence that will take your breath away."
                  photo={require('./img/sea_ray.jpg')}/>
            <Boat name="Four Winns Horizon 180"
                  description="A sporty look and refined details truely set the Horizon 180
                  above all others."
                  photo={require('./img/four_winns.jpg')}/>
            <Boat name="Flipper 640 ST"
                  description="A modern take on the classic, traditional hardtop
                   and perfect for a family picnic."
                  photo={require('./img/flipper.jpg')}/>
            <Boat name="Princess V48"
                  description="There is the option for an open design with
                   a full-length cockpit and sunroof, or the enclosed deck saloon model,
                   available with the option of a climate controlled interior."
                  photo={require('./img/princess.jpg')}/>
            <Boat name="Bayliner 175 Bowrider"
                  description="Its outboard power gives you increased cockpit space and quiet,
                   fuel-efficient performance."
                  photo={require('./img/bayliner.jpg')}/>
            <Boat name="Fairline Targa 47"
                  description="Stretch out on the large sun bed aft while friends lounge in the
                   generously appointed cockpit."
                  photo={require('./img/fairline.jpg')}/>
        </View>
      </ScrollView>
  );
};

export default AllBoats;